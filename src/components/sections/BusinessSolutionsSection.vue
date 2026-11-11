<script setup lang="ts">
import { ref, computed } from 'vue'
import { businessSolutions } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'

// ROI Calculator state
const currentMonthlySpend = ref(1200)
const savingsPercentage = 67 // Based on proven 67% reduction metric

const monthlySavings = computed(() => Math.round(currentMonthlySpend.value * (savingsPercentage / 100)))
const newMonthlyCost = computed(() => currentMonthlySpend.value - monthlySavings.value)
const annualSavings = computed(() => monthlySavings.value * 12)

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

// SVG Icon components
const CodeIcon = {
  name: 'CodeIcon',
  template: `
    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
      <path d="M15 6l-6 6 6 6" />
    </svg>
  `,
}

const WordPressIcon = {
  name: 'WordPressIcon',
  template: `
    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  `,
}

const ServerIcon = {
  name: 'ServerIcon',
  template: `
    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <path d="M6 10v10" />
      <path d="M10 10v10" />
      <path d="M14 10v10" />
      <path d="M18 10v10" />
    </svg>
  `,
}

const iconComponents = {
  code: CodeIcon,
  wordpress: WordPressIcon,
  server: ServerIcon,
}
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
        <div class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pine/10 text-pine dark:bg-pine/20 dark:text-[#7EB8B2]" aria-hidden="true">
          <component :is="iconComponents[solution.icon as keyof typeof iconComponents]" />
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

    <!-- ROI Calculator -->
    <div class="mt-16 rounded-xl border border-line bg-paper-raised p-6 sm:p-8 dark:border-night-line dark:bg-night-raised">
      <div class="max-w-2xl">
        <h3 class="font-serif text-xl font-medium text-ink dark:text-night-ink">
          Cloud Cost & Infrastructure ROI Estimator
        </h3>
        <p class="mt-2 text-[15px] leading-7 text-ink-muted dark:text-night-muted">
          Based on real results: consolidating 10 projects (custom apps + WordPress) onto optimized DigitalOcean Droplets
          with Docker Compose and Nginx Proxy Manager reduced hosting from <strong>$1,200 → $400/month</strong> (67% savings).
          Adjust the slider to model your current spend.
        </p>

        <div class="mt-8 space-y-6">
          <!-- Current Spend Slider -->
          <div>
            <label
              for="current-spend"
              class="block text-sm font-medium text-ink dark:text-night-ink"
            >
              Current Monthly Infrastructure Spend: {{ formatCurrency(currentMonthlySpend) }}
            </label>
            <input
              id="current-spend"
              type="range"
              min="100"
              max="5000"
              step="100"
              v-model.number="currentMonthlySpend"
              class="mt-3 w-full h-2 appearance-none bg-line rounded-lg slider-thumb dark:bg-night-line"
              :aria-valuemin="100"
              :aria-valuemax="5000"
              :aria-valuenow="currentMonthlySpend"
              aria-label="Current monthly infrastructure spend in USD"
            />
            <div class="mt-2 flex justify-between font-mono text-xs text-ink-faint dark:text-night-faint">
              <span>$100</span>
              <span>$5,000</span>
            </div>
          </div>

          <!-- Results -->
          <div class="grid gap-4 sm:grid-cols-3">
            <div class="rounded-lg border border-line bg-paper p-4 dark:border-night-line dark:bg-night">
              <p class="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint dark:text-night-faint">
                Current Monthly
              </p>
              <p class="mt-1 font-serif text-2xl font-medium text-ink dark:text-night-ink">
                {{ formatCurrency(currentMonthlySpend) }}
              </p>
            </div>
            <div class="rounded-lg border border-line bg-paper p-4 dark:border-night-line dark:bg-night">
              <p class="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint dark:text-night-faint">
                Estimated Monthly
              </p>
              <p class="mt-1 font-serif text-2xl font-medium text-ink dark:text-night-ink">
                {{ formatCurrency(newMonthlyCost) }}
              </p>
            </div>
            <div class="rounded-lg border-2 border-pine bg-pine/5 p-4 dark:border-[#7EB8B2] dark:bg-[#7EB8B2]/10">
              <p class="font-mono text-xs uppercase tracking-[0.12em] text-pine dark:text-[#7EB8B2]">
                Monthly Savings
              </p>
              <p class="mt-1 font-serif text-2xl font-medium text-pine dark:text-[#7EB8B2]">
                {{ formatCurrency(monthlySavings) }}
              </p>
            </div>
          </div>

          <div class="pt-4 border-t border-line dark:border-night-line">
            <p class="font-mono text-xs uppercase tracking-[0.12em] text-ink-faint dark:text-night-faint">
              Projected Annual Savings
            </p>
            <p class="mt-1 font-serif text-3xl font-medium text-ink dark:text-night-ink">
              {{ formatCurrency(annualSavings) }}
            </p>
            <p class="mt-2 text-sm text-ink-muted dark:text-night-muted">
              Assuming {{ savingsPercentage }}% reduction via containerization, Nginx Proxy Manager consolidation,
              and automated deployment workflows.
            </p>
          </div>
        </div>
      </div>
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