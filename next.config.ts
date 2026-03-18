import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  poweredByHeader: false,
  compress: true,
  experimental: {
    // Inlines app CSS into <style> — removes render-blocking CSS link (major mobile PSI win)
    inlineCss: true,
  },
}

export default nextConfig
