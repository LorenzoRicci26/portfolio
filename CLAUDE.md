# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

Personal portfolio site built with **Astro 6** + **Tailwind CSS 4** (via `@tailwindcss/vite` plugin). Deployed to **GitHub Pages** at `https://LorenzoRicci26.github.io/portfolio` via CI/CD on `main` branch pushes.

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the built site locally |

No test framework, linter, or formatter is configured.

## Architecture

**Single-page layout.** All content lives in `src/pages/index.astro` as inline TypeScript data (projects, journey items, skills, socials). This page composes all components:

- `src/layouts/Layout.astro` — HTML shell with meta tags, Google Fonts (Inter), dark theme base
- `src/components/Navbar.astro` — Fixed top navigation with smooth-scroll anchor links
- `src/components/Hero.astro` — Landing section with headline and CTA
- `src/components/Section.astro` — Reusable section wrapper (id, title, description + slot)
- `src/components/Timeline.astro` — Animated vertical timeline with IntersectionObserver for scroll-triggered reveals
- `src/components/ProjectCard.astro` — Clickable project card with optional image
- `src/components/SkillList.astro` — Categorized skill tags
- `src/components/Footer.astro` — Footer with social links

**Styling:** Tailwind CSS v4 via Vite plugin. Global styles in `src/styles/global.css` (just `@import "tailwindcss"`). No separate CSS files per component.

**Images:** All static assets live in `public/`. Image paths in component props are relative to `public/` and must be prefixed with `import.meta.env.BASE_URL` (which resolves to `/portfolio` on GitHub Pages) for correct resolution. See `ProjectCard.astro` and `Timeline.astro` for the pattern.

**Key config:**
- `astro.config.mjs` — `site` and `base` set for GitHub Pages deployment
- `tsconfig.json` — extends `astro/tsconfigs/strict`

## Content Model

All portfolio content is defined as TypeScript constants in `src/pages/index.astro` — to add/edit projects, timeline entries, skills, or social links, modify the data objects there and pass them as props to the corresponding components.
