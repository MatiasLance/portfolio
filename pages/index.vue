<template>
   <div class="container mx-auto">
    <h1 class="capitalize text-3xl">home</h1>
    <h1>Hi, I'm Marcelo Matias</h1>
    <p>For today's episode I'm going to create my porfolio website using nuxt 3 with tailwind css, docker compose, dockerfile, and nginx.</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})
useSeoMeta({
  title: 'Marcelo Matias - Full Stack Developer | Building Scalable Web Solutions',
  ogTitle: 'Marcelo Matias - Full Stack Developer | Building Scalable Web Solutions',
  description: 'This is the homepage of my porfolio website where you can see all my projects and about me',
  ogDescription: 'This is the homepage of my porfolio website where you can see all my projects and about me',
})
</script>
