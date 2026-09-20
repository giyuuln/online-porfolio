import { principles } from '../data'
import Section from './Section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './shadcn/accordion'
import { Reveal } from './ui'

/**
 * Section 04 — how the work gets done, as a terminal-style disclosure list.
 *
 * Each entry ends in a cited quote from the project it came from, which is
 * the point: the claim and its evidence ship together, so a reader can check
 * any principle against the project that produced it.
 */
export default function Principles() {
  return (
    <Section
      id="principles"
      index="04"
      label="Principles"
      title="How I work"
      accent="work"
      tone="sand"
      headerAside={
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl leading-relaxed text-body">
            Five habits that show up in every system I build. Each one cites the
            project it came from.
          </p>
        </Reveal>
      }
    >
      <Reveal>
        <div className="border border-line bg-card">
          {/* Terminal chrome */}
          <div className="flex items-center gap-3 border-b border-line px-5 py-3">
            <span className="inline-block h-1.5 w-1.5 bg-gold" aria-hidden />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              amkaz@portfolio:~$ cat principles.md
            </span>
          </div>

          <div className="px-5 sm:px-8">
            {/* First entry starts open so the claim-plus-evidence pattern is
                visible without a click. */}
            <Accordion
              type="single"
              collapsible
              defaultValue={principles[0]?.id}
              className="w-full"
            >
              {principles.map((p, i) => (
                <AccordionItem
                  key={p.id}
                  value={p.id}
                  className={i === 0 ? 'border-t-0' : undefined}
                >
                  <AccordionTrigger>
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>
                        <span className="block font-display text-lg font-bold uppercase tracking-tight text-ink">
                          {p.title}
                        </span>
                        <span className="mt-1 block text-sm text-muted">{p.summary}</span>
                      </span>
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="pl-0 sm:pl-10">
                    <div className="space-y-3">
                      {p.detail.map((d) => (
                        <p key={d} className="leading-[1.7] text-body">
                          {d}
                        </p>
                      ))}
                    </div>

                    <figure className="mt-6 border-l-2 border-gold pl-4">
                      <blockquote className="text-sm italic leading-relaxed text-body">
                        &ldquo;{p.evidence}&rdquo;
                      </blockquote>
                      <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                        — {p.source}
                      </figcaption>
                    </figure>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
