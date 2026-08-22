import { onMounted, onUnmounted, ref } from 'vue'
import { nav } from '@/data/portfolio'

export function useActiveSection() {
  const activeId = ref(nav[0]?.id ?? '')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          activeId.value = visible[0].target.id
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0.15, 0.35, 0.55],
      },
    )

    sections.forEach((section) => observer?.observe(section))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { activeId }
}
