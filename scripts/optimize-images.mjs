/**
 * One-off asset pipeline: generates responsive AVIF/WebP/JPEG variants,
 * the Open Graph image, and the Apple touch icon from the source photos.
 * Run with:  node scripts/optimize-images.mjs
 * (sharp is installed with --no-save; this script is not part of the site build)
 */
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const SRC = 'public/images'
const OUT = 'public/images'

const jobs = [
  // name, source, widths, fit
  { base: 'kit-rashid-mountains', src: `${SRC}/kit-rashid-mountains.jpeg`, widths: [640, 960, 1435] },
  { base: 'kit-rashid-performing', src: `${SRC}/kit-rashid-performing.jpeg`, widths: [480, 768, 1024] },
  { base: 'kit-rashid-stone-steps', src: `${SRC}/kit-rashid-stone-steps.jpeg`, widths: [480, 768, 1024] },
  { base: 'kit-rashid-artist-studios', src: `${SRC}/kit-rashid-artist-studios.jpeg`, widths: [480, 768, 1024] },
  { base: 'blue-ridge-ridgelines', src: `${SRC}/source/blue-ridge-ridgelines.jpg`, widths: [768, 1280, 1920] },
]

for (const job of jobs) {
  for (const width of job.widths) {
    const img = sharp(job.src).resize({ width, withoutEnlargement: true })
    await img.clone().avif({ quality: 55, effort: 4 }).toFile(`${OUT}/${job.base}-${width}.avif`)
    await img.clone().webp({ quality: 70 }).toFile(`${OUT}/${job.base}-${width}.webp`)
    await img
      .clone()
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(`${OUT}/${job.base}-${width}.jpg`)
    console.log(`${job.base} @ ${width}w done`)
  }
}

// --- Open Graph image: 1200x630 crop + brand text overlay -------------------
const ogWidth = 1200
const ogHeight = 630
const ogBase = await sharp(`${SRC}/kit-rashid-mountains.jpeg`)
  .resize({ width: ogWidth, height: ogHeight, fit: 'cover', position: 'attention' })
  .modulate({ brightness: 0.62 })
  .toBuffer()

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
const ogSvg = `<svg width="${ogWidth}" height="${ogHeight}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="rgba(10,25,17,0.18)"/>
  <text x="60" y="295" font-family="Georgia, serif" font-size="34" letter-spacing="6" fill="#d9b877">ASHEVILLE, NORTH CAROLINA</text>
  <text x="57" y="385" font-family="Georgia, serif" font-size="86" font-weight="bold" fill="#f7f2e7">${esc('Mountain Piper')}</text>
  <text x="60" y="455" font-family="Georgia, serif" font-size="36" fill="#f7f2e7">Traditional Scottish bagpiping &amp; interceltic music</text>
  <text x="60" y="512" font-family="Georgia, serif" font-size="30" fill="#d9b877">Weddings &#183; Funerals &amp; Memorials &#183; Events &#183; Lessons</text>
</svg>`

await sharp(ogBase)
  .composite([{ input: Buffer.from(ogSvg), top: 0, left: 0 }])
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(`${OUT}/og-image.jpg`)
console.log('og-image.jpg done')

// --- Apple touch icon from the SVG favicon ---------------------------------
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#12271c"/>
  <g fill="none" stroke="#d9b877" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 44 L24 22 L32 34 L38 25 L54 44"/>
    <path d="M16 44 H48"/>
    <path d="M46 12 V34 M42 16 H50"/>
  </g>
</svg>`
await sharp(Buffer.from(faviconSvg)).png().toFile('public/apple-touch-icon.png')
console.log('apple-touch-icon.png done')
