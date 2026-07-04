import precisionCutImage from './assets/images/precision-cut.jpg'
import skincareImage from './assets/images/skincare.png'
import nailImage from './assets/images/nail.png'
import haircolorImage from './assets/images/haircolor.png'
import suitImage from './assets/images/suit.png'

export const services = [
  {
    number: '01.',
    title: 'Precision Cut',
    description:
      "A session dedicated to the geometry of your features. Our stylists create shapes that evolve gracefully with your hair's natural movement.",
    image: precisionCutImage,
    alt: 'Architectural Hair Design',
    imageAspectClass: 'aspect-square',
  },
  {
    number: '02.',
    title: 'Color Atelier',
    description:
      'Bespoke coloring techniques including hand-painted balayage and multi-tonal layering to achieve depth, radiance, and longevity.',
    image: haircolorImage,
    alt: 'Chromatic Alchemy',
  },
  {
    number: '03.',
    title: 'Skin Rituals',
    description:
      'Advanced facial treatments merging high-performance active ingredients with ancient botanical wisdom for restorative cellular health.',
    image: skincareImage,
    alt: 'Dermatological Renewal',
    cardOffsetClass: 'md:right-8',
  },
  {
    number: '04.',
    title: 'The Nail Lounge',
    description:
      'Focused on the health and aesthetic precision of the hands and feet. Subtle, clean, and perfectly executed nail artistry.',
    image: nailImage,
    alt: 'Minimalist Manicure',
  },
  {
    number: '05.',
    title: 'Wellness Suite',
    description:
      'A curated menu of therapeutic experiences designed to realign the body and calm the nervous system through sound and scent.',
    image: suitImage,
    alt: 'Sensory Restoration',
  },
]

export const packages = [
  {
    name: 'BASIC',
    price: '₹1,499',
    highlighted: false,
    features: [
      { text: 'Classic Haircut', included: true },
      { text: 'Scalp Massage', included: true },
      { text: 'Blow Dry & Finish', included: true },
      { text: 'Facial Treatment', included: false },
    ],
  },
  {
    name: 'PREMIUM',
    price: '₹4,999',
    highlighted: true,
    badge: 'MOST POPULAR',
    features: [
      { text: 'Advanced Styling', included: true },
      { text: 'Deep Conditioning', included: true },
      { text: 'Radiance Facial', included: true },
      { text: 'Spa Manicure', included: true },
    ],
  },
  {
    name: 'BRIDAL',
    price: '₹19,999',
    highlighted: false,
    features: [
      { text: 'HD Bridal Makeup', included: true },
      { text: 'Hair Ornamenting', included: true },
      { text: 'Draping Services', included: true },
      { text: 'Full Body Polish', included: true },
    ],
  },
]
