<script setup lang="ts">
import { ArrowRight, ArrowUpRight } from 'lucide-vue-next'
import { projectCategories } from '~/data/portfolio'
import type { PreviewTone, Project } from '~/types/portfolio'

const props = defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  open: [project: Project]
}>()

const toneStyles: Record<PreviewTone, { wash: string; dot: string; text: string }> = {
  blue: {
    wash: 'from-white/20 via-white/[0.05] to-transparent',
    dot: 'bg-white',
    text: 'text-white/80',
  },
  emerald: {
    wash: 'from-white/15 via-white/[0.04] to-transparent',
    dot: 'bg-white/80',
    text: 'text-white/70',
  },
  violet: {
    wash: 'from-white/10 via-white/[0.03] to-transparent',
    dot: 'bg-white/60',
    text: 'text-white/60',
  },
  amber: {
    wash: 'from-white/[0.08] via-white/[0.02] to-transparent',
    dot: 'bg-white/40',
    text: 'text-white/50',
  },
}

const tone = computed(() => toneStyles[props.project.preview.tone])

const categoryLabel = computed(
  () =>
    projectCategories.find((category) => category.id === props.project.category)?.label ??
    'Case study',
)

const primaryLink = computed(() => props.project.links[0])

const hostname = computed(() => {
  const href = primaryLink.value?.href
  if (!href) return 'live platform'

  try {
    return new URL(href).hostname.replace(/^www\./, '')
  } catch {
    return 'live platform'
  }
})
</script>

<template>
  <article
    class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/40 transition duration-300 ease-out-expo hover:-translate-y-1 hover:border-line-strong hover:bg-surface/70 hover:shadow-lift focus-within:border-white/30"
  >
    <div class="p-3 pb-0">
      <div
        class="relative overflow-hidden rounded-xl border border-line bg-[#0A0A0A] transition-transform duration-500 ease-out-expo group-hover:scale-[1.01]"
        aria-hidden="true"
      >
        <div class="flex h-8 items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-3">
          <span class="flex items-center gap-1.5">
            <span class="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span class="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span class="h-1.5 w-1.5 rounded-full bg-white/15" />
          </span>
          <span
            class="ml-1 flex min-w-0 flex-1 items-center gap-1.5 rounded-md border border-white/[0.06] bg-canvas/70 px-2 py-1"
          >
            <span class="h-1 w-1 shrink-0 rounded-full bg-white/80" />
            <span class="truncate font-mono text-[8px] text-neutral-500">{{ hostname }}</span>
          </span>
        </div>

        <div class="relative aspect-[16/9] overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br" :class="tone.wash" />

          <div
            class="absolute -right-5 -top-7 select-none font-mono text-[5.5rem] font-semibold leading-none tracking-tighter text-white/[0.045]"
          >
            {{ project.preview.monogram }}
          </div>

          <div class="relative flex h-full flex-col p-4 sm:p-5">
            <div class="flex items-center justify-between gap-3">
              <span
                class="font-mono text-[8px] uppercase tracking-[0.18em] text-white/50"
              >
                {{ categoryLabel }}
              </span>
              <span class="h-1.5 w-1.5 rounded-full" :class="tone.dot" />
            </div>

            <div v-if="project.preview.motif === 'dashboard'" class="mt-4 grid flex-1 grid-cols-3 gap-2">
              <div class="col-span-2 flex flex-col rounded-lg border border-white/[0.08] bg-white/[0.04] p-3">
                <div class="h-1 w-10 rounded-full bg-white/20" />
                <div class="mt-auto flex h-12 items-end gap-1.5">
                  <span
                    v-for="height in [42, 68, 54, 82, 61, 94, 72]"
                    :key="height"
                    class="flex-1 rounded-sm bg-white/15"
                    :style="{ height: `${height}%` }"
                  />
                </div>
              </div>
              <div class="space-y-2">
                <div class="rounded-lg border border-white/[0.08] bg-white/[0.04] p-2.5">
                  <div class="h-1 w-6 rounded-full bg-white/20" />
                  <div class="mt-2 h-3 w-10 rounded bg-white/10" />
                </div>
                <div class="rounded-lg border border-white/[0.08] bg-white/[0.04] p-2.5">
                  <div class="h-1 w-8 rounded-full bg-white/20" />
                  <div class="mt-2 h-3 w-7 rounded bg-white/10" />
                </div>
              </div>
            </div>

            <div
              v-else-if="project.preview.motif === 'commerce'"
              class="mt-4 grid flex-1 grid-cols-3 gap-2"
            >
              <div
                v-for="tile in 3"
                :key="tile"
                class="flex flex-col rounded-lg border border-white/[0.08] bg-white/[0.04] p-2"
              >
                <div
                  class="flex-1 rounded-md bg-gradient-to-br from-white/[0.16] to-white/[0.03]"
                />
                <div class="mt-2 h-1 w-8 rounded-full bg-white/20" />
                <div class="mt-1.5 h-1 w-5 rounded-full bg-white/10" />
              </div>
            </div>

            <div v-else class="mt-4 grid flex-1 grid-cols-5 gap-2">
              <div class="col-span-3 flex flex-col rounded-lg border border-white/[0.08] bg-white/[0.04] p-3">
                <div class="h-1 w-12 rounded-full bg-white/20" />
                <div class="mt-2 h-1 w-full rounded-full bg-white/10" />
                <div class="mt-1.5 h-1 w-4/5 rounded-full bg-white/10" />
                <div class="mt-3 h-5 w-14 rounded bg-white/10" />
              </div>
              <div
                class="col-span-2 rounded-lg border border-white/[0.08] bg-gradient-to-br from-white/[0.12] to-transparent"
              />
            </div>

            <div
              class="mt-3 flex items-center justify-between gap-3 border-t border-white/[0.06] pt-2.5"
            >
              <span class="font-mono text-[8px] uppercase tracking-[0.14em] text-white/40">
                {{ project.status }}
              </span>
              <span class="truncate font-mono text-[9px] text-white/60">
                {{ project.impact.value }} · {{ project.impact.label }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <div class="flex items-center justify-between gap-3">
        <span
          class="font-mono text-[9px] uppercase tracking-[0.18em]"
          :class="tone.text"
        >
          {{ categoryLabel }}
        </span>

        <div class="flex items-center gap-2">
          <span
            v-if="project.status === 'In Progress'"
            class="rounded border border-white/30 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-300"
          >
            In Progress
          </span>

          <a
            v-if="primaryLink"
            :href="primaryLink.href"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-8 items-center gap-1 rounded-md text-[11px] font-medium text-neutral-400 transition-colors hover:text-white"
          >
            Live site
            <ArrowUpRight class="h-3 w-3" aria-hidden="true" />
            <span class="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>

      <h3 class="mt-2.5 text-lg font-semibold tracking-[-0.02em] text-white sm:text-xl">
        {{ project.name }}
      </h3>

      <p class="mt-2 text-[13.5px] leading-relaxed text-neutral-400">
        {{ project.summary }}
      </p>

      <dl class="mt-5 grid gap-4 border-t border-line pt-5 sm:grid-cols-2">
        <div>
          <dt class="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">
            Business challenge
          </dt>
          <dd class="mt-1.5 line-clamp-3 text-[12.5px] leading-relaxed text-neutral-500">
            {{ project.challenge }}
          </dd>
        </div>
        <div>
          <dt class="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">
            Delivered solution
          </dt>
          <dd class="mt-1.5 line-clamp-3 text-[12.5px] leading-relaxed text-neutral-500">
            {{ project.solution }}
          </dd>
        </div>
      </dl>

      <div
        class="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5"
      >
        <div class="flex min-w-0 items-baseline gap-2">
          <span class="shrink-0 font-mono text-lg font-medium tracking-tight text-white">
            {{ project.impact.value }}
          </span>
          <span class="truncate text-[11px] text-neutral-500">{{ project.impact.label }}</span>
        </div>

        <button
          type="button"
          class="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-line bg-white/[0.03] px-3 text-xs font-medium text-neutral-200 transition duration-200 hover:border-white/40 hover:bg-white/10 hover:text-white"
          @click="emit('open', project)"
        >
          View architecture
          <ArrowRight class="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  </article>
</template>
