import { useEffect, useRef, useState } from 'react'
import saloonInterior from '../assets/images/saloon-interior.png'
import gallery1 from '../assets/images/gallery1.png'
import gallery2 from '../assets/images/gallery2.png'
import gallery3 from '../assets/images/gallery3.png'
import FadeIn from './FadeIn'

const images = [
  { src: saloonInterior, alt: 'Elixir Atelier Landscape', className: 'aspect-[4/3] md:aspect-[21/9]' },
  { src: gallery1, alt: 'Face Treatment', className: 'aspect-square' },
  { src: gallery2, alt: 'Hair Styling', className: 'aspect-square' },
  { src: gallery3, alt: 'Eyebrow Threading', className: 'aspect-square' },
]

export default function Gallery() {
  const gridRef = useRef(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)

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

  const handleImageTap = (image) => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setLightboxImage(image)
    }
  }

  return (
    <section id="gallery" className="py-0 hairline-border scroll-mt-20">
      <div className="px-margin-mobile md:px-gutter lg:px-margin-desktop max-w-container-max mx-auto py-24">
        <FadeIn
          as="h2"
          className="font-display text-headline-lg-mobile md:text-headline-lg text-center mb-10 md:mb-24 uppercase tracking-widest text-on-surface"
        >
          Gallery
        </FadeIn>

        <div ref={gridRef}>
          <div
            onClick={() => handleImageTap(images[0])}
            className={`${images[0].className} overflow-hidden border border-outline-variant transition-all duration-700 ease-out cursor-pointer md:cursor-default ${
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <img
              alt={images[0].alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110 active:scale-95 md:active:scale-100"
              src={images[0].src}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
            {images.slice(1).map((image, i) => (
              <div
                key={image.src}
                onClick={() => handleImageTap(image)}
                className={`${image.className} overflow-hidden border border-outline-variant transition-all duration-700 ease-out cursor-pointer md:cursor-default ${
                  isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <img
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110 active:scale-95 md:active:scale-100"
                  src={image.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-12 text-center bg-surface hairline-border-t">
        <FadeIn
          as="p"
          className="font-label-md text-label-md text-tertiary uppercase tracking-[0.4em]"
        >
          OUR ATELIER — MINIMALIST. PURPOSEFUL. SERENE.
        </FadeIn>
      </div>

      {lightboxImage && (
        <div
          className="md:hidden fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            className="absolute top-6 right-6 text-white transition-transform hover:scale-110"
            onClick={() => setLightboxImage(null)}
          >
            <span className="material-symbols-outlined text-[32px]" aria-hidden="true">
              close
            </span>
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  )
}
