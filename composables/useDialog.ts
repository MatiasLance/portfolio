import type { Ref } from 'vue'

interface UseDialogOptions {
  open: Ref<boolean>
  panel: Ref<HTMLElement | null>
  onClose: () => void
}

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

/**
 * Shared accessible dialog behavior: scroll lock, focus trap, Escape to
 * close, background inerting, and focus restoration. Both the mobile nav
 * and the project drawer are teleported outside the Nuxt root, so inerting
 * `#__nuxt` keeps the rest of the page out of the tab order.
 */
export function useDialog({ open, panel, onClose }: UseDialogOptions) {
  let lastFocused: HTMLElement | null = null
  let previousOverflow = ''
  let previousPaddingRight = ''
  let inertRoot: HTMLElement | null = null
  let active = false

  function getFocusable(): HTMLElement[] {
    if (!panel.value) return []

    return Array.from(panel.value.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
      (element) => element.offsetParent !== null || element === document.activeElement,
    )
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!open.value) return

    if (event.key === 'Escape') {
      event.preventDefault()
      onClose()
      return
    }

    if (event.key !== 'Tab') return

    const focusable = getFocusable()

    if (focusable.length === 0) {
      event.preventDefault()
      panel.value?.focus()
      return
    }

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (!first || !last) return

    const atStart = document.activeElement === first || document.activeElement === panel.value

    if (event.shiftKey && atStart) {
      event.preventDefault()
      last.focus()
      return
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  async function activate() {
    if (active) return
    active = true

    lastFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    previousOverflow = document.body.style.overflow
    previousPaddingRight = document.body.style.paddingRight

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    inertRoot = document.getElementById('__nuxt')
    inertRoot?.setAttribute('inert', '')

    await nextTick()

    const focusable = getFocusable()
    ;(focusable[0] ?? panel.value)?.focus()
    document.addEventListener('keydown', handleKeydown)
  }

  function deactivate() {
    if (!active) return
    active = false

    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = previousOverflow
    document.body.style.paddingRight = previousPaddingRight
    inertRoot?.removeAttribute('inert')
    inertRoot = null

    if (lastFocused?.isConnected) lastFocused.focus()
    lastFocused = null
  }

  watch(open, async (isOpen: boolean) => {
    if (isOpen) {
      await activate()
      return
    }

    deactivate()
  })

  onBeforeUnmount(() => {
    if (active) deactivate()
  })
}
