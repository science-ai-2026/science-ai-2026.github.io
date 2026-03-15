# Scientific Understanding of Foundation Models — Workshop Website

A modern, responsive workshop website for the **Scientific Understanding of Foundation Models** workshop at COLM 2026. Built with Next.js 14, Tailwind CSS, and TypeScript.

## Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- npm (comes with Node.js)

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Editing Workshop Content

**All workshop content is centralized in a single file:**

```
src/data/workshop.ts
```

This file contains every piece of text, date, speaker, organizer, and link on the site. To update the workshop, edit this file — you should rarely need to touch component code.

### Common edits

| What to update | Where in `workshop.ts` |
|---|---|
| Dates (submission deadline, notification, etc.) | `callForPapers.keyDates` |
| Speakers (add, remove, update bios) | `speakers.list` |
| Organizers | `organizers.list` |
| Schedule / timeline | `schedule.timeline` |
| FAQ questions & answers | `faq.items` |
| Contact email | `siteConfig.contactEmail` |
| OpenReview / submission links | `callForPapers.submissionUrl`, `siteConfig.openReviewUrl` |
| Social links | `siteConfig.socialLinks` |
| Topics and subtopics | `topics.pillars` |

All placeholder values are marked with `// TODO:` comments for easy searching.

### Adding a new speaker

Add an entry to `speakers.list` in `workshop.ts`:

```ts
{
  name: 'New Speaker',
  affiliation: 'University',
  bio: 'Short bio...',
  website: 'https://example.com',
  imageUrl: null,        // or path to image in /public
  initials: 'NS',
}
```

### Adding a new organizer

Add an entry to `organizers.list`:

```ts
{
  name: 'New Organizer',
  affiliation: 'University',
  website: 'https://example.com',
  initials: 'NO',
}
```

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles and Tailwind layers
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page assembling all sections
├── components/
│   ├── Header.tsx         # Sticky navigation
│   ├── Hero.tsx           # Hero section with title and CTAs
│   ├── About.tsx          # Workshop overview and motivating questions
│   ├── Topics.tsx         # Three-pillar topic cards
│   ├── CallForPapers.tsx  # CFP with dates, categories, review process
│   ├── Speakers.tsx       # Invited speaker cards
│   ├── Schedule.tsx       # Format overview and timeline
│   ├── Organizers.tsx     # Organizer grid
│   ├── Diversity.tsx      # Diversity & inclusion statement
│   ├── FAQ.tsx            # Accordion-style FAQ
│   └── Footer.tsx         # Contact info and links
└── data/
    └── workshop.ts        # ← ALL editable content lives here
```

## Building for Production

```bash
npm run build
```

This generates a static export in the `out/` directory (configured via `output: 'export'` in `next.config.js`), ready for deployment to any static hosting service.

## Deploying to GitHub Pages

### Option 1: Manual deployment

1. Build the site: `npm run build`
2. The static files will be in the `out/` directory
3. Push the contents of `out/` to the `gh-pages` branch of your repository

### Option 2: GitHub Actions (recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out
      - uses: actions/deploy-pages@v4
```

Then enable GitHub Pages in your repository settings, selecting "GitHub Actions" as the source.

> **Note:** If deploying to a subpath (e.g., `username.github.io/repo-name`), add `basePath: '/repo-name'` to `next.config.js`.

## Design Decisions

- **Single data file**: All content lives in `src/data/workshop.ts` so organizers can update the site without understanding React/Next.js.
- **Static export**: The site is fully static (`output: 'export'`) with no server-side rendering or API routes needed, making it ideal for GitHub Pages.
- **Inter font**: Clean, modern, highly legible — the de facto standard for contemporary ML/AI sites.
- **Restrained color palette**: Primary blue/indigo conveys academic seriousness; subtle gradients add depth without distraction.
- **Minimal dependencies**: Only Next.js, React, and Tailwind — no animation libraries, icon packs, or UI frameworks.
- **Accessible**: Semantic HTML, good contrast ratios, keyboard-navigable, responsive from mobile to desktop.
- **Component isolation**: Each section is its own component, making it easy to rearrange, remove, or add sections.
