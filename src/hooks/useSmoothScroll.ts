import { useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'
import Lenis from 'lenis'

/**
 * Momentum smooth scrolling.
 *
 * Lenis interpolates the NATIVE scroll position (it does not transform the
 * body), so `position: sticky` keeps working — which the stacked-panel
 * effect depends on.
 *
 * Disabled outright when the visitor prefers reduced motion. Taking over
 * scrolling is precisely what that preference exists to prevent, so this
 * does not merely shorten the easing — it never starts Lenis at all and the
 * browser's own scrolling is left untouched.
 *
 * Also intercepts same-page anchor clicks: without this the nav would jump
 * instantly while the rest of the page glides, which looks broken.
 */
export function useSmoothScroll() {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return

    const lenis = new Lenis({
      duration: 1.1,
      // Matches the editorial ease used by `Reveal` in components/ui.tsx.
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.6,
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    const onClick = (e: MouseEvent) => {
      // Let modified clicks (new tab, download, etc.) behave normally.
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return
      }

      const anchor = (e.target as Element | null)?.closest?.('a[href^="#"]')
      if (!(anchor instanceof HTMLAnchorElement)) return

      const id = anchor.getAttribute('href')?.slice(1)
      if (!id) return

      const target = document.getElementById(id)
      if (!target) return

      e.preventDefault()
      lenis.scrollTo(target, { offset: 0 })
      // Keep the URL in step so the link is still shareable and Back works.
      history.pushState(null, '', `#${id}`)
    }

    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [reduced])
}
