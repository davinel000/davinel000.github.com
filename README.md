# Slava Romanov portfolio site

This repository contains the source for [slavaromanov.art](https://www.slavaromanov.art), a Jekyll-based portfolio website built on top of the Forty theme by HTML5 UP and then progressively reworked into a hybrid portfolio system.

## Current site structure

The site now has three content layers:

1. Current project pages
   Individual works are primarily maintained as standalone posts in `_posts/`. These are the main project pages shown on the homepage tiles and used for current public presentation.

2. Special landing pages
   Some pages are structured as custom presentation modules rather than simple Markdown pages. The main example is `a.md`, which powers the `/a/` page and uses dedicated includes plus JavaScript-driven project cards.

3. Archival portfolio
   The older unified YAML-driven portfolio is still used for the archival section. Its data lives in `_data/portfolio.yml` and is rendered through dedicated archive layouts.

This means the repository is no longer centered around a single YAML-generated portfolio. The YAML archive remains useful as a historical catalogue, while current and thematic presentation happens through posts and modular pages.

## Main files and directories

- `_config.yml`
  Global site configuration, metadata, social links, homepage tile settings, and Jekyll build options.

- `_posts/`
  Main source of current project pages. Recent entries use rich front matter for language switching, related projects, hero images, and tile visibility.

- `_layouts/project_for_catalogue.html`
  Primary layout for current long-form project pages.

- `_includes/tiles.html`
  Builds the homepage tile grid from posts and pages, depending on `tiles-source`.

- `a.md`
  The QR-oriented introduction page. It is data-driven through front matter and rendered with the `networking-*` include set.

- `_includes/networking-*.html`
  Reusable components for the modular presentation page system used by `a.md`.

- `assets/js/networking-a.js`
  Client-side logic for audience mode switching and swipe/drag behavior inside featured project galleries on `/a/`.

- `_data/portfolio.yml`
  Legacy structured data source used by the archival portfolio section.

- `full_portfolio.md`
  Entry page for the archival portfolio.

## Content workflow

### Current projects

For current work, add or update a post in `_posts/`. A typical project page contains:

- front matter with `title`, `date`, `category`, `description`, `image`, and tile settings
- optional language-switch fields such as `lang`, `alternate_label`, and `alternate_url`
- optional cross-linking fields such as `related_projects`
- Markdown body with custom includes for galleries, video, or embeds

This workflow gives each project its own tone, structure, and amount of detail without forcing every page into one rigid schema.

### Special presentation pages

For compact portfolio views, curatorial pages, or audience-specific intros, use standalone pages with structured front matter and reusable includes. The `/a/` page is the current reference implementation for this approach.

### Archival portfolio

The archival section still reads from `_data/portfolio.yml`. This is intentionally treated as a legacy or historical layer rather than the primary authoring workflow.

## Media organization

Project media is stored in `assets/images/portfolio/<project>/`.

Typical structure:

- `carousel/` for card or banner-friendly images
- `content/` for installation or documentation photos
- `device/`, `screen/`, `performance/`, `second/`, and similar folders for grouped documentation

Current project pages and modular includes rely on stable folder naming, so keep image paths explicit in front matter and includes.

## Styling and scripts

- Main stylesheet entry: `assets/css/main.scss`
- Site-wide SCSS partials: `_sass/`
- Shared JavaScript: `assets/js/`

The newer `/a/` presentation layer has its own SCSS partial (`_sass/pages/_networking-a.scss`) and JavaScript controller (`assets/js/networking-a.js`).

## Local development

Install Ruby dependencies and run Jekyll locally:

```bash
bundle install
bundle exec jekyll serve
```

Then open the local server shown by Jekyll, typically `http://127.0.0.1:4000/`.

## Notes on repository cleanup

The repository contains historical experiments and legacy utilities from earlier stages of the portfolio. The active production structure is centered on:

- `_posts/`
- standalone pages in the project root
- `_includes/`, `_layouts/`, `_sass/`
- `assets/`
- `_data/portfolio.yml` for the archive

Obsidian files, local caches, and other editor-specific artifacts should stay out of version control.

## Base theme

Based on Forty by HTML5 UP:

- [HTML5 UP](https://html5up.net/)
- license: CCA 3.0

Additional libraries and assets remain credited in the original theme sources.
