// Fails the build if the search/social metadata in the BUILT output is
// incomplete or malformed.
//
// This exists because the site shipped `twitter:card="summary_large_image"`
// with no image anywhere — so every link shared to LinkedIn, WhatsApp, Slack
// or Twitter rendered a blank card, silently, for as long as it was live.
// Metadata has no visible failure mode in the browser, so it needs a test.
//
// Runs against dist/, not index.html, because that is what crawlers actually
// receive. Usage: npm run build && node scripts/check-meta.mjs
import { readFileSync, existsSync } from 'node:fs'

const DIST = 'dist/index.html'
const ORIGIN = 'https://amkaz.dev'

if (!existsSync(DIST)) {
  console.error(`✗ ${DIST} not found — run \`npm run build\` first`)
  process.exit(1)
}

const html = readFileSync(DIST, 'utf8')
const errors = []

// --- meta tags -------------------------------------------------------------
const meta = new Map()
for (const tag of html.match(/<meta\s[^>]*>/gs) ?? []) {
  const key = tag.match(/(?:property|name)="([^"]+)"/)?.[1]
  const content = tag.match(/content="([^"]*)"/s)?.[1]
  if (key) meta.set(key, content ?? '')
}

const REQUIRED = [
  'description',
  'og:type',
  'og:url',
  'og:title',
  'og:description',
  'og:image',
  'og:image:width',
  'og:image:height',
  'og:site_name',
  'twitter:card',
  'twitter:title',
  'twitter:description',
  'twitter:image',
]

for (const key of REQUIRED) {
  if (!meta.has(key)) errors.push(`missing <meta> "${key}"`)
  else if (!meta.get(key).trim()) errors.push(`empty <meta> "${key}"`)
}

// Relative image paths are silently ignored by every major crawler.
for (const key of ['og:image', 'twitter:image']) {
  const v = meta.get(key)
  if (v && !v.startsWith('http')) errors.push(`"${key}" must be an absolute URL, got "${v}"`)
}

// A large-image card with no image is the exact bug this script was born from.
if (meta.get('twitter:card') === 'summary_large_image' && !meta.get('twitter:image')) {
  errors.push('twitter:card is "summary_large_image" but twitter:image is missing')
}

// --- canonical -------------------------------------------------------------
const canonical = html.match(/<link[^>]+rel="canonical"[^>]*>/)?.[0]
if (!canonical) errors.push('missing <link rel="canonical">')
else if (!/href="https?:\/\//.test(canonical)) errors.push('canonical href must be absolute')

// --- structured data -------------------------------------------------------
const ld = html.match(/<script[^>]+application\/ld\+json[^>]*>(.*?)<\/script>/s)?.[1]
if (!ld) {
  errors.push('missing JSON-LD structured data')
} else {
  try {
    const data = JSON.parse(ld)
    for (const field of ['@context', '@type', 'name', 'url']) {
      if (!data[field]) errors.push(`JSON-LD missing "${field}"`)
    }
    if (data['@type'] !== 'Person') errors.push(`JSON-LD @type should be "Person", got "${data['@type']}"`)
  } catch (e) {
    errors.push(`JSON-LD does not parse: ${e.message}`)
  }
}

// --- referenced assets actually exist --------------------------------------
for (const key of ['og:image', 'twitter:image']) {
  const v = meta.get(key)
  if (!v?.startsWith(ORIGIN)) continue
  const path = `dist${v.slice(ORIGIN.length)}`
  if (!existsSync(path)) errors.push(`"${key}" points at ${v} but ${path} was not built`)
}

for (const f of ['dist/robots.txt', 'dist/sitemap.xml']) {
  if (!existsSync(f)) errors.push(`missing ${f}`)
}

// --- og:image dimensions match the declared ones ---------------------------
const ogImage = meta.get('og:image')
if (ogImage?.startsWith(ORIGIN)) {
  const path = `dist${ogImage.slice(ORIGIN.length)}`
  if (existsSync(path) && path.endsWith('.png')) {
    const buf = readFileSync(path)
    // PNG IHDR: width and height are big-endian uint32 at byte offsets 16/20.
    const w = buf.readUInt32BE(16)
    const h = buf.readUInt32BE(20)
    const declaredW = Number(meta.get('og:image:width'))
    const declaredH = Number(meta.get('og:image:height'))
    if (w !== declaredW || h !== declaredH) {
      errors.push(`og:image is ${w}x${h} but og:image:width/height declare ${declaredW}x${declaredH}`)
    }
  }
}

if (errors.length) {
  console.error('✗ metadata problems:')
  for (const e of errors) console.error(`    ${e}`)
  process.exit(1)
}

console.log(`✓ metadata complete (${REQUIRED.length} tags, canonical, JSON-LD Person, robots, sitemap)`)
