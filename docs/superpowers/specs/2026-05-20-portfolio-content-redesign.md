# Portfolio Content Redesign — Bilingual (IT/EN)

**Date:** 2026-05-20
**Status:** Approved
**Approach:** B — Separate content files per language, localStorage toggle

## Goal

Replace all mock data in the portfolio with real content from Lorenzo Ricci's CV. Add bilingual support (IT/EN) via a navbar toggle. Introduce new sections: About Me, Languages. Restructure skills into meaningful categories.

## File Structure

```
src/
├── content/
│   └── i18n/
│       ├── it.ts
│       └── en.ts
├── components/
│   ├── AboutMe.astro          (NEW)
│   ├── Footer.astro           (unchanged)
│   ├── Hero.astro             (unchanged)
│   ├── Navbar.astro           (updated — adds IT/EN toggle)
│   ├── ProjectCard.astro      (unchanged)
│   ├── Section.astro          (unchanged)
│   ├── SkillList.astro        (unchanged)
│   └── Timeline.astro         (unchanged)
└── pages/
    └── index.astro            (rewritten — imports from i18n/, uses lang toggle)
```

## Toggle Mechanism

- `localStorage.getItem('lang')` persists selection across visits, default `it`
- Navbar has a small inline script that listens for clicks on the toggle button, flips the lang, saves to localStorage, triggers `window.location.reload()` for full re-render
- `index.astro` reads the language on the client side via a small script that imports the correct i18n file and passes props dynamically
- On server-side render, defaults to Italian

## Content — Italian (`it.ts`)

### Hero
- **Headline:** "Computer Engineer & Enterprise Architect"
- **Subheadline:** "Sviluppo architetture scalabili, sistemi event-driven e soluzioni enterprise con Java, Spring Boot, Kafka e Kubernetes."
- **CTA:** "Scopri i miei progetti"

### About Me — 3 versioni
- **Breve (1 riga):** "Computer Engineer con esperienza in architetture enterprise, backend development e sistemi cloud-native."
- **Media (2-3 righe):** "Computer Engineer al Politecnico di Torino con esperienza in Accenture come Enterprise Architect. Specializzato in sviluppo backend con Java e Spring Boot, architetture event-driven con Apache Kafka, e orchestrazione container con Kubernetes e Docker. Collaboro in team Agile Scrum e lavoro sul solutioning per tradurre requisiti di business in soluzioni scalabili."
- **Completa (4-5 righe):** "Sono un Computer Engineer con focus su software engineering, backend development e architetture enterprise. Al Politecnico di Torino ho completato un Master in Computer Engineering, Software track, con progetti su microservizi, applicazioni web e mobile. In Accenture lavoro come Enterprise Architect, specializzato in sviluppo backend con Java e Spring Boot, architetture event-driven con Apache Kafka e MongoDB, e sistemi multi-agent con protocollo MCP. Collaboro con Product Owner per attività di solutioning e traduziono requisiti di business in soluzioni applicative robuste e scalabili. Il mio obiettivo è costruire sistemi che crescano con le esigenze dell'azienda."

### Professional Experience
- **Enterprise Architect Analyst** — Accenture, Mar 2026 — Presente
- **Enterprise Architect Intern** — Accenture, Apr 2025 — Feb 2026
- Descrizione unificata: "Sviluppo backend con Java e Spring Boot. Architetture scalabili ed event-driven con MongoDB e Apache Kafka. Design di architetture multi-agent con protocollo MCP. Collaborazione con Product Owner per attività di solutioning. Lavoro in team Agile Scrum."

### Education
- **Master's Degree in Computer Engineering, Software track** — Politecnico di Torino, 2023 — Mar 2026, Voto: 108/110
- **Bachelor's Degree in Computer Engineering** — University of Florence, 2018 — 2023
- **Scientific High School Diploma** — Antonio Gramsci Scientific High School, 2018

### Featured Projects

1. **MyUniversity** (Master's Thesis)
   - Tagline: "Portale universitario microservizi vs monolitico"
   - Descrizione: "Design e sviluppo di un portale universitario basato su architettura a microservizi, con analisi comparativa delle performance rispetto a un'architettura monolitica as-is."
   - Tecnologie: Java, Spring, Kafka, Docker, Kubernetes
   - CTA: "Explore on GitHub"

2. **Kiruna eXplorer**
   - Tagline: "Piattaforma digitale per la ricollocazione urbana"
   - Descrizione: "Web application per supportare architetti e professionisti nel processo di ricollocazione della città di Kiruna, Svezia, a causa dell'attività mineraria."
   - Tecnologie: TypeScript, React, SCSS, Google Cloud API Maps
   - CTA: "Explore on GitHub"

3. **Eating The World**
   - Tagline: "Scopri la cucina locale mentre viaggi"
   - Descrizione: "Applicazione mobile per scoprire piatti tradizionali di culture diverse durante i viaggi, offrendo un'esperienza autentica legata alla cucina locale."
   - Tecnologie: TypeScript, React Native, CSS, Expo Go, Google Cloud API Maps
   - CTA: "Explore on GitHub"

### Technical Skills (categorized)

- **Backend & Architecture:** Java, Spring Boot, TypeScript, Python, C++, Kotlin, Rust
- **Cloud-native & DevOps:** Docker, Kubernetes, Git
- **Databases & Messaging:** MongoDB, Apache Kafka, SQL
- **Frontend & Mobile:** JavaScript, HTML5, CSS/SCSS, React, React Native, Kotlin
- **Tools & Collaboration:** Git, Agile Scrum, MCP Protocol, Solutioning

### Languages
- Italiano — Madrelingua
- Inglese — B2, IELTS 6.5

### Contact
- Email: riccilorenzo5@gmail.com
- Telefono: +39 3409570271
- LinkedIn: Lorenzo Ricci
- GitHub: LorenzoRicci26

### SEO
- **Meta title:** "Lorenzo Ricci — Computer Engineer & Enterprise Architect"
- **Meta description:** "Portfolio di Lorenzo Ricci. Computer Engineer con esperienza in Java, Spring Boot, Apache Kafka, Kubernetes e architetture enterprise. Master al Politecnico di Torino."
- **Keywords:** Computer Engineer, Enterprise Architect, Java Developer, Spring Boot, Apache Kafka
- **Social bio:** "Computer Engineer @Polito · Enterprise Architect @Accenture · Java, Spring Boot, Kafka, Kubernetes · Building scalable systems"

## Content — English (`en.ts`)

All Italian content translated to professional English. Same structure, same sections. No information added or removed.

## Sections in Page Order

1. **Navbar** — name, nav links, IT/EN toggle
2. **Hero** — headline, subheadline, CTA
3. **About Me** — medium version of about text
4. **Experience** — timeline with work entries (Accenture roles)
5. **Education** — timeline with education entries (Polito, UniFi, High School)
6. **Projects** — 3 project cards (MyUniversity, Kiruna eXplorer, Eating The World)
7. **Skills** — categorized skill list
8. **Languages** — simple inline display
9. **Contact** — email CTA + social links
10. **Footer** — copyright + socials

## Components Requiring Changes

| Component | Change |
|---|---|
| `Navbar.astro` | Add IT/EN toggle button with localStorage persistence |
| `AboutMe.astro` | NEW — simple text block component |
| `index.astro` | Import from i18n files, wire all new sections, add client-side lang detection |
| `Layout.astro` | Update meta title/description from i18n |
| `Footer.astro` | No change needed |
| `Hero.astro` | No change needed |
| `ProjectCard.astro` | No change needed |
| `Section.astro` | No change needed |
| `SkillList.astro` | No change needed |
| `Timeline.astro` | No change needed |
