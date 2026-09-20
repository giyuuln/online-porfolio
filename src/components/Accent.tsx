import type { ReactNode } from 'react'

/**
 * Highlights one phrase inside a heading, the way the reference site sets a
 * single word in its accent colour ("I design with *care.*").
 *
 * Takes the whole string plus the substring to accent, rather than requiring
 * callers to pre-split the text, so headings stay readable as one sentence at
 * the call site and remain a single text node for copy/paste and screen
 * readers.
 *
 * Matching is literal and case-sensitive on the first occurrence; if the
 * phrase is absent the heading renders unchanged rather than throwing.
 */
export default function Accent({
  text,
  accent,
}: {
  text: string
  accent: string
}): ReactNode {
  const at = accent ? text.indexOf(accent) : -1
  if (at === -1) return text

  return (
    <>
      {text.slice(0, at)}
      <span className="text-gold">{accent}</span>
      {text.slice(at + accent.length)}
    </>
  )
}
