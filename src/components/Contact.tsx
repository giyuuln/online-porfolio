import { profile } from '../data'
import { Icon, Reveal } from './ui'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-sand">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                05 — Contact
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-[1.05] tracking-tighter text-ink">
                Let's build something together
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-body">
                I'm actively looking for a software engineering or IT internship. If you think I'd be a
                good fit for your team, I'd love to hear from you.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-all hover:opacity-90 dark:text-[#0a0a0a]"
                >
                  <Icon.Mail className="h-4 w-4" />
                  {profile.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex items-center gap-6 border-t border-line pt-8">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-gold">
                  <Icon.GitHub className="h-5 w-5" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-gold">
                  <Icon.LinkedIn className="h-5 w-5" />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted transition-colors hover:text-gold">
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
