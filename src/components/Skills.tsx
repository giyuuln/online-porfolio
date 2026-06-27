import { skills } from '../data'
import { Icon, Reveal } from './ui'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[#e8e0d5] bg-[#f5f0e8]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#b8860b]">
                02 — Skills
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
                Tools I build with
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-px bg-[#e8e0d5] sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.06}>
              <div className="group h-full bg-[#faf8f5] p-8 transition-colors hover:bg-white">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-[#b8860b]">
                    {s.group}
                  </h3>
                  <Icon.Star className="h-3 w-3 text-[#e8e0d5] transition-colors group-hover:text-[#b8860b]" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="border border-[#e8e0d5] bg-white px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-[#4a4540]"
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