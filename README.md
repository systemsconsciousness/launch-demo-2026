# Contentstack Cloud Engine — Next.js

Single-page Next.js (App Router) app: Launch deployment success screen.

## Setup

```bash
npm install
cp .env.example .env.local
# Set NEXT_PUBLIC_SITE_URL to your public URL (see SEO below)
```

## Dev

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

Static export (optional): add `output: 'export'` to `next.config.ts`, then `npm run build` — output in `out/`. **Note:** dynamic OG images (`/opengraph-image`) need a server or adapter that supports them; static export may require a different OG strategy.

## SEO & Open Graph (Slack, LinkedIn, etc.)

1. **`NEXT_PUBLIC_SITE_URL`** — Set to your **canonical** HTTPS origin (no trailing slash), e.g. `https://launch-demo.contentstack.com`. This drives `metadataBase`, canonical URL, sitemap, robots, and absolute `og:image` / Twitter image URLs. On Vercel, `VERCEL_URL` is a fallback but often not your marketing domain—set this explicitly for correct unfurls.

2. **Preview card** — `app/opengraph-image.tsx` and `app/twitter-image.tsx` render a **1200×630** branded image (dark space theme, rocket, “Hello Composable”, Launch copy). Slack and most social crawlers use `og:title`, `og:description`, and `og:image`.

3. **Optional Twitter handles** — `NEXT_PUBLIC_TWITTER_SITE` and `NEXT_PUBLIC_TWITTER_CREATOR` (e.g. `@Contentstack`) for Twitter/X cards.

4. **Refresh Slack’s cache** — After deploy, use **[Slack unfurl debugger](https://api.slack.com/docs/reference/slack-link-unfurling#debugging)** or paste a URL with a dummy query (`?v=2`) until the preview updates.

5. **Structured data** — `components/json-ld.tsx` emits **WebSite** + **WebPage** + **SoftwareApplication** JSON-LD for search engines.

Also exposed: **`/robots.txt`**, **`/sitemap.xml`**, **`/manifest.webmanifest`**.
