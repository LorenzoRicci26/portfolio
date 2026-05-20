# Portfolio Fixes: Navbar Smooth-Scroll + Language Toggle

**Date:** 2026-05-20
**Status:** Approved

## Problem

1. **Navbar links don't work** — Clicking any navbar link (Home, Chi Sono, Esperienza, etc.) does not scroll to the corresponding section.
2. **Language toggle is a plain button** — Currently shows a single flag icon. User wants a pill-shaped toggle with both flags visible and an animated sliding indicator.

## Root Cause Analysis

### Broken Smooth-Scroll

The smooth-scroll interceptor in `src/pages/index.astro` uses a dual selector strategy:
- Italian: queries `.lang-it section[id="${sectionId}"]`
- English: queries `.lang-en [data-section="${sectionId}"]`

Issues:
1. The Italian Hero component has `id="home"` but Italian `Section` components also have `id` — yet the EN sections have no `id` at all, only `data-section`. This asymmetry means the script must branch logic per language.
2. The selector `.lang-it section[id="..."]` may fail if Astro's rendering wraps the section in unexpected elements or if the `id` is not on the `<section>` element itself.
3. Duplicate `id` values across lang blocks could cause `querySelector` to return an element from the hidden block.

### Toggle Design

Current implementation: Button with two `<span>` elements (IT/EN flag) that show/hide via `.hidden` class. No visual indication of a toggle mechanism — just a flag that swaps.

## Design

### Fix 1: Unified `data-section` Selector

**Goal:** Make smooth-scroll work reliably for both languages with a single code path.

**Changes:**

1. **All sections get `data-section`** — Both IT and EN blocks use `data-section` on every section wrapper. Remove reliance on `id` for navigation.
   - Italian `Section` components: pass `data-section` instead of `id`
   - Italian `Hero` component: pass `data-section="home"` (it already supports the prop)
   - EN blocks already use `data-section` — no change needed

2. **Remove `id` from navigation targets** — Use only `data-section` to avoid duplicate IDs in the DOM. The `id` attribute is only needed for the Hero as `id="home"` for the top-of-page anchor — we can keep it but the navigation script won't rely on it.

3. **Rewrite the smooth-scroll script** — Single unified selector:
   ```js
   const lang = localStorage.getItem('lang') || 'it';
   const langClass = lang === 'en' ? '.lang-en' : '.lang-it';
   const element = document.querySelector(`${langClass} [data-section="${hash.slice(1)}"]`);
   ```

4. **Hero component update** — Already supports `data-section` prop. Just need to pass it in the IT block.

### Fix 2: Pill Toggle with Flag Slider

**Goal:** Replace the current flag-swap button with a pill-shaped toggle that shows both flags and has an animated sliding indicator.

**Design:**

```
  ┌──────────────────────┐
  │ 🇮🇹   🇬🇧           │   ← EN active: slider on right
  └──────────────────────┘

  ┌──────────────────────┐
  │ 🇮🇹   🇬🇧           │   ← IT active: slider on left
  └──────────────────────┘
      ↑
   slider here
```

**Implementation:**

- **Container:** `border-radius: 999px`, padding ~2px, border `neutral-800`, relative positioning
- **Flags:** Two spans with flags, each ~24px wide, centered
- **Slider:** Absolute positioned `div` with `border-radius: 999px`, background `neutral-800`, width/height matching a flag slot
- **Animation:** CSS `transition: transform 200ms ease-in-out` on the slider
- **State:** Toggle has `data-active="it"` or `data-active="en"` attribute
  - IT active: `transform: translateX(0)`
  - EN active: `transform: translateX(100%)` (or calculated offset)

**Files to change:**
- `src/components/Navbar.astro` — Replace toggle markup, add CSS, update JS

## Files to Modify

| File | Change |
|------|--------|
| `src/pages/index.astro` | Add `data-section` to all IT sections; rewrite smooth-scroll script |
| `src/components/Navbar.astro` | Redesign toggle: pill container, dual flags, animated slider |
| `src/components/Hero.astro` | No change — already supports `data-section` prop |
| `src/components/Section.astro` | No change — already supports `data-section` prop |

## Scope

- **In scope:** Fix navbar smooth-scroll for all links, redesign language toggle
- **Out of scope:** Content changes, new sections, mobile menu (not currently implemented), SEO changes
