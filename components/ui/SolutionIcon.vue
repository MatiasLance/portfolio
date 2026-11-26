<script setup lang="ts">
import type { SolutionIconName } from '~/types/portfolio'

defineProps<{
  name: SolutionIconName
}>()
</script>

<template>
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    stroke-width="1.4"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    class="h-6 w-6"
  >
    <template v-if="name === 'application'">
      <rect x="3.5" y="5.5" width="25" height="21" rx="4" />
      <path d="M3.5 11.5h25" />
      <path d="M8.5 8.5h.01M11.5 8.5h.01" stroke-width="2.2" />
      <path d="M9 16.5h7M9 21h10" />
      <rect x="20" y="15.5" width="5" height="5" rx="1.5" />
    </template>

    <template v-else-if="name === 'commerce'">
      <path d="M5.5 10.5h21l-1.6 14.2a2.5 2.5 0 0 1-2.5 2.3H9.6a2.5 2.5 0 0 1-2.5-2.3L5.5 10.5Z" />
      <path d="M11 10.5V9a5 5 0 0 1 10 0v1.5" />
      <path d="M12 17.5h8" />
      <path d="M12 21h5" />
    </template>

    <template v-else-if="name === 'cms'">
      <rect x="3.5" y="5" width="25" height="22" rx="4" />
      <path d="M3.5 11h25" />
      <rect x="8" y="15" width="7" height="7" rx="1.5" />
      <path d="M19 15.5h6M19 19h6M19 22.5h4" />
    </template>

    <template v-else>
      <path d="M9.5 22.5H8a5 5 0 0 1-.8-9.94A7.5 7.5 0 0 1 21.7 10.2 5.5 5.5 0 0 1 24.5 21h-2" />
      <rect x="10" y="19.5" width="12" height="3" rx="1.2" />
      <rect x="10" y="24.5" width="12" height="3" rx="1.2" />
      <path d="M12.5 21h.01M12.5 26h.01" stroke-width="2" />
    </template>
  </svg>
</template>
