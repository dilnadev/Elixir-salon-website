---
name: Organic Minimalist Luxury
colors:
  surface: '#fff8f5'
  surface-dim: '#e2d8d2'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf2eb'
  surface-container: '#f6ece5'
  surface-container-high: '#f0e6e0'
  surface-container-highest: '#ebe1da'
  on-surface: '#1f1b17'
  on-surface-variant: '#50443e'
  inverse-surface: '#352f2b'
  inverse-on-surface: '#f9efe8'
  outline: '#82746d'
  outline-variant: '#d4c3bb'
  surface-tint: '#795742'
  primary: '#513421'
  on-primary: '#ffffff'
  primary-container: '#6b4a36'
  on-primary-container: '#e8bba2'
  inverse-primary: '#eabda3'
  secondary: '#6d5b47'
  on-secondary: '#ffffff'
  secondary-container: '#f7dfc4'
  on-secondary-container: '#73614d'
  tertiary: '#4c3700'
  on-tertiary: '#ffffff'
  tertiary-container: '#664e14'
  on-tertiary-container: '#e3c17c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbc8'
  primary-fixed-dim: '#eabda3'
  on-primary-fixed: '#2d1506'
  on-primary-fixed-variant: '#5f402c'
  secondary-fixed: '#f7dfc4'
  secondary-fixed-dim: '#dac3aa'
  on-secondary-fixed: '#251909'
  on-secondary-fixed-variant: '#544431'
  tertiary-fixed: '#ffdf9f'
  tertiary-fixed-dim: '#e4c27d'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5a4309'
  background: '#fff8f5'
  on-background: '#1f1b17'
  surface-variant: '#ebe1da'
typography:
  display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system embodies a high-end, editorial aesthetic that fuses architectural precision with organic warmth. It is designed for a discerning audience that values quiet luxury, craftsmanship, and intentionality. The visual narrative shifts away from cold, clinical minimalism toward a "warm minimalist" approach—utilizing generous whitespace and structured grids but softening the experience through a tactile, earth-toned palette. The emotional response should be one of calm, sophistication, and timelessness. 

The style is characterized by:
- **Architectural Minimalism:** Strict adherence to grid systems and structural alignment.
- **Organic Warmth:** A palette inspired by natural materials like linen, stone, and walnut.
- **Editorial Clarity:** High-contrast typography and intentional use of "negative space" to elevate content as art.

## Colors
The palette is rooted in a soft, organic foundation to evoke a sense of heritage and luxury. All values below are the canonical tokens defined in the frontmatter `colors` block — implementations must reference them by name, not by re-deriving hex values.

- **Background & Surface:** The primary canvas is `background`/`surface` (#fff8f5), a soft cream that reads as more inviting and premium than pure white. `surface-container-lowest` (#ffffff), pure white, is reserved for elevated cards and containers to create subtle contrast against the canvas.
- **Primary & Secondary:** `primary` (#513421), a dark umber brown, anchors interactive elements and key branding. `secondary` (#6d5b47), a warm taupe, acts as a supporting tone for secondary actions and decorative backgrounds; `secondary-container` (#f7dfc4), a warm beige, is used for chip/tag fills.
- **Accent:** `on-tertiary-container` (#e3c17c), a soft gold, is used sparingly for highlights, active-state indicators, or "hero" moments to signal premium value. The `tertiary` role itself (#4c3700, a dark olive-brown) is used only where accent-colored text needs to sit directly on the light background with sufficient contrast (e.g. eyebrow labels).
- **Typography & Borders:** `on-surface` (#1f1b17), a dark charcoal, ensures high legibility and a sharp, modern edge. Borders use `outline-variant` (#d4c3bb), a light warm beige, to stay nearly invisible and maintain the minimalist structure without creating harsh divisions.

## Typography
The design system pairs two families: **Playfair Display** for `display`-scale headings, and **Inter** for everything else (headlines, body, labels). The serif display type provides an editorial, "hero moment" accent, while Inter's systematic, utilitarian edge grounds the rest of the interface against the warm color palette. This juxtaposition creates the "architectural" feel required for the brand.

- **Display Headings:** Any element using the `display` type scale (top-level page headings, large numerals, hero pull-quotes) is set in Playfair Display, including its italic cut for eyebrow/quote accents.
- **Scale:** Headlines use a tight tracking and a medium weight to feel substantial and "designed."
- **Editorial Labels:** Labels should often be set in uppercase with increased letter spacing (0.05em) to denote a professional, curated look.
- **Body Text:** Set in Inter. Focus is on readability and generous line heights (1.6) to prevent the "warmth" from feeling cluttered.
- **Responsiveness:** Display and Large Headlines must scale down significantly on mobile to maintain the minimalist integrity without breaking layouts.

## Layout & Spacing
The layout follows a **fixed grid** philosophy for desktop to maintain the precision of a luxury publication, transitioning to a **fluid grid** for mobile devices.

- **Grid:** A 12-column grid is standard for desktop. Elements should favor generous margins to let the content breathe.
- **Rhythm:** A 4px baseline shift is used to ensure all components and text blocks align to a consistent vertical rhythm.
- **Breakpoints:**
    - **Mobile (<768px):** 4 columns, 16px margins, 16px gutters.
    - **Tablet (768px - 1024px):** 8 columns, 24px margins, 24px gutters.
    - **Desktop (>1024px):** 12 columns, maximum container width of 1280px, centered on screen.

## Elevation & Depth
This design system avoids traditional drop shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Tiering:** Depth is communicated by placing White (#FFFFFF) elements on top of the Soft Cream (#FAF6F2) background. 
- **Borders:** Instead of shadows, use 1px solid borders in the Very Light Beige (#EAE3DB) color to define card boundaries and input fields.
- **Interaction:** On hover, an element may transition its border color to Warm Beige (#D8C1A8) or increase its surface brightness slightly.
- **Flat Depth:** The goal is a "stacked paper" effect rather than a 3D environment.

## Shapes
In alignment with the architectural and minimalist narrative, the shape language is **strictly geometric and sharp**.

- **Corner Radius:** All components—including buttons, cards, and input fields—utilize a 0px radius.
- **Precision:** The lack of rounding emphasizes the structural integrity of the layout and aligns with the "blueprint" heritage of the original design system.
- **Iconography:** Use sharp-edged, stroke-based icons with a consistent 1.5px or 2px weight to match the Dark Charcoal text.

## Components
- **Buttons:** Primary buttons are solid Dark Brown (#6B4A36) with White (#FFFFFF) text. Secondary buttons use a Dark Brown outline with a transparent background. All buttons must have sharp 90-degree corners.
- **Input Fields:** Use a Soft Cream background with a 1px Light Beige border. Focus states transition the border to Dark Brown. Labels are always positioned above the field in uppercase `label-md` styling.
- **Cards:** Pure White (#FFFFFF) background with a 1px Light Beige border. Padding should be generous (minimum `xl` spacing) to maintain the editorial look. Card titles (service cards, pricing tiers, etc.) share a single `headline-md` scale regardless of context, so every card-level heading reads at the same weight in the hierarchy.
- **Lists:** Separated by thin 1px horizontal lines in Light Beige. Items should have generous vertical padding to avoid a dense, "app-like" feel.
- **Chips/Tags:** Small, sharp-edged rectangles with a Warm Beige (#D8C1A8) background and Dark Charcoal text. 
- **Navigation:** Top-level navigation uses simple text links in `label-md` with no background containers, emphasizing whitespace. Active states are indicated by a simple 2px underline in Soft Gold (#C6A664).
- **Text Links:** Inline and list links (footer, in-copy "Explore" links) carry no underline at rest; on hover they gain an underline and shift to `primary`/`tertiary`, keeping body copy uncluttered while still giving a clear affordance. Links that lead deeper into content (e.g. "Explore Service") pair this with a small trailing arrow icon that nudges forward on hover.
- **Ghost Numerals:** Large decorative numerals (service list, etc.) are set in `display` type at `primary` color, 15% opacity — tying the editorial "watermark" numeral to the brand's own ink color rather than a neutral gray.
- **Documentary Imagery:** Wide-format single images used as evidence/gallery moments (atelier shot, before/after strip) get a 1px `outline-variant` frame border, matching the card border treatment, to read as "framed" rather than bleeding into the page.