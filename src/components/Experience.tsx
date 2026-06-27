import { education, experience } from '../data'
import { Reveal } from './ui'

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/20"
    >
      <div className="section-pad">
        <Reveal>
          <span className="eyebrow">04 — Experience</span>
          <h2 className="heading mb-12">Experience & education</h2>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Experience timeline */}
          <div>
            <h3 className="mb-6 font-mono text-sm font-medium uppercase tracking-wider text-slate-400">
              Experience & Leadership
            </h3>
            <div className="space-y-8 border-l border-slate-200 pl-6 dark:border-slate-800">
              {experience.map((e, i) => (
                <Reveal key={e.role} delay={i * 0.08}>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-white dark:bg-[#0a0a0f]" />
                    <div className="font-mono text-xs text-slate-400">{e.period}</div>
                    <h4 className="mt-1 font-semibold text-slate-900 dark:text-white">{e.role}</h4>
                    <div className="text-sm text-accent">{e.org}</div>
                    <ul className="mt-3 space-y-2">
                      {e.points.map((pt) => (
                        <li key={pt} className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {pt}
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
            <h3 className="mb-6 font-mono text-sm font-medium uppercase tracking-wider text-slate-400">
              Education
            </h3>
            <div className="space-y-8 border-l border-slate-200 pl-6 dark:border-slate-800">
              {education.map((e, i) => (
                <Reveal key={e.degree} delay={i * 0.08}>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-white dark:bg-[#0a0a0f]" />
                    <div className="font-mono text-xs text-slate-400">{e.period}</div>
                    <h4 className="mt-1 font-semibold text-slate-900 dark:text-white">{e.school}</h4>
                    <div className="text-sm text-accent">{e.degree}</div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{e.note}</p>
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
