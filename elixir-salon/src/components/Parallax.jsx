import { useEffect, useRef } from 'react'

export default function Parallax({ children, strength = 0.12, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false

    const update = () => {
      ticking = false
      const rect = el.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return

      const viewportCenter = window.innerHeight / 2
      const elementCenter = rect.top + rect.height / 2
      const maxOffset = Math.min(40, rect.height * 0.08)
      const raw = (viewportCenter - elementCenter) * strength
      const offset = Math.max(-maxOffset, Math.min(maxOffset, raw))
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [strength])

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  )
}
