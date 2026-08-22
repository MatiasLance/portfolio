/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F3F0E8',
          raised: '#FBF8F1',
        },
        ink: {
          DEFAULT: '#1C1917',
          muted: '#57534E',
          faint: '#6B655C',
        },
        line: {
          DEFAULT: '#DED8CC',
          strong: '#C4BDB0',
        },
        pine: {
          DEFAULT: '#0F6B63',
          dark: '#0B534C',
          soft: '#D7EDEA',
        },
        night: {
          DEFAULT: '#141210',
          raised: '#1C1A17',
          line: '#2E2B26',
          ink: '#F3EEE4',
          muted: '#A8A29E',
          faint: '#7A746C',
        },
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Source Serif 4', 'ui-serif', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        page: '72rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(28, 25, 23, 0.06)',
      },
    },
  },
  plugins: [],
}
