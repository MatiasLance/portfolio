import type { Ref } from 'vue'

/**
 * Tracks which page section is currently in view. Uses a single passive
 * scroll listener with rAF throttling instead of multiple observers.
 */
export function useActiveSection(ids: readonly string[]): Ref<string> {
  const active = ref('')
  let ticking = false
  let frame = 0

  function update() {
    ticking = false

    const marker = window.scrollY + Math.min(window.innerHeight * 0.3, 240)
    let current = ''

    for (const id of ids) {
      const element = document.getElementById(id)
      if (!element) continue

      const top = element.getBoundingClientRect().top + window.scrollY
      if (top <= marker) current = id
    }

    const nearBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 96
    const lastId = ids[ids.length - 1]

    if (nearBottom && lastId) current = lastId

    active.value = current
  }

  function onScroll() {
    if (ticking) return
    ticking = true
    frame = window.requestAnimationFrame(update)
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
    if (frame) window.cancelAnimationFrame(frame)
  })

  return active
}
