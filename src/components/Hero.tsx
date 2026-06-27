import { motion } from 'framer-motion'
import { profile } from '../data'
import { Icon } from './ui'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#faf8f5]">
      {/* Subtle grain texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} 
      />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-32 pb-20 sm:px-8">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 flex flex-wrap items-center justify-between gap-4 border-b border-[#e8e0d5] pb-6"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6b6560]">
            Software Engineer
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b6560]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#b8860b]" />
              Available for internship · 2026
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-[#1a1a1a]"
        >
          Hi, I'm Ammar —{' '}
          <span className="text-[#b8860b]">
            {profile.role}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-[#6b6560] sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        {/* Stat row — magazine style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-[#e8e0d5] pt-8 sm:grid-cols-4"
        >
          {[
            { n: '4+', l: 'Shipped projects' },
            { n: '6+', l: 'Languages' },
            { n: '1', l: 'Real client build' },
            { n: "Dean's", l: 'Award recipient' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-bold text-[#1a1a1a] sm:text-4xl">{s.n}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b6560]">{s.l}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 border border-[#1a1a1a] bg-[#1a1a1a] px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] text-[#faf8f5] transition-all hover:bg-[#b8860b] hover:border-[#b8860b] hover:text-white"
          >
            View my work
            <Icon.Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-[#e8e0d5] px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] text-[#1a1a1a] transition-all hover:border-[#1a1a1a]"
          >
            <Icon.Download className="h-3.5 w-3.5" />
            Resume
          </a>
          <div className="ml-auto flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[#6b6560] transition-colors hover:text-[#1a1a1a]">
              <Icon.GitHub className="h-5 w-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#6b6560] transition-colors hover:text-[#1a1a1a]">
              <Icon.LinkedIn className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b6560]"
        >
          <Icon.Pin className="h-3.5 w-3.5" />
          {profile.location}
        </motion.div>
      </div>
    </section>
  )
}