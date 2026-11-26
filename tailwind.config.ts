import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './data/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './error.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#000000',
        surface: {
          DEFAULT: '#0A0A0A',
          soft: '#050505',
          strong: '#141414',
        },
        line: {
          DEFAULT: 'rgba(255,255,255,0.15)',
          strong: 'rgba(255,255,255,0.40)',
        },
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        page: '1200px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: 'inset 0 1px 0 0 rgba(255,255,255,0.04), 0 24px 60px -40px rgba(0,0,0,0.9)',
        lift: 'inset 0 1px 0 0 rgba(255,255,255,0.06), 0 32px 80px -36px rgba(0,0,0,0.95)',
        glow: '0 0 0 1px rgba(255,255,255,0.28), 0 18px 50px -22px rgba(255,255,255,0.18)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.82)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
