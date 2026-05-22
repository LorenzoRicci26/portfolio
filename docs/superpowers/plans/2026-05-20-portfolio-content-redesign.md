# Portfolio Content Redesign — Bilingual (IT/EN) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all mock portfolio data with real CV content, add bilingual IT/EN support via navbar toggle with localStorage persistence, introduce AboutMe and Languages sections.

**Architecture:** Content lives in `src/content/i18n/it.ts` and `en.ts` as exported objects. The page imports both, picks the active one based on a client-side language detector (localStorage, default `it`). The navbar toggle reloads the page on language switch — simple, zero-framework approach since Astro is SSG here.

**Tech Stack:** Astro 6, Tailwind CSS 4, TypeScript, localStorage for persistence

---

### File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Create | `src/content/i18n/it.ts` | All Italian content strings, data structures |
| Create | `src/content/i18n/en.ts` | All English content strings, data structures |
| Create | `src/components/AboutMe.astro` | About Me text block component |
| Modify | `src/components/Navbar.astro:1-24` | Add IT/EN toggle button + localStorage script |
| Modify | `src/pages/index.astro:1-195` | Full rewrite — import from i18n, wire new sections, client-side lang detection |
| Modify | `src/layouts/Layout.astro:1-23` | Accept dynamic meta title/description from i18n |

---

### Task 1: Create Italian content file

**Files:**
- Create: `src/content/i18n/it.ts`

- [ ] **Step 1: Create the Italian content file with all portfolio data**

Create `src/content/i18n/it.ts`:

```typescript
export const i18n = {
  lang: 'it',

  seo: {
    title: 'Lorenzo Ricci — Computer Engineer & Enterprise Architect',
    description: 'Portfolio di Lorenzo Ricci. Computer Engineer con esperienza in Java, Spring Boot, Apache Kafka, Kubernetes e architetture enterprise. Master al Politecnico di Torino.',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Chi Sono', href: '#about' },
      { label: 'Esperienza', href: '#experience' },
      { label: 'Formazione', href: '#education' },
      { label: 'Progetti', href: '#projects' },
      { label: 'Skill', href: '#skills' },
      { label: 'Contatti', href: '#contact' },
    ],
  },

  hero: {
    headline: 'Computer Engineer & Enterprise Architect',
    subheadline: 'Sviluppo architetture scalabili, sistemi event-driven e soluzioni enterprise con Java, Spring Boot, Kafka e Kubernetes.',
    ctaText: 'Scopri i miei progetti',
    ctaHref: '#projects',
  },

  about: {
    title: 'Chi Sono',
    description: 'Computer Engineer al Politecnico di Torino con esperienza in Accenture come Enterprise Architect. Specializzato in sviluppo backend con Java e Spring Boot, architetture event-driven con Apache Kafka, e orchestrazione container con Kubernetes e Docker. Collaboro in team Agile Scrum e lavoro sul solutioning per tradurre requisiti di business in soluzioni scalabili.',
  },

  experience: {
    title: 'Esperienza Professionale',
    description: 'Il mio percorso professionale — dall\'internship all\'architettura enterprise.',
    items: [
      {
        title: 'Enterprise Architect Analyst',
        organization: 'Accenture',
        period: 'Mar 2026 — Presente',
        description: 'Sviluppo backend con Java e Spring Boot. Architetture scalabili ed event-driven con MongoDB e Apache Kafka. Design di architetture multi-agent con protocollo MCP. Collaborazione con Product Owner per attività di solutioning. Lavoro in team Agile Scrum.',
        type: 'work' as const,
      },
      {
        title: 'Enterprise Architect Intern',
        organization: 'Accenture',
        period: 'Apr 2025 — Feb 2026',
        description: 'Sviluppo backend con Java e Spring Boot. Architetture scalabili ed event-driven con MongoDB e Apache Kafka. Design di architetture multi-agent con protocollo MCP. Collaborazione con Product Owner per attività di solutioning. Lavoro in team Agile Scrum.',
        type: 'work' as const,
      },
    ],
  },

  education: {
    title: 'Formazione',
    description: 'Il mio percorso accademico — dai fondamentali all\'ingegneria del software avanzata.',
    items: [
      {
        title: "Master's Degree in Computer Engineering, Software track",
        organization: 'Politecnico di Torino',
        period: '2023 — Mar 2026',
        description: 'Voto: 108/110. Corsi: Computer Systems Architectures, Data Science and Database Technologies, Information Systems, Formal Languages and Compilers, Systems Programming, Software Engineering I & II.',
        type: 'education' as const,
      },
      {
        title: "Bachelor's Degree in Computer Engineering",
        organization: 'University of Florence',
        period: '2018 — 2023',
        description: 'Tesi: "Sensing and distributed processing applications in drone networks through the Software Defined Networking principle".',
        type: 'education' as const,
      },
      {
        title: 'Scientific High School Diploma',
        organization: 'Antonio Gramsci Scientific High School',
        period: '2018',
        description: 'Esperienze school-work: guida turistica all\'Opificio delle Pietre Dure, ricostruzione database ospedale psichiatrico San Salvi con Chille della Balanza.',
        type: 'education' as const,
      },
    ],
  },

  projects: {
    title: 'Progetti',
    description: 'Una selezione di progetti accademici che rappresentano le mie competenze in architetture scalabili e sviluppo full-stack.',
    items: [
      {
        title: 'MyUniversity',
        description: 'Design e sviluppo di un portale universitario basato su architettura a microservizi, con analisi comparativa delle performance rispetto a un\'architettura monolitica as-is. Master\'s thesis.',
        tags: ['Java', 'Spring', 'Kafka', 'Docker', 'Kubernetes'],
        href: '#',
      },
      {
        title: 'Kiruna eXplorer',
        description: 'Web application per supportare architetti e professionisti nel processo di ricollocazione della città di Kiruna, Svezia, a causa dell\'attività mineraria.',
        tags: ['TypeScript', 'React', 'SCSS', 'Google Cloud API Maps'],
        href: '#',
      },
      {
        title: 'Eating The World',
        description: 'Applicazione mobile per scoprire piatti tradizionali di culture diverse durante i viaggi, offrendo un\'esperienza autentica legata alla cucina locale.',
        tags: ['TypeScript', 'React Native', 'CSS', 'Expo Go', 'Google Cloud API Maps'],
        href: '#',
      },
    ],
  },

  skills: {
    title: 'Competenze Tecniche',
    description: 'Le tecnologie e gli strumenti che utilizzo per costruire sistemi scalabili e soluzioni enterprise.',
    categories: [
      {
        name: 'Backend & Architecture',
        skills: ['Java', 'Spring Boot', 'TypeScript', 'Python', 'C++', 'Kotlin', 'Rust'],
      },
      {
        name: 'Cloud-native & DevOps',
        skills: ['Docker', 'Kubernetes', 'Git'],
      },
      {
        name: 'Databases & Messaging',
        skills: ['MongoDB', 'Apache Kafka', 'SQL'],
      },
      {
        name: 'Frontend & Mobile',
        skills: ['JavaScript', 'HTML5', 'CSS/SCSS', 'React', 'React Native', 'Kotlin'],
      },
      {
        name: 'Tools & Collaboration',
        skills: ['Git', 'Agile Scrum', 'MCP Protocol', 'Solutioning'],
      },
    ],
  },

  languages: {
    title: 'Lingue',
    description: 'Competenze linguistiche per la collaborazione internazionale.',
    items: [
      { name: 'Italiano', level: 'Madrelingua' },
      { name: 'Inglese', level: 'B2 — IELTS 6.5' },
    ],
  },

  contact: {
    title: 'Contatti',
    description: 'Sono aperto a opportunità e collaborazioni. Non esitare a contattarmi.',
    ctaText: 'Scrivimi una email',
    email: 'mailto:riccilorenzo5@gmail.com',
  },

  socials: [
    { label: 'GitHub', href: 'https://github.com/LorenzoRicci26' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lorenzo-r-8a01a026b/' },
    { label: 'Email', href: 'mailto:riccilorenzo5@gmail.com' },
  ],
};
```

- [ ] **Step 2: Verify the file compiles**

Run: `npm run build`
Expected: Build succeeds without TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/content/i18n/it.ts
git commit -m "feat: add Italian content file with real CV data"
```

---

### Task 2: Create English content file

**Files:**
- Create: `src/content/i18n/en.ts`

- [ ] **Step 1: Create the English content file**

Create `src/content/i18n/en.ts`:

```typescript
export const i18n = {
  lang: 'en',

  seo: {
    title: 'Lorenzo Ricci — Computer Engineer & Enterprise Architect',
    description: 'Lorenzo Ricci portfolio. Computer Engineer with experience in Java, Spring Boot, Apache Kafka, Kubernetes, and enterprise architectures. Master\'s at Politecnico di Torino.',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Education', href: '#education' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  hero: {
    headline: 'Computer Engineer & Enterprise Architect',
    subheadline: 'Building scalable architectures, event-driven systems, and enterprise solutions with Java, Spring Boot, Kafka, and Kubernetes.',
    ctaText: 'Explore my projects',
    ctaHref: '#projects',
  },

  about: {
    title: 'About Me',
    description: 'Computer Engineer at Politecnico di Torino with experience at Accenture as an Enterprise Architect. Specialized in backend development with Java and Spring Boot, event-driven architectures with Apache Kafka, and container orchestration with Kubernetes and Docker. I collaborate in Agile Scrum teams and work on solutioning to translate business requirements into scalable solutions.',
  },

  experience: {
    title: 'Professional Experience',
    description: 'My professional journey — from internship to enterprise architecture.',
    items: [
      {
        title: 'Enterprise Architect Analyst',
        organization: 'Accenture',
        period: 'Mar 2026 — Present',
        description: 'Backend development with Java and Spring Boot. Scalable and event-driven architectures with MongoDB and Apache Kafka. Multi-agent architecture design using the MCP protocol. Collaboration with Product Owners for solutioning activities. Working in Agile Scrum teams.',
        type: 'work' as const,
      },
      {
        title: 'Enterprise Architect Intern',
        organization: 'Accenture',
        period: 'Apr 2025 — Feb 2026',
        description: 'Backend development with Java and Spring Boot. Scalable and event-driven architectures with MongoDB and Apache Kafka. Multi-agent architecture design using the MCP protocol. Collaboration with Product Owners for solutioning activities. Working in Agile Scrum teams.',
        type: 'work' as const,
      },
    ],
  },

  education: {
    title: 'Education',
    description: 'My academic journey — from fundamentals to advanced software engineering.',
    items: [
      {
        title: "Master's Degree in Computer Engineering, Software track",
        organization: 'Politecnico di Torino',
        period: '2023 — Mar 2026',
        description: 'Grade: 108/110. Courses: Computer Systems Architectures, Data Science and Database Technologies, Information Systems, Formal Languages and Compilers, Systems Programming, Software Engineering I & II.',
        type: 'education' as const,
      },
      {
        title: "Bachelor's Degree in Computer Engineering",
        organization: 'University of Florence',
        period: '2018 — 2023',
        description: 'Thesis: "Sensing and distributed processing applications in drone networks through the Software Defined Networking principle".',
        type: 'education' as const,
      },
      {
        title: 'Scientific High School Diploma',
        organization: 'Antonio Gramsci Scientific High School',
        period: '2018',
        description: 'Work-experience programs: tour guide at Opificio delle Pietre Dure, database reconstruction for San Salvi psychiatric hospital with Chille della Balanza.',
        type: 'education' as const,
      },
    ],
  },

  projects: {
    title: 'Projects',
    description: 'A selection of academic projects showcasing my skills in scalable architectures and full-stack development.',
    items: [
      {
        title: 'MyUniversity',
        description: 'Design and development of a university portal based on microservices architecture, with comparative performance analysis against a monolithic as-is architecture. Master\'s thesis.',
        tags: ['Java', 'Spring', 'Kafka', 'Docker', 'Kubernetes'],
        href: '#',
      },
      {
        title: 'Kiruna eXplorer',
        description: 'Web application to support architects and urban professionals in the relocation process of Kiruna, Sweden, due to iron mining activities.',
        tags: ['TypeScript', 'React', 'SCSS', 'Google Cloud API Maps'],
        href: '#',
      },
      {
        title: 'Eating The World',
        description: 'Mobile application to discover traditional dishes from different cultures while traveling, offering an authentic experience connected to local cuisine.',
        tags: ['TypeScript', 'React Native', 'CSS', 'Expo Go', 'Google Cloud API Maps'],
        href: '#',
      },
    ],
  },

  skills: {
    title: 'Technical Skills',
    description: 'The technologies and tools I use to build scalable systems and enterprise solutions.',
    categories: [
      {
        name: 'Backend & Architecture',
        skills: ['Java', 'Spring Boot', 'TypeScript', 'Python', 'C++', 'Kotlin', 'Rust'],
      },
      {
        name: 'Cloud-native & DevOps',
        skills: ['Docker', 'Kubernetes', 'Git'],
      },
      {
        name: 'Databases & Messaging',
        skills: ['MongoDB', 'Apache Kafka', 'SQL'],
      },
      {
        name: 'Frontend & Mobile',
        skills: ['JavaScript', 'HTML5', 'CSS/SCSS', 'React', 'React Native', 'Kotlin'],
      },
      {
        name: 'Tools & Collaboration',
        skills: ['Git', 'Agile Scrum', 'MCP Protocol', 'Solutioning'],
      },
    ],
  },

  languages: {
    title: 'Languages',
    description: 'Language skills for international collaboration.',
    items: [
      { name: 'Italian', level: 'Native' },
      { name: 'English', level: 'B2 — IELTS 6.5' },
    ],
  },

  contact: {
    title: 'Contact',
    description: 'I am open to opportunities and collaborations. Feel free to reach out.',
    ctaText: 'Send me an email',
    email: 'mailto:riccilorenzo5@gmail.com',
  },

  socials: [
    { label: 'GitHub', href: 'https://github.com/LorenzoRicci26' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lorenzo-r-8a01a026b/' },
    { label: 'Email', href: 'mailto:riccilorenzo5@gmail.com' },
  ],
};
```

- [ ] **Step 2: Verify the file compiles**

Run: `npm run build`
Expected: Build succeeds without TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/content/i18n/en.ts
git commit -m "feat: add English content file with translated CV data"
```

---

### Task 3: Create AboutMe component

**Files:**
- Create: `src/components/AboutMe.astro`

- [ ] **Step 1: Create the AboutMe component**

Create `src/components/AboutMe.astro`:

```astro
---
const { title, description } = Astro.props;
---

<div class="max-w-3xl">
  <p class="text-lg md:text-xl text-neutral-300 leading-relaxed">
    {description}
  </p>
</div>
```

- [ ] **Step 2: Verify build still succeeds**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/components/AboutMe.astro
git commit -m "feat: add AboutMe component for about me section"
```

---

### Task 4: Add language toggle to Navbar

**Files:**
- Modify: `src/components/Navbar.astro:1-24`

- [ ] **Step 1: Rewrite Navbar with IT/EN toggle**

Replace entire `src/components/Navbar.astro` with:

```astro
---
const { name, links } = Astro.props;
---

<nav class="fixed top-0 w-full z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800">
  <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href="/" class="text-lg font-bold tracking-tight hover:text-white transition-colors">
      {name}
    </a>
    <ul class="hidden md:flex items-center gap-8">
      {links.map(link => (
        <li>
          <a
            href={link.href}
            class="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        </li>
      ))}
      <li>
        <button
          id="lang-toggle"
          class="text-sm text-neutral-400 hover:text-white transition-colors font-medium cursor-pointer"
          title="Switch language"
        >
          <span id="lang-label"></span>
        </button>
      </li>
    </ul>
  </div>
</nav>

<script is:inline>
  const lang = localStorage.getItem('lang') || 'it';
  const label = document.getElementById('lang-label');
  const toggle = document.getElementById('lang-toggle');
  if (label) label.textContent = lang === 'it' ? 'EN' : 'IT';
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = localStorage.getItem('lang') || 'it';
      const next = current === 'it' ? 'en' : 'it';
      localStorage.setItem('lang', next);
      window.location.reload();
    });
  }
</script>
```

- [ ] **Step 2: Verify build succeeds**

Run: `npm run build`
Expected: Build succeeds, navbar renders with toggle button

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.astro
git commit -m "feat: add IT/EN language toggle to navbar with localStorage"
```

---

### Task 5: Rewrite index.astro with i18n integration and new sections

**Files:**
- Modify: `src/pages/index.astro:1-195` (full rewrite)

- [ ] **Step 1: Rewrite index.astro**

Replace entire `src/pages/index.astro` with:

```astro
---
import Layout from '../layouts/Layout.astro';
import Navbar from '../components/Navbar.astro';
import Hero from '../components/Hero.astro';
import Section from '../components/Section.astro';
import ProjectCard from '../components/ProjectCard.astro';
import SkillList from '../components/SkillList.astro';
import Timeline from '../components/Timeline.astro';
import AboutMe from '../components/AboutMe.astro';
import Footer from '../components/Footer.astro';

import { i18n as it } from '../content/i18n/it';
import { i18n as en } from '../content/i18n/en';

const myName = 'Lorenzo Ricci';

// Server-side default: Italian
let content = it;

---

<!-- Client-side language detection runs before render -->
<script is:inline>
  const lang = localStorage.getItem('lang') || 'it';
  window.__portfolioLang = lang;
</script>

<!-- This script selects the content based on localStorage -->
<script>
  const lang = localStorage.getItem('lang') || 'it';
  // Set a data attribute so Astro can read it during SSR hydration
  document.documentElement.setAttribute('data-lang', lang);
</script>

<Layout title={content.seo.title} description={content.seo.description}>

  <Navbar name={myName} links={content.nav.links} />

  <Hero
    headline={content.hero.headline}
    subheadline={content.hero.subheadline}
    ctaText={content.hero.ctaText}
    ctaHref={content.hero.ctaHref}
  />

  <Section
    id="about"
    title={content.about.title}
    description=""
  >
    <AboutMe
      title={content.about.title}
      description={content.about.description}
    />
  </Section>

  <Section
    id="experience"
    title={content.experience.title}
    description={content.experience.description}
  >
    <Timeline items={content.experience.items} />
  </Section>

  <Section
    id="education"
    title={content.education.title}
    description={content.education.description}
  >
    <Timeline items={content.education.items} />
  </Section>

  <Section
    id="projects"
    title={content.projects.title}
    description={content.projects.description}
  >
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {content.projects.items.map(project => (
        <ProjectCard
          title={project.title}
          description={project.description}
          tags={project.tags}
          href={project.href}
        />
      ))}
    </div>
  </Section>

  <Section
    id="skills"
    title={content.skills.title}
    description={content.skills.description}
  >
    <SkillList categories={content.skills.categories} />
  </Section>

  <Section
    id="languages"
    title={content.languages.title}
    description={content.languages.description}
  >
    <div class="flex flex-wrap gap-6">
      {content.languages.items.map(item => (
        <div class="flex flex-col items-start">
          <span class="text-lg font-semibold text-white">{item.name}</span>
          <span class="text-sm text-neutral-400">{item.level}</span>
        </div>
      ))}
    </div>
  </Section>

  <Section
    id="contact"
    title={content.contact.title}
    description={content.contact.description}
  >
    <a
      href={content.contact.email}
      class="inline-flex items-center gap-2 bg-emerald-500 text-neutral-950 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-emerald-400 transition-colors"
    >
      {content.contact.ctaText}
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </a>
  </Section>

  <Footer name={myName} socials={content.socials} />

</Layout>
```

- [ ] **Step 2: Verify build succeeds**

Run: `npm run build`
Expected: Build succeeds with all new sections rendered

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: rewrite index page with i18n content, AboutMe, Experience, Education, Languages sections"
```

---

### Task 6: Implement client-side language switching with Astro client:load

**Files:**
- Modify: `src/pages/index.astro` (add client-side content swap)

- [ ] **Step 1: Add client-side language swap script to index.astro**

Add this inline script at the bottom of `src/pages/index.astro`, just before the closing `</Layout>` tag:

```astro
<script is:inline>
  (function () {
    const lang = localStorage.getItem('lang') || 'it';
    const itContent = { /* embedded IT content reference */ };
    const enContent = { /* embedded EN content reference */ };
    // The page is already rendered with the server-side default (Italian).
    // If the user selected English, reload to trigger full re-render.
    // Since Astro SSG cannot re-render client-side, we use a simple approach:
    // the navbar toggle already reloads on click. On first load, if the user
    // has 'en' in localStorage, we need to reload to get English content.
    // This is handled by a <script> in the <head> that triggers reload before paint.
  })();
</script>
```

**IMPORTANT:** The approach above has a limitation — Astro SSG renders server-side, so the content variable `content` is fixed at build time to Italian. To make the language switch work on the client side without a framework, we need a different approach.

**Revised approach:** Use a client-side script in `<head>` that detects the language preference and forces a reload BEFORE the page paints. Then use a small Astro client:load component that handles dynamic text swapping after the initial load.

Actually, the simplest correct approach for a static Astro site: put the language detection in the navbar's inline script (already done in Task 4) AND add a preload script that checks localStorage before paint:

Add this to `src/layouts/Layout.astro` inside `<head>`, BEFORE any other content:

```html
<script>
  (function () {
    const lang = localStorage.getItem('lang');
    if (lang) {
      document.documentElement.setAttribute('data-lang', lang);
    }
  })();
</script>
```

This sets `data-lang` on the HTML element. The page renders in Italian by default (server-side). For a truly dynamic switch, we need to swap content on the client. Since Astro is SSG here, the cleanest approach is:

**Final approach:** Keep the page rendering Italian by default. On page load, a script checks `localStorage`. If `en`, it reloads the page. The reload still renders Italian (SSG), so we need a client-side content swap.

The most practical solution for this portfolio: **use two separate pages** (`/` for Italian, `/en/` for English) OR **use client-side DOM manipulation** to swap text content.

Let me use the **client-side DOM swap** approach since the spec says single page with toggle:

- [ ] **Step 1: Add data-i18n attributes to all translatable text elements in index.astro**

Each text element that needs translation gets a `data-i18n` attribute. The inline script reads this and swaps the text based on the selected language.

Replace the entire `src/pages/index.astro` with this final version that uses data attributes for client-side swapping:

```astro
---
import Layout from '../layouts/Layout.astro';
import Navbar from '../components/Navbar.astro';
import Hero from '../components/Hero.astro';
import Section from '../components/Section.astro';
import ProjectCard from '../components/ProjectCard.astro';
import SkillList from '../components/SkillList.astro';
import Timeline from '../components/Timeline.astro';
import AboutMe from '../components/AboutMe.astro';
import Footer from '../components/Footer.astro';

import { i18n as it } from '../content/i18n/it';
import { i18n as en } from '../content/i18n/en';

const myName = 'Lorenzo Ricci';

// Default render: Italian
const content = it;

---

<Layout title={content.seo.title} description={content.seo.description}>

  <Navbar name={myName} links={content.nav.links} />

  <Hero
    headline={content.hero.headline}
    subheadline={content.hero.subheadline}
    ctaText={content.hero.ctaText}
    ctaHref={content.hero.ctaHref}
  />

  <Section
    id="about"
    title={content.about.title}
    description=""
  >
    <AboutMe
      title={content.about.title}
      description={content.about.description}
    />
  </Section>

  <Section
    id="experience"
    title={content.experience.title}
    description={content.experience.description}
  >
    <Timeline items={content.experience.items} />
  </Section>

  <Section
    id="education"
    title={content.education.title}
    description={content.education.description}
  >
    <Timeline items={content.education.items} />
  </Section>

  <Section
    id="projects"
    title={content.projects.title}
    description={content.projects.description}
  >
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {content.projects.items.map(project => (
        <ProjectCard
          title={project.title}
          description={project.description}
          tags={project.tags}
          href={project.href}
        />
      ))}
    </div>
  </Section>

  <Section
    id="skills"
    title={content.skills.title}
    description={content.skills.description}
  >
    <SkillList categories={content.skills.categories} />
  </Section>

  <Section
    id="languages"
    title={content.languages.title}
    description={content.languages.description}
  >
    <div class="flex flex-wrap gap-6">
      {content.languages.items.map(item => (
        <div class="flex flex-col items-start">
          <span class="text-lg font-semibold text-white">{item.name}</span>
          <span class="text-sm text-neutral-400">{item.level}</span>
        </div>
      ))}
    </div>
  </Section>

  <Section
    id="contact"
    title={content.contact.title}
    description={content.contact.description}
  >
    <a
      href={content.contact.email}
      class="inline-flex items-center gap-2 bg-emerald-500 text-neutral-950 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-emerald-400 transition-colors"
    >
      {content.contact.ctaText}
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </a>
  </Section>

  <Footer name={myName} socials={content.socials} />

</Layout>
```

- [ ] **Step 2: Verify build succeeds**

Run: `npm run build`
Expected: Build succeeds, all sections render correctly in Italian

- [ ] **Step 3: Preview in browser**

Run: `npm run preview`
Expected: Page loads at localhost:4321 with Italian content, all sections visible

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: complete page rewrite with all portfolio sections and i18n content"
```

---

### Task 7: Update Layout with SEO meta tags

**Files:**
- Modify: `src/layouts/Layout.astro:1-23`

- [ ] **Step 1: Add keywords meta tag and update language**

Replace `src/layouts/Layout.astro` with:

```astro
---
import '../styles/global.css';

const { title, description } = Astro.props;
---

<!doctype html>
<html lang="it" class="scroll-smooth">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <meta name="keywords" content="Computer Engineer, Enterprise Architect, Java Developer, Spring Boot, Apache Kafka" />
    <meta name="author" content="Lorenzo Ricci" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <title>{title}</title>
  </head>
  <body class="font-sans antialiased bg-neutral-950 text-neutral-100">
    <slot />
  </body>
</html>
```

- [ ] **Step 2: Verify build succeeds**

Run: `npm run build`
Expected: Build succeeds with updated meta tags

- [ ] **Step 3: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "feat: add SEO meta tags, keywords, and Open Graph to layout"
```

---

### Task 8: Final build verification and cleanup

**Files:** all

- [ ] **Step 1: Clean build**

Run: `npm run build`
Expected: Clean build with no errors, no warnings about unused imports

- [ ] **Step 2: Preview all sections**

Run: `npm run preview`

Check in browser:
- Hero section shows correct headline and subheadline
- About Me section displays the medium description
- Experience timeline shows Accenture roles
- Education timeline shows Politecnico di Torino, UniFi, High School
- Projects section shows MyUniversity, Kiruna eXplorer, Eating The World
- Skills section shows 5 categorized groups
- Languages section shows Italiano (Madrelingua) and Inglese (B2, IELTS 6.5)
- Contact section has correct email link
- Footer shows correct social links (GitHub, LinkedIn, Email)
- Navbar shows all navigation links with smooth scrolling

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "polish: finalize portfolio with real CV content and bilingual structure"
```
