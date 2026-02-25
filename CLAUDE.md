# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Interactive pitch deck for Outliers Scientific Fund - a single-page web application with expandable accordion sections for investor presentations.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |

## Project Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Main pitch deck page with accordions
├── globals.css         # Global styles, fonts, brand colors

public/
├── fonts/              # Custom fonts (Druk Wide, Aeonik)
└── images/             # Logos, graphics, slide images

resources/              # Source files (PDFs, original images, fonts)
```

## Features

- **Hero Section**: Logo, title (Druk Wide Bold), tagline (Aeonik Light Italic)
- **Search Box**: Filters all categories and content text
- **Expandable Categories**:
  - Why Space? (3 thesis points with images, gray background)
  - Why Now? (6 nested sub-sections with market data)
  - Why Outliers? (4 nested sub-sections with strategy info)
  - Featured Portfolios (Vast, AstroForge)
  - Fund Terms (structured table)

## Commands

```bash
npm run dev     # Start development server (http://localhost:3000)
npm run build   # Production build
npm run lint    # Run ESLint
```

## Brand Colors

```
Brand Green:  #9DCA53  (Primary accent)
Brand Blue:   #5DC0D9  (Secondary accent)
Background:   #000000  (Pure black)
Gray:         #BFBFBF  (Why Space? section background)
```

## Custom Fonts

- **Druk Wide Medium/Bold**: Titles and numbers
- **Aeonik Light**: Body text
- **Aeonik Light Italic**: Tagline

## Key Patterns

### Nested Accordions
"Why Now?" and "Why Outliers?" have clickable sub-categories that expand to reveal content.

### Content Types
- `thesis`: Grid of numbered items with images
- `market`: Sub-accordions with optional images
- `strategy`: Sub-accordions with partnerships/links
- `portfolios`: Company cards with highlights
- `terms`: Two-column label/value table

## Git Commits

- Do not add "Co-Authored-By: Claude" to commit messages

## Resources

Place reference files in the `resources/` folder:
- Pitch deck PDF/Keynote
- Brand assets and fonts
- Content images
