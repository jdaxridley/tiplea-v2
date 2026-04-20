import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin((nuxtApp) => {
  if (!import.meta.client) {
    return
  }

  const lenis = new Lenis({
    duration: 1.15,
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.1
  })

  let rafId = 0

  const raf = (time: number) => {
    lenis.raf(time)
    rafId = window.requestAnimationFrame(raf)
  }

  rafId = window.requestAnimationFrame(raf)

  // Sync Lenis with GSAP ScrollTrigger
  lenis.on('scroll', () => {
    if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
      ;(window as any).ScrollTrigger.update()
    }
  })

  nuxtApp.hook('app:beforeUnmount', () => {
    window.cancelAnimationFrame(rafId)
    lenis.destroy()
  })

  nuxtApp.provide('lenis', lenis)
})
