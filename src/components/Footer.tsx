import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-[#333] bg-[#1a1a1a]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b6560]">
          © {new Date().getFullYear()} {profile.shortName}. Built with React, Vite & Tailwind.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6b6560]">
          Designed & coded from Pulau Pinang 🇲🇾
        </p>
      </div>
    </footer>
  )
}