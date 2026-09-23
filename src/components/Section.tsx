import type { ReactNode } from 'react'
import Accent from './Accent'
import { Reveal } from './ui'

/**
 * The shared section shell — a numbered eyebrow, a display heading and a
 * body, on the alternating paper/sand background with a hairline top rule.
 *
 * This markup was duplicated verbatim across all five sections before; the
 * classes live in `index.css` as .section-pad / .eyebrow / .heading.
 */
export default function Section({
  id,
  index,
  label,
  title,
  accent,
  tone = 'paper',
  headerAside,
  children,
}: {
  id: string
  /** Two-digit section number shown in the eyebrow, e.g. "01". */
  index: string
  /** Eyebrow text after the number, e.g. "Stack". */
  label: string
  title: string
  /** Word or phrase within `title` to set in the accent colour. */
  accent?: string
  tone?: 'paper' | 'sand'
  /** Optional content rendered under the heading, inside the header grid. */
  headerAside?: ReactNode
  children: ReactNode
}) {
  return (
    <section
      id={id}
      /*
       * Panel treatment. Each section is `relative` with a rounded top and a
       * small negative margin, so it overlaps the tail of the one before and
       * its corners reveal it — the "lifting" look from the reference.
       *
       * No z-index needed: positioned siblings paint in DOM order, so each
       * panel is already above the previous one and above the pinned hero.
       *
       * No `overflow-hidden` either — it would break `position: sticky` for
       * any descendant. Content is inset by `section-pad`, so it never
       * reaches the rounded corners anyway.
       */
      className={`relative -mt-6 rounded-t-[1.75rem] border-t border-line shadow-[0_-20px_50px_-24px_rgb(0_0_0/0.45)] ${
        tone === 'sand' ? 'bg-sand' : 'bg-paper'
      }`}
    >
      <div className="section-pad">
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="eyebrow">
                {index} — {label}
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="heading">
                {accent ? <Accent text={title} accent={accent} /> : title}
              </h2>
            </Reveal>
            {headerAside}
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
