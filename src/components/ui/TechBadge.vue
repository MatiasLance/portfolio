<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <li
    class="rounded border border-line px-2 py-0.5 font-mono text-[11px] leading-5 text-ink-muted dark:border-night-line dark:text-night-muted"
  >
    {{ label }}
  </li>
</template>
