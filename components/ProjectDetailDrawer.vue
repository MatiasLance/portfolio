<script setup lang="ts">
import { ArrowUpRight, Check, X } from 'lucide-vue-next'
import { projectCategories } from '~/data/portfolio'
import type { Project } from '~/types/portfolio'

const props = defineProps<{
  project: Project | null
}>()

const emit = defineEmits<{
  close: []
}>()

const panel = ref<HTMLElement | null>(null)
const isOpen = computed(() => props.project !== null)

useDialog({
  open: isOpen,
  panel,
  onClose: () => emit('close'),
})

const categoryLabel = computed(
  () =>
    projectCategories.find((category) => category.id === props.project?.category)?.label ??
    'Case study',
)

const primaryLink = computed(() => props.project?.links[0])

function close() {
  emit('close')
}

async function goToContact() {
  emit('close')
  await nextTick()

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById('contact')?.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start',
  })
  document.getElementById('inquiry-name')?.focus({ preventScroll: true })
}
</script>

<template>
  <Teleport to="body">
    <Transition name="drawer">
      <div
        v-if="project"
        class="fixed inset-0 z-[60] flex justify-end"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`project-${project.id}-title`"
      >
        <div
          class="absolute inset-0 bg-canvas/85 backdrop-blur-sm"
          aria-hidden="true"
          @click="close"
        />

        <aside
          ref="panel"
          tabindex="-1"
          class="drawer-panel relative flex h-full w-full max-w-2xl flex-col border-l border-line bg-[#0A0A0A] shadow-2xl outline-none"
        >
          <header
            class="flex items-start justify-between gap-4 border-b border-line bg-[#0A0A0A]/95 px-5 py-4 backdrop-blur sm:px-7"
          >
            <div class="min-w-0">
              <p class="font-mono text-[9px] uppercase tracking-[0.18em] text-white/80">
                {{ categoryLabel }}
                <span class="px-1 text-neutral-600" aria-hidden="true">·</span>
                <span class="text-neutral-500">{{ project.status }}</span>
              </p>
              <h2
                :id="`project-${project.id}-title`"
                class="mt-1 truncate text-lg font-semibold tracking-[-0.02em] text-white"
              >
                {{ project.name }}
              </h2>
            </div>

            <button
              type="button"
              class="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-white/[0.03] text-neutral-300 transition hover:border-line-strong hover:bg-white/[0.06] hover:text-white"
              @click="close"
            >
              <X class="h-5 w-5" aria-hidden="true" />
              <span class="sr-only">Close case study</span>
            </button>
          </header>

          <div class="flex-1 overflow-y-auto overscroll-contain">
            <div class="px-5 py-6 sm:px-7 sm:py-8">
              <div class="flex flex-wrap items-center gap-2">
                <span class="pill">{{ categoryLabel }}</span>
                <span
                  class="pill uppercase tracking-[0.14em]"
                  :class="project.status === 'In Progress' ? 'border-white/30 text-neutral-300' : ''"
                >
                  <span
                    v-if="project.status !== 'In Progress'"
                    class="mr-1.5 h-1.5 w-1.5 rounded-full bg-white"
                    aria-hidden="true"
                  />
                  {{ project.status }}
                </span>
              </div>

              <p class="mt-4 text-[15px] leading-relaxed text-neutral-300">
                {{ project.summary }}
              </p>

              <div class="mt-6 grid gap-3 sm:grid-cols-2">
                <div class="rounded-xl border border-line bg-surface/50 p-4">
                  <p class="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">
                    Measurable impact
                  </p>
                  <p class="mt-2 font-mono text-2xl font-medium tracking-tight text-white">
                    {{ project.impact.value }}
                  </p>
                  <p class="mt-1 text-[11px] text-neutral-500">{{ project.impact.label }}</p>
                </div>

                <div class="rounded-xl border border-line bg-surface/50 p-4">
                  <p class="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">
                    Client / context
                  </p>
                  <p class="mt-2 text-sm font-medium text-neutral-200">{{ project.client }}</p>
                  <a
                    v-if="primaryLink"
                    :href="primaryLink.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-1 inline-flex min-h-8 items-center gap-1 text-[11px] text-white/80 transition-colors hover:text-white"
                  >
                    Visit live platform
                    <ArrowUpRight class="h-3 w-3" aria-hidden="true" />
                    <span class="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              </div>

              <div class="mt-8 space-y-7">
                <section>
                  <h3 class="flex items-center gap-3 text-sm font-semibold text-white">
                    <span class="font-mono text-[9px] text-neutral-600">01</span>
                    Business challenge
                  </h3>
                  <p class="mt-2.5 text-[13.5px] leading-relaxed text-neutral-400">
                    {{ project.challenge }}
                  </p>
                </section>

                <section>
                  <h3 class="flex items-center gap-3 text-sm font-semibold text-white">
                    <span class="font-mono text-[9px] text-neutral-600">02</span>
                    Delivered solution
                  </h3>
                  <p class="mt-2.5 text-[13.5px] leading-relaxed text-neutral-400">
                    {{ project.solution }}
                  </p>
                </section>
              </div>

              <section class="mt-8">
                <h3 class="flex items-center gap-3 text-sm font-semibold text-white">
                  <span class="font-mono text-[9px] text-neutral-600">03</span>
                  Architecture breakdown
                </h3>

                <ol class="mt-4 space-y-2.5">
                  <li
                    v-for="(layer, index) in project.architecture"
                    :key="layer.label"
                    class="flex gap-3.5 rounded-xl border border-line bg-surface/30 p-4"
                  >
                    <span
                      class="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-line bg-white/[0.03] font-mono text-[9px] text-white/80"
                      aria-hidden="true"
                    >
                      {{ String(index + 1).padStart(2, '0') }}
                    </span>
                    <div class="min-w-0">
                      <p class="text-[12px] font-semibold text-neutral-200">{{ layer.label }}</p>
                      <p class="mt-1 text-[12px] leading-relaxed text-neutral-500">
                        {{ layer.detail }}
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              <section class="mt-8">
                <h3 class="text-sm font-semibold text-white">Key deliverables</h3>
                <ul class="mt-3 grid gap-2 sm:grid-cols-2">
                  <li
                    v-for="deliverable in project.deliverables"
                    :key="deliverable"
                    class="flex items-start gap-2.5 rounded-lg border border-line bg-surface/30 px-3 py-2.5 text-[12px] text-neutral-400"
                  >
                    <Check class="mt-0.5 h-3.5 w-3.5 shrink-0 text-white" aria-hidden="true" />
                    {{ deliverable }}
                  </li>
                </ul>
              </section>

              <div class="mt-8 grid gap-6 sm:grid-cols-2">
                <section>
                  <h3 class="text-sm font-semibold text-white">Integrations</h3>
                  <div class="mt-3 flex flex-wrap gap-1.5">
                    <span v-for="integration in project.integrations" :key="integration" class="pill">
                      {{ integration }}
                    </span>
                  </div>
                </section>

                <section>
                  <h3 class="text-sm font-semibold text-white">Stack</h3>
                  <div class="mt-3 flex flex-wrap gap-1.5">
                    <span v-for="technology in project.stack" :key="technology" class="pill">
                      {{ technology }}
                    </span>
                  </div>
                </section>
              </div>

              <section v-if="project.links.length > 0" class="mt-8">
                <h3 class="text-sm font-semibold text-white">Live platforms</h3>
                <ul class="mt-3 divide-y divide-line overflow-hidden rounded-xl border border-line">
                  <li v-for="link in project.links" :key="link.href">
                    <a
                      :href="link.href"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex min-h-12 items-center justify-between gap-4 px-4 py-3 text-[12px] text-neutral-300 transition-colors hover:bg-white/[0.04] hover:text-white"
                    >
                      <span class="truncate">{{ link.label }}</span>
                      <ArrowUpRight class="h-3.5 w-3.5 shrink-0 text-neutral-500" aria-hidden="true" />
                      <span class="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>

          <footer
            class="border-t border-line bg-[#0A0A0A]/95 px-5 py-4 backdrop-blur sm:px-7"
          >
            <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p class="text-[11px] leading-relaxed text-neutral-500">
                Need a similar outcome?
                <span class="text-neutral-400">Let’s scope the next build.</span>
              </p>
              <a href="#contact" class="btn-primary shrink-0" @click.prevent="goToContact">
                Discuss a similar build
                <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </footer>
        </aside>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-enter-active .drawer-panel,
.drawer-leave-active .drawer-panel {
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from .drawer-panel,
.drawer-leave-to .drawer-panel {
  transform: translateX(100%);
}
</style>
