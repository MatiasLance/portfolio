<script setup lang="ts">
import { ArrowRight, CalendarDays } from 'lucide-vue-next'
import { hero, metrics, profile } from '~/data/portfolio'
</script>

<template>
  <section class="relative isolate overflow-hidden pb-16 pt-32 sm:pt-36 lg:pb-20 lg:pt-40">
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="bg-grid mask-fade absolute inset-0 opacity-70" />
      <div
        class="absolute -top-48 left-1/2 h-[34rem] w-[64rem] -translate-x-1/2 rounded-full bg-white/[0.09] blur-[130px]"
      />
      <div
        class="absolute right-[-10rem] top-1/3 h-72 w-72 rounded-full bg-white/[0.05] blur-[110px]"
      />
      <div
        class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </div>

    <div class="container-page">
      <div class="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div class="lg:col-span-7 xl:col-span-8">
          <div class="animate-fade-up">
            <div
              class="inline-flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl border border-line bg-white/[0.03] px-3.5 py-2 backdrop-blur-sm sm:rounded-full"
            >
              <span class="inline-flex items-center gap-2">
                <span class="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60"
                  />
                  <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <span
                  class="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-300"
                >
                  {{ profile.availability.label }}
                </span>
              </span>
              <span class="hidden h-3 w-px bg-white/10 sm:block" aria-hidden="true" />
              <span
                class="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 sm:inline"
              >
                {{ profile.location }}
              </span>
            </div>
          </div>

          <h1
            class="animate-fade-up mt-7 text-[clamp(2.25rem,6.8vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white"
            style="animation-delay: 80ms"
          >
            {{ hero.headline }}
            <br class="hidden sm:block" />
            <span class="text-gradient text-shadow-glow">{{ hero.headlineAccent }}</span>
          </h1>

          <p
            class="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg"
            style="animation-delay: 150ms"
          >
            {{ hero.description }}
          </p>

          <div
            class="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            style="animation-delay: 220ms"
          >
            <a :href="hero.primaryCta.href" class="btn-primary group w-full sm:w-auto">
              {{ hero.primaryCta.label }}
              <ArrowRight
                class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a :href="hero.secondaryCta.href" class="btn-secondary group w-full sm:w-auto">
              <CalendarDays
                class="h-4 w-4 text-neutral-400 transition-colors group-hover:text-white/80"
                aria-hidden="true"
              />
              {{ hero.secondaryCta.label }}
            </a>
          </div>

          <div
            class="animate-fade-up mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-neutral-500"
            style="animation-delay: 290ms"
          >
            <span class="h-px w-6 bg-line-strong" aria-hidden="true" />
            <span>{{ hero.note }}</span>
            <span class="hidden h-1 w-1 rounded-full bg-neutral-700 sm:block" aria-hidden="true" />
            <span class="hidden font-mono uppercase tracking-[0.14em] sm:inline">{{ profile.timezone }}</span>
          </div>
        </div>

        <aside
          class="animate-fade-up hidden lg:col-span-5 lg:block xl:col-span-4"
          style="animation-delay: 260ms"
          aria-label="Partner snapshot"
        >
          <div
            class="rounded-3xl bg-gradient-to-b from-white/[0.1] via-white/[0.03] to-transparent p-px"
          >
            <div class="rounded-[calc(1.5rem-1px)] bg-[#0A0A0A]/95 p-6 backdrop-blur-xl">
              <div class="flex items-center justify-between gap-3">
                <span
                  class="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500"
                >
                  {{ hero.snapshot.label }}
                </span>
                <span
                  class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white"
                >
                  <span class="h-1 w-1 rounded-full bg-white" aria-hidden="true" />
                  Open
                </span>
              </div>

              <dl class="mt-6">
                <div
                  v-for="(row, index) in hero.snapshot.rows"
                  :key="row.label"
                  class="border-b border-line py-4 first:pt-0 last:border-0 last:pb-0"
                  :class="index === 0 ? 'pt-0' : ''"
                >
                  <dt
                    class="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600"
                  >
                    {{ row.label }}
                  </dt>
                  <dd class="mt-1.5 text-[13px] font-medium leading-snug text-neutral-200">
                    {{ row.value }}
                  </dd>
                </div>
              </dl>

              <div class="mt-5 rounded-xl border border-line bg-canvas/60 p-4">
                <p class="font-mono text-[11px] leading-relaxed text-neutral-400">
                  “{{ profile.philosophy }}”
                </p>
              </div>

              <div class="mt-5 flex items-center justify-between gap-3">
                <span
                  class="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600"
                >
                  Response time
                </span>
                <span class="text-[11px] text-neutral-400">{{ profile.responseTime }}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <dl
        class="animate-fade-up mt-14 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-surface/40 backdrop-blur-sm sm:mt-16 sm:grid-cols-4"
        style="animation-delay: 340ms"
      >
        <div
          v-for="(metric, index) in metrics"
          :key="metric.label"
          class="px-5 py-5 sm:px-6 sm:py-6"
          :class="[
            index < 2 ? 'border-b border-line sm:border-b-0' : '',
            index % 2 === 0 ? 'border-r border-line' : '',
            index < 3 ? 'sm:border-r sm:border-line' : 'sm:border-r-0',
          ]"
        >
          <dd class="font-mono text-xl font-medium tracking-[-0.02em] text-white sm:text-2xl">
            {{ metric.value }}
          </dd>
          <dt
            class="mt-1.5 font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-neutral-500"
          >
            {{ metric.label }}
          </dt>
        </div>
      </dl>
    </div>
  </section>
</template>
