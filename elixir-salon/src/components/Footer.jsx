const quickLinkColumns = [
  [
    { label: 'About', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
  ],
  [
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ],
]

const legalLinks = ['Privacy Policy', 'Terms of Service']

const contactDetails = [
  {
    icon: 'location_on',
    label: 'Our Location',
    lines: ['123 Luxury Lane, MG Road,', 'Bangalore, Karnataka 560001'],
  },
  {
    icon: 'call',
    label: 'Phone',
    lines: ['+91 484 2345 6789'],
  },
  {
    icon: 'mail',
    label: 'Email',
    lines: ['hello@elixirsalon.com'],
  },
]

function FacebookIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const socials = [
  { Icon: FacebookIcon, label: 'Follow us on Facebook' },
  { Icon: InstagramIcon, label: 'Follow us on Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-surface hairline-border-t py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter px-margin-mobile md:px-gutter lg:px-margin-desktop max-w-container-max mx-auto text-center md:text-left">
        <div className="md:col-span-5 flex flex-col items-center md:items-start">
          <span className="font-headline-md text-[28px] font-bold tracking-tighter text-primary block mb-8">
            ELIXIR LUXURY SALON
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-8 text-justify md:text-left">
            Your look isn't just an appointment — it's a statement of who you are. That's why our
            stylists take the time to deliver more than just a service.
          </p>
          <div className="flex gap-6">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col items-center md:items-start">
          <h3 className="font-label-md text-label-md mb-8 uppercase tracking-widest text-on-surface">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-x-8">
            {quickLinkColumns.map((column, i) => (
              <ul key={i} className="space-y-5 font-body-md text-body-md text-on-surface-variant">
                {column.map((link) => (
                  <li key={link.label}>
                    <a
                      className="hover:text-primary hover:underline underline-offset-4 transition-all"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col items-center md:items-start">
          <h3 className="font-label-md text-label-md mb-8 uppercase tracking-widest text-on-surface">
            Get in Touch
          </h3>
          <div className="space-y-6 mb-8">
            {contactDetails.map((item) => (
              <div key={item.label} className="flex gap-3 text-left">
                <span
                  className="material-symbols-outlined text-primary-fixed-dim text-[22px] leading-none mt-0.5"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <div>
                  <p className="font-body-md text-body-md font-bold text-on-surface mb-1">
                    {item.label}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {item.lines.map((line, i) => (
                      <span key={line}>
                        {line}
                        {i < item.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-12 mt-16 pt-12 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-body-md text-[12px] text-on-surface-variant tracking-widest uppercase">
            © 2026 ELIXIR LUXURY SALON. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-8">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-body-md text-[12px] text-on-surface-variant hover:text-primary hover:underline underline-offset-4 uppercase tracking-widest transition-all"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
