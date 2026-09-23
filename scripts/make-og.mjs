// Generates public/og.png — the 1200x630 card that link previews show on
// LinkedIn, WhatsApp, Slack, Twitter and Google.
//
// There are no photographs in this repo, so the card is built from the site's
// own editorial system instead: the dark paper ground, the vermilion origami crane
// from the favicon, and Space Grotesk type. Regenerate after changing the wording:
//
//   node scripts/make-og.mjs
//
// Those crawlers do not execute JavaScript, so this image and the meta tags in
// index.html are the entire preview — see scripts/check-meta.mjs, which fails
// the build if they drift apart.
//
// Uses playwright-core rather than shelling out to `chrome --screenshot`.
// The raw flag reliably DROPPED everything below roughly y=540: the footer row
// measured correctly in the DOM (y=554-574, opacity 1, correct colours) and was
// still absent from the PNG. Neither --run-all-compositor-stages-before-draw
// nor restructuring the layout away from flex fixed it; playwright's capture
// renders it every time.
import { readFileSync, writeFileSync, statSync } from 'node:fs'
import { chromium } from 'playwright-core'

const OUT = 'public/og.png'
const W = 1200
const H = 630

// Point PW_CHROME at a Chromium/Chrome binary, or leave it unset to use the
// system Chrome channel.
const EXECUTABLE = process.env.PW_CHROME

// Dark-theme token values, mirrored from src/index.css (.dark block).
const PAPER = '#0f0e0c'
const INK = '#f4f1ea'
const BRAND = '#ff5a1f'
const MUTED = '#8c857a'
const LINE = '#2a2622'

// Reuse the crane straight from the favicon so the two marks never diverge.
const crane = readFileSync('public/favicon.svg', 'utf8')
  .replace(/<rect[^>]*\/>\s*/g, '') // drop the rounded card + border; keep the bird
  .replace(/width="[^"]*"|height="[^"]*"/g, '')

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&family=Inter:wght@300;400&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: ${W}px; height: ${H}px;
    background: ${PAPER};
    display: flex; flex-direction: column; justify-content: space-between;
    padding: 56px 76px;
    font-family: 'Inter', system-ui, sans-serif;
    overflow: hidden;
  }
  /* Same hairline rule language as the site's sections. */
  .rule { height: 1px; background: ${LINE}; }
  .top { display: flex; align-items: center; justify-content: space-between; }
  .brand {
    font-family: 'Space Grotesk', sans-serif; font-weight: 700;
    font-size: 26px; color: ${INK}; letter-spacing: -0.02em;
  }
  .brand span { color: ${BRAND}; }
  .crane { width: 76px; height: 76px; }
  .name {
    font-family: 'Space Grotesk', sans-serif; font-weight: 700;
    font-size: 92px; line-height: 0.9; letter-spacing: -0.045em;
    text-transform: uppercase; color: ${INK};
  }
  .name span { color: ${BRAND}; }
  .role {
    font-family: 'JetBrains Mono', monospace; font-weight: 500;
    font-size: 20px; letter-spacing: 0.16em; text-transform: uppercase;
    color: ${INK}; margin-top: 24px;
  }
  .tagline {
    font-size: 22px; line-height: 1.45; color: ${MUTED};
    margin-top: 16px; max-width: 830px; font-weight: 300;
  }
  .bottom {
    display: flex; align-items: center; justify-content: space-between;
    font-family: 'JetBrains Mono', monospace; font-size: 17px;
    letter-spacing: 0.14em; text-transform: uppercase; color: ${MUTED};
  }
  .avail { display: flex; align-items: center; gap: 12px; color: ${BRAND}; }
  .dot { width: 8px; height: 8px; background: ${BRAND}; }
</style>
</head>
<body>
  <div>
    <div class="top">
      <div class="brand">amkaz<span>.</span>dev</div>
      <div class="crane">${crane}</div>
    </div>
    <div class="rule" style="margin-top:30px"></div>
  </div>

  <div>
    <div class="name">Ammar<br><span>Hafizin</span></div>
    <div class="role">Full-Stack &amp; Android Developer</div>
    <div class="tagline">React &middot; Flask &middot; Firebase &middot; Kotlin &middot; Google Gemini API</div>
  </div>

  <div>
    <div class="rule" style="margin-bottom:22px"></div>
    <div class="bottom">
      <div class="avail"><span class="dot"></span> Open to internships</div>
      <div>Pulau Pinang, Malaysia</div>
    </div>
  </div>
</body>
</html>`

const tmp = '/tmp/og-card.html'
writeFileSync(tmp, html)

const browser = await chromium.launch(
  EXECUTABLE ? { executablePath: EXECUTABLE, args: ['--no-sandbox'] } : { channel: 'chrome' },
)
const page = await browser.newPage({ viewport: { width: W, height: H } })
// networkidle so the Google Fonts stylesheet has landed — otherwise the card
// renders in a fallback face with completely different metrics.
await page.goto(`file://${tmp}`, { waitUntil: 'networkidle' })
await page.waitForTimeout(400)
await page.screenshot({ path: OUT })
await browser.close()

const kb = Math.round(statSync(OUT).size / 1024)
console.log(`wrote ${OUT} — ${W}x${H}, ${kb}KB`)
