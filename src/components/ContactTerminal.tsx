import { useEffect, useRef, useState } from 'react'
import { profile } from '../data'
import Section from './Section'
import { Icon, Reveal } from './ui'

/**
 * Section 06 — contact, framed as a terminal.
 *
 * The address is the real one. `hello@amkaz.dev` does not exist, so it is not
 * advertised; the availability line says "internships" rather than
 * "contracts" for the same reason.
 */
export default function ContactTerminal() {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Clear the pending reset if the component unmounts mid-countdown.
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current) }, [])

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard can be blocked (insecure origin, denied permission). The
      // address is visible on screen and the mailto link still works, so
      // there is nothing to recover from.
    }
  }

  return (
    <Section
      id="contact"
      index="06"
      label="Contact"
      title="Let's talk"
      tone="sand"
      headerAside={
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl leading-relaxed text-body">
            I&rsquo;m looking for a software engineering or IT internship. If you
            think I&rsquo;d fit your team, the fastest way to reach me is below.
          </p>
        </Reveal>
      }
    >
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-8 md:col-start-5">
          <Reveal>
            {/* Availability */}
            <div className="inline-flex items-center gap-3 border border-gold/40 px-4 py-2">
              <span className="relative inline-flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping bg-gold opacity-60" />
                <span className="relative inline-flex h-2 w-2 bg-gold" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-gold">
                Open to software engineering / IT internships
              </span>
            </div>
          </Reveal>

          {/* Terminal */}
          <Reveal delay={0.1}>
            <div className="mt-8 border border-line bg-card">
              <div className="flex items-center gap-3 border-b border-line px-5 py-3">
                <span className="inline-block h-1.5 w-1.5 bg-gold" aria-hidden />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  amkaz@portfolio:~$ contact --email
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-6">
                <code className="font-mono text-sm text-ink sm:text-base">{profile.email}</code>
                <button
                  type="button"
                  onClick={copy}
                  className="inline-flex items-center gap-2 border border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:border-gold hover:text-gold"
                >
                  {copied ? <Icon.Check className="h-3.5 w-3.5" /> : <Icon.Copy className="h-3.5 w-3.5" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </Reveal>

          {/* Links */}
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.15em] text-on-gold transition-opacity hover:opacity-90"
              >
                <Icon.Mail className="h-4 w-4" />
                Email me
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 border border-line px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.15em] text-body transition-colors hover:border-gold hover:text-gold"
              >
                <Icon.Download className="h-4 w-4" />
                Résumé
              </a>

              <div className="flex items-center gap-5 sm:ml-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-muted transition-colors hover:text-gold"
                >
                  <Icon.GitHub className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted transition-colors hover:text-gold"
                >
                  <Icon.LinkedIn className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
              <Icon.Pin className="h-3.5 w-3.5" />
              {profile.location}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
