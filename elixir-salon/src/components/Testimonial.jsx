import { useState } from 'react'
import bgTest from '../assets/images/test-bg.png'

const testimonials = [
  {
    quote:
      "I booked a complete makeover before my engagement, and I couldn't be happier. The hair, makeup, and skincare services were flawless. Highly recommended for anyone looking for premium beauty services.",
    author: 'Priya S.',
    rating: 5,
  },
  {
    quote:
      "From the consultation to the final styling, everything felt personalized. The team understood my preferences perfectly, and the results exceeded my expectations. I'll definitely be coming back.",
    author: 'Ananya R.',
    rating: 5,
  },
  {
    quote:
      'The salon has such a calming atmosphere, and the staff are incredibly professional. My skin treatment left me glowing, and the experience was worth every minute.',
    author: 'Megha K.',
    rating: 5,
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex justify-center gap-1 mb-6" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-[16px] text-tertiary-fixed"
          style={{ fontVariationSettings: "'FILL' 1" }}
          aria-hidden="true"
        >
          star
        </span>
      ))}
    </div>
  )
}

export default function Testimonial() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  const goPrev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const goNext = () => setIndex((i) => (i + 1) % testimonials.length)

  return (
    <section
      id="reviews"
      className="relative py-32 md:py-40 overflow-hidden hairline-border bg-cover bg-center bg-fixed scroll-mt-20"
      style={{ backgroundImage: `url(${bgTest})` }}
    >
      <div className="relative z-10 px-margin-mobile md:px-gutter lg:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <span className="font-display italic text-[24px] md:text-[32px] text-primary block mb-4">
            About Salon
          </span>
          <h2 className="font-label-md text-label-md font-bold tracking-[0.4em] uppercase text-tertiary">
            TESTIMONIALS
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <span
            aria-hidden="true"
            className="absolute -top-6 left-2 md:-left-4 font-display text-[80px] md:text-[100px] leading-none text-primary/15 select-none"
          >
            &ldquo;
          </span>

          <div className="relative bg-primary text-on-primary pt-16 pb-12 px-8 md:px-14">
            <StarRating rating={current.rating} />
            <p className="font-body-lg text-body-lg leading-relaxed text-justify md:text-center mb-8">
              {current.quote}
            </p>
            <div className="text-center">
              <p className="font-headline-md text-[18px] font-bold text-tertiary-fixed uppercase tracking-wide">
                {current.author}
              </p>
              <p className="font-body-md text-body-md text-primary-fixed/70 mt-1">Verified Client</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goPrev}
            className="text-on-surface-variant hover:text-primary hover:scale-110 transition-all"
          >
            <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
              chevron_left
            </span>
          </button>
          <div className="flex gap-3">
            {testimonials.map((testimonial, i) => (
              <button
                key={testimonial.author}
                type="button"
                aria-label={`Show testimonial from ${testimonial.author}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 transition-all hover:scale-150 ${
                  i === index ? 'bg-primary' : 'border border-primary/40'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goNext}
            className="text-on-surface-variant hover:text-primary hover:scale-110 transition-all"
          >
            <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
