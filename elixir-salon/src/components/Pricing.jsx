import { useEffect, useRef, useState } from 'react'
import { packages } from '../data'
import FadeIn from './FadeIn'

function PricingCard({ pkg, isRevealed, delay }) {
  const isHighlighted = pkg.highlighted

  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out hover:-translate-y-2 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${
        isHighlighted
          ? 'p-16 bg-primary text-on-primary flex flex-col relative z-10'
          : 'p-16 border border-outline-variant bg-surface flex flex-col hover:border-primary'
      }`}
    >
      {pkg.badge && (
        <div className="absolute top-0 right-0 bg-secondary-container text-on-secondary-container px-4 py-2 font-label-sm text-label-sm uppercase tracking-widest">
          {pkg.badge}
        </div>
      )}
      <h3
        className={`font-headline-md text-headline-md font-bold mb-4 uppercase ${
          isHighlighted ? '' : 'text-on-surface'
        }`}
      >
        {pkg.name}
      </h3>
      <div className={`text-[48px] font-display mb-12 ${isHighlighted ? '' : 'text-primary'}`}>
        {pkg.price}
      </div>
      <ul
        className={`space-y-6 mb-16 flex-grow font-body-md text-body-md ${
          isHighlighted ? '' : 'text-on-surface-variant'
        }`}
      >
        {pkg.features.map((feature) => (
          <li
            key={feature.text}
            className={`flex items-center gap-2 ${feature.included ? '' : 'opacity-30'}`}
          >
            <span
              className={`material-symbols-outlined text-[18px] ${
                feature.included && !isHighlighted ? 'text-tertiary' : ''
              }`}
              aria-hidden="true"
            >
              {feature.included ? 'check' : 'close'}
            </span>
            {feature.text}
            {!feature.included && ' (not included)'}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={
          isHighlighted
            ? 'block w-full py-5 bg-surface text-primary font-label-md text-label-md uppercase tracking-widest hover:opacity-90 hover:scale-105 transition-all text-center'
            : 'block w-full py-5 border border-primary text-primary font-label-md text-label-md uppercase tracking-widest hover:bg-primary hover:text-on-primary hover:scale-105 transition-all text-center'
        }
      >
        CHOOSE PACKAGE
      </a>
    </div>
  )
}

export default function Pricing() {
  const gridRef = useRef(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing" className="py-20 md:py-40 bg-surface hairline-border scroll-mt-20">
      <div className="px-margin-mobile md:px-gutter lg:px-margin-desktop max-w-container-max mx-auto">
        <FadeIn
          as="h2"
          className="font-display text-headline-lg-mobile md:text-headline-lg text-center mb-10 md:mb-24 uppercase tracking-widest text-on-surface"
        >
          CURATED PACKAGES
        </FadeIn>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {packages.map((pkg, i) => (
            <PricingCard key={pkg.name} pkg={pkg} isRevealed={isRevealed} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}
