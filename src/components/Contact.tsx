import { profile } from '../data'
import { Icon, Reveal } from './ui'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-[#e8e0d5] bg-[#1a1a1a]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#b8860b]">
                05 — Contact
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[#faf8f5]">
                Let's build something together
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#a09890]">
                I'm actively looking for a software engineering or IT internship. If you think I'd be a
                good fit for your team, I'd love to hear from you.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-3 border border-[#b8860b] bg-[#b8860b] px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] text-white transition-all hover:bg-[#d4a76a] hover:border-[#d4a76a]"
                >
                  <Icon.Mail className="h-4 w-4" />
                  {profile.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex items-center gap-6 border-t border-[#333] pt-8">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[#a09890] transition-colors hover:text-[#faf8f5]">
                  <Icon.GitHub className="h-5 w-5" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#a09890] transition-colors hover:text-[#faf8f5]">
                  <Icon.LinkedIn className="h-5 w-5" />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email" className="text-[#a09890] transition-colors hover:text-[#faf8f5]">
                  <Icon.Mail className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}