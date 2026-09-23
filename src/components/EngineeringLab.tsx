import { labTiles, type LabTile } from '../data'
import Section from './Section'
import { Icon, Reveal } from './ui'

/**
 * Section 03 — a 2x2 asymmetric bento of things that are checkable.
 *
 * Deliberately no "4+ projects shipped" counters: padding a four-item array
 * into "4+" is the kind of soft metric this site avoids. Every tile here is
 * either drawn from `education` or describes this repository.
 */
function Tile({ t }: { t: LabTile }) {
  return (
    <div
      className={`flex h-full flex-col border border-line bg-card p-8 transition-colors hover:border-brand/40 ${
        t.span === 'wide' ? 'md:col-span-2' : ''
      }`}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">{t.eyebrow}</div>

      <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-normal text-ink">
        {t.title}
      </h3>

      {t.body && <p className="mt-4 leading-[1.7] text-body">{t.body}</p>}

      {t.items && (
        <ul className="mt-5 space-y-2.5">
          {t.items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-body">
              <span className="mt-2 inline-block h-1 w-1 shrink-0 bg-brand" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {t.href && (
        <a
          href={t.href}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-2 pt-8 font-mono text-[11px] uppercase tracking-[0.1em] text-muted transition-colors hover:text-brand"
        >
          <Icon.External className="h-4 w-4" />
          {t.linkLabel ?? 'Open'}
        </a>
      )}
    </div>
  )
}

export default function EngineeringLab() {
  return (
    <Section
      id="lab"
      index="03"
      label="Lab"
      title="Working notes"
      accent="notes"
      tone="paper"
      headerAside={
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl leading-relaxed text-body">
            What I&rsquo;m building, studying and running right now — including
            this site.
          </p>
        </Reveal>
      }
    >
      <div className="grid gap-px bg-line md:grid-cols-2">
        {labTiles.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.06} className={t.span === 'wide' ? 'md:col-span-2' : ''}>
            <Tile t={t} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
