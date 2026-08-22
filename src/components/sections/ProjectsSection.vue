<script setup lang="ts">
import { projects } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechBadge from '@/components/ui/TechBadge.vue'
</script>

<template>
  <section id="work" class="page-wrap section-space border-t border-line dark:border-night-line" aria-labelledby="work-title">
    <SectionHeading
      id="work-title"
      eyebrow="Selected work"
      title="Projects that show the stack"
      description="Resume work first. Public GitHub repositories are linked only when they exist. Live demos are omitted when a public URL is not available."
    />

    <ol class="mt-10 divide-y divide-line border-y border-line dark:divide-night-line dark:border-night-line">
      <li v-for="project in projects" :key="project.name" class="grid gap-6 py-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div>
          <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 class="font-serif text-2xl font-medium tracking-tight text-ink dark:text-night-ink">
              {{ project.name }}
            </h3>
            <span
              v-if="project.status"
              class="font-mono text-[11px] uppercase tracking-[0.12em] text-pine dark:text-[#7EB8B2]"
            >
              {{ project.status }}
            </span>
          </div>
          <p class="mt-3 text-[15px] leading-7 text-ink-muted dark:text-night-muted">
            {{ project.description }}
          </p>
          <p class="mt-4 text-[15px] leading-7 text-ink dark:text-night-ink">
            <span class="font-medium">Problem. </span>
            <span class="text-ink-muted dark:text-night-muted">{{ project.problem }}</span>
          </p>
          <ul class="mt-4 space-y-2">
            <li
              v-for="item in project.contributions"
              :key="item"
              class="flex gap-3 text-[15px] leading-7 text-ink-muted dark:text-night-muted"
            >
              <span class="mt-3 h-px w-3 shrink-0 bg-line-strong dark:bg-[#4A453E]" aria-hidden="true" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="lg:pt-1">
          <ul class="flex flex-wrap gap-1.5" aria-label="Project technologies">
            <TechBadge v-for="item in project.stack" :key="item" :label="item" />
          </ul>
          <ul v-if="project.links.length" class="mt-5 space-y-2" aria-label="Project repositories">
            <li v-for="link in project.links" :key="link.href">
              <a
                :href="link.href"
                class="text-sm text-pine underline-offset-4 hover:underline dark:text-[#7EB8B2]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.label }}
                <span class="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
          <p v-else class="mt-5 font-mono text-[11px] text-ink-faint dark:text-night-faint">
            No public repository
          </p>
        </div>
      </li>
    </ol>
  </section>
</template>
