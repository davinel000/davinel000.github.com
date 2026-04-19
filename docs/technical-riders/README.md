# Technical Riders Workspace

This folder is the main workspace for developing technical riders in a consistent format.

## Structure

- `source-texts/` - extracted source text from existing PDF and DOCX files
- `projects/` - one folder per artwork, each with its rider source and optional local print images
- `masters/de/` - German versions and translations
- `framework/` - shared framework, section order, and style rules
- `correspondence/` - email drafts and related communication texts
- `build/` - local renderer for HTML and PDF generation
- `output/` - generated HTML previews and PDF files

## Current Workflow

1. Preserve the original extracted text in `source-texts/`
2. Build and clean the English rider in `projects/<slug>/rider.en.md`
3. Keep project-specific print images near the rider if needed
4. Images can be referenced either by local relative paths or by direct `https://...` URLs
5. Translate only after the English structure is stable
6. Render HTML and PDF from the project rider using the local build script

## Current Files to Work On First

- [projects/after-fleeting-retention/rider.en.md](E:/PROJECTS_LOCAL/WEBSITE/davinel000.github.com/docs/technical-riders/projects/after-fleeting-retention/rider.en.md)
- [projects/sutum/rider.en.md](E:/PROJECTS_LOCAL/WEBSITE/davinel000.github.com/docs/technical-riders/projects/sutum/rider.en.md)
- [projects/pnctm/rider.en.md](E:/PROJECTS_LOCAL/WEBSITE/davinel000.github.com/docs/technical-riders/projects/pnctm/rider.en.md)
- [projects/unground/rider.en.md](E:/PROJECTS_LOCAL/WEBSITE/davinel000.github.com/docs/technical-riders/projects/unground/rider.en.md)
- [technical-rider-framework.md](E:/PROJECTS_LOCAL/WEBSITE/davinel000.github.com/docs/technical-riders/framework/technical-rider-framework.md)

## Rendering

Run from the repository root with the bundled Node runtime:

```powershell
& 'C:\Users\Viacheslav Romanov\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' `
  'docs\technical-riders\build\render-riders.js'
```

To render only one rider:

```powershell
& 'C:\Users\Viacheslav Romanov\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' `
  'docs\technical-riders\build\render-riders.js' after-fleeting-retention
```

You can also render a rider by passing the direct path to a Markdown file:

```powershell
& 'C:\Users\Viacheslav Romanov\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' `
  'docs\technical-riders\build\render-riders.js' `
  'docs\technical-riders\projects\after-fleeting-retention\rider.en.md'
```

Short wrapper:

```powershell
.\docs\technical-riders\build\build-riders.ps1
.\docs\technical-riders\build\build-riders.ps1 after-fleeting-retention
.\docs\technical-riders\build\build-riders.ps1 'docs\technical-riders\projects\after-fleeting-retention\rider.en.md'
```

## Inline Image Blocks

Inside a rider Markdown file you can insert an image placeholder like:

```md
{{FIGURE:after-installation-view}}
```

The matching figure is defined in the rider's front matter:

```yaml
inlineFigures:
  - id: "after-installation-view"
    path: "./images/example.jpg"
    caption: "Lichtrouten, Lüdenscheid. Photo: Jennifer Braun"
```

This renders as a full-width image block with a small gray credit line below it.

## Front Matter

Project metadata now lives directly in the Markdown front matter. That means each rider can stay self-contained and can reference nearby images with relative paths.

Useful cover options:

```yaml
coverFullBleed: true
coverFit: "cover"
coverPosition: "center center"
```

- `coverFullBleed: true` makes the first image extend to the page edges
- `coverFit` can be `cover` or `contain`
- `coverPosition` accepts CSS-style values like `center center`, `top center`, `50% 30%`

## Design Defaults

The quickest places to adjust the default design later are:

- [rider.css](E:/PROJECTS_LOCAL/WEBSITE/davinel000.github.com/docs/technical-riders/build/templates/rider.css)
  for typography, page spacing, cover layout, figure spacing, and caption alignment
- [render-riders.js](E:/PROJECTS_LOCAL/WEBSITE/davinel000.github.com/docs/technical-riders/build/render-riders.js)
  for stamped running headers, page-number placement, and PDF-level behavior

Useful current handles:

- `.cover-page__content`
  moves the title block on the cover up or down
- `@page`
  controls margins for regular pages
- `@page cover`
  controls the full-bleed cover page
- `topY` inside `stampHeaders()`
  controls the vertical position of the running header

## Suggested Variant Structure

If one artwork needs multiple rider variants for different exhibitions, keep them in the same project folder.

Example:

```text
projects/
  after-fleeting-retention/
    rider.en.md
    rider.de.md
    rider-aalen.en.md
    rider-waldkirch.en.md
    images/
      cover.jpg
      installation-view-1.jpg
```

In that setup, image paths can stay local, for example:

```yaml
coverImage: "./images/cover.jpg"
```

They can also point to a web image directly:

```yaml
coverImage: "https://example.com/path/to/cover.jpg"
```

The same works for `inlineFigures.path`.

## Note

Legacy rider sources have been consolidated into this folder. The active editing workflow now starts from `projects/` and `source-texts/`.
