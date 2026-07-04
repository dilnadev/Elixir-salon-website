import FadeIn from './FadeIn'

export default function ServicesIntro() {
  return (
    <section id="services" className="py-32 bg-surface-container-low hairline-border scroll-mt-20">
      <FadeIn className="max-w-3xl mx-auto text-center px-margin-mobile md:px-gutter lg:px-margin-desktop">
        <span className="font-label-md text-label-md text-tertiary uppercase tracking-[0.2em] block mb-8">
          THE ARCHITECTURE OF BEAUTY
        </span>
        <p className="font-body-lg text-body-lg text-on-surface leading-[1.8] text-justify md:text-center">
          At Elixir, we believe beauty is a structural harmony. Every service is a meticulous
          composition of technique and vision, designed to reveal the most sophisticated version
          of your natural self. We specialize in bespoke treatments that transcend trends,
          focusing on the enduring quality of true craftsmanship.
        </p>
      </FadeIn>
    </section>
  )
}
