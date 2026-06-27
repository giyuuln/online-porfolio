import { education, experience } from '../data'
import { Reveal } from './ui'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-sand">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                04 — Experience
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-ink">
                Experience & education
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Experience timeline */}
          <div>
            <Reveal>
              <h3 className="mb-8 border-b border-line pb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Experience & Leadership
              </h3>
            </Reveal>
            <div className="space-y-10">
              {experience.map((e, i) => (
                <Reveal key={e.role} delay={i * 0.1}>
                  <div className="relative pl-8">
                    <span className="absolute left-0 top-1.5 h-2 w-2 bg-gold" />
                    <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                      {e.period}
                    </div>
                    <h4 className="mt-2 text-lg font-bold text-ink">{e.role}</h4>
                    <div className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-gold">
                      {e.org}
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {e.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-sm leading-relaxed text-body">
                          <span className="mt-2 inline-block h-1 w-1 shrink-0 bg-gold/50" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education timeline */}
          <div>
            <Reveal>
              <h3 className="mb-8 border-b border-line pb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Education
              </h3>
            </Reveal>
            <div className="space-y-10">
              {education.map((e, i) => (
                <Reveal key={e.degree} delay={i * 0.1}>
                  <div className="relative pl-8">
                    <span className="absolute left-0 top-1.5 h-2 w-2 bg-gold" />
                    <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                      {e.period}
                    </div>
                    <h4 className="mt-2 text-lg font-bold text-ink">{e.school}</h4>
                    <div className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-gold">
                      {e.degree}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-body">{e.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}