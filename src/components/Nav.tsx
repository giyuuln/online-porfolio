import { useEffect, useRef, useState } from 'react'
import { Icon } from './ui'

const links = [
  { href: '#top', label: 'Home' },
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
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-line bg-paper/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4 sm:px-8">
        {/* Hamburger menu */}
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="p-2 text-muted transition-colors hover:text-ink"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-7 w-7"
            >
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>

          {open && (
            <div
              ref={menuRef}
              className="absolute left-0 top-full z-[100] mt-2 w-[220px] rounded-lg border border-line bg-paper p-4 shadow-2xl"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-1.5 font-display text-lg font-bold uppercase tracking-tight text-ink transition-colors hover:text-gold md:text-xl"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Signature */}
        <a
          href="#top"
          className="font-display text-2xl font-bold tracking-tight text-ink"
          aria-label="Back to top"
        >
          A<span className="text-gold">.</span>
        </a>

        {/* Theme toggle — pill switch */}
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="relative h-8 w-16 rounded-full bg-sand ring-1 ring-line transition-opacity hover:opacity-80"
        >
          <span
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-ink text-paper transition-transform duration-300 ${
              dark ? 'translate-x-8' : 'translate-x-0'
            }`}
          >
            {dark ? <Icon.Moon className="h-3.5 w-3.5" /> : <Icon.Sun className="h-3.5 w-3.5" />}
          </span>
        </button>
      </nav>
    </header>
  )
}
