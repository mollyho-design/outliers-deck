# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Interactive pitch deck for Outliers Fund - a single-page web application with expandable accordion sections for investor presentations.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |

## Project Structure

```
app/                    # Next.js App Router pages
├── layout.tsx          # Root layout
├── page.tsx            # Main pitch deck page

components/
├── Accordion.tsx       # Expandable section component
├── Section.tsx         # Individual slide/section
└── Navigation.tsx      # Category navigation

resources/              # Reference files (pitch deck, images, etc.)

public/
└── images/             # Logos, graphics
```

## Commands

```bash
npm run dev     # Start development server
npm run build   # Production build
npm run lint    # Run ESLint
```

## Brand Colors

```
Brand Green:  #9DCA53  (Primary accent)
Brand Blue:   #5DC0D9  (Secondary accent)
Brand Purple: #543960  (Tertiary)
Background:   #000000  (Pure black)
```

## Key Patterns

### Expandable Sections
Click a category to expand content below with smooth animation.

### Client Components
All interactive components require `'use client'` directive at line 1.

## Git Commits

- Do not add "Co-Authored-By: Claude" to commit messages

## Resources

Place reference files in the `resources/` folder:
- Pitch deck PDF/PPTX
- Brand assets
- Content documents
