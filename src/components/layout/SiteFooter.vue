<script setup lang="ts">
import { profile, social } from '@/data/portfolio'
</script>

<template>
  <footer class="border-t border-line dark:border-night-line">
    <div class="page-wrap flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
      <p class="text-sm text-ink-muted dark:text-night-muted">
        {{ profile.name }}
        <span class="text-ink-faint dark:text-night-faint"> · </span>
        {{ profile.location }}
      </p>
      <ul class="flex flex-wrap gap-x-5 gap-y-2">
        <li v-for="item in social" :key="item.label">
          <a
            :href="item.href"
            class="text-sm text-ink-muted underline-offset-4 hover:text-pine hover:underline dark:text-night-muted dark:hover:text-[#7EB8B2]"
            :target="item.href.startsWith('http') ? '_blank' : undefined"
            :rel="item.href.startsWith('http') ? 'noopener noreferrer' : undefined"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
