<script setup lang="ts">
defineProps<{
  id?: string
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <header class="max-w-2xl">
    <p class="font-mono text-xs font-medium uppercase tracking-[0.16em] text-pine dark:text-[#7EB8B2]">
      {{ eyebrow }}
    </p>
    <h2 :id="id" class="mt-2 font-serif text-3xl font-medium tracking-tight text-ink sm:text-[2rem] dark:text-night-ink">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-3 text-[15px] leading-7 text-ink-muted dark:text-night-muted">
      {{ description }}
    </p>
  </header>
</template>
