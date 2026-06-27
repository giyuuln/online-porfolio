import { projects, type Project } from '../data'
import { Icon, Reveal } from './ui'

function Card({ p, index }: { p: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 dark:bg-slate-900/40 ${
          p.featured
            ? 'border-accent/30 dark:border-accent/30'
            : 'border-slate-200 hover:border-accent/40 dark:border-slate-800 dark:hover:border-accent/40'
        }`}
      >
        {p.featured && (
          <span className="absolute right-5 top-5 rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
            Featured
          </span>
        )}

        <div className="mb-1 font-mono text-xs text-slate-400 dark:text-slate-500">{p.period}</div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
        <p className="mt-1 text-sm font-medium text-accent">{p.subtitle}</p>

        <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
          {p.description}
        </p>

        <ul className="mt-4 space-y-2">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400">
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span
              key={t}
              className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 pt-2">
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-accent dark:text-slate-400 dark:hover:text-accent-soft"
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
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-accent dark:text-slate-400 dark:hover:text-accent-soft"
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
    <section id="projects" className="section-pad">
      <Reveal>
        <span className="eyebrow">03 — Projects</span>
        <h2 className="heading mb-3">Things I've built</h2>
        <p className="mb-12 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          A selection of full-stack, mobile and client work — from AI-powered web apps to a system
          shipped for a real business.
        </p>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Card key={p.title} p={p} index={i} />
        ))}
      </div>
    </section>
  )
}
