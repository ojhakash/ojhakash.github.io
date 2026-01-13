# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Akash Ojha, hosted on GitHub Pages at akashojha.com. Built with Next.js 14, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Next.js 14** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (Button, Card, Badge, Separator components)
- **Lucide React** (icons)

## Project Structure

```
app/
├── layout.tsx      # Root layout with Inter font, metadata
├── page.tsx        # Main page composing all sections
└── globals.css     # Tailwind imports, CSS variables, dark theme

components/
├── ui/             # shadcn components (button, card, badge, separator)
├── nav.tsx         # Sticky navigation with mobile menu
├── hero.tsx        # Hero section with photo and CTAs
├── about.tsx       # About section with stats
├── experience.tsx  # Work history timeline
├── skills.tsx      # Skills grid by category
├── contact.tsx     # Contact info and social links
└── footer.tsx      # Simple footer

public/
├── akash.jpg       # Profile photo
└── resume.pdf      # Resume PDF
```

## Commands

```bash
npm run dev     # Start development server
npm run build   # Build for production (outputs to /out)
npm run lint    # Run ESLint
```

## Design Decisions

- Dark theme only (configured in layout.tsx via `className="dark"`)
- Zinc color palette for professional, minimal aesthetic
- Inter font for clean typography
- No animations beyond subtle hover transitions
- Static export enabled for GitHub Pages compatibility

## Deployment

Configured for static export (`output: "export"` in next.config.ts). The `/out` directory contains the static site. Custom domain configured via CNAME file.

For GitHub Pages deployment, the `out/` directory contents should be served. Consider using GitHub Actions to automate the build and deploy process.
