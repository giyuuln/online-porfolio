import { about } from '../data'
import { Reveal } from './ui'

export default function About() {
  return (
    <section id="about" className="border-t border-[#e8e0d5] bg-[#faf8f5]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        {/* Section header */}
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#b8860b]">
                01 — About
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
                A bit about me
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-12">
          {/* Main content */}
          <div className="space-y-6 md:col-span-7">
            {about.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-lg leading-[1.7] text-[#4a4540]">{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Stats sidebar */}
          <div className="md:col-span-5">
            <Reveal delay={0.2}>
              <div className="border border-[#e8e0d5] bg-white p-8">
                <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#b8860b]">
                  By the numbers
                </div>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { n: '4+', l: 'Shipped projects' },
                    { n: '6+', l: 'Languages' },
                    { n: '1', l: 'Real client build' },
                    { n: "Dean's", l: 'Award recipient' },
                  ].map((s) => (
                    <div key={s.l} className="border-b border-[#e8e0d5] pb-6">
                      <div className="text-3xl font-bold text-[#1a1a1a]">{s.n}</div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b6560]">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}