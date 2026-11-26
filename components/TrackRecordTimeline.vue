<script setup lang="ts">
import {
  Building2,
  CreditCard,
  Gauge,
  Search,
  Server,
  ShieldCheck,
  TrendingDown,
  Zap,
} from 'lucide-vue-next'
import type { Component } from 'vue'
import { achievements, currentRole, sectionCopy } from '~/data/portfolio'
import type { AchievementIconName } from '~/types/portfolio'

const copy = sectionCopy['track-record']

const achievementIcons = {
  foundation: Building2,
  cost: TrendingDown,
  velocity: Zap,
  reliability: Server,
  payments: CreditCard,
  security: ShieldCheck,
  performance: Gauge,
  seo: Search,
} satisfies Record<AchievementIconName, Component>
</script>

<template>
  <section
    id="track-record"
    aria-labelledby="track-record-title"
    class="section-pad relative border-t border-line/60"
  >
    <div class="container-page">
      <SectionHeading
        :eyebrow="copy.eyebrow"
        :title="copy.title"
        :description="copy.description"
        title-id="track-record-title"
      />

      <div class="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
        <aside class="lg:col-span-4">
          <div class="lg:sticky lg:top-28">
            <div class="glass-panel p-5 sm:p-6">
              <div class="flex items-center justify-between gap-3">
                <p class="eyebrow">Current role</p>
                <span
                  class="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white"
                >
                  <span class="h-1 w-1 rounded-full bg-white" aria-hidden="true" />
                  Active
                </span>
              </div>

              <h3 class="mt-4 text-xl font-semibold tracking-[-0.02em] text-white">
                {{ currentRole.company }}
              </h3>
              <p class="mt-1 text-[13px] text-neutral-400">{{ currentRole.title }}</p>

              <dl class="mt-5 space-y-3 border-t border-line pt-5 text-[11px]">
                <div class="flex items-start justify-between gap-4">
                  <dt class="shrink-0 text-neutral-600">Period</dt>
                  <dd class="text-right font-mono text-neutral-300">{{ currentRole.period }}</dd>
                </div>
                <div class="flex items-start justify-between gap-4">
                  <dt class="shrink-0 text-neutral-600">Location</dt>
                  <dd class="text-right text-neutral-300">{{ currentRole.location }}</dd>
                </div>
                <div class="flex items-start justify-between gap-4">
                  <dt class="shrink-0 text-neutral-600">Focus</dt>
                  <dd class="text-right text-neutral-300">{{ currentRole.focus }}</dd>
                </div>
              </dl>
            </div>

            <div class="mt-3 rounded-xl border border-line bg-surface/30 p-4">
              <p class="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">
                Operating principle
              </p>
              <p class="mt-2 text-[12.5px] leading-relaxed text-neutral-400">
                “{{ currentRole.principle }}”
              </p>
            </div>
          </div>
        </aside>

        <ol class="relative lg:col-span-8">
          <span
            class="absolute bottom-3 left-5 top-3 w-px bg-gradient-to-b from-white/40 via-line to-transparent"
            aria-hidden="true"
          />

          <li
            v-for="achievement in achievements"
            :key="achievement.id"
            class="relative flex gap-4 pb-4 last:pb-0 sm:gap-5"
          >
            <span
              class="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-[#0A0A0A] text-white/80 shadow-card"
              aria-hidden="true"
            >
              <component :is="achievementIcons[achievement.icon]" class="h-4 w-4" />
            </span>

            <div
              class="group min-w-0 flex-1 rounded-xl border border-line bg-surface/30 p-4 transition duration-300 ease-out-expo hover:border-line-strong hover:bg-surface/50 sm:p-5"
            >
              <div class="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                <span
                  class="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500"
                >
                  {{ achievement.phase }}
                </span>
                <span
                  v-if="achievement.org"
                  class="font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-600"
                >
                  {{ achievement.org }}
                </span>
              </div>

              <h3 class="mt-2 text-[15px] font-semibold leading-snug text-white">
                {{ achievement.title }}
              </h3>

              <p class="mt-2 text-[12.5px] leading-relaxed text-neutral-500">
                {{ achievement.summary }}
              </p>

              <div
                v-if="achievement.metric"
                class="mt-3 inline-flex flex-wrap items-center gap-x-2 gap-y-0.5 rounded-lg border border-white/15 bg-white/[0.06] px-2.5 py-1.5"
              >
                <span class="font-mono text-[11px] font-medium text-white">
                  {{ achievement.metric.value }}
                </span>
                <span class="text-[10px] text-neutral-500">{{ achievement.metric.label }}</span>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
