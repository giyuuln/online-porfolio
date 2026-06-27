import { projects, type Project } from '../data'
import { Icon, Reveal } from './ui'

function Card({ p, index }: { p: Project; index: number }) {
  const plateNum = `Plate ${String.fromCharCode(65 + Math.floor(index / 2))}.${(index % 2) + 1}`

  return (
    <Reveal delay={(index % 2) * 0.12}>
      <article
        className={`group relative flex h-full flex-col border bg-paper p-8 transition-all hover:bg-card ${
          p.featured
            ? 'border-gold/40'
            : 'border-line hover:border-gold/30'
        }`}
      >
        {/* Plate label */}
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
            {plateNum}
          </span>
          {p.featured && (
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-gold">
              Featured
            </span>
          )}
        </div>

        <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
          {p.period}
        </div>
        
        <h3 className="text-2xl font-bold text-ink">{p.title}</h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-gold">
          {p.subtitle}
        </p>

        <p className="mt-5 leading-[1.7] text-body">
          {p.description}
        </p>

        <ul className="mt-5 space-y-3">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm leading-relaxed text-body">
              <span className="mt-2 inline-block h-1 w-1 shrink-0 bg-gold" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span
              key={t}
              className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-6 border-t border-line pt-5">
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted transition-colors hover:text-ink"
            >
              <Icon.GitHub className="h-4 w-4" />
              Code
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted transition-colors hover:text-ink"
            >
              <Icon.External className="h-4 w-4" />
              Live demo
            </a>
          )}
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                03 — Projects
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-ink">
                Things I've built
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                A selection of full-stack, mobile and client work — from AI-powered web apps to a system
                shipped for a real business.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}