import { services } from '../data'
import SlideIn from './SlideIn'
import Parallax from './Parallax'
import FadeIn from './FadeIn'

function ServiceCard({ service, reverse }) {
  return (
    <div className="px-margin-mobile md:px-gutter lg:px-margin-desktop max-w-container-max mx-auto">
      <div className={`flex flex-col items-center relative ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <SlideIn
          direction={reverse ? 'right' : 'left'}
          className={`w-full md:w-3/5 ${service.imageAspectClass ?? 'aspect-[4/3]'} overflow-hidden z-0`}
        >
          <Parallax className="w-full h-full">
            <img
              alt={service.alt}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover scale-110"
              src={service.image}
            />
          </Parallax>
        </SlideIn>
        <SlideIn
          direction={reverse ? 'left' : 'right'}
          className={`w-full md:w-[45%] bg-surface-container-lowest p-12 md:p-16 border border-outline-variant md:absolute md:top-1/2 md:-translate-y-1/2 z-10 -mt-12 md:mt-0 ${
            reverse ? 'md:left-0' : 'md:right-0'
          } ${service.cardOffsetClass ?? ''}`}
        >
          <span className="font-display text-display leading-none text-primary/15 block mb-4">
            {service.number}
          </span>
          <h2 className="font-headline-md text-headline-md mb-6 uppercase text-on-surface">
            {service.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8 text-justify md:text-left">
            {service.description}
          </p>
          <a
            className="group font-label-md text-label-md text-primary uppercase tracking-widest hover:underline underline-offset-4 hover:text-tertiary transition-colors inline-flex items-center gap-1"
            href="#contact"
          >
            Book Now
            <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </SlideIn>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section className="py-24 space-y-32">
      <FadeIn
        as="h2"
        className="font-display text-headline-lg-mobile md:text-headline-lg text-center mb-10 md:mb-24 uppercase tracking-widest text-on-surface px-margin-mobile"
      >
        Our Services
      </FadeIn>
      {services.map((service, i) => (
        <ServiceCard key={service.title} service={service} reverse={i % 2 === 1} />
      ))}
    </section>
  )
}
