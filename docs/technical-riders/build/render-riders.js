const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');

function getBundledModule(name) {
  const candidates = [];
  const execDir = path.dirname(process.execPath);
  const nodeModuleDirs = [
    path.resolve(execDir, '..', 'node_modules'),
    path.resolve(execDir, '..', '..', 'node_modules'),
  ];

  for (const nodeModulesDir of nodeModuleDirs) {
    candidates.push(path.join(nodeModulesDir, name));

    const pnpmDir = path.join(nodeModulesDir, '.pnpm');
    if (fs.existsSync(pnpmDir)) {
      for (const entry of fs.readdirSync(pnpmDir, { withFileTypes: true })) {
        if (entry.isDirectory() && (entry.name === name || entry.name.startsWith(`${name}@`))) {
          candidates.push(path.join(pnpmDir, entry.name, 'node_modules', name));
        }
      }
    }
  }

  if (process.env.CODEX_NODE_MODULES) {
    candidates.unshift(path.resolve(process.env.CODEX_NODE_MODULES, name));
  }

  for (const candidate of candidates) {
    try {
      return require(candidate);
    } catch (error) {
      // Keep trying fallbacks.
    }
  }

  return require(name);
}

const { marked } = getBundledModule('marked');
const playwright = getBundledModule('playwright');
const { PDFDocument, StandardFonts, rgb, PDFName, PDFString } = getBundledModule('pdf-lib');
const sharp = getBundledModule('sharp');

const ROOT = path.resolve(__dirname, '..');
const PROJECTS_DIR = path.join(ROOT, 'projects');
const TEMPLATE_PATH = path.join(__dirname, 'templates', 'rider-template.html');
const CSS_PATH = path.join(__dirname, 'templates', 'rider.css');
const OUTPUT_DIR = path.join(ROOT, 'output');
const OPTIMIZED_IMAGES_DIR = path.join(OUTPUT_DIR, '.optimized-images');
const BROWSER_CANDIDATES = [
  process.env.TECHNICAL_RIDER_BROWSER,
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
].filter(Boolean);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function pathToFileUrl(filePath) {
  return pathToFileURL(path.resolve(filePath)).href;
}

function fileToDataUrl(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mimeMap = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
  };
  const mime = mimeMap[ext] || 'application/octet-stream';
  const buffer = fs.readFileSync(filePath);
  return `data:${mime};base64,${buffer.toString('base64')}`;
}

function readTemplate(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function findBrowserExecutable() {
  for (const candidate of BROWSER_CANDIDATES) {
    if (candidate && fs.existsSync(candidate)) {
      return candidate;
    }
  }
  return null;
}

function isWebUrl(value) {
  return typeof value === 'string' && /^https?:\/\//i.test(value);
}

function resolveAssetPath(baseDir, value) {
  if (!value) return '';
  if (isWebUrl(value)) return value;
  return path.resolve(baseDir, value);
}

function hashKey(value) {
  return crypto.createHash('sha1').update(String(value)).digest('hex');
}

async function readSourceBuffer(sourcePath) {
  if (isWebUrl(sourcePath)) {
    const response = await fetch(sourcePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${sourcePath} (${response.status})`);
    }
    return Buffer.from(await response.arrayBuffer());
  }
  return fs.readFileSync(sourcePath);
}

async function optimizeImage(sourcePath, variant) {
  if (!sourcePath) return '';

  const configByVariant = {
    cover: { width: 2200, height: 3200, quality: 78 },
    figure: { width: 1600, height: 1600, quality: 78 },
  };

  const config = configByVariant[variant] || configByVariant.figure;
  fs.mkdirSync(OPTIMIZED_IMAGES_DIR, { recursive: true });

  const cacheKey = hashKey(`${sourcePath}|${variant}|${config.width}|${config.height}|${config.quality}`);
  const defaultOutputPath = path.join(OPTIMIZED_IMAGES_DIR, `${cacheKey}.jpg`);
  const pngOutputPath = path.join(OPTIMIZED_IMAGES_DIR, `${cacheKey}.png`);

  if (fs.existsSync(defaultOutputPath)) {
    return fileToDataUrl(defaultOutputPath);
  }
  if (fs.existsSync(pngOutputPath)) {
    return fileToDataUrl(pngOutputPath);
  }

  try {
    const sourceBuffer = await readSourceBuffer(sourcePath);
    const image = sharp(sourceBuffer, { failOn: 'none' }).rotate();
    const metadata = await image.metadata();

    const resized = image.resize({
      width: config.width,
      height: config.height,
      fit: 'inside',
      withoutEnlargement: true,
    });

    if (metadata.hasAlpha) {
      await resized.png({
        compressionLevel: 9,
        palette: true,
        quality: 85,
      }).toFile(pngOutputPath);
      return fileToDataUrl(pngOutputPath);
    }

    await resized.jpeg({
      quality: config.quality,
      mozjpeg: true,
      progressive: true,
    }).toFile(defaultOutputPath);
    return fileToDataUrl(defaultOutputPath);
  } catch (error) {
    return isWebUrl(sourcePath) ? sourcePath : pathToFileUrl(sourcePath);
  }
}

function parseScalar(value) {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (trimmed === '[]') return [];
  if (trimmed === '{}') return {};
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed);
  return trimmed;
}

function parseSimpleYaml(yamlText) {
  const lines = yamlText.replace(/\r/g, '').split('\n');
  const root = {};
  const contexts = [{ indent: -1, type: 'object', value: root }];

  for (let i = 0; i < lines.length; i += 1) {
    const rawLine = lines[i];
    if (!rawLine.trim() || rawLine.trim().startsWith('#')) {
      continue;
    }

    const indent = rawLine.match(/^ */)[0].length;
    const trimmed = rawLine.trim();

    while (contexts.length > 1 && indent <= contexts[contexts.length - 1].indent) {
      contexts.pop();
    }

    const current = contexts[contexts.length - 1];

    if (trimmed.startsWith('- ')) {
      if (current.type !== 'array') {
        throw new Error(`Unexpected array item in front matter: ${trimmed}`);
      }

      const itemText = trimmed.slice(2);
      if (!itemText) {
        const obj = {};
        current.value.push(obj);
        contexts.push({ indent, type: 'object', value: obj });
        continue;
      }

      const colonIndex = itemText.indexOf(':');
      if (colonIndex === -1) {
        current.value.push(parseScalar(itemText));
        continue;
      }

      const key = itemText.slice(0, colonIndex).trim();
      const value = itemText.slice(colonIndex + 1);
      const obj = {};
      obj[key] = parseScalar(value);
      current.value.push(obj);
      contexts.push({ indent, type: 'object', value: obj });
      continue;
    }

    const colonIndex = trimmed.indexOf(':');
    if (colonIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, colonIndex).trim();
    const value = trimmed.slice(colonIndex + 1);

    if (value.trim()) {
      current.value[key] = parseScalar(value);
      continue;
    }

    let nextNonEmpty = null;
    for (let j = i + 1; j < lines.length; j += 1) {
      if (!lines[j].trim() || lines[j].trim().startsWith('#')) continue;
      nextNonEmpty = lines[j];
      break;
    }

    if (!nextNonEmpty) {
      current.value[key] = {};
      continue;
    }

    const nextTrimmed = nextNonEmpty.trim();
    const nextIndent = nextNonEmpty.match(/^ */)[0].length;
    const container = nextTrimmed.startsWith('- ') && nextIndent > indent ? [] : {};
    current.value[key] = container;
    contexts.push({
      indent,
      type: Array.isArray(container) ? 'array' : 'object',
      value: container,
    });
  }

  return root;
}

function splitFrontMatter(content) {
  const normalized = content.replace(/^\uFEFF/, '');
  const match = normalized.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { metadata: {}, body: normalized };
  }
  return {
    metadata: parseSimpleYaml(match[1]),
    body: match[2],
  };
}

function sanitizeHeaderText(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ß/g, 'ss')
    .replace(/ł/g, 'l')
    .replace(/đ/g, 'd');
}

async function renderFigure(figure, baseDir) {
  if (!figure || !figure.path) {
    return '';
  }

  const imagePath = resolveAssetPath(baseDir, figure.path);
  const imageUrl = await optimizeImage(imagePath, 'figure');
  const caption = figure.caption ? `<figcaption>${escapeHtml(figure.caption)}</figcaption>` : '';

  const className = `body-figure${figure.className ? ` ${figure.className}` : ''}`;
  return `<figure class="${className}"><img src="${imageUrl}" alt="${escapeHtml(figure.alt || figure.caption || '')}">${caption}</figure>`;
}

async function buildBodyHtml(markdown, figures, baseDir) {
  const safeFigures = Array.isArray(figures) ? figures : [];
  const figureMap = new Map(safeFigures.map((figure) => [figure.id, figure]));
  const figureIdsInMarkdown = [...markdown.matchAll(/\{\{FIGURE:([a-zA-Z0-9_-]+)\}\}/g)].map((match) => match[1]);
  const inlineFigureHtml = new Map();

  for (const id of figureIdsInMarkdown) {
    if (!inlineFigureHtml.has(id) && figureMap.has(id)) {
      inlineFigureHtml.set(id, await renderFigure(figureMap.get(id), baseDir));
    }
  }

  const withInlineFigures = markdown
    .replace(/\{\{FIGURE:([a-zA-Z0-9_-]+)\}\}/g, (_match, id) => inlineFigureHtml.get(id) || '')
    .replace(/\{\{PAGEBREAK\}\}/g, '<div class="page-break"></div>');

  const body = marked.parse(withInlineFigures);
  const unusedFigures = safeFigures.filter((figure) => !figure.id || !markdown.includes(`{{FIGURE:${figure.id}}}`));
  const renderedUnused = [];
  for (const figure of unusedFigures) {
    renderedUnused.push(await renderFigure(figure, baseDir));
  }
  const figureHtml = renderedUnused.join('\n');
  return `${body}\n${figureHtml}`;
}

function applyTemplate(template, replacements) {
  let html = template;
  for (const [key, value] of Object.entries(replacements)) {
    html = html.replaceAll(`{{${key}}}`, value);
  }
  return html;
}

function inferPdfName(entry, metadata) {
  if (metadata.outputPdf) {
    return metadata.outputPdf;
  }
  return `${entry.baseName}-rider-en.pdf`;
}

function findRiderEntries() {
  const projectDirs = fs.readdirSync(PROJECTS_DIR, { withFileTypes: true }).filter((entry) => entry.isDirectory());
  const entries = [];

  for (const dirEntry of projectDirs) {
    const baseName = dirEntry.name;
    const projectDir = path.join(PROJECTS_DIR, baseName);
    const markdownPath = path.join(projectDir, 'rider.en.md');
    if (fs.existsSync(markdownPath)) {
      entries.push({ markdownPath, projectDir, baseName });
    }
  }

  return entries;
}

function resolveRequestedEntries(requested) {
  const allEntries = findRiderEntries();
  if (!requested) {
    return allEntries;
  }

  const directPath = path.resolve(process.cwd(), requested);
  if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) {
    const baseName = path.basename(path.dirname(directPath));
    return [{ markdownPath: directPath, projectDir: path.dirname(directPath), baseName }];
  }

  return allEntries.filter((entry) => entry.baseName === requested);
}

async function renderEntry(browser, entry) {
  const source = fs.readFileSync(entry.markdownPath, 'utf8');
  const { metadata, body: markdown } = splitFrontMatter(source);
  const template = readTemplate(TEMPLATE_PATH);
  const css = readTemplate(CSS_PATH);
  const baseDir = path.dirname(entry.markdownPath);

  const resolvedCover = resolveAssetPath(baseDir, metadata.coverImage);
  const coverImageUrl = await optimizeImage(resolvedCover, 'cover');
  const bodyHtml = await buildBodyHtml(markdown, metadata.inlineFigures, baseDir);
  const html = applyTemplate(template, {
    STYLE: css,
    TITLE: escapeHtml(metadata.title || ''),
    YEAR: escapeHtml(metadata.year || ''),
    ROLE: escapeHtml(metadata.role || 'Data Artist and Multimedia Developer'),
    ARTIST_NAME: escapeHtml(metadata.artistName || 'Slava Romanov'),
    DOCUMENT_LABEL: escapeHtml(metadata.documentLabel || 'Technical Rider'),
    RUNNING_TITLE: escapeHtml(metadata.runningTitle || metadata.title || ''),
    COVER_IMAGE_URL: coverImageUrl,
    COVER_CREDIT: escapeHtml(metadata.coverCredit || ''),
    COVER_PAGE_CLASS: metadata.coverFullBleed === false ? 'cover-page' : 'cover-page cover-page--fullbleed',
    COVER_FIT: escapeHtml(metadata.coverFit || 'cover'),
    COVER_POSITION: escapeHtml(metadata.coverPosition || 'center center'),
    FORMAT_LABEL: escapeHtml(metadata.formatLabel || ''),
    BODY_HTML: bodyHtml,
  });

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const htmlOutputPath = path.join(OUTPUT_DIR, `${entry.baseName}.html`);
  const pdfOutputPath = path.join(OUTPUT_DIR, inferPdfName(entry, metadata));
  fs.writeFileSync(htmlOutputPath, html, 'utf8');

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'load' });

  await page.pdf({
    path: pdfOutputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0mm',
      right: '0mm',
      bottom: '0mm',
      left: '0mm',
    },
  });

  await page.close();
  await stampHeaders(pdfOutputPath, metadata);

  return { htmlOutputPath, pdfOutputPath };
}

async function stampHeaders(pdfPath, metadata) {
  const bytes = fs.readFileSync(pdfPath);
  const pdfDoc = await PDFDocument.load(bytes);
  const pages = pdfDoc.getPages();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const gray = rgb(0.42, 0.42, 0.42);
  const darkGray = rgb(0.3, 0.3, 0.3);

  for (let index = 1; index < pages.length; index += 1) {
    const page = pages[index];
    const { width, height } = page.getSize();
    const leftX = 45;
    const rightX = width - 45;
    const topY = height - 30;

    const artistName = sanitizeHeaderText(metadata.artistName || 'Slava Romanov');
    const role = sanitizeHeaderText(metadata.role || 'Data Artist and Multimedia Developer');
    const website = metadata.website || 'https://www.slavaromanov.art/';
    const websiteLabel = website.replace(/^https?:\/\//, '');
    const titleLabel = sanitizeHeaderText(`${metadata.runningTitle || metadata.title || ''} (${metadata.documentLabel || 'Technical Rider'})`);
    const pageLabel = String(index + 1);
    const pageWidth = fontRegular.widthOfTextAtSize(pageLabel, 8);
    const titleWidth = fontRegular.widthOfTextAtSize(titleLabel, 8);

    page.drawText(artistName, {
      x: leftX,
      y: topY,
      size: 8,
      font: fontBold,
      color: darkGray,
    });

    page.drawText(role, {
      x: leftX,
      y: topY - 9,
      size: 7.2,
      font: fontRegular,
      color: gray,
    });

    page.drawText(websiteLabel, {
      x: leftX,
      y: topY - 18,
      size: 7.2,
      font: fontRegular,
      color: gray,
    });

    page.drawLine({
      start: { x: leftX, y: topY - 22.5 },
      end: { x: rightX, y: topY - 22.5 },
      thickness: 0.6,
      color: rgb(0.8, 0.8, 0.8),
    });

    page.drawText(pageLabel, {
      x: rightX - pageWidth,
      y: topY,
      size: 8,
      font: fontRegular,
      color: gray,
    });

    page.drawText(titleLabel, {
      x: rightX - pageWidth - 14 - titleWidth,
      y: topY,
      size: 8,
      font: fontRegular,
      color: gray,
    });

    addLinkAnnotation(pdfDoc, page, {
      x: leftX,
      y: topY - 18,
      width: fontRegular.widthOfTextAtSize(websiteLabel, 7.2),
      height: 8,
    }, website);
  }

  const outputBytes = await pdfDoc.save();
  fs.writeFileSync(pdfPath, outputBytes);
}

function addLinkAnnotation(pdfDoc, page, rect, url) {
  const annotation = pdfDoc.context.obj({
    Type: 'Annot',
    Subtype: 'Link',
    F: 4,
    Rect: [rect.x, rect.y, rect.x + rect.width, rect.y + rect.height],
    Border: [0, 0, 0],
    A: {
      Type: 'Action',
      S: 'URI',
      URI: PDFString.of(url),
    },
  });

  const annotationRef = pdfDoc.context.register(annotation);
  const annotsKey = PDFName.of('Annots');
  let annots = page.node.get(annotsKey);
  if (!annots) {
    annots = pdfDoc.context.obj([]);
    page.node.set(annotsKey, annots);
  }
  annots.push(annotationRef);
}

async function main() {
  const requested = process.argv[2];
  const entries = resolveRequestedEntries(requested);

  if (!entries.length) {
    throw new Error('No rider entries found to render.');
  }

  const executablePath = findBrowserExecutable();
  const browser = await playwright.chromium.launch({
    headless: true,
    executablePath: executablePath || undefined,
  });

  try {
    for (const entry of entries) {
      const result = await renderEntry(browser, entry);
      console.log(`Rendered ${entry.baseName}`);
      console.log(`  HTML: ${result.htmlOutputPath}`);
      console.log(`  PDF:  ${result.pdfOutputPath}`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
