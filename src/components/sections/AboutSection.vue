<script setup lang="ts">
import { expertise, profile } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <section id="about" class="page-wrap section-space border-t border-line dark:border-night-line" aria-labelledby="about-title">
    <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
      <div>
        <SectionHeading
          id="about-title"
          eyebrow="About"
          title="Application work and the environment it runs in"
        />
        <div class="mt-6 max-w-2xl space-y-4 text-[15px] leading-7 text-ink-muted dark:text-night-muted">
          <p v-for="paragraph in profile.about" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
        <blockquote
          class="mt-8 max-w-2xl border-l-2 border-pine pl-4 text-[15px] leading-7 text-ink dark:border-[#7EB8B2] dark:text-night-ink"
        >
          {{ profile.philosophy }}
        </blockquote>
      </div>

      <aside class="space-y-4">
        <article
          v-for="item in expertise"
          :key="item.title"
          class="surface-card rounded px-4 py-4"
        >
          <h3 class="text-sm font-semibold text-ink dark:text-night-ink">
            {{ item.title }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-ink-muted dark:text-night-muted">
            {{ item.text }}
          </p>
        </article>
        <p class="px-1 font-mono text-[11px] leading-5 text-ink-faint dark:text-night-faint">
          {{ profile.education.degree }}
          <br />
          {{ profile.education.school }}, {{ profile.education.year }}
        </p>
      </aside>
    </div>
  </section>
</template>
