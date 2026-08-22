<script setup lang="ts">
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import EngineeringSection from '@/components/sections/EngineeringSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-pine focus:px-3 focus:py-2 focus:text-sm focus:text-white"
  >
    Skip to content
  </a>
  <SiteHeader />
  <main id="main">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <EngineeringSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
