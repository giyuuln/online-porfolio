export const profile = {
  name: 'Muhammad Ammar Hafizin',
  shortName: 'Ammar Hafizin',
  role: 'Full-Stack & Android Developer',
  tagline:
    'Final-year IT student at UTeM building production-grade web and mobile apps with React, Flask, Kotlin and AI.',
  location: 'Bukit Mertajam, Pulau Pinang, Malaysia',
  email: 'ammarhafizin7@gmail.com',
  phone: '+60 11-2431 4624',
  github: 'https://github.com/giyuuln',
  linkedin: 'https://linkedin.com/in/ammar-hafizin',
  resumeUrl: 'Ammar_Hafizin_Resume_v2.pdf',
}

export const about = [
  "I'm a final-year Bachelor Of Computer Science (Software Development) with Honours student at Universiti Teknikal Malaysia Melaka (UTeM), and a Dean's Award recipient from my Diploma years.",
  "I work comfortably across the full development cycle — from database design and REST API development to AI/LLM integration and testing. I've shipped full-stack web apps, an Android marketplace, and a system for a real petrol-station client.",
  "I'm looking for a software engineering or IT internship where I can apply these skills to real production work and keep levelling up alongside a strong team.",
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'Kotlin', 'PHP', 'SQL', 'HTML/CSS'] },
  { group: 'Frameworks', items: ['React', 'Flask', 'Jetpack Compose'] },
  { group: 'Databases', items: ['Firebase Firestore', 'MySQL'] },
  { group: 'AI & APIs', items: ['Google Gemini API', 'REST API design'] },
  { group: 'Tools', items: ['Git', 'Android Studio', 'VS Code', 'Figma'] },
  { group: 'Practices', items: ['Agile SDLC', 'ERD & Normalization'] },
]

/* ───────────────────────────── Tech registry ─────────────────────────────
   Projects and the stack section are linked by ID, never by string matching:
   `skills` says 'React' while projects[0].stack says 'React 19', and
   'Firebase Firestore' vs 'Firebase'. Matching those as text fails silently
   and renders a chip that highlights nothing. With a union, a typo is a
   compile error.

   `as const` (not `enum`) — tsconfig sets erasableSyntaxOnly.            */

export const TECH_IDS = [
  // client
  'react', 'ts', 'tailwind', 'js', 'html-css', 'kotlin', 'compose',
  // server
  'python', 'flask', 'php', 'rest',
  // data
  'firebase', 'mysql', 'sql',
  // ai
  'gemini',
  // tools
  'git', 'gh-actions', 'vite', 'android-studio', 'vscode', 'figma', 'pytest',
  // practice
  'erd', 'agile',
] as const

export type TechId = (typeof TECH_IDS)[number]

export type Layer = 'client' | 'server' | 'data' | 'ai' | 'tools' | 'practice'

export type Tech = {
  id: TechId
  label: string
  layer: Layer
  /** Currently in daily use — reflects the 2025–2026 final-year project. */
  daily?: boolean
  /** Evidenced by this repository rather than by the skills list. */
  viaRepo?: boolean
}

export const layers: { id: Layer; label: string; note: string }[] = [
  { id: 'client', label: 'Client', note: 'What the user touches' },
  { id: 'server', label: 'Server & APIs', note: 'Request handling and contracts' },
  { id: 'data', label: 'Data', note: 'Persistence and schema' },
  { id: 'ai', label: 'AI', note: 'Model integration' },
  { id: 'tools', label: 'Tooling', note: 'Build, ship and design' },
  { id: 'practice', label: 'Practice', note: 'How the work gets done' },
]

export const tech: Tech[] = [
  { id: 'react', label: 'React', layer: 'client', daily: true },
  { id: 'ts', label: 'TypeScript', layer: 'client', viaRepo: true },
  { id: 'tailwind', label: 'Tailwind CSS', layer: 'client', viaRepo: true },
  { id: 'js', label: 'JavaScript', layer: 'client' },
  { id: 'html-css', label: 'HTML/CSS', layer: 'client' },
  { id: 'kotlin', label: 'Kotlin', layer: 'client' },
  { id: 'compose', label: 'Jetpack Compose', layer: 'client' },

  { id: 'python', label: 'Python', layer: 'server' },
  { id: 'flask', label: 'Flask', layer: 'server', daily: true },
  { id: 'php', label: 'PHP', layer: 'server' },
  { id: 'rest', label: 'REST API design', layer: 'server' },

  { id: 'firebase', label: 'Firebase', layer: 'data', daily: true },
  { id: 'mysql', label: 'MySQL', layer: 'data' },
  { id: 'sql', label: 'SQL', layer: 'data' },

  { id: 'gemini', label: 'Google Gemini API', layer: 'ai', daily: true },

  { id: 'git', label: 'Git', layer: 'tools', daily: true },
  { id: 'gh-actions', label: 'GitHub Actions', layer: 'tools', viaRepo: true },
  { id: 'vite', label: 'Vite', layer: 'tools', viaRepo: true },
  { id: 'android-studio', label: 'Android Studio', layer: 'tools' },
  { id: 'vscode', label: 'VS Code', layer: 'tools', daily: true },
  { id: 'figma', label: 'Figma', layer: 'tools' },
  { id: 'pytest', label: 'pytest', layer: 'tools' },

  { id: 'erd', label: 'ERD & Normalization', layer: 'practice' },
  { id: 'agile', label: 'Agile SDLC', layer: 'practice' },
]

export type Project = {
  title: string
  subtitle: string
  period: string
  stack: string[]
  /** Compile-checked link to the tech registry, used for cross-highlighting. */
  tech: TechId[]
  description: string
  highlights: string[]
  featured?: boolean
  repo?: string
  demo?: string
  /** Honest provenance label. Only OmniTrakk is actually deployed. */
  kind: 'live' | 'source' | 'client' | 'coursework'
  /**
   * How the work was staffed. Only set where the existing copy actually says
   * so ("Solo-built" in a subtitle, "I led Module 3" in a highlight) — left
   * undefined rather than guessed.
   */
  role?: string
}

/** Honest status wording per project kind. Coursework is never "production". */
export const KIND_LABEL: Record<Project['kind'], string> = {
  live: 'Live deployment',
  source: 'Source available',
  client: 'Client project',
  coursework: 'Coursework',
}

export const projects: Project[] = [
  {
    title: 'OmniTrakk',
    subtitle: 'Cross-Media Entertainment Tracker · Final Year Project',
    period: '2025 – 2026',
    stack: ['React 19', 'Flask', 'Firebase Firestore', 'Google Gemini API'],
    tech: ['react', 'flask', 'firebase', 'gemini'],
    kind: 'live',
    role: 'Final year project',
    description:
      'A full-stack web app that lets users track movies, music and games in one unified dashboard, built on a clean three-tier architecture.',
    highlights: [
      'React 19 frontend with a Flask REST API backed by Firebase Firestore',
      'Integrated Google Gemini for an AI assistant — dual model slots with a daily usage cap for cost control',
      'Notification system and a tokenised parental-monitoring dashboard for account oversight',
    ],
    featured: true,
    demo: 'https://omnitrakk.amkaz.dev',
  },
  {
    title: 'Cat Adoption & Care System',
    subtitle: 'Diploma Final Year Project · Solo-built',
    period: '2024 – 2025',
    stack: ['PHP', 'MySQL', 'HTML/CSS', 'Figma'],
    tech: ['php', 'mysql', 'html-css', 'figma'],
    kind: 'source',
    role: 'Solo-built',
    description:
      'A role-based web platform (admin, adopter, cat owner) that digitises the cat adoption, return, and reporting process end to end.',
    highlights: [
      'Seven modules: auth, cat search & listing, adoption-request approval workflow, history, profiles, and monthly PDF reports',
      'Complete system documentation — context & data-flow diagrams, ERD with data dictionary, module specs',
      'Validated every module with structured test cases covering valid, invalid and edge-case inputs',
    ],
    featured: true,
    repo: 'https://github.com/giyuuln/project-diploma',
  },
  {
    title: 'AIRS',
    subtitle: 'Automated Inspection & Reporting System · Client Project (iPetro)',
    period: '2025',
    stack: ['Flask', 'MySQL', 'pytest'],
    tech: ['flask', 'mysql', 'pytest'],
    kind: 'client',
    role: 'Team project — led Module 3',
    description:
      'A team-built inspection-automation system for a real petrol-station client. I led Module 3 — Inspection Records & Photo Management.',
    highlights: [
      'Built the Flask/MySQL backend for record handling and photo uploads',
      'Wrote manual testing to keep the module reliable',
    ],
    repo: 'https://github.com/ipanwho/AIRS',
  },
  {
    title: 'CampusCycle',
    subtitle: 'Android Campus Marketplace',
    period: '2024',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    tech: ['kotlin', 'compose', 'firebase'],
    kind: 'coursework',
    description:
      'A native Android campus marketplace app, one of several Android projects built to explore modern mobile development.',
    highlights: [
      'Built with Kotlin and Jetpack Compose for a modern declarative UI',
      'Firebase for authentication and realtime data',
    ],
    repo: 'https://github.com/faheemezani/utem-ftmk-bitp3453-gingerbread-nougat',
  },
]

export type Experience = {
  role: string
  org: string
  period: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'Shopee Affiliate Content Creator',
    org: 'Self-employed · Threads @_ammaq.k',
    period: '2024 – Present',
    points: [
      'Built and grew a product-review presence from scratch with a documented content strategy aimed at students and budget buyers.',
      'Tracked reach and click-through metrics weekly and iterated the content approach based on performance data.',
    ],
  },
  {
    role: 'Facilitator — SULAM Community Program',
    org: 'UTeM',
    period: '2022',
    points: [
      'Taught basic algebra to secondary-school students and coordinated with a team to run the program.',
    ],
  },
]

export const education = [
  {
    school: 'Universiti Teknikal Malaysia Melaka (UTeM)',
    degree: 'Bachelor Of Computer Science (Software Development)  with Honours — Final Year',
    period: 'Expected 2027',
    note: 'Coursework: Software Project Management, Database Design, Mobile/Android Development, Web Programming, Technology Entrepreneurship.',
  },
  {
    school: 'Universiti Teknikal Malaysia Melaka (UTeM)',
    degree: 'Diploma in Computer Science',
    period: '2022 – 2025',
    note: "Dean's Award recipient (Semesters 1–2).",
  },
]
