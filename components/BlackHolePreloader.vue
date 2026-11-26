<template>
  <Teleport to="body">
    <Transition name="black-hole-preloader" :duration="reducedMotion ? 0 : 150">
      <div
        v-if="visible"
        class="black-hole-preloader"
        :class="visible && !exiting ? 'pointer-events-auto' : 'pointer-events-none'"
        role="status"
        aria-label="Loading portfolio"
      >
        <div class="black-hole-preloader__glow" aria-hidden="true" />
        <div class="black-hole-preloader__ring black-hole-preloader__ring--outer" aria-hidden="true" />
        <div class="black-hole-preloader__ring black-hole-preloader__ring--middle" aria-hidden="true" />
        <div class="black-hole-preloader__ring black-hole-preloader__ring--inner" aria-hidden="true" />
        <div class="black-hole-preloader__core" aria-hidden="true" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const visible = ref(true)
const exiting = ref(false)
const reducedMotion = ref(false)

let exitTimer: ReturnType<typeof setTimeout> | undefined
let unmountTimer: ReturnType<typeof setTimeout> | undefined
let previousOverflow = ''

onMounted(() => {
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reducedMotion.value) {
    visible.value = false
    return
  }

  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'

  exitTimer = setTimeout(() => {
    exiting.value = true
  }, 900)

  unmountTimer = setTimeout(() => {
    visible.value = false
    document.body.style.overflow = previousOverflow
  }, 1200)
})

onBeforeUnmount(() => {
  if (exitTimer) clearTimeout(exitTimer)
  if (unmountTimer) clearTimeout(unmountTimer)
  document.body.style.overflow = previousOverflow
})
</script>

<style scoped>
.black-hole-preloader {
  position: fixed;
  inset: 0;
  z-index: 200;
  pointer-events: none;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: #000000;
  animation: black-hole-overlay 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.black-hole-preloader__glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.14), transparent 42%);
  transform: scale(0.8);
  animation: black-hole-glow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}

.black-hole-preloader__ring {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  will-change: transform, opacity;
  animation: black-hole-ring 1.2s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
}

.black-hole-preloader__ring--outer {
  width: 13rem;
  height: 13rem;
  border-color: rgba(255, 255, 255, 0.22);
  animation-delay: 0.02s;
}

.black-hole-preloader__ring--middle {
  width: 8.5rem;
  height: 8.5rem;
  border-color: rgba(255, 255, 255, 0.42);
  animation-delay: 0.08s;
}

.black-hole-preloader__ring--inner {
  width: 4.5rem;
  height: 4.5rem;
  border-color: rgba(255, 255, 255, 0.62);
  animation-delay: 0.14s;
}

.black-hole-preloader__core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 9999px;
  background: #ffffff;
  box-shadow: 0 0 24px rgba(255, 255, 255, 0.75);
  transform: translate(-50%, -50%) scale(0.15);
  animation: black-hole-core 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
}

@keyframes black-hole-overlay {
  0%,
  72% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes black-hole-glow {
  0% {
    opacity: 0.35;
    transform: scale(0.8);
  }

  45% {
    opacity: 0.75;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(1.35);
  }
}

@keyframes black-hole-ring {
  0% {
    transform: translate(-50%, -50%) scale(1.45) rotate(0deg);
    opacity: 0.55;
  }

  48% {
    transform: translate(-50%, -50%) scale(0.5) rotate(200deg);
    opacity: 1;
  }

  68% {
    transform: translate(-50%, -50%) scale(0.16) rotate(280deg);
    opacity: 0.9;
  }

  100% {
    transform: translate(-50%, -50%) scale(2.4) rotate(360deg);
    opacity: 0;
  }
}

@keyframes black-hole-core {
  0% {
    transform: translate(-50%, -50%) scale(0.15);
    opacity: 0;
  }

  38% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  62% {
    transform: translate(-50%, -50%) scale(1.25);
    opacity: 1;
    box-shadow: 0 0 32px rgba(255, 255, 255, 0.9);
  }

  78% {
    transform: translate(-50%, -50%) scale(0.2);
    opacity: 1;
  }

  100% {
    transform: translate(-50%, -50%) scale(4);
    opacity: 0;
  }
}

.black-hole-preloader-enter-active,
.black-hole-preloader-leave-active {
  transition: opacity 0.15s ease;
}

.black-hole-preloader-enter-from,
.black-hole-preloader-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .black-hole-preloader {
    animation: none;
    opacity: 0;
  }
}
</style>
