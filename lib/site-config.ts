/**
 * Canonical site URL for OG, sitemap, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://your-domain.com).
 */
export function getSiteUrl(): URL {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '') ||
    'http://localhost:3000'
  try {
    return new URL(raw.startsWith('http') ? raw : `https://${raw}`)
  } catch {
    return new URL('http://localhost:3000')
  }
}

export const SITE_NAME = 'Contentstack Launch'
export const SITE_TAGLINE = 'Hello Composable.'

export const SEO_DESCRIPTION =
  'Your deployment is live on Contentstack Launch—high-performance frontend hosting built for composable architectures. Ship faster with the Launch API & edge-ready workflows.'

export const SEO_TITLE = 'Contentstack | Launch'

export const SEO_KEYWORDS = [
  'Contentstack',
  'Contentstack Launch',
  'composable CMS',
  'headless CMS',
  'frontend hosting',
  'Jamstack',
  'deployment',
  'Launch API',
  'edge hosting',
  'composable architecture',
]
