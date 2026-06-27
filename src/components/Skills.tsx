import { skills } from '../data'
import { Reveal } from './ui'

export default function Skills() {
  return (
    <section id="skills" className="border-y border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/20">
      <div className="section-pad">
        <Reveal>
          <span className="eyebrow">02 — Skills</span>
          <h2 className="heading mb-10">Tools I build with</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-accent/50 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-accent/50">
                <h3 className="mb-4 font-mono text-sm font-medium text-accent">{s.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
