<script setup lang="ts">
import { Cloud, CodeXml, CreditCard, Database, Layers } from 'lucide-vue-next'
import type { Component } from 'vue'
import { sectionCopy, stackNote, techCategories } from '~/data/portfolio'
import type { TechIconName } from '~/types/portfolio'

const copy = sectionCopy.stack

const techIcons = {
  frontend: CodeXml,
  backend: Database,
  cloud: Cloud,
  payments: CreditCard,
} satisfies Record<TechIconName, Component>
</script>

<template>
  <section
    id="stack"
    aria-labelledby="stack-title"
    class="section-pad relative border-t border-line/60 bg-surface/[0.12]"
  >
    <div class="container-page">
      <SectionHeading
        :eyebrow="copy.eyebrow"
        :title="copy.title"
        :description="copy.description"
        title-id="stack-title"
      />

      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="(category, index) in techCategories"
          :key="category.id"
          class="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface/30 p-5 transition duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-line-strong hover:bg-surface/50 hover:shadow-card"
        >
          <div
            class="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />

          <div class="relative flex items-start justify-between gap-3">
            <span
              class="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/[0.08] text-white/80"
            >
              <component :is="techIcons[category.icon]" class="h-4 w-4" aria-hidden="true" />
            </span>
            <span class="font-mono text-[9px] tracking-[0.16em] text-neutral-600" aria-hidden="true">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
          </div>

          <h3 class="relative mt-5 text-[15px] font-semibold tracking-[-0.01em] text-white">
            {{ category.label }}
          </h3>
          <p class="relative mt-1.5 text-[12.5px] leading-relaxed text-neutral-500">
            {{ category.description }}
          </p>

          <div class="relative mt-auto pt-5">
            <ul class="flex flex-wrap gap-1.5 border-t border-line pt-5">
              <li v-for="item in category.items" :key="item" class="pill">
                {{ item }}
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div
        class="mt-4 flex flex-col gap-4 rounded-2xl border border-line bg-surface/30 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="flex items-center gap-3">
          <span
            class="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/20 bg-white/[0.08] text-white"
          >
            <Layers class="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <p class="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">
              {{ stackNote.label }}
            </p>
            <p class="mt-0.5 text-[12px] text-neutral-400">
              Expanding depth without adding operational noise.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap gap-1.5">
          <span v-for="item in stackNote.items" :key="item" class="pill">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
