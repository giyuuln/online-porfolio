import { profile } from '../data'

export default function Footer() {
  return (
    /* `relative z-10` keeps the footer above the pinned hero, same as the
       panel stack. The extra bottom padding clears the fixed NavPill, which
       would otherwise sit on top of this text at the end of the page. */
    <footer className="relative z-10 border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 pb-28 pt-8 sm:flex-row sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
          © {new Date().getFullYear()} {profile.shortName}. Built with React, Vite & Tailwind.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
          Designed & coded from Pulau Pinang 🇲🇾
        </p>
      </div>
    </footer>
  )
}
