<script setup lang="ts">
import { Check, Copy } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    value: string
    label?: string
    copiedLabel?: string
  }>(),
  {
    label: 'Copy',
    copiedLabel: 'Copied',
  },
)

const copied = ref(false)
let resetTimer: ReturnType<typeof setTimeout> | undefined

function fallbackCopy(text: string) {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  const succeeded = document.execCommand('copy')
  document.body.removeChild(textarea)

  if (!succeeded) throw new Error('Copy command failed')
}

async function copy() {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(props.value)
    } else {
      fallbackCopy(props.value)
    }

    copied.value = true
    if (resetTimer) clearTimeout(resetTimer)
    resetTimer = setTimeout(() => {
      copied.value = false
    }, 2200)
  } catch {
    copied.value = false
  }
}

onBeforeUnmount(() => {
  if (resetTimer) clearTimeout(resetTimer)
})
</script>

<template>
  <button
    type="button"
    class="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs font-medium text-neutral-400 transition duration-200 hover:bg-white/[0.05] hover:text-white"
    :aria-label="copied ? 'Email address copied to clipboard' : label"
    @click="copy"
  >
    <Check v-if="copied" class="h-4 w-4 text-white" aria-hidden="true" />
    <Copy v-else class="h-4 w-4" aria-hidden="true" />
    <span>{{ copied ? copiedLabel : label }}</span>
    <span class="sr-only" aria-live="polite">
      {{ copied ? 'Copied to clipboard' : '' }}
    </span>
  </button>
</template>
