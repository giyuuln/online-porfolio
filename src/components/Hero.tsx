import { motion } from 'framer-motion'
import { profile } from '../data'
import { BlurText, Icon } from './ui'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden bg-paper">
      {/* Subtle grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />

      {/* Centered giant name */}
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4">
        <div className="relative text-center">
          <div>
            <BlurText
              text="AMMAR"
              delay={100}
              animateBy="letters"
              className="justify-center whitespace-nowrap font-display text-[19vw] font-bold uppercase leading-[0.8] tracking-tighter text-gold sm:text-[17vw] lg:text-[190px]"
            />
          </div>
          <div>
            <BlurText
              text="HAFIZIN"
              delay={100}
              animateBy="letters"
              className="justify-center whitespace-nowrap font-display text-[19vw] font-bold uppercase leading-[0.8] tracking-tighter text-gold sm:text-[17vw] lg:text-[190px]"
            />
          </div>

          {/* Initial badge over the name (no profile photo asset) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex h-[14vw] w-[9vw] items-center justify-center rounded-full border border-line bg-card shadow-2xl transition-transform duration-300 hover:scale-110 lg:h-40 lg:w-24">
              <span className="font-display text-[4vw] font-bold text-ink lg:text-4xl">A</span>
            </div>
          </motion.div>
        </div>

        {/* Tagline */}
        <div className="mt-10 flex justify-center px-2 sm:mt-14">
          <BlurText
            text={profile.tagline}
            delay={60}
            animateBy="words"
            className="max-w-2xl justify-center text-center text-sm font-light text-muted sm:text-base md:text-lg"
          />
        </div>

        {/* CTA + social row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-paper transition-all hover:opacity-90 dark:text-[#0a0a0a]"
          >
            View my work
            <Icon.Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-line px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink transition-all hover:border-gold hover:text-gold"
          >
            <Icon.Download className="h-3.5 w-3.5" />
            Resume
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-gold">
            <Icon.GitHub className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-gold">
            <Icon.LinkedIn className="h-5 w-5" />
          </a>
        </motion.div>
      </div>

      {/* Bottom meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute bottom-16 left-1/2 flex w-full -translate-x-1/2 items-center justify-center gap-3 px-6 font-mono text-[11px] uppercase tracking-[0.15em] text-muted"
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
        Available for internship · 2026
        <span className="hidden items-center gap-2 sm:flex">
          · <Icon.Pin className="h-3.5 w-3.5" /> {profile.location}
        </span>
      </motion.div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-ink"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 animate-bounce">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}
