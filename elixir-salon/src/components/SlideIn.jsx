import { useEffect, useRef, useState } from 'react'

export default function SlideIn({ children, direction = 'left', className = '' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hiddenTransform =
    direction === 'left' ? '-translate-x-6 md:-translate-x-24' : 'translate-x-6 md:translate-x-24'

  return (
    <div
      ref={ref}
      className={`transition-all duration-[800ms] ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${hiddenTransform}`
      } ${className}`}
    >
      {children}
    </div>
  )
}
