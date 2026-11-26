<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    description?: string
    titleId?: string
    align?: 'left' | 'center'
  }>(),
  {
    description: '',
    titleId: undefined,
    align: 'left',
  },
)
</script>

<template>
  <div
    class="max-w-2xl"
    :class="align === 'center' ? 'mx-auto text-center' : ''"
  >
    <div
      class="flex items-center gap-3"
      :class="align === 'center' ? 'justify-center' : ''"
    >
      <span class="h-px w-8 bg-white/60" aria-hidden="true" />
      <p class="eyebrow">{{ eyebrow }}</p>
    </div>

    <h2
      :id="titleId"
      class="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
    >
      {{ title }}
    </h2>

    <p v-if="description" class="mt-4 text-base leading-relaxed text-neutral-400 sm:text-lg">
      {{ description }}
    </p>
  </div>
</template>
