import { profile } from '../data'
import { Icon, Reveal } from './ui'

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white px-8 py-16 text-center dark:border-slate-800 dark:from-slate-900/60 dark:to-slate-900/20 sm:px-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
          <span className="eyebrow">05 — Contact</span>
          <h2 className="heading mx-auto max-w-xl">Let's build something together</h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-slate-600 dark:text-slate-400">
            I'm actively looking for a software engineering or IT internship. If you think I'd be a
            good fit for your team, I'd love to hear from you.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark"
            >
              <Icon.Mail className="h-4 w-4" />
              {profile.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-500 transition-colors hover:text-accent dark:text-slate-400">
              <Icon.GitHub className="h-6 w-6" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-500 transition-colors hover:text-accent dark:text-slate-400">
              <Icon.LinkedIn className="h-6 w-6" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-slate-500 transition-colors hover:text-accent dark:text-slate-400">
              <Icon.Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
