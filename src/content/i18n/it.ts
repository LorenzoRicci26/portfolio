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
    badge: 'Benvenuto',
  },

  about: {
    title: 'Chi Sono',
    description: 'Computer Engineer al Politecnico di Torino con esperienza in Accenture come Enterprise Architect. Specializzato in sviluppo backend con Java e Spring Boot, architetture event-driven con Apache Kafka, e orchestrazione container con Kubernetes e Docker. Collaboro in team Agile Scrum e lavoro sul solutioning per tradurre requisiti di business in soluzioni scalabili.',
  },

  experience: {
    title: 'Esperienza Professionale',
    description: "Il mio percorso professionale — dall'internship all'architettura enterprise.",
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
    description: "Il mio percorso accademico — dai fondamentali all'ingegneria del software avanzata.",
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
        description: "Esperienze school-work: guida turistica all'Opificio delle Pietre Dure, ricostruzione database ospedale psichiatrico San Salvi con Chille della Balanza.",
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
        description: "Design e sviluppo di un portale universitario basato su architettura a microservizi, con analisi comparativa delle performance rispetto a un'architettura monolitica as-is. Master's thesis.",
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

  footer: {
    copyright: 'Tutti i diritti riservati.',
  },

  socials: [
    { label: 'GitHub', href: 'https://github.com/LorenzoRicci26' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lorenzo-r-8a01a026b/' },
    { label: 'Email', href: 'mailto:riccilorenzo5@gmail.com' },
  ],
};
