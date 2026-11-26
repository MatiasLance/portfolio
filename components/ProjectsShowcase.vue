<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import { projectCategories, projects, sectionCopy } from '~/data/portfolio'
import type { Project, ProjectFilterId } from '~/types/portfolio'

const copy = sectionCopy.work
const INITIAL_VISIBLE = 4

const activeFilter = ref<ProjectFilterId>('all')
const visibleCount = ref(INITIAL_VISIBLE)
const activeProject = ref<Project | null>(null)

const filteredProjects = computed(() =>
  activeFilter.value === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter.value),
)

const visibleProjects = computed(() => filteredProjects.value.slice(0, visibleCount.value))
const remainingProjects = computed(() =>
  Math.max(filteredProjects.value.length - visibleProjects.value.length, 0),
)

const activeFilterLabel = computed(
  () => projectCategories.find((category) => category.id === activeFilter.value)?.label ?? 'All work',
)

function countFor(filter: ProjectFilterId) {
  return filter === 'all'
    ? projects.length
    : projects.filter((project) => project.category === filter).length
}

function selectFilter(filter: ProjectFilterId) {
  activeFilter.value = filter
  visibleCount.value = INITIAL_VISIBLE
}

function showAll() {
  visibleCount.value = filteredProjects.value.length
}

watch(activeFilter, () => {
  visibleCount.value = INITIAL_VISIBLE
})
</script>

<template>
  <section
    id="work"
    aria-labelledby="work-title"
    class="section-pad relative overflow-hidden border-t border-line/60 bg-surface/[0.12]"
  >
    <div
      class="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-white/[0.05] blur-[120px]"
      aria-hidden="true"
    />

    <div class="container-page relative">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          :eyebrow="copy.eyebrow"
          :title="copy.title"
          :description="copy.description"
          title-id="work-title"
        />

        <div
          class="hidden shrink-0 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 lg:flex"
        >
          <span class="h-px w-8 bg-line-strong" aria-hidden="true" />
          {{ projects.length }} live builds
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          class="flex flex-wrap gap-1.5 rounded-xl border border-line bg-surface/40 p-1.5"
          role="group"
          aria-label="Filter case studies"
        >
          <button
            v-for="category in projectCategories"
            :key="category.id"
            type="button"
            class="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-[12px] font-medium transition duration-200"
            :class="
              activeFilter === category.id
                ? 'bg-white/[0.09] text-white shadow-card'
                : 'text-neutral-400 hover:bg-white/[0.04] hover:text-white'
            "
            :aria-pressed="activeFilter === category.id"
            @click="selectFilter(category.id)"
          >
            {{ category.label }}
            <span
              class="font-mono text-[9px]"
              :class="activeFilter === category.id ? 'text-white/80' : 'text-neutral-600'"
            >
              {{ countFor(category.id) }}
            </span>
          </button>
        </div>

        <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
          {{ filteredProjects.length }} {{ filteredProjects.length === 1 ? 'project' : 'projects' }}
        </p>
      </div>

      <p class="sr-only" aria-live="polite">
        Showing {{ filteredProjects.length }} {{ activeFilterLabel }} case studies.
      </p>

      <TransitionGroup tag="div" name="project-card" class="mt-6 grid gap-4 lg:grid-cols-2">
        <ProjectCard
          v-for="project in visibleProjects"
          :key="project.id"
          :project="project"
          @open="activeProject = $event"
        />
      </TransitionGroup>

      <div v-if="remainingProjects > 0" class="mt-8 flex flex-col items-center gap-3">
        <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
          Showing {{ visibleProjects.length }} of {{ filteredProjects.length }}
        </p>
        <button type="button" class="btn-secondary group" @click="showAll">
          Show all {{ filteredProjects.length }} case studies
          <ChevronDown
            class="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>

    <ProjectDetailDrawer :project="activeProject" @close="activeProject = null" />
  </section>
</template>

<style scoped>
.project-card-move,
.project-card-enter-active,
.project-card-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card-enter-from,
.project-card-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.99);
}

.project-card-leave-active {
  pointer-events: none;
}
</style>
