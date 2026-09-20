import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view.
 *
 * Uses a single IntersectionObserver rather than a scroll listener: with
 * Lenis driving scroll at animation-frame rate, a scroll handler would run
 * work on every frame across a page that is ~12,700px tall on mobile. The
 * observer only fires when a boundary is actually crossed.
 *
 * `rootMargin` collapses the root to a thin band about a third down the
 * viewport, so a section counts as active while it spans that reading line
 * rather than the instant its top edge appears.
 *
 * The active section is the LAST intersecting one in DOM order, not the
 * most-visible one. Two things make that necessary:
 *   - the hero is `position: sticky` and stays pinned behind the whole page,
 *     so it intersects the band forever and would win every ratio contest;
 *   - panels deliberately overlap, so several can span the line at once.
 * Taking the last in document order resolves both: at the top only the hero
 * spans the band, and after that whichever panel has most recently risen
 * over it wins.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const order = new Map(ids.map((id, i) => [id, i]))
    const spanning = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) spanning.add(entry.target.id)
          else spanning.delete(entry.target.id)
        }

        let best: string | null = null
        let bestIndex = -1
        for (const id of spanning) {
          const i = order.get(id) ?? -1
          if (i > bestIndex) {
            best = id
            bestIndex = i
          }
        }

        // Nothing spans the line mid-transition; keep the previous value
        // rather than flickering back to the first section.
        if (best) setActive(best)
      },
      { rootMargin: '-35% 0px -60% 0px', threshold: 0 },
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [ids])

  return active
}
