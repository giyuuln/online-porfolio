import { tech } from '../data'

/**
 * Auto-scrolling strip of the tech registry.
 *
 * This is the stand-in for the reference site's horizontal image marquee —
 * there are no project screenshots in this repo, so the chips carry the
 * motion instead.
 *
 * The track renders the list twice and animates to -50%, so it lands on an
 * identical frame and the loop is seamless. `overflow-hidden` on the wrapper
 * is load-bearing: without it the doubled track would widen the page and
 * reintroduce the horizontal overflow this site is verified not to have.
 */
export default function TechMarquee() {
  // aria-hidden: every one of these labels is already announced in the
  // layered grid below. Repeating them, twice over, would be noise.
  return (
    <div
      className="relative overflow-hidden border-y border-line py-4"
      aria-hidden
    >
      {/* Edge fades so chips dissolve rather than clipping at the boundary. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent" />

      <div
        className="marquee-track flex w-max items-center gap-3"
        style={{ ['--marquee-duration' as string]: '48s' }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-3 pr-3">
            {tech.map((t) => (
              <span
                key={`${copy}-${t.id}`}
                className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] ${
                  t.daily ? 'border-gold/40 text-gold' : 'border-line text-muted'
                }`}
              >
                {t.daily && <span className="inline-block h-1 w-1 shrink-0 bg-gold" />}
                {t.label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
