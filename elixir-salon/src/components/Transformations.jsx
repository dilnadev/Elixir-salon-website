import { useEffect, useRef, useState } from 'react'
import trans1 from '../assets/images/trans1.png'
import FadeIn from './FadeIn'
import Parallax from './Parallax'

export default function Transformations() {
  const frameRef = useRef(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const el = frameRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-32 hairline-border bg-surface-container-lowest">
      <div className="px-margin-mobile md:px-gutter lg:px-margin-desktop max-w-container-max mx-auto">
        <FadeIn
          as="h2"
          className="font-label-md text-label-md text-center mb-20 uppercase tracking-[0.3em] text-on-surface"
        >
          Transformations
        </FadeIn>
      </div>
      <div className="md:px-gutter lg:px-margin-desktop max-w-container-max mx-auto">
        <div
          ref={frameRef}
          className="relative grid grid-cols-1 gap-0 aspect-[3/2] overflow-hidden md:border md:border-outline-variant"
        >
          <Parallax className="w-full h-full">
            <div className="w-full h-full scale-125">
              <img
                alt="Before and after beauty transformation"
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover transition-transform duration-[1610ms] ease-out ${
                  isRevealed ? 'scale-100' : 'scale-110'
                }`}
                src={trans1}
              />
            </div>
          </Parallax>
          <div
            aria-hidden="true"
            className={`absolute inset-0 bg-background transition-transform duration-[1035ms] ease-in-out ${
              isRevealed ? '-translate-x-full' : 'translate-x-0'
            }`}
          />
        </div>
      </div>
    </section>
  )
}
