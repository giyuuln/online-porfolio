import { timeline } from '../data'
import Section from './Section'
import { Reveal } from './ui'

/**
 * Section 05 — work and study on a single chronological rail.
 *
 * The previous version rendered two separate columns of dots with no
 * connecting line, so it only read as a timeline by convention. Here an
 * actual rule runs down the left edge and each entry hangs a marker on it.
 *
 * Entries are ordered by the explicit numeric `sort` key rather than by
 * parsing the period strings, which are prose ('Expected 2027').
 */
export default function Timeline() {
  const entries = [...timeline].sort((a, b) => b.sort - a.sort)

  return (
    <Section id="path" index="05" label="Path" title="How I got here" accent="here" tone="paper">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-8 md:col-start-5">
          {/* The rail itself. */}
          <ol className="relative border-l border-line">
            {entries.map((e, i) => (
              <li key={`${e.role}-${e.sort}`} className="relative pb-12 pl-8 last:pb-0">
                <Reveal delay={i * 0.08}>
                  {/* Marker sits on the rail: filled for work, hollow for study. */}
                  <span
                    className={`absolute -left-[4.5px] top-1.5 h-2 w-2 ${
                      e.kind === 'work' ? 'bg-brand' : 'border border-brand bg-paper'
                    }`}
                    aria-hidden
                  />

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                      {e.period}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                      {e.kind === 'work' ? 'Work' : 'Study'}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-normal text-ink">
                    {e.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{e.org}</p>

                  {e.tag && (
                    <span className="mt-3 inline-block border border-brand/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-brand">
                      {e.tag}
                    </span>
                  )}

                  <ul className="mt-4 space-y-2.5">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-body">
                        <span
                          className="mt-2 inline-block h-1 w-1 shrink-0 bg-brand/50"
                          aria-hidden
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
