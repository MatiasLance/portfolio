<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import { profile, social } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const copied = ref(false)
let resetTimer: number | undefined

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
  } catch {
    window.prompt('Copy email address', profile.email)
  }

  copied.value = true
  window.clearTimeout(resetTimer)
  resetTimer = window.setTimeout(() => {
    copied.value = false
  }, 2000)
}

onUnmounted(() => {
  window.clearTimeout(resetTimer)
})
</script>

<template>
  <section
    id="contact"
    class="page-wrap section-space border-t border-line dark:border-night-line"
    aria-labelledby="contact-title"
  >
    <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
      <div>
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Get in touch"
          description="The most reliable way to reach me is email. GitHub and LinkedIn are also listed below."
        />
        <p class="mt-6 max-w-xl text-[15px] leading-7 text-ink-muted dark:text-night-muted">
          {{ profile.availability }}
        </p>
        <button
          type="button"
          class="mt-6 inline-flex h-10 items-center rounded bg-pine px-4 text-sm font-medium text-white hover:bg-pine-dark dark:bg-[#1A7A71] dark:hover:bg-[#15665F]"
          :aria-label="copied ? 'Email address copied to clipboard' : `Copy ${profile.email} to clipboard`"
          @click="copyEmail"
        >
          {{ copied ? 'Copied' : 'Copy email' }}
        </button>
        <p class="sr-only" aria-live="polite">
          {{ copied ? `${profile.email} copied to clipboard` : '' }}
        </p>
      </div>

      <address class="not-italic">
        <dl class="space-y-4 text-sm">
          <div>
            <dt class="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint dark:text-night-faint">
              Email
            </dt>
            <dd class="mt-1">
              <button
                type="button"
                class="text-left text-ink underline-offset-4 hover:text-pine hover:underline dark:text-night-ink dark:hover:text-[#7EB8B2]"
                :aria-label="copied ? 'Email address copied to clipboard' : `Copy ${profile.email} to clipboard`"
                @click="copyEmail"
              >
                {{ profile.email }}
              </button>
            </dd>
          </div>
          <div>
            <dt class="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint dark:text-night-faint">
              Location
            </dt>
            <dd class="mt-1 text-ink dark:text-night-ink">
              {{ profile.location }}
            </dd>
          </div>
          <div>
            <dt class="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint dark:text-night-faint">
              Profiles
            </dt>
            <dd class="mt-1 flex flex-col gap-1">
              <a
                v-for="item in social.filter((link) => link.label !== 'Email')"
                :key="item.label"
                :href="item.href"
                class="text-ink underline-offset-4 hover:text-pine hover:underline dark:text-night-ink dark:hover:text-[#7EB8B2]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ item.label }}
                <span class="sr-only"> (opens in a new tab)</span>
              </a>
            </dd>
          </div>
        </dl>
      </address>
    </div>
  </section>
</template>
