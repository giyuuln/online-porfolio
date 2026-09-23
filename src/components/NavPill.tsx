import { motion, useReducedMotion } from 'framer-motion'
import { useActiveSection } from '../hooks/useActiveSection'

/**
 * Persistent bottom nav pill with scroll-spy.
 *
 * Seven sections will not fit as labels in a mobile pill — at 375px there
 * are ~343px of usable width and "Principles" alone is ~70px. So each
 * section is a dot, and only the active one expands to show its label. The
 * accent indicator slides between them via a shared `layoutId`.
 *
 * This is a position indicator plus quick jump; Nav.tsx keeps the full
 * labelled list in its menu.
 */

const SECTIONS = [
  { id: 'top', label: 'Home' },
  { id: 'stack', label: 'Stack' },
  { id: 'work', label: 'Work' },
  { id: 'lab', label: 'Lab' },
  { id: 'principles', label: 'Principles' },
  { id: 'path', label: 'Path' },
  { id: 'contact', label: 'Contact' },
]

const IDS = SECTIONS.map((s) => s.id)

export default function NavPill() {
  const active = useActiveSection(IDS)
  const reduced = useReducedMotion()

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4"
    >
      <ul className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-line bg-card/90 p-1.5 shadow-[0_8px_30px_-8px_rgb(0_0_0/0.5)] backdrop-blur-md">
        {SECTIONS.map((s) => {
          const isActive = s.id === active
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? 'true' : undefined}
                /* min-h/min-w keep the tap target at 44px even though the dot
                   itself is 6px — the padding is the hit area. */
                className="relative flex min-h-[44px] min-w-[36px] items-center justify-center rounded-full px-2"
              >
                {isActive && (
                  <motion.span
                    layoutId="navpill-active"
                    className="absolute inset-y-1.5 inset-x-0 rounded-full bg-brand/15 ring-1 ring-brand/40"
                    transition={
                      reduced
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 420, damping: 36 }
                    }
                  />
                )}

                <span className="relative flex items-center gap-2">
                  <span
                    className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                      isActive ? 'bg-brand' : 'bg-muted'
                    }`}
                    aria-hidden
                  />
                  {/* Label is visible only for the active item, but always
                      present for screen readers so the dots are never
                      unlabelled controls. */}
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.12em] text-brand ${
                      isActive ? 'not-sr-only' : 'sr-only'
                    }`}
                  >
                    {s.label}
                  </span>
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
