import { useState } from 'react'
import { about, layers, projects, tech, type TechId } from '../data'
import Section from './Section'
import { Reveal } from './ui'

/**
 * Section 01 — the stack, grouped by architectural role rather than by
 * "languages / frameworks / tools", plus the prose intro.
 *
 * Hovering (or focusing) a technology dims the projects below that don't use
 * it. That linkage is by TechId, not by matching label text: project stacks
 * say 'React 19' and 'Firebase Firestore' where the registry says 'React' and
 * 'Firebase', so text matching would silently highlight nothing.
 *
 * The strip lives in this section on purpose. Highlighting the Featured Work
 * cards instead would fire ~1500px below the cursor, off-screen — invisible.
 */
export default function TechEcosystem() {
  const [active, setActive] = useState<TechId | null>(null)

  return (
    <Section id="stack" index="01" label="Stack" title="How I build" tone="paper">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        {/* Intro prose */}
        <div className="space-y-6 md:col-span-4">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="leading-[1.7] text-body">{p}</p>
            </Reveal>
          ))}
        </div>

        {/* Layered stack */}
        <div className="md:col-span-8">
          {layers.map((layer, i) => {
            const items = tech.filter((t) => t.layer === layer.id)
            if (items.length === 0) return null

            return (
              <Reveal key={layer.id} delay={i * 0.06}>
                <div className="grid gap-4 border-t border-line py-6 sm:grid-cols-4">
                  <div className="sm:col-span-1">
                    <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-gold">
                      {layer.label}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                      {layer.note}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:col-span-3">
                    {items.map((t) => {
                      const on = active === t.id
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onMouseEnter={() => setActive(t.id)}
                          onMouseLeave={() => setActive(null)}
                          onFocus={() => setActive(t.id)}
                          onBlur={() => setActive(null)}
                          aria-pressed={on}
                          className={`inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors ${
                            on
                              ? 'border-gold text-gold'
                              : 'border-line text-body hover:border-gold hover:text-gold'
                          }`}
                        >
                          {t.daily && (
                            <span
                              className="inline-block h-1 w-1 shrink-0 bg-gold"
                              aria-hidden
                            />
                          )}
                          {t.label}
                          {t.viaRepo && <span aria-hidden>*</span>}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </Reveal>
            )
          })}

          {/* Legend */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
              <span className="inline-flex items-center gap-2">
                <span className="inline-block h-1 w-1 bg-gold" aria-hidden />
                Current daily driver
              </span>
              <span>* Proven in this site&rsquo;s source</span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Tech → project linkage */}
      <Reveal delay={0.15}>
        <div className="mt-16 border-t border-line pt-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
            {active ? 'Used in' : 'Built with these'}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {projects.map((p) => {
              const on = !active || p.tech.includes(active)
              return (
                <span
                  key={p.title}
                  className={`border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] transition-all ${
                    on
                      ? 'border-gold/40 text-ink'
                      : 'border-line text-muted opacity-30'
                  }`}
                >
                  {p.title}
                </span>
              )
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
