<template>
    <div class="container mx-auto">
        <h1 class="capitalize text-3xl">{{ title }}</h1>
        <Card
        title="My Project"
        content="List of Project"
        />
    </div>
</template>

<script>
import { ref } from 'vue'

definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})

export default {
    setup() {
      const title = ref('Projects')
      return { title }
    }
}
</script>