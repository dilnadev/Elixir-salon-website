import { useEffect, useRef, useState } from 'react'

export default function BlurReveal({ children, className = '' }) {
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

  return (
    <div
      ref={ref}
      className={`transition-[filter,opacity] duration-1000 ease-out ${
        isVisible ? 'blur-none opacity-100' : 'blur-xl opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
