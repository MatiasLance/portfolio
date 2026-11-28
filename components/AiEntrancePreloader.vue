<script setup lang="ts">
import { profile } from '~/data/portfolio'

const displayName = 'Marcelo Matias'
const displayRole = profile.role
const displayAlias = 'Lance'

const stack = [
  'Laravel 13',
  'Laravel Reverb',
  'Nuxt 4',
  'Vue 3',
  'TypeScript',
  'MySQL',
  'Docker',
  'Nginx',
]

const nameChars = Array.from(displayName)
const roleChars = Array.from(displayRole)

const visible = ref(true)
const exiting = ref(false)
const reducedMotion = ref(false)
const nameCount = ref(0)
const roleCount = ref(0)
const showStack = ref(false)

const timers: ReturnType<typeof setTimeout>[] = []
let previousOverflow = ''

function schedule(delay: number, callback: () => void) {
  const timer = setTimeout(callback, delay)
  timers.push(timer)
}

function unlockScroll() {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = previousOverflow
  }
}

onMounted(() => {
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reducedMotion.value) {
    visible.value = false
    return
  }

  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'

  const nameStart = 160
  const nameInterval = 34
  const roleStart = nameStart + nameChars.length * nameInterval + 70
  const roleInterval = 16
  const stackStart = roleStart + roleChars.length * roleInterval + 120
  const exitStart = stackStart + 430
  const unmountAt = exitStart + 360

  nameChars.forEach((_, index) => {
    schedule(nameStart + index * nameInterval, () => {
      nameCount.value = index + 1
    })
  })

  roleChars.forEach((_, index) => {
    schedule(roleStart + index * roleInterval, () => {
      roleCount.value = index + 1
    })
  })

  schedule(stackStart, () => {
    showStack.value = true
  })

  schedule(exitStart, () => {
    exiting.value = true
  })

  schedule(unmountAt, () => {
    visible.value = false
    unlockScroll()
  })
})

onBeforeUnmount(() => {
  timers.forEach(clearTimeout)
  unlockScroll()
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="ai-preloader"
      :class="{ 'is-exiting': exiting }"
      role="status"
      aria-live="polite"
      :aria-label="`AI mode initializing. ${displayName}. ${displayRole}.`"
    >
      <div class="ai-preloader__glow" aria-hidden="true" />
      <div class="ai-preloader__grid" aria-hidden="true" />
      <div class="ai-preloader__sweep" aria-hidden="true" />

      <div class="ai-preloader__frame">
        <div class="ai-preloader__status" aria-hidden="true">
          <span class="ai-preloader__status-dot" />
          <span>AI MODE // INITIALIZING</span>
          <span class="ai-preloader__status-line" />
          <span class="ai-preloader__status-code">0x{{ displayAlias.toUpperCase() }}</span>
        </div>

        <div class="ai-preloader__identity" aria-hidden="true">
          <p class="ai-preloader__alias">{{ displayAlias }}</p>

          <h1 class="ai-preloader__name">
            <span
              v-for="(char, index) in nameChars"
              :key="`name-${index}`"
              class="ai-char"
              :class="{ 'is-visible': index < nameCount }"
            >{{ char }}</span>
          </h1>

          <p class="ai-preloader__role">
            <span
              v-for="(char, index) in roleChars"
              :key="`role-${index}`"
              class="ai-char"
              :class="{ 'is-visible': index < roleCount }"
            >{{ char }}</span>
          </p>
        </div>

        <div
          class="ai-preloader__stack"
          :class="{ 'is-visible': showStack }"
          aria-hidden="true"
        >
          <span
            v-for="(item, index) in stack"
            :key="item"
            class="ai-pill"
            :style="{ '--index': index }"
          >
            {{ item }}
          </span>
        </div>

        <p class="ai-preloader__footer" aria-hidden="true">
          <span>PORTFOLIO / 2026</span>
          <span class="ai-preloader__footer-rule" />
          <span>LOADING INTERFACE</span>
        </p>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.ai-preloader {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: #000000;
  color: #ffffff;
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.34s cubic-bezier(0.16, 1, 0.3, 1);
}

.ai-preloader.is-exiting {
  opacity: 0;
}

.ai-preloader__glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 44%, rgba(255, 255, 255, 0.09), transparent 34%),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.035), transparent 62%);
  animation: ai-glow 2.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.ai-preloader__grid {
  position: absolute;
  inset: 0;
  opacity: 0.28;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse 58% 52% at 50% 50%, black 10%, transparent 78%);
  -webkit-mask-image: radial-gradient(ellipse 58% 52% at 50% 50%, black 10%, transparent 78%);
}

.ai-preloader__sweep {
  position: absolute;
  inset: -20% -40%;
  background: linear-gradient(
    100deg,
    transparent 42%,
    rgba(255, 255, 255, 0.12) 49%,
    rgba(255, 255, 255, 0.26) 50%,
    rgba(255, 255, 255, 0.12) 51%,
    transparent 58%
  );
  transform: translateX(-120%);
  animation: ai-sweep 1.9s cubic-bezier(0.22, 0.61, 0.36, 1) 0.1s both;
  mix-blend-mode: screen;
}

.ai-preloader__frame {
  position: relative;
  z-index: 1;
  display: flex;
  width: min(100%, 78rem);
  min-height: min(74vh, 40rem);
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 1.25rem;
}

.ai-preloader__status {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 9px;
  line-height: 1;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
  animation: ai-status-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.ai-preloader__status-dot {
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 9999px;
  background: #ffffff;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.8);
  animation: ai-dot 1.1s ease-in-out infinite;
}

.ai-preloader__status-line {
  height: 1px;
  flex: 1;
  max-width: 5rem;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.28), transparent);
}

.ai-preloader__status-code {
  color: rgba(255, 255, 255, 0.34);
}

.ai-preloader__identity {
  margin-top: auto;
  margin-bottom: auto;
  padding: 3.5rem 0;
}

.ai-preloader__alias {
  margin-bottom: 1rem;
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 10px;
  line-height: 1;
  letter-spacing: 0.36em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.42);
  animation: ai-status-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
}

.ai-preloader__name {
  font-size: clamp(2.5rem, 8.5vw, 6.75rem);
  font-weight: 600;
  line-height: 0.98;
  letter-spacing: -0.055em;
  text-transform: uppercase;
  white-space: pre-wrap;
}

.ai-preloader__role {
  margin-top: 1.25rem;
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: clamp(0.62rem, 1.5vw, 0.82rem);
  line-height: 1.7;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.62);
  white-space: pre-wrap;
}

.ai-char {
  display: inline;
  opacity: 0;
  will-change: opacity, filter, transform, text-shadow;
}

.ai-char.is-visible {
  animation: ai-char-in 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.ai-preloader__name .ai-char {
  text-shadow:
    0 1px 0 rgba(255, 255, 255, 0.16),
    0 2px 0 rgba(255, 255, 255, 0.06),
    0 16px 34px rgba(0, 0, 0, 0.95);
}

.ai-preloader__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.5rem;
}

.ai-pill {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: 0 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 0.375rem;
  background: rgba(255, 255, 255, 0.025);
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 10px;
  line-height: 1;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.72);
  opacity: 0;
  transform: translateY(8px);
}

.ai-preloader__stack.is-visible .ai-pill {
  animation: ai-pill-in 0.36s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: calc(var(--index) * 42ms);
}

.ai-preloader__footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 9px;
  line-height: 1;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
  animation: ai-status-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}

.ai-preloader__footer-rule {
  height: 1px;
  flex: 1;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.18), transparent);
}

@keyframes ai-char-in {
  0% {
    opacity: 0;
    filter: blur(2px) brightness(1.8);
    transform: translateY(0.2em);
    text-shadow:
      0 0 18px rgba(255, 255, 255, 0.98),
      0 0 42px rgba(255, 255, 255, 0.48);
  }

  38% {
    opacity: 1;
    filter: blur(0) brightness(1.3);
    text-shadow:
      0 0 12px rgba(255, 255, 255, 0.85),
      0 0 28px rgba(255, 255, 255, 0.3);
  }

  100% {
    opacity: 1;
    filter: blur(0) brightness(1);
    transform: translateY(0);
  }
}

@keyframes ai-pill-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ai-status-in {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ai-dot {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(0.8);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes ai-glow {
  0% {
    opacity: 0;
    transform: scale(0.92);
  }

  45% {
    opacity: 1;
  }

  100% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

@keyframes ai-sweep {
  0% {
    opacity: 0;
    transform: translateX(-120%);
  }

  18% {
    opacity: 1;
  }

  70% {
    opacity: 0.7;
  }

  100% {
    opacity: 0;
    transform: translateX(120%);
  }
}

@media (min-width: 640px) {
  .ai-preloader__frame {
    padding: 2rem 2.5rem;
  }

  .ai-preloader__status {
    font-size: 10px;
  }
}

@media (min-width: 1024px) {
  .ai-preloader__frame {
    padding: 2.5rem 3rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ai-preloader {
    display: none;
  }
}
</style>
