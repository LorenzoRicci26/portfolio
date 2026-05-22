# AGENTS.md

## Project

Personal portfolio site. **Astro 6** + **Tailwind CSS 4** (via `@tailwindcss/vite`). Deployed to GitHub Pages at `https://LorenzoRicci26.github.io/portfolio`.

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Dev server on `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview built site |

No test, lint, or format commands are configured.

## Content Model

All text content lives in `src/content/i18n/` — **not** inline in the page file.

- `src/content/i18n/it.ts` — Italian strings (default language)
- `src/content/i18n/en.ts` — English strings

To edit any visible text, modify the corresponding i18n file and ensure both language files stay in sync.

## Bilingual i18n

The site supports Italian (default) and English. Both language sets are rendered on the page; CSS hides the inactive one based on `html[data-lang]`. A JS-powered toggle (`LanguageToggle` component) switches language and persists to `localStorage`.

**Gotcha:** Section anchors (`#home`, `#about`, etc.) are shared across both languages via `data-section` attributes. The nav click handler resolves the correct visible section.

## Page Architecture

`src/pages/index.astro` is the sole page. It imports both i18n files and renders two content blocks (`.lang-it` / `.lang-en`) plus dual navbars (`NavbarIt` / `NavbarEn`).

Components used:
- `Layout` — HTML shell, meta tags, Google Fonts (Inter), dark theme
- `Hero` — Landing headline + CTA
- `Section` — Reusable wrapper with `data-section` for anchor navigation
- `Timeline` — Scroll-animated vertical timeline (IntersectionObserver)
- `ProjectCard` — Clickable project card
- `SkillList` — Categorized skill tags
- `AboutMe` — About section content
- `Footer` — Social links + copyright
- `LanguageToggle` — IT/EN switch button
- `NavbarIt` / `NavbarEn` — Language-specific nav bars with `data-lang` attribute

## Image Paths

All static assets live in `public/`. In `.astro` files, prefix image paths with `import.meta.env.BASE_URL` (resolves to `/portfolio` on GitHub Pages) for correct resolution.

## Deployment

CI workflow at `.github/workflows/deploy.yml` triggers on `main` branch pushes. Runs `npm ci` then `npm run build`, uploads `dist/` artifact, and deploys via GitHub Pages actions.

## Node Requirement

`engines.node` requires `>=22.12.0`.
