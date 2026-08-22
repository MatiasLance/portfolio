import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { copyFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

function githubPagesSupport(): Plugin {
  return {
    name: 'github-pages-support',
    closeBundle() {
      const dist = resolve(process.cwd(), 'dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
      writeFileSync(resolve(dist, '.nojekyll'), '')

      const siteUrl = (process.env.VITE_SITE_URL || 'https://matiaslance.github.io').replace(/\/$/, '')
      const base = process.env.VITE_BASE || './'
      const pathPrefix = base === './' || base === '/' ? '' : base.replace(/\/$/, '')
      const canonical = `${siteUrl}${pathPrefix}`

      writeFileSync(
        resolve(dist, 'robots.txt'),
        [`User-agent: *`, `Allow: /`, ``, `Sitemap: ${canonical}/sitemap.xml`, ``].join('\n'),
      )

      writeFileSync(
        resolve(dist, 'sitemap.xml'),
        [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          `  <url>`,
          `    <loc>${canonical}/</loc>`,
          `    <changefreq>monthly</changefreq>`,
          `    <priority>1.0</priority>`,
          `  </url>`,
          `</urlset>`,
          ``,
        ].join('\n'),
      )
    },
  }
}

export default defineConfig({
  base: process.env.VITE_BASE || './',
  plugins: [vue(), githubPagesSupport()],
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
