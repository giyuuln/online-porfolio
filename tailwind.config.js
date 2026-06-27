/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Editorial theme tokens — backed by CSS variables so a single
        // `.dark` class flip swaps the whole palette (see src/index.css).
        paper: 'var(--paper)',
        sand: 'var(--sand)',
        card: 'var(--card)',
        ink: 'var(--ink)',
        body: 'var(--body)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        gold: 'var(--gold)',
      },
    },
  },
  plugins: [],
}
