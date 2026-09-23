import type { Photo as PhotoData } from '../data'

/**
 * A photo slot. The caller sizes it (aspect ratio or em-based width/height);
 * this fills the box either way.
 *
 * With no `src` it renders a placeholder frame — hatched in the line colour,
 * with a mono caption — so the layout reads as intentional before the real
 * photos exist. The placeholder is aria-hidden: it carries no information, and
 * announcing "photo" for an image that isn't there would mislead.
 */
export default function Photo({
  photo,
  label,
  className = '',
  eager = false,
}: {
  photo: PhotoData
  /** Placeholder caption, e.g. "Headshot". */
  label: string
  className?: string
  /** Above-the-fold images skip lazy loading so they don't pop in late. */
  eager?: boolean
}) {
  if (photo.src) {
    return (
      <img
        src={photo.src}
        alt={photo.alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`block h-full w-full object-cover ${className}`}
      />
    )
  }

  return (
    <div
      aria-hidden
      className={`relative flex h-full w-full items-center justify-center overflow-hidden border border-line bg-sand ${className}`}
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, rgb(var(--line)) 0 1px, transparent 1px 12px)',
      }}
    >
      {/* Registration ticks in the corners, like a crop frame. */}
      {['left-2 top-2 border-l border-t', 'right-2 top-2 border-r border-t', 'bottom-2 left-2 border-b border-l', 'bottom-2 right-2 border-b border-r'].map(
        (pos) => (
          <span key={pos} className={`absolute h-3 w-3 border-muted ${pos}`} />
        ),
      )}
      <span className="bg-sand px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        {label}
      </span>
    </div>
  )
}
