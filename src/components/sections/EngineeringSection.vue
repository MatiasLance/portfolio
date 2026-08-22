<script setup lang="ts">
import { infrastructure } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <section
    id="infrastructure"
    class="page-wrap section-space border-t border-line dark:border-night-line"
    aria-labelledby="infrastructure-title"
  >
    <SectionHeading
      id="infrastructure-title"
      eyebrow="Infrastructure"
      title="How production work is done"
      description="Docker, Nginx, DigitalOcean, Linux, DNS, and the scripts that make a release repeatable."
    />

    <p class="mt-6 max-w-2xl text-[15px] leading-7 text-ink-muted dark:text-night-muted">
      {{ infrastructure.intro }}
    </p>

    <ol class="mt-10 grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2 dark:border-night-line dark:bg-night-line">
      <li
        v-for="(item, index) in infrastructure.items"
        :key="item.title"
        class="bg-paper-raised p-5 dark:bg-night-raised"
      >
        <p class="font-mono text-[11px] text-ink-faint dark:text-night-faint">
          {{ String(index + 1).padStart(2, '0') }}
        </p>
        <h3 class="mt-2 text-sm font-semibold text-ink dark:text-night-ink">
          {{ item.title }}
        </h3>
        <p class="mt-2 text-sm leading-6 text-ink-muted dark:text-night-muted">
          {{ item.detail }}
        </p>
      </li>
    </ol>

    <p class="mt-8 max-w-2xl text-[15px] leading-7 text-ink-muted dark:text-night-muted">
      {{ infrastructure.currently }}
    </p>
  </section>
</template>
