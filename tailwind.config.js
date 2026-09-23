import tailwindcssAnimate from 'tailwindcss-animate'

/**
 * Tokens are stored in src/index.css as space-separated RGB channels, so every
 * colour is declared as `rgb(var(--x) / <alpha-value>)`. The `<alpha-value>`
 * placeholder is what lets Tailwind synthesise opacity modifiers — with plain
 * `var(--x)` hex strings, classes like `border-brand/40` silently emit NO CSS.
 */
const t = (v) => `rgb(var(${v}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // ── Editorial tokens (canonical) ──────────────────────────────────
        paper: t('--paper'),
        sand: t('--sand'),
        ink: t('--ink'),
        body: t('--body'),
        line: t('--line'),
        brand: t('--brand'),
        'on-brand': t('--on-brand'),

        // `muted` stays a SCALAR text colour. The site uses `text-muted` for
        // secondary copy in 21 places; turning it into an object would change
        // what `text-muted` resolves to and wash out every section. shadcn's
        // muted *background* lives under `subtle` instead — see index.css.
        muted: t('--muted'),

        // `card` gains a `foreground` while keeping DEFAULT, so the existing
        // `bg-card` call sites are byte-identical and `text-card-foreground`
        // resolves for vendored components.
        card: {
          DEFAULT: t('--card'),
          foreground: t('--card-foreground'),
        },

        // ── shadcn/ui semantic keys, pointed at the editorial tokens ──────
        background: t('--background'),
        foreground: t('--foreground'),
        border: t('--border'),
        input: t('--input'),
        ring: t('--ring'),
        primary: { DEFAULT: t('--primary'), foreground: t('--primary-foreground') },
        secondary: { DEFAULT: t('--secondary'), foreground: t('--secondary-foreground') },
        subtle: { DEFAULT: t('--subtle'), foreground: t('--subtle-foreground') },
        accent: { DEFAULT: t('--accent'), foreground: t('--accent-foreground') },
        destructive: { DEFAULT: t('--destructive'), foreground: t('--destructive-foreground') },
        popover: { DEFAULT: t('--popover'), foreground: t('--popover-foreground') },
      },
      // --radius is 0, keeping vendored shadcn components square and on-brand.
      // Note: shadcn's usual `calc(var(--radius) - 2px)` would yield -2px here.
      borderRadius: {
        lg: 'var(--radius)',
        md: 'var(--radius)',
        sm: 'var(--radius)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.22s cubic-bezier(0.22, 1, 0.36, 1)',
        'accordion-up': 'accordion-up 0.22s cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
