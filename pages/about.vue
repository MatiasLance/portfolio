<template>
    <div class="container mx-auto">
        <h1 class="capitalize text-3xl">{{ title }}</h1>
        <Card
        title="About Page Title"
        content="About page Content goes here"
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
    const title = ref('about me')
    return { title }
  }
}
</script>