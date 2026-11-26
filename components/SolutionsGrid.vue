<script setup lang="ts">
import { ArrowUpRight, Check } from 'lucide-vue-next'
import { sectionCopy, solutions } from '~/data/portfolio'

const copy = sectionCopy.solutions
</script>

<template>
  <section
    id="solutions"
    aria-labelledby="solutions-title"
    class="section-pad relative border-t border-line/60"
  >
    <div class="container-page">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          :eyebrow="copy.eyebrow"
          :title="copy.title"
          :description="copy.description"
          title-id="solutions-title"
        />

        <a
          href="#work"
          class="group inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-[13px] font-medium text-neutral-400 transition-colors hover:text-white lg:self-auto"
        >
          See the work
          <ArrowUpRight
            class="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>

      <div class="mt-12 grid gap-4 md:grid-cols-2">
        <article
          v-for="(solution, index) in solutions"
          :key="solution.id"
          class="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface/40 p-6 transition duration-300 ease-out-expo hover:-translate-y-1 hover:border-line-strong hover:bg-surface/70 hover:shadow-lift sm:p-7"
        >
          <div
            class="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />
          <div
            class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />

          <div class="relative flex items-start justify-between gap-4">
            <span
              class="grid h-12 w-12 place-items-center rounded-2xl border border-white/20 bg-white/[0.08] text-white/80 transition duration-300 group-hover:border-white/40 group-hover:bg-white/[0.12]"
            >
              <SolutionIcon :name="solution.icon" />
            </span>
            <span
              class="font-mono text-[10px] tracking-[0.18em] text-neutral-600"
              aria-hidden="true"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </span>
          </div>

          <h3 class="relative mt-6 text-xl font-semibold tracking-[-0.02em] text-white">
            {{ solution.title }}
          </h3>

          <p class="relative mt-2 text-[15px] leading-relaxed text-neutral-300">
            {{ solution.outcome }}
          </p>

          <p class="relative mt-3 text-sm leading-relaxed text-neutral-500">
            {{ solution.description }}
          </p>

          <ul class="relative mt-6 space-y-2.5 border-t border-line pt-5">
            <li
              v-for="deliverable in solution.deliverables"
              :key="deliverable"
              class="flex items-start gap-2.5 text-[13px] leading-relaxed text-neutral-400"
            >
              <Check class="mt-0.5 h-3.5 w-3.5 shrink-0 text-white" aria-hidden="true" />
              {{ deliverable }}
            </li>
          </ul>

          <a
            href="#contact"
            class="relative mt-6 inline-flex min-h-11 items-center gap-1.5 self-start text-[13px] font-medium text-neutral-300 transition-colors hover:text-white"
          >
            Discuss this engagement
            <ArrowUpRight
              class="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
