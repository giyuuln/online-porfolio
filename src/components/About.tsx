import { about } from '../data'
import { Reveal } from './ui'

export default function About() {
  return (
    <section id="about" className="section-pad">
      <Reveal>
        <span className="eyebrow">01 — About</span>
        <h2 className="heading mb-8">A bit about me</h2>
      </Reveal>
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-5 md:col-span-3">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="md:col-span-2">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 dark:border-slate-800 dark:bg-slate-900/40">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { n: '4+', l: 'Shipped projects' },
                  { n: '6+', l: 'Languages' },
                  { n: '1', l: 'Real client build' },
                  { n: "Dean's", l: 'Award recipient' },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-bold text-accent">{s.n}</div>
                    <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
