<template>
    <div>
        <h1 class="capitalize">
            {{ title }}
        </h1>
        <p class="font-bold">
            {{ content }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    title: {
      type: String,
      default: null
    },
    content: {
      type: String,
      default: null
    }
})
</script>
