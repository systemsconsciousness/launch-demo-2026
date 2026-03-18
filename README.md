# Contentstack Launch — Next.js

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

## Performance (PageSpeed / Lighthouse)

- **No Material Symbols font** — The hero rocket is an **inline SVG** (same glyph as the favicon) so the page avoids the multi‑MB Google Fonts icon file and render‑blocking `fonts.googleapis.com` CSS.
- **Inter variable font** — One self‑hosted file via `next/font` + `adjustFontFallback` to limit layout shift.
- **Stable LCP region** — Fixed min dimensions on the rocket block; glow is contained (no `-inset-*` bleed) to reduce CLS.
- **Compositor‑friendly motion** — Removed `background-position` “shine” on the headline and non‑composited SVG stroke pulsing; rocket float uses **transform + `will-change`** only.
- **Modern `browserslist`** — Fewer legacy polyfills in the client bundle.

Re‑run Lighthouse after deploy; scores can still vary with TTFB and caching.

### Mobile PageSpeed (97 → target 100)

- **`experimental.inlineCss`** — Inlines styles in HTML so there is no render‑blocking `.css` request (fixes the ~300 ms CSS chain on mobile).
- **Stricter `browserslist` (production only)** — Drops unnecessary polyfills (`Array.at`, `flat`, `Object.hasOwn`, etc.) and trims parse time on the main chunk. Targets Chrome/Edge/Firefox **115+**, **Android Chrome 115+**, Safari/iOS **17+**. Widen the list if you must support older devices.
- **Inter** — Explicit `fallback` stack + `adjustFontFallback` + `preload` so the headline can use metrics‑matched fallback while the font loads.
