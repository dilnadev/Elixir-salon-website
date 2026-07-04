import heroImage from '../assets/images/hero.png'
import FadeIn from './FadeIn'

const HEADING = 'Elevating Beauty Beyond Expectations.'

function AnimatedHeading({ text }) {
  let letterIndex = 0
  return text.split(' ').map((word, wordIndex, words) => (
    <span key={wordIndex} className="inline-block whitespace-nowrap">
      {word.split('').map((char, i) => (
        <span
          key={i}
          className="letter-reveal"
          style={{ animationDelay: `${letterIndex++ * 0.035}s` }}
        >
          {char}
        </span>
      ))}
      {wordIndex < words.length - 1 ? ' ' : ''}
    </span>
  ))
}

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] flex items-center overflow-hidden hairline-border scroll-mt-20">
      <div
        role="img"
        aria-label="Minimalist Luxury Salon Interior"
        className="absolute inset-0 z-0 bg-cover bg-fixed"
        style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: '75% 65%' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/45 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 px-margin-mobile md:px-gutter lg:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="max-w-3xl">
          <h1 className="font-display text-headline-lg-mobile md:text-headline-lg mb-8 leading-[0.9] text-on-primary">
            <AnimatedHeading text={HEADING} />
          </h1>
          <FadeIn
            as="p"
            delay={1000}
            className="font-body-lg text-body-lg text-primary-fixed max-w-xl mb-12 text-justify md:text-left"
          >
            Expert styling, advanced skincare, and a serene atmosphere designed for your ultimate
            beauty experience.
          </FadeIn>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#services"
              className="px-10 py-5 bg-surface text-primary font-label-md text-label-md uppercase tracking-widest transition-all hover:opacity-90 hover:scale-105 active:opacity-70 text-center"
            >
              EXPLORE SERVICES
            </a>
            <a
              href="#contact"
              className="px-10 py-5 border border-on-primary text-on-primary font-label-md text-label-md bg-white/10 backdrop-blur-sm uppercase tracking-widest hover:bg-white/20 hover:scale-105 transition-all text-center"
            >
              BOOK CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
