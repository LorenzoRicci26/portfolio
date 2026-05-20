# Portfolio Fixes: Navbar Smooth-Scroll + Language Toggle

> **For agentic workers:** REQUIRED SUB-KEY: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all navbar smooth-scroll links and replace the language switch button with a pill-shaped toggle with animated flag slider.

**Architecture:** Two independent tasks. Task 1 unifies section selection by `data-section` across both language blocks so the smooth-scroll interceptor uses a single code path. Task 2 replaces the flag-swap button in the navbar with a CSS-only animated pill toggle.

**Tech Stack:** Astro 6, Tailwind CSS 4, vanilla JS inline scripts, CSS transitions.

---

### Task 1: Fix Navbar Smooth-Scroll Links

**Files:**
- Modify: `src/pages/index.astro` — Add `data-section` to all IT sections, rewrite smooth-scroll script

**Background:** The current smooth-scroll script branches by language: IT uses `section[id="..."]` selector, EN uses `[data-section="..."]`. This asymmetry causes links to fail because:
1. The IT Hero has `id="home"` but the script looks for `section[id="home"]` inside `.lang-it` — this works only if the Hero section is a direct descendant
2. More importantly, having duplicate `id` values across both lang blocks (e.g., two `section id="about"` elements) means `querySelector` may return the hidden block's element

**Fix:** Use `data-section` uniformly on ALL sections in both lang blocks. Rewrite the script to always query `[data-section="..."]` inside the active `.lang-{it|en}` container.

- [ ] **Step 1: Add `data-section` to all Italian sections**

In `src/pages/index.astro`, update the Italian content block to pass `data-section` to every component:

Change the Italian Hero from:
```astro
<Hero
  headline={it.hero.headline}
  subheadline={it.hero.subheadline}
  ctaText={it.hero.ctaText}
  ctaHref={it.hero.ctaHref}
  badge={it.hero.badge}
/>
```
To:
```astro
<Hero
  headline={it.hero.headline}
  subheadline={it.hero.subheadline}
  ctaText={it.hero.ctaText}
  ctaHref={it.hero.ctaHref}
  badge={it.hero.badge}
  data-section="home"
/>
```

Change all Italian `Section` components to use `data-section` instead of `id`:
```astro
<!-- Before -->
<Section id="about" title={it.about.title} description="">
<!-- After -->
<Section data-section="about" title={it.about.title} description="">
```

Do this for ALL Italian sections: `about`, `experience`, `education`, `projects`, `skills`, `languages`, `contact`.

The English block already uses `data-section` — no change needed there.

- [ ] **Step 2: Rewrite the smooth-scroll script**

Replace the entire `<script is:inline>` block in `src/pages/index.astro` with:

```html
<script is:inline>
  (function () {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const hash = target.getAttribute('href');
      if (!hash || hash.length < 2) return;

      const lang = localStorage.getItem('lang') || 'it';
      const langClass = lang === 'en' ? '.lang-en' : '.lang-it';
      const sectionId = hash.slice(1);

      const element = document.querySelector(
        `${langClass} [data-section="${sectionId}"]`
      );

      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', hash);
      }
    });
  })();
</script>
```

Key changes:
- Single selector path: `${langClass} [data-section="${sectionId}"]`
- No branching by language — both IT and EN use `data-section`
- Guard for hash length < 2 prevents empty hash matches

- [ ] **Step 3: Start dev server and verify**

Run: `npm run dev`

Expected: Dev server starts at `localhost:4321`

- [ ] **Step 4: Test smooth-scroll in browser**

1. Open `http://localhost:4321` in browser
2. Click each navbar link: Home, Chi Sono, Esperienza, Formazione, Progetti, Skill, Contatti
3. Verify page smoothly scrolls to each section
4. Click language toggle to switch to English
5. Click each navbar link again
6. Verify page smoothly scrolls to each English section

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "fix: unify smooth-scroll navigation with data-section selector

- Add data-section to all Italian sections for consistent selection
- Rewrite smooth-scroll script to use single data-section query path
- Remove id-based selection that caused cross-lang duplicate issues"
```

---

### Task 2: Redesign Language Toggle as Pill Switch

**Files:**
- Modify: `src/components/Navbar.astro` — Replace toggle button markup, add pill CSS, update JS

**Background:** Current toggle shows a single flag (🇮🇹 or 🇬🇧) that swaps on click. User wants a pill-shaped container with both flags visible and an animated sliding background indicator.

Design:
```
IT active:          EN active:
┌────────────┐     ┌────────────┐
│🇮🇹│ 🇬🇧    │     │ 🇮🇹 │🇬🇧│  │
└────────────┘     └────────────┘
 ↑                    ↑
slider              slider
```

- [ ] **Step 1: Replace toggle button markup**

In `src/components/Navbar.astro`, replace the current `<button class="lang-toggle">` content:

Remove:
```html
<button
  class="lang-toggle text-sm text-neutral-400 hover:text-white transition-colors font-medium cursor-pointer flex items-center gap-1.5"
  title="Switch language"
>
  <span class="lang-icon-it text-base">🇮🇹</span>
  <span class="lang-icon-en text-base hidden">🇬🇧</span>
</button>
```

Add:
```html
<button
  class="lang-toggle relative flex items-center rounded-full border border-neutral-700 bg-neutral-900 p-0.5 cursor-pointer"
  title="Switch language"
  data-active="it"
>
  <span class="toggle-slider absolute left-0.5 top-0.5 w-[26px] h-[22px] rounded-full bg-neutral-700 transition-transform duration-200 ease-in-out" />
  <span class="flag-it flex items-center justify-center w-[26px] h-[22px] rounded-full text-xs relative z-10">🇮🇹</span>
  <span class="flag-en flex items-center justify-center w-[26px] h-[22px] rounded-full text-xs relative z-10">🇬🇧</span>
</button>
```

- [ ] **Step 2: Update the toggle JavaScript**

Replace the `applyLang` function and click handler in the `<script is:inline>` block:

```javascript
<script is:inline>
  (function () {
    if (document.querySelector('.lang-toggle[data-initialized]')) return;

    const toggles = document.querySelectorAll('.lang-toggle');
    toggles.forEach(toggle => toggle.dataset.initialized = 'true');

    function applyLang() {
      const lang = localStorage.getItem('lang') || 'it';
      document.documentElement.setAttribute('data-lang', lang);

      toggles.forEach(toggle => {
        toggle.dataset.active = lang;
        const slider = toggle.querySelector('.toggle-slider');
        if (slider) {
          if (lang === 'en') {
            slider.style.transform = 'translateX(100%)';
          } else {
            slider.style.transform = 'translateX(0)';
          }
        }
      });
    }

    applyLang();

    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const current = localStorage.getItem('lang') || 'it';
        const next = current === 'it' ? 'en' : 'it';
        localStorage.setItem('lang', next);
        applyLang();
      });
    });
  })();
</script>
```

Key changes:
- Set `data-active` attribute on the toggle for CSS state
- Move slider with `transform: translateX(100%)` for EN, `translateX(0)` for IT
- Remove the old `lang-icon-it` / `lang-icon-en` hidden class logic

- [ ] **Step 3: Test toggle in browser**

1. With dev server running, verify the toggle shows both flags
2. Verify the dark slider background is positioned on the Italian flag by default
3. Click the toggle — slider should animate to the GB flag
4. Click again — slider should animate back to IT flag
5. Refresh the page — toggle state should persist via localStorage

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.astro
git commit -m "feat: replace language toggle with pill switch and animated slider

- Pill-shaped container with both flags always visible
- CSS transition slider that animates between IT and EN
- State persists via localStorage"
```

---

## Self-Review

**Spec coverage:**
- ✅ Navbar smooth-scroll fix — Task 1 covers unified `data-section` selector
- ✅ Language toggle redesign — Task 2 covers pill toggle with animated slider
- ✅ All files from spec are addressed

**Placeholder scan:**
- ✅ No TBD, TODO, or incomplete sections
- ✅ All code blocks are complete and specific

**Type consistency:**
- ✅ `data-section` attribute used consistently across both tasks
- ✅ `localStorage.getItem('lang')` pattern consistent with existing code
- ✅ `html[data-lang]` attribute usage consistent between tasks
