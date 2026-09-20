// Screenshot harness for visual QA.
//
// Every section is wrapped in <Reveal> (framer-motion `whileInView`) and the
// hero uses an IntersectionObserver blur-in. In headless Chrome those leave
// the page blank or mid-animation, so this injects CSS that force-completes
// them: framer-motion writes INLINE styles, which only `!important` can beat.
//
// Usage: node scripts/shot.mjs <url> <out.png> [width] [height] [anchor] [theme]
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { execFileSync } from 'node:child_process'

const [url, out, w = '1440', h = '1000', anchor = '', theme = 'dark', offset = '0'] = process.argv.slice(2)
if (!url || !out) {
  console.error('usage: node scripts/shot.mjs <url> <out.png> [w] [h] [anchor] [theme] [offsetPx]')
  process.exit(1)
}

const harness = `
<style>
  html { scroll-behavior: auto !important; }
  /* Defeat framer-motion + BlurText inline styles */
  [style*="opacity"], [style*="transform"], [style*="filter"] {
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
    transition: none !important;
  }
  *, *::before, *::after { animation: none !important; transition: none !important; }
  /* Deterministic "scroll": shift the app up by a fixed pixel offset. JS
     scrolling races the headless virtual clock; a margin never does. */
  #root { margin-top: -${Number(offset)}px; }
</style>
<script>
  try {
    localStorage.setItem('theme', ${JSON.stringify(theme)});
  } catch (e) {}
  document.documentElement.classList.toggle('dark', ${theme === 'dark'});
  addEventListener('load', function () {
    var anchor = ${JSON.stringify(anchor)};
    if (!anchor) return;
    // Scroll once, late, so the reveal CSS above has already applied.
    setTimeout(function () {
      var el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 600);
  });
</script>
`

const base = url.replace(/\/[^/]*$/, '/')
const res = await fetch(url)
let html = await res.text()
// Injected at the END of <head> so it wins over the page's own styles.
// No <base> tag: the file is served from the same origin as index.html, so
// the absolute /assets/... URLs already resolve.
html = html.replace('</head>', harness + '</head>')

const tmp = new URL('./_shot_tmp.html', `file://${process.cwd()}/dist/`).pathname
mkdirSync(dirname(tmp), { recursive: true })
writeFileSync(tmp, html)

const served = base + '_shot_tmp.html'
execFileSync(
  '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  [
    '--headless', '--no-sandbox', '--hide-scrollbars',
    `--window-size=${w},${h}`,
    '--virtual-time-budget=15000',
    `--screenshot=${out}`,
    served,
  ],
  { stdio: 'ignore' },
)
console.log('wrote', out)
