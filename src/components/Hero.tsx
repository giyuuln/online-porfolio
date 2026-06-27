import { motion } from 'framer-motion'
import { profile } from '../data'
import { Icon } from './ui'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px] dark:bg-accent/25" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-6 pt-24 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center gap-2 font-mono text-sm text-accent"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
          Available for internship · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-6xl"
        >
          Hi, I'm Ammar —{' '}
          <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
            {profile.role}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark hover:shadow-accent/40"
          >
            View my work
            <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200 dark:hover:border-accent dark:hover:text-accent-soft"
          >
            <Icon.Download className="h-4 w-4" />
            Resume
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-slate-300 p-3 text-slate-700 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200 dark:hover:border-accent"
          >
            <Icon.GitHub className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-slate-300 p-3 text-slate-700 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200 dark:hover:border-accent"
          >
            <Icon.LinkedIn className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500"
        >
          <Icon.Pin className="h-4 w-4" />
          {profile.location}
        </motion.div>
      </div>
    </section>
  )
}
