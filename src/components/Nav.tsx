import { useEffect, useState } from 'react'
import { profile } from '../data'
import { Icon } from './ui'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav({
  dark,
  toggle,
}: {
  dark: boolean
  toggle: () => void
}) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800/70 dark:bg-[#0a0a0f]/80'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
          ammar<span className="text-accent">.dev</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-accent dark:text-slate-400 dark:hover:text-accent-soft"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-accent dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <Icon.GitHub className="h-5 w-5" />
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-accent dark:text-slate-400 dark:hover:bg-slate-800"
          >
            {dark ? <Icon.Sun className="h-5 w-5" /> : <Icon.Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200/70 bg-white/95 px-6 py-3 backdrop-blur dark:border-slate-800/70 dark:bg-[#0a0a0f]/95 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-slate-600 hover:text-accent dark:text-slate-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
