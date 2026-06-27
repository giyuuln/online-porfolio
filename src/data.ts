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
  resumeUrl: 'Ammar_Hafizin_Resume.docx',
}

export const about = [
  "I'm a final-year Bachelor of Information Technology (Hons) student at Universiti Teknikal Malaysia Melaka (UTeM), and a Dean's Award recipient from my Diploma years.",
  "I work comfortably across the full development cycle — from database design and REST API development to AI/LLM integration and testing. I've shipped full-stack web apps, an Android marketplace, and a system for a real petrol-station client.",
  "I'm looking for a software engineering or IT internship where I can apply these skills to real production work and keep levelling up alongside a strong team.",
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'Kotlin', 'PHP', 'SQL', 'HTML/CSS'] },
  { group: 'Frameworks', items: ['React', 'Flask', 'Jetpack Compose'] },
  { group: 'Databases', items: ['Firebase Firestore', 'MySQL', 'Oracle APEX'] },
  { group: 'AI & APIs', items: ['Google Gemini API', 'REST API design'] },
  { group: 'Tools', items: ['Git', 'Android Studio', 'VS Code', 'DBeaver', 'Figma'] },
  { group: 'Practices', items: ['Agile SDLC', 'ERD & Normalization', 'Unit Testing (pytest)'] },
]

export type Project = {
  title: string
  subtitle: string
  period: string
  stack: string[]
  description: string
  highlights: string[]
  featured?: boolean
  repo?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'OmniTrack',
    subtitle: 'Cross-Media Entertainment Tracker · Final Year Project',
    period: '2025 – 2026',
    stack: ['React 19', 'Flask', 'Firebase Firestore', 'Google Gemini API'],
    description:
      'A full-stack web app that lets users track movies, music and games in one unified dashboard, built on a clean three-tier architecture.',
    highlights: [
      'React 19 frontend with a Flask REST API backed by Firebase Firestore',
      'Integrated Google Gemini for an AI assistant — dual model slots with a daily usage cap for cost control',
      'Notification system and a tokenised parental-monitoring dashboard for account oversight',
    ],
    featured: true,
    repo: 'https://github.com/giyuuln',
  },
  {
    title: 'Cat Adoption & Care System',
    subtitle: 'Diploma Final Year Project · Solo-built',
    period: '2024 – 2025',
    stack: ['PHP', 'MySQL', 'HTML/CSS', 'Figma'],
    description:
      'A role-based web platform (admin, adopter, cat owner) that digitises the cat adoption, return, and reporting process end to end.',
    highlights: [
      'Seven modules: auth, cat search & listing, adoption-request approval workflow, history, profiles, and monthly PDF reports',
      'Complete system documentation — context & data-flow diagrams, ERD with data dictionary, module specs',
      'Validated every module with structured test cases covering valid, invalid and edge-case inputs',
    ],
    featured: true,
    repo: 'https://github.com/giyuuln',
  },
  {
    title: 'AIRS',
    subtitle: 'Automated Inspection & Reporting System · Client Project (iPetro)',
    period: '2025',
    stack: ['Flask', 'MySQL', 'pytest'],
    description:
      'A team-built inspection-automation system for a real petrol-station client. I led Module 3 — Inspection Records & Photo Management.',
    highlights: [
      'Built the Flask/MySQL backend for record handling and photo uploads',
      'Wrote automated tests with pytest to keep the module reliable',
    ],
    repo: 'https://github.com/giyuuln',
  },
  {
    title: 'CampusCycle',
    subtitle: 'Android Campus Marketplace',
    period: '2024',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    description:
      'A native Android campus marketplace app, one of several Android projects built to explore modern mobile development.',
    highlights: [
      'Built with Kotlin and Jetpack Compose for a modern declarative UI',
      'Firebase for authentication and realtime data',
    ],
    repo: 'https://github.com/giyuuln',
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
    degree: 'Bachelor of Information Technology with Honours — Final Year',
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
