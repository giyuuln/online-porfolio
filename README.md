# Ammar Hafizin — Portfolio

A modern, minimal personal portfolio built with **React + Vite + TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to showcase full-stack and Android development work for software engineering internship applications.

## Features

- ⚡ Fast Vite + TypeScript build
- 🎨 Modern minimal design with light/dark mode (saved to `localStorage`)
- 🪄 Smooth scroll-reveal animations (Framer Motion)
- 📱 Fully responsive
- 🔍 SEO + Open Graph meta tags
- 🚀 Auto-deploys to GitHub Pages via GitHub Actions

## Local development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Editing content

All site content lives in [`src/data.ts`](src/data.ts) — profile, about, skills,
projects, experience, and education. Update that one file to change what the
site shows; no component edits needed.

To swap the downloadable resume, replace `public/Ammar_Hafizin_Resume.docx`
(or add a PDF and update `resumeUrl` in `src/data.ts`).

## Deploying to GitHub Pages

1. Create a GitHub repo and push this project to the `main` branch.
2. In the repo, go to **Settings → Pages → Build and deployment**, and set
   **Source** to **GitHub Actions**.
3. Every push to `main` builds and deploys automatically via
   [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

The Vite `base` is set to `./` (relative paths) so the build works whether it's
served from `username.github.io` or `username.github.io/repo-name`.
