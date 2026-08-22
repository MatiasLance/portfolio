<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { nav, profile, social } from '@/data/portfolio'
import { useActiveSection } from '@/composables/useActiveSection'
import ThemeToggle from './ThemeToggle.vue'

const { activeId } = useActiveSection()
const open = ref(false)
const github = social.find((item) => item.label === 'GitHub')

function close() {
  open.value = false
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-sm dark:border-night-line/80 dark:bg-night/90"
  >
    <div class="page-wrap flex h-14 items-center justify-between gap-4">
      <a href="#top" class="font-serif text-[17px] font-medium tracking-tight text-ink dark:text-night-ink">
        {{ profile.shortName }}
        <span class="sr-only">{{ profile.name }} — back to top</span>
      </a>

      <nav class="hidden items-center gap-6 lg:flex" aria-label="Primary">
        <a
          v-for="item in nav"
          :key="item.id"
          :href="`#${item.id}`"
          class="text-[13px] text-ink-muted hover:text-ink dark:text-night-muted dark:hover:text-night-ink"
          :class="activeId === item.id ? 'text-ink dark:text-night-ink' : ''"
          :aria-current="activeId === item.id ? 'location' : undefined"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <a
          v-if="github"
          :href="github.href"
          class="hidden h-9 items-center rounded border border-line px-3 text-[13px] text-ink-muted hover:border-line-strong hover:text-ink sm:inline-flex dark:border-night-line dark:text-night-muted dark:hover:border-[#4A453E] dark:hover:text-night-ink"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <ThemeToggle />
        <button
          type="button"
          class="inline-flex h-9 w-9 items-center justify-center rounded border border-line text-ink-muted lg:hidden dark:border-night-line dark:text-night-muted"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          :aria-label="open ? 'Close navigation' : 'Open navigation'"
          @click="open = !open"
        >
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
            <path v-if="!open" d="M4 7h16M4 12h16M4 17h16" />
            <path v-else d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>

    <nav
      v-show="open"
      id="mobile-nav"
      class="border-t border-line px-5 py-3 lg:hidden dark:border-night-line"
      aria-label="Mobile"
    >
      <a
        v-for="item in nav"
        :key="item.id"
        :href="`#${item.id}`"
        class="block py-2 text-sm text-ink-muted hover:text-ink dark:text-night-muted dark:hover:text-night-ink"
        @click="close"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>
