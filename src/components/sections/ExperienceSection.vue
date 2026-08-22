<script setup lang="ts">
import { experience } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechBadge from '@/components/ui/TechBadge.vue'
</script>

<template>
  <section
    id="experience"
    class="page-wrap section-space border-t border-line dark:border-night-line"
    aria-labelledby="experience-title"
  >
    <SectionHeading
      id="experience-title"
      eyebrow="Experience"
      title="How the role is structured"
      description="One position, three kinds of work: infrastructure, application development, and the systems that keep sites reachable."
    />

    <article
      v-for="role in experience"
      :key="role.company"
      class="mt-10 grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]"
    >
      <div>
        <p class="font-serif text-xl font-medium text-ink dark:text-night-ink">
          {{ role.company }}
        </p>
        <p class="mt-1 text-sm text-ink-muted dark:text-night-muted">
          {{ role.title }}
        </p>
        <p class="mt-3 font-mono text-xs leading-5 text-ink-faint dark:text-night-faint">
          {{ role.period }}
          <br />
          {{ role.location }}
        </p>
      </div>

      <div>
        <p class="text-[15px] leading-7 text-ink-muted dark:text-night-muted">
          {{ role.summary }}
        </p>

        <div class="mt-8 space-y-7">
          <section v-for="area in role.areas" :key="area.title">
            <h3 class="text-sm font-semibold text-ink dark:text-night-ink">
              {{ area.title }}
            </h3>
            <ul class="mt-3 space-y-2">
              <li
                v-for="point in area.points"
                :key="point"
                class="flex gap-3 text-[15px] leading-7 text-ink-muted dark:text-night-muted"
              >
                <span class="mt-3 h-px w-3 shrink-0 bg-line-strong dark:bg-[#4A453E]" aria-hidden="true" />
                <span>{{ point }}</span>
              </li>
            </ul>
          </section>
        </div>

        <ul class="mt-8 flex flex-wrap gap-1.5" aria-label="Technologies used">
          <TechBadge v-for="item in role.stack" :key="item" :label="item" />
        </ul>
      </div>
    </article>
  </section>
</template>
