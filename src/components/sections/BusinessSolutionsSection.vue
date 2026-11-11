<script setup lang="ts">
import {} from 'vue'
import { businessSolutions } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'

</script>

<template>
  <section
    id="business-solutions"
    class="page-wrap section-space border-t border-line dark:border-night-line"
    aria-labelledby="business-solutions-title"
  >
    <SectionHeading
      id="business-solutions-title"
      eyebrow="Business Solutions"
      title="Packaged outcomes for your stack"
      description="Three ways I help teams ship faster, spend less, and scale confidently — whether you're building custom apps, running WordPress fleets, or both."
    />

    <!-- Solution Cards -->
    <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="solution in businessSolutions"
        :key="solution.id"
        class="surface-card rounded-xl border border-line p-6 hover:border-pine/50 dark:border-night-line dark:hover:border-[#7EB8B2]/50 transition-colors"
      >
        <div class="w-12 h-12 rounded-lg bg-pine-950/50 border border-pine-800/50 flex items-center justify-center mb-6 text-pine-400">
  <!-- Rocket SVG for Custom Apps -->
  <svg 
    v-if="solution.icon === 'rocket' || solution.id === 'custom-apps'" 
    class="w-6 h-6 stroke-current" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    stroke-width="1.75" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.1-1.35 1.5-2.09l-2.41-2.41c-.74.4-1.38.79-2.09 1.5z"/>
    <path d="m12 15-3-3 7.35-7.35c.78-.78 2.05-.78 2.83 0v0c.78.78.78 2.05 0 2.83L12 15z"/>
    <path d="M9 12l-2.5-2.5"/>
    <path d="M15 6l2.5 2.5"/>
  </svg>

  <!-- Zap / Lightning SVG for WordPress Engineering & Optimization -->
  <svg 
    v-else-if="solution.icon === 'zap' || solution.id === 'wordpress'" 
    class="w-6 h-6 stroke-current" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    stroke-width="1.75" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>

  <!-- Server Cloud / Infrastructure SVG for Cost Optimization -->
  <svg 
    v-else-if="solution.icon === 'cloud' || solution.id === 'cloud-cost'" 
    class="w-6 h-6 stroke-current" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    stroke-width="1.75" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  >
    <path d="M175 19H9a5 5 0 0 1 0-10 6 6 0 0 1 11-2 4 4 0 0 1 7.5 1.5A4.5 4.5 0 0 1 17.5 19z" />
  </svg>

  <!-- Fallback Box Icon -->
  <svg 
    v-else 
    class="w-6 h-6 stroke-current" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    stroke-width="1.75" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
</div>
        <h3 class="mt-4 font-serif text-xl font-medium text-ink dark:text-night-ink">
          {{ solution.title }}
        </h3>
        <p class="mt-3 text-[15px] leading-7 text-ink-muted dark:text-night-muted">
          {{ solution.description }}
        </p>
        <ul class="mt-5 space-y-2" aria-label="Key capabilities">
          <li
            v-for="feature in solution.features"
            :key="feature"
            class="flex gap-3 text-sm leading-6 text-ink-muted dark:text-night-muted"
          >
            <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pine dark:bg-[#7EB8B2]" aria-hidden="true" />
            <span>{{ feature }}</span>
          </li>
        </ul>
      </article>
    </div>

  </section>
</template>

<style scoped>
/* Custom slider thumb styling */
.slider-thumb::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #0F6B63;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.slider-thumb::-webkit-slider-thumb:hover {
  background: #0B534C;
  transform: scale(1.1);
}

.slider-thumb::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #0F6B63;
  cursor: pointer;
  border: none;
  transition: background 0.2s, transform 0.2s;
}

.slider-thumb::-moz-range-thumb:hover {
  background: #0B534C;
  transform: scale(1.1);
}

/* Focus states for accessibility */
.slider-thumb:focus-visible {
  outline: 2px solid #0F6B63;
  outline-offset: 4px;
  border-radius: 9999px;
}
</style>