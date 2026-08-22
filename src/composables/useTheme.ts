import { onMounted, ref } from 'vue'

export type Theme = 'light' | 'dark'

function prefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    'content',
    theme === 'dark' ? '#141210' : '#F3F0E8',
  )
}

export function useTheme() {
  const theme = ref<Theme>('light')

  function setTheme(next: Theme) {
    theme.value = next
    localStorage.setItem('theme', next)
    applyTheme(next)
  }

  function toggleTheme() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
    const stored = localStorage.getItem('theme')
    const initial: Theme = stored === 'dark' || stored === 'light' ? stored : prefersDark() ? 'dark' : 'light'
    theme.value = initial
    applyTheme(initial)

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const next: Theme = event.matches ? 'dark' : 'light'
        theme.value = next
        applyTheme(next)
      }
    }
    media.addEventListener('change', onChange)
  })

  return { theme, toggleTheme }
}
