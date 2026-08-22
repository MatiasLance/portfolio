<script setup lang="ts">
import { skills } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <section id="skills" class="page-wrap section-space border-t border-line dark:border-night-line" aria-labelledby="skills-title">
    <SectionHeading
      id="skills-title"
      eyebrow="Skills"
      title="Tools I use in production"
      description="Grouped the way the work actually splits: application code, infrastructure, data, and the supporting toolchain."
    />

    <ul class="mt-10 divide-y divide-line border-y border-line dark:divide-night-line dark:border-night-line">
      <li v-for="group in skills" :key="group.id" class="grid gap-3 py-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-start">
        <h3 class="font-mono text-xs font-medium uppercase tracking-[0.12em] text-ink-faint dark:text-night-faint">
          {{ group.label }}
        </h3>
        <p class="text-[15px] leading-7 text-ink dark:text-night-ink">
          {{ group.items.join(' · ') }}
        </p>
      </li>
    </ul>
  </section>
</template>
