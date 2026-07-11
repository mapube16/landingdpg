import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Revela los hijos del contenedor con entrada escalonada (float-in desde el eje Y
// con leve rotación) cuando entran en viewport. Respeta prefers-reduced-motion.
// ponytail: un solo hook cubre todas las grids; sube la config si alguna necesita otro timing.
export function useReveal({
  selector = ':scope > *',
  y = 42,
  rotate = 0,
  stagger = 0.1,
  duration = 0.8,
  start = 'top 82%',
} = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = selector ? el.querySelectorAll(selector) : [el]
    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0, rotate: 0 })
      return
    }
    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y,
        rotate,
        duration,
        ease: 'power3.out',
        stagger,
        scrollTrigger: { trigger: el, start },
      })
    }, el)
    return () => ctx.revert()
  }, [])
  return ref
}
