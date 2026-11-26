<script setup lang="ts">
import { profile, site, solutions, techCategories } from '~/data/portfolio'

const runtimeConfig = useRuntimeConfig()
const siteUrl = String(runtimeConfig.public.siteUrl).replace(/\/$/, '')

useSeoMeta({
  title: site.title,
  description: site.description,
  ogType: 'website',
  ogTitle: site.title,
  ogDescription: site.description,
  ogUrl: `${siteUrl}/`,
  ogSiteName: profile.name,
  ogImage: site.ogImage,
  ogImageAlt: `${profile.name} — ${profile.role}`,
  twitterCard: 'summary',
  twitterTitle: site.title,
  twitterDescription: site.description,
  twitterImage: site.ogImage,
  robots: 'index, follow',
})

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  description: site.description,
  email: `mailto:${profile.email}`,
  url: `${siteUrl}/`,
  image: site.ogImage,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Davao City',
    addressCountry: 'PH',
  },
  sameAs: profile.social.filter((link) => link.label !== 'Email').map((link) => link.href),
  knowsAbout: [
    ...new Set([
      ...techCategories.flatMap((category) => category.items),
      ...solutions.map((solution) => solution.title),
    ]),
  ],
}

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(personSchema),
    },
  ],
})
</script>

<template>
  <div id="top" class="relative min-h-screen overflow-x-clip">
    <BlackHolePreloader />

    <a href="#main-content" class="skip-link">Skip to content</a>

    <AppNavbar />

    <main id="main-content" tabindex="-1" class="outline-none">
      <HeroSection />
      <SolutionsGrid />
      <ProjectsShowcase />
      <TrackRecordTimeline />
      <TechStackMatrix />
    </main>

    <ContactFooter />
  </div>
</template>
