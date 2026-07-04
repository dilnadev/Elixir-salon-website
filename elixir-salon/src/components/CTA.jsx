import { useState } from 'react'
import FadeIn from './FadeIn'
import Parallax from './Parallax'
import BlurReveal from './BlurReveal'
import bookingImage from '../assets/images/booking.png'

const fields = [
  { id: 'booking-name', name: 'name', label: 'Your Name', type: 'text', autoComplete: 'name' },
  { id: 'booking-phone', name: 'phone', label: 'Phone Number', type: 'tel', autoComplete: 'tel' },
  { id: 'booking-email', name: 'email', label: 'Your Email', type: 'email', autoComplete: 'email' },
]

export default function CTA() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-primary text-on-primary hairline-border scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-container-max mx-auto">
        <div className="aspect-[4/3] md:aspect-auto min-h-[320px] overflow-hidden">
          <Parallax className="w-full h-full">
            <BlurReveal className="w-full h-full">
              <img
                alt="Elixir Salon treatment room"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover scale-125"
                src={bookingImage}
              />
            </BlurReveal>
          </Parallax>
        </div>

        <div className="px-margin-mobile md:px-gutter lg:px-16 py-16 md:py-24 flex flex-col justify-center">
          <FadeIn>
            <h2 className="font-display text-headline-lg-mobile md:text-headline-lg mb-6 text-on-primary leading-tight">
              Book an appointment
            </h2>
            <p className="font-body-md text-body-md text-primary-fixed mb-10 max-w-md text-justify md:text-left">
              Share your details and our concierge will call you back to help you choose.
            </p>
          </FadeIn>

          {submitted ? (
            <p className="font-label-md text-label-md uppercase tracking-widest text-on-primary">
              Thank you — we'll be in touch shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
              {fields.map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="sr-only">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.label}
                    required
                    className="w-full bg-surface text-on-surface border border-outline-variant px-4 py-3 font-body-md text-body-md placeholder:text-on-surface-variant/70 focus:border-primary focus:ring-0 transition-colors"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="booking-message" className="sr-only">
                  Tell us what you're looking for
                </label>
                <textarea
                  id="booking-message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're looking for..."
                  className="w-full bg-surface text-on-surface border border-outline-variant px-4 py-3 font-body-md text-body-md placeholder:text-on-surface-variant/70 focus:border-primary focus:ring-0 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-surface text-primary font-label-md text-label-md uppercase tracking-widest hover:opacity-90 hover:scale-105 transition-all"
              >
                Send Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
