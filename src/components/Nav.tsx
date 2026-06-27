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

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-[#e8e0d5] bg-[#faf8f5]/95 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <a href="#top" className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]">
          ammar<span className="text-[#b8860b]">.dev</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#6b6560] transition-colors hover:text-[#1a1a1a]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#b8860b] transition-colors hover:text-[#1a1a1a]"
          >
            Get in touch
          </a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-[#6b6560] transition-colors hover:text-[#1a1a1a]"
          >
            <Icon.GitHub className="h-5 w-5" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="text-[#6b6560]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[#e8e0d5] bg-[#faf8f5] px-6 py-6 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-mono text-xs uppercase tracking-[0.15em] text-[#6b6560] hover:text-[#1a1a1a]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}