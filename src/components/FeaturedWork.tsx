import { KIND_LABEL, projects, type Project } from '../data'
import Section from './Section'
import { Icon, Reveal } from './ui'

/**
 * The visual half of each split card.
 *
 * There are no screenshots anywhere in the repo, so rather than fake a
 * browser mockup this renders the project's actual metadata as a spec plate.
 * Every row comes from a real field; rows with no data are omitted rather
 * than filled with a guess.
 */
function SpecPlate({ p }: { p: Project }) {
  const rows: { k: string; v: string }[] = [
    ...(p.role ? [{ k: 'Role', v: p.role }] : []),
    { k: 'Period', v: p.period },
    { k: 'Status', v: KIND_LABEL[p.kind] },
  ]

  return (
    <div className="border border-line bg-card">
      <div className="border-b border-line px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
        Spec
      </div>

      <dl className="divide-y divide-line">
        {rows.map((r) => (
          <div key={r.k} className="flex gap-4 px-5 py-3">
            <dt className="w-16 shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
              {r.k}
            </dt>
            <dd className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink">
              {r.v}
            </dd>
          </div>
        ))}
      </dl>

      <div className="border-t border-line px-5 py-4">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
          Stack
        </div>
        <div className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span
              key={s}
              className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-body"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function WorkRow({ p, index }: { p: Project; index: number }) {
  // Z-pattern: the spec plate swaps sides on alternate rows.
  const flip = index % 2 === 1

  return (
    <Reveal delay={0.05}>
      <article className="grid gap-8 border-t border-line py-12 md:grid-cols-12 md:gap-12">
        <div className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
          {/* Meta bar */}
          <div className="mb-5 flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
            <span className="h-px flex-1 bg-line" aria-hidden />
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.15em] ${
                p.kind === 'live' ? 'text-brand' : 'text-muted'
              }`}
            >
              {KIND_LABEL[p.kind]}
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
            {p.title}
          </h3>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-brand">
            {p.subtitle}
          </p>

          <p className="mt-5 leading-[1.7] text-body">{p.description}</p>

          <ul className="mt-6 space-y-3">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-body">
                <span className="mt-2 inline-block h-1 w-1 shrink-0 bg-brand" aria-hidden />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-6">
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted transition-colors hover:text-brand"
              >
                <Icon.External className="h-4 w-4" />
                Live demo
              </a>
            )}
            {p.repo && (
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted transition-colors hover:text-brand"
              >
                <Icon.GitHub className="h-4 w-4" />
                Source
              </a>
            )}
          </div>
        </div>

        <div className={`md:col-span-5 ${flip ? 'md:order-1' : ''}`}>
          <SpecPlate p={p} />
        </div>
      </article>
    </Reveal>
  )
}

export default function FeaturedWork() {
  return (
    <Section
      id="work"
      index="02"
      label="Work"
      title="Things I've built"
      accent="built"
      tone="sand"
      headerAside={
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl leading-relaxed text-body">
            Full-stack, mobile and client work — from an AI-assisted web app to
            a system shipped for a real business.
          </p>
        </Reveal>
      }
    >
      {projects.map((p, i) => (
        <WorkRow key={p.title} p={p} index={i} />
      ))}
    </Section>
  )
}
