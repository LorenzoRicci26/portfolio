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
    badge: 'Welcome',
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
        description: "Design and development of a university portal based on microservices architecture, with comparative performance analysis against a monolithic as-is architecture. Master's thesis.",
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

  footer: {
    copyright: 'All rights reserved.',
  },

  socials: [
    { label: 'GitHub', href: 'https://github.com/LorenzoRicci26' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lorenzo-r-8a01a026b/' },
    { label: 'Email', href: 'mailto:riccilorenzo5@gmail.com' },
  ],
};
