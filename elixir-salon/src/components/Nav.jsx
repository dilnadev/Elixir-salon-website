import { useEffect, useState } from 'react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const threshold = 50
    const handleScroll = () => setIsScrolled(window.scrollY > threshold)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b transition-colors ${
        isScrolled ? 'bg-surface hairline-border' : 'bg-transparent border-transparent'
      }`}
      id="main-nav"
    >
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-gutter lg:px-margin-desktop max-w-container-max mx-auto">
        <span
          className={`font-headline-md text-[24px] font-bold tracking-tighter transition-colors ${
            isScrolled ? 'text-primary' : 'text-on-primary'
          }`}
        >
          ELIXIR SALON
        </span>
        <div className="hidden md:flex gap-12 items-center">
          {links.map((link, i) => (
            <a
              key={link.label}
              className={`transition-colors font-label-md text-label-md uppercase tracking-widest ${
                i === 0
                  ? `font-bold border-b-2 pb-1 ${
                      isScrolled ? 'text-primary border-tertiary' : 'text-on-primary border-on-primary'
                    }`
                  : isScrolled
                    ? 'text-on-surface-variant hover:text-primary'
                    : 'text-primary-fixed hover:text-on-primary'
              }`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className={`md:hidden transition-all hover:scale-110 ${isScrolled ? 'text-primary' : 'text-on-primary'}`}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col bg-surface border-t border-outline-variant px-margin-mobile py-6 gap-2`}
      >
        {links.map((link) => (
          <a
            key={link.label}
            className="block py-3 text-on-surface font-label-md text-label-md uppercase tracking-widest"
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
