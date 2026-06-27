import { education, experience } from '../data'
import { Reveal } from './ui'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-[#e8e0d5] bg-[#f5f0e8]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#b8860b]">
                04 — Experience
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
                Experience & education
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Experience timeline */}
          <div>
            <Reveal>
              <h3 className="mb-8 border-b border-[#e8e0d5] pb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#6b6560]">
                Experience & Leadership
              </h3>
            </Reveal>
            <div className="space-y-10">
              {experience.map((e, i) => (
                <Reveal key={e.role} delay={i * 0.1}>
                  <div className="relative pl-8">
                    <span className="absolute left-0 top-1.5 h-2 w-2 bg-[#b8860b]" />
                    <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#6b6560]">
                      {e.period}
                    </div>
                    <h4 className="mt-2 text-lg font-bold text-[#1a1a1a]">{e.role}</h4>
                    <div className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-[#b8860b]">
                      {e.org}
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {e.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-sm leading-relaxed text-[#4a4540]">
                          <span className="mt-2 inline-block h-1 w-1 shrink-0 bg-[#b8860b]/50" />
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
              <h3 className="mb-8 border-b border-[#e8e0d5] pb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#6b6560]">
                Education
              </h3>
            </Reveal>
            <div className="space-y-10">
              {education.map((e, i) => (
                <Reveal key={e.degree} delay={i * 0.1}>
                  <div className="relative pl-8">
                    <span className="absolute left-0 top-1.5 h-2 w-2 bg-[#b8860b]" />
                    <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#6b6560]">
                      {e.period}
                    </div>
                    <h4 className="mt-2 text-lg font-bold text-[#1a1a1a]">{e.school}</h4>
                    <div className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-[#b8860b]">
                      {e.degree}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#4a4540]">{e.note}</p>
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