import type { ReactNode } from 'react'
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
  tone?: 'paper' | 'sand'
  /** Optional content rendered under the heading, inside the header grid. */
  headerAside?: ReactNode
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={`border-t border-line ${tone === 'sand' ? 'bg-sand' : 'bg-paper'}`}
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
              <h2 className="heading">{title}</h2>
            </Reveal>
            {headerAside}
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
