# Vendored shadcn/ui components

Components added here via `npx shadcn@latest add <name>` are **vendored** — they
are our source, not a dependency, so edit them freely.

Deliberately **not** `src/components/ui/`: a `ui.tsx` file already exists in
`src/components/` (it holds `Reveal`, `BlurText` and `Icon`), and a sibling
`ui/` directory would make `./ui` imports ambiguous to read.

## Patch every pasted component for this codebase

| Pasted | Change to | Why |
|---|---|---|
| `bg-muted` | `bg-subtle` | `muted` is a **text** colour here, not a background |
| `text-muted-foreground` | `text-subtle-foreground` | same |
| `from 'motion/react'` | `from 'framer-motion'` | this project has framer-motion v12, not the `motion` package |
| `lucide-react` icons | `Icon` from `../ui` | the site uses a hand-rolled SVG set; avoid a new dep |
| Tailwind v4-only syntax | v3 equivalent | this project is on Tailwind v3.4 |

Then run `npm run build` — CI runs `tsc -b` with `noUnusedLocals`,
`noUnusedParameters`, `verbatimModuleSyntax` and `erasableSyntaxOnly`, and a
push to `main` deploys live. Third-party code that trips those takes the site
down, so never merge without a green local build.
