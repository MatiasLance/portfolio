<script setup lang="ts">
import { ArrowUpRight, Menu, X } from 'lucide-vue-next'
import { nav, profile } from '~/data/portfolio'

const activeSection = useActiveSection(nav.map((item) => item.id))

const menuOpen = ref(false)
const scrolled = ref(false)
const menuPanel = ref<HTMLElement | null>(null)
let scrollFrame = 0

useDialog({
  open: menuOpen,
  panel: menuPanel,
  onClose: () => {
    menuOpen.value = false
  },
})

function updateScrolled() {
  scrollFrame = 0
  scrolled.value = window.scrollY > 12
}

function onScroll() {
  if (scrollFrame) return
  scrollFrame = window.requestAnimationFrame(updateScrolled)
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  updateScrolled()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (scrollFrame) window.cancelAnimationFrame(scrollFrame)
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-40">
    <div class="container-page">
      <div
        class="mt-3 flex h-16 items-center justify-between gap-3 rounded-2xl border px-3 transition-all duration-300 ease-out-expo sm:px-4"
        :class="
          scrolled || menuOpen
            ? 'border-line bg-canvas/80 shadow-card backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        "
      >
        <a
          href="#top"
          class="group flex min-h-11 items-center gap-2.5 rounded-xl pr-2"
          :aria-label="`${profile.name} — back to top`"
        >
          <span
            class="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.12] to-white/[0.02] font-mono text-[11px] font-medium tracking-[0.08em] text-white transition-colors group-hover:border-white/40"
          >
            {{ profile.initials }}
          </span>
          <span class="hidden text-left leading-tight sm:block">
            <span class="block text-[13px] font-semibold text-white">{{ profile.name }}</span>
            <span
              class="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500 xl:block"
            >
              {{ profile.role }}
            </span>
          </span>
        </a>

        <nav class="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          <a
            v-for="item in nav"
            :key="item.id"
            :href="`#${item.id}`"
            class="relative rounded-lg px-3 py-2 text-[13px] font-medium transition-colors duration-200"
            :class="
              activeSection === item.id
                ? 'bg-white/[0.05] text-white'
                : 'text-neutral-400 hover:bg-white/[0.03] hover:text-white'
            "
            :aria-current="activeSection === item.id ? 'true' : undefined"
          >
            {{ item.label }}
            <span
              v-if="activeSection === item.id"
              class="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent"
              aria-hidden="true"
            />
          </a>
        </nav>

        <div class="flex items-center gap-1.5">
          <a
            href="#contact"
            class="btn-primary hidden !min-h-10 !px-4 !py-2 !text-[13px] sm:inline-flex"
          >
            Start a project
            <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            class="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.03] text-neutral-200 transition hover:border-line-strong hover:bg-white/[0.06] hover:text-white lg:hidden"
            aria-controls="mobile-navigation"
            :aria-expanded="menuOpen"
            @click="menuOpen = true"
          >
            <Menu class="h-5 w-5" aria-hidden="true" />
            <span class="sr-only">Open navigation menu</span>
          </button>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="nav-drawer">
        <div v-if="menuOpen" class="fixed inset-0 z-50 lg:hidden">
          <div
            class="absolute inset-0 bg-canvas/85 backdrop-blur-sm"
            aria-hidden="true"
            @click="closeMenu"
          />

          <aside
            id="mobile-navigation"
            ref="menuPanel"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            tabindex="-1"
            class="nav-panel absolute inset-y-0 right-0 flex w-[min(88vw,22rem)] flex-col border-l border-line bg-[#0A0A0A] shadow-2xl outline-none"
          >
            <div class="flex items-center justify-between border-b border-line px-5 py-4">
              <div class="flex items-center gap-2.5">
                <span
                  class="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-[11px] font-medium tracking-[0.08em] text-white"
                >
                  {{ profile.initials }}
                </span>
                <span class="text-[13px] font-semibold text-white">{{ profile.name }}</span>
              </div>

              <button
                type="button"
                class="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.03] text-neutral-300 transition hover:bg-white/[0.06] hover:text-white"
                @click="closeMenu"
              >
                <X class="h-5 w-5" aria-hidden="true" />
                <span class="sr-only">Close navigation menu</span>
              </button>
            </div>

            <nav class="flex-1 overflow-y-auto px-3 py-5" aria-label="Mobile">
              <a
                v-for="(item, index) in nav"
                :key="item.id"
                :href="`#${item.id}`"
                class="group flex min-h-12 items-center justify-between rounded-xl px-3 transition-colors"
                :class="
                  activeSection === item.id
                    ? 'bg-white/[0.05] text-white'
                    : 'text-neutral-400 hover:bg-white/[0.03] hover:text-white'
                "
                :aria-current="activeSection === item.id ? 'true' : undefined"
                @click="closeMenu"
              >
                <span class="flex items-center gap-3">
                  <span class="font-mono text-[10px] text-neutral-600">
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                  <span class="text-sm font-medium">{{ item.label }}</span>
                </span>
                <span
                  class="h-1.5 w-1.5 rounded-full transition-colors"
                  :class="activeSection === item.id ? 'bg-white' : 'bg-transparent'"
                  aria-hidden="true"
                />
              </a>
            </nav>

            <div class="space-y-4 border-t border-line px-5 py-5">
              <a href="#contact" class="btn-primary w-full" @click="closeMenu">
                Start a project
                <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
              </a>

              <div class="flex items-center justify-between gap-3 text-[11px] text-neutral-500">
                <a
                  :href="`mailto:${profile.email}`"
                  class="truncate transition-colors hover:text-neutral-300"
                >
                  {{ profile.email }}
                </a>
                <span class="shrink-0 font-mono">{{ profile.timezone }}</span>
              </div>
            </div>
          </aside>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
.nav-drawer-enter-active,
.nav-drawer-leave-active {
  transition: opacity 0.25s ease;
}

.nav-drawer-enter-active .nav-panel,
.nav-drawer-leave-active .nav-panel {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-drawer-enter-from,
.nav-drawer-leave-to {
  opacity: 0;
}

.nav-drawer-enter-from .nav-panel,
.nav-drawer-leave-to .nav-panel {
  transform: translateX(100%);
}
</style>
