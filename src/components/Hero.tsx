import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { photos, profile } from '../data'
import Photo from './Photo'
import { BlurText, Icon } from './ui'

export default function Hero() {
  const reduced = useReducedMotion()
  const [vh, setVh] = useState(0)

  useEffect(() => {
    const measure = () => setVh(window.innerHeight)
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  /*
   * Progress is derived from the WINDOW scroll, not from `useScroll({ target })`
   * on the hero itself. The hero is `position: sticky`, so it never moves
   * relative to the viewport — an element-targeted scroll progress stays
   * pinned at 0 and the fade silently never runs.
   */
  const { scrollY } = useScroll()
  const progress = useTransform(scrollY, (v) => (vh > 0 ? Math.min(1, v / vh) : 0))

  const opacity = useTransform(progress, [0, 0.75], [1, 0])
  const scale = useTransform(progress, [0, 1], [1, 0.94])
  // Once it is hidden behind an opaque panel, take it out of the a11y tree
  // and the tab order — otherwise the hero's links stay focusable while
  // invisible, and a keyboard user tabs into nothing.
  const visibility = useTransform(progress, (p) => (p > 0.95 ? 'hidden' : 'visible'))

  // Under reduced motion the hero is an ordinary static section: no pinning,
  // no scroll-linked work at all.
  if (reduced) {
    return (
      <section id="top" className="relative flex min-h-screen flex-col overflow-hidden bg-paper">
        <HeroContent />
      </section>
    )
  }

  return (
    <motion.section
      id="top"
      style={{ opacity, scale, visibility }}
      className="sticky top-0 z-0 flex h-screen flex-col overflow-hidden bg-paper"
    >
      <HeroContent />
    </motion.section>
  )
}

function HeroContent() {
  return (
    <>
      {/* Subtle grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />

      {/* Centered giant name */}
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4">
        {/* Staggered wordmark: AMMAR hangs left, HAFIZIN steps right with the
            headshot set into the line, like a letter. The font size lives on
            this wrapper so the tile can be sized in em and track the type at
            every breakpoint. Below sm there is no room beside HAFIZIN, so the
            tile drops out and both lines centre. */}
        <div className="flex justify-center">
          <div className="inline-flex flex-col items-center font-display text-[19vw] font-bold uppercase leading-[0.8] tracking-tighter sm:items-stretch sm:text-[13vw] lg:text-[200px]">
            <BlurText
              text="AMMAR"
              delay={100}
              animateBy="letters"
              className="whitespace-nowrap text-ink sm:self-start"
            />
            <div className="flex items-end gap-[0.08em] sm:self-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mb-[0.05em] hidden h-[0.7em] w-[0.93em] shrink-0 sm:block"
              >
                <Photo photo={photos.headshot} label="Headshot" eager />
              </motion.div>
              <BlurText
                text="HAFIZIN"
                delay={100}
                animateBy="letters"
                className="whitespace-nowrap text-brand"
              />
            </div>
          </div>
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
            href="#work"
            className="group inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-on-brand transition-all hover:opacity-90"
          >
            View my work
            <Icon.Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-line px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink transition-all hover:border-brand hover:text-brand"
          >
            <Icon.Download className="h-3.5 w-3.5" />
            Resume
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-brand">
            <Icon.GitHub className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-brand">
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
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
        Available for internship · 2026
        <span className="hidden items-center gap-2 sm:flex">
          · <Icon.Pin className="h-3.5 w-3.5" /> {profile.location}
        </span>
      </motion.div>

      {/* Scroll indicator */}
      <a
        href="#stack"
        aria-label="Scroll down"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-ink"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 animate-bounce">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </>
  )
}
