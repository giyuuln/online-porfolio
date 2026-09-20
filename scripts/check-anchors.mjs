// Fails if any in-page anchor points at a section id that doesn't exist.
//
// TypeScript cannot catch this: Nav.tsx stores links as plain strings in an
// object array, and Hero.tsx has a hard-coded scroll-chevron href. Renaming a
// section id silently breaks navigation with no build error.
//
// Usage: node scripts/check-anchors.mjs
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry)
    return statSync(full).isDirectory() ? walk(full) : full.endsWith('.tsx') ? [full] : []
  })
}

const hrefs = new Set()
const ids = new Set(['top']) // Hero renders id="top"

for (const file of walk('src')) {
  const src = readFileSync(file, 'utf8')
  // JSX attribute form: href="#work"
  for (const [, a] of src.matchAll(/href="#([a-z-]+)"/g)) hrefs.add(a)
  // Object-literal form used by Nav's links array: href: '#work'
  for (const [, a] of src.matchAll(/href:\s*'#([a-z-]+)'/g)) hrefs.add(a)
  // Plain id="work", and the id passed to the shared <Section> wrapper
  for (const [, a] of src.matchAll(/\bid="([a-z-]+)"/g)) ids.add(a)
  for (const [, a] of src.matchAll(/<Section\s+id="([a-z-]+)"/g)) ids.add(a)
}

const dead = [...hrefs].filter((a) => !ids.has(a)).sort()

if (dead.length > 0) {
  console.error(`✗ dead anchor(s): ${dead.map((a) => `#${a}`).join(', ')}`)
  console.error(`  ids available: ${[...ids].sort().join(', ')}`)
  process.exit(1)
}

console.log(`✓ all ${hrefs.size} anchors resolve`)
