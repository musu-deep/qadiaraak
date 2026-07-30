import type { FC, RefObject } from 'react'
import { useEffect, useRef } from 'react'

/** Adds .is-visible to .reveal elements when they enter the viewport. */
export function useReveal<T extends HTMLElement = HTMLElement>(): RefObject<T> {
  const ref = useRef<T>(null)
  useEffect(() => {
    const root = ref.current ?? document
    const nodes = root.querySelectorAll<HTMLElement>('.reveal')
    if (!nodes.length) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
  return ref as RefObject<T>
}

interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export const Section: FC<SectionProps> = ({ id, className = '', children }) => (
  <section id={id} className={`relative px-5 sm:px-8 ${className}`}>
    <div className="mx-auto w-full max-w-6xl">{children}</div>
  </section>
)

export const Eyebrow: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="reveal inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-300">
    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
    {children}
  </div>
)
