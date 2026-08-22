<script setup lang="ts">
import { highlights, profile, social } from '@/data/portfolio'

const github = social.find((item) => item.label === 'GitHub')
const linkedin = social.find((item) => item.label === 'LinkedIn')
</script>

<template>
  <section id="top" class="page-wrap pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pt-24" aria-labelledby="hero-name">
    <p class="font-mono text-xs font-medium uppercase tracking-[0.16em] text-pine dark:text-[#7EB8B2]">
      DevOps · Full-stack
    </p>
    <h1 id="hero-name" class="mt-3 max-w-3xl font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl dark:text-night-ink">
      {{ profile.name }}
    </h1>
    <p class="mt-3 text-lg text-ink-muted dark:text-night-muted">
      {{ profile.title }}
    </p>
    <p class="mt-5 max-w-2xl text-[15px] leading-7 text-ink-muted dark:text-night-muted">
      {{ profile.summary }}
    </p>

    <div class="mt-8 flex flex-wrap items-center gap-3">
      <a
        href="#work"
        class="inline-flex h-10 items-center rounded bg-pine px-4 text-sm font-medium text-white hover:bg-pine-dark dark:bg-[#1A7A71] dark:hover:bg-[#15665F]"
      >
        View selected work
      </a>
      <a
        href="#contact"
        class="inline-flex h-10 items-center rounded border border-line px-4 text-sm font-medium text-ink hover:border-line-strong dark:border-night-line dark:text-night-ink dark:hover:border-[#4A453E]"
      >
        Contact
      </a>
      <span class="hidden h-4 w-px bg-line sm:block dark:bg-night-line" aria-hidden="true" />
      <a
        v-if="github"
        :href="github.href"
        class="text-sm text-ink-muted underline-offset-4 hover:text-pine hover:underline dark:text-night-muted dark:hover:text-[#7EB8B2]"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        v-if="linkedin"
        :href="linkedin.href"
        class="text-sm text-ink-muted underline-offset-4 hover:text-pine hover:underline dark:text-night-muted dark:hover:text-[#7EB8B2]"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>

    <ul class="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-4 dark:border-night-line dark:bg-night-line">
      <li
        v-for="item in highlights"
        :key="item.label"
        class="bg-paper-raised px-4 py-4 sm:px-5 dark:bg-night-raised"
      >
        <p class="font-serif text-2xl font-medium tracking-tight text-ink dark:text-night-ink">
          {{ item.value }}
        </p>
        <p class="mt-2 font-mono text-[11px] leading-4 text-ink-faint dark:text-night-faint">
          {{ item.label }}
        </p>
      </li>
    </ul>
  </section>
</template>
