export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,

  modules: ['@nuxtjs/tailwindcss'],

  components: [{ path: '~/components', pathPrefix: false }],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    viewer: false,
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'scroll-smooth',
      },
      meta: [
        { name: 'theme-color', content: '#000000' },
        { name: 'color-scheme', content: 'dark' },
        { name: 'author', content: 'Marcelo Matias' },
        { name: 'robots', content: 'index, follow' },
        {
          'http-equiv': 'Content-Security-Policy',
          content:
            "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https: ws: wss:; media-src 'self' data: blob: https:; object-src 'none'; base-uri 'self'; form-action 'self';",
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://matiaslance.github.io',
    },
  },

  nitro: {
    compressPublicAssets: true,
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },
})
