---
name: Ethereal Confections
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#4f4444'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#817474'
  outline-variant: '#d2c3c3'
  surface-tint: '#6f5959'
  primary: '#6f5959'
  on-primary: '#ffffff'
  primary-container: '#f2d5d5'
  on-primary-container: '#715b5b'
  inverse-primary: '#dcc0c0'
  secondary: '#56624b'
  on-secondary: '#ffffff'
  secondary-container: '#d7e4c7'
  on-secondary-container: '#5a664f'
  tertiary: '#775a19'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffd68b'
  on-tertiary-container: '#795b1b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f9dcdc'
  primary-fixed-dim: '#dcc0c0'
  on-primary-fixed: '#271718'
  on-primary-fixed-variant: '#564242'
  secondary-fixed: '#dae7c9'
  secondary-fixed-dim: '#becbae'
  on-secondary-fixed: '#141e0c'
  on-secondary-fixed-variant: '#3f4a34'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: notoSerif
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: notoSerif
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: notoSerif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: plusJakartaSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: plusJakartaSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: plusJakartaSans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  button:
    fontFamily: plusJakartaSans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  container-max: 1200px
---

## Brand & Style

The design system is rooted in the concepts of "Timeless Romance" and "Professional Joy." It targets couples planning their milestone celebrations, as well as high-end event planners seeking a reliable, premium service. The UI must evoke the same sensory delight as a curated sweet cart: tactile, artisanal, and inviting.

To achieve this, the design system utilizes a **Minimalist-Modern** style with **Tactile** accents. It prioritizes generous whitespace—or rather, "cream space"—to let high-quality photography of confectionery and decor shine. The emotional response should be one of calm confidence, ensuring the user feels the business is both creatively inspired and operationally meticulous.

## Colors

The palette is a carefully balanced harmony of warm and cool tones designed to feel organic yet luxurious. 

- **Blush Pink (Primary):** Used for primary actions and soft backgrounds, representing the romantic core of the business.
- **Sage Green (Secondary):** Used for accents, botanical elements, and secondary call-to-outs, grounding the palette in a natural, garden-wedding aesthetic.
- **Gold (Tertiary/Accent):** This metallic tone is reserved for high-level emphasis, borders, and iconography to signal luxury and quality.
- **Cream (Neutral):** The foundation of the interface. This off-white provides a softer, more sophisticated look than pure white, reducing eye strain and increasing the "editorial" feel of the design system.

## Typography

Typography in this design system creates a dialogue between tradition and modern accessibility. 

**notoSerif** is the voice of the brand. It is used for all headlines and display text to provide an authoritative, editorial, and sophisticated feel. Its letterforms are elegant and classic, mirroring high-end wedding invitations.

**plusJakartaSans** serves as the functional backbone. Its slightly rounded and open apertures make it highly readable at smaller sizes while maintaining a friendly, welcoming demeanor. It should be used for all body copy, navigation links, and UI labels. Use uppercase for labels and buttons to add a touch of formality.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop to maintain a boutique, curated feel. A 12-column grid is used with a maximum container width of 1200px.

Spacing is intentionally generous to prevent the UI from feeling cluttered or "busy," which is essential for maintaining a sense of calm and luxury. Use the 'lg' and 'xl' spacing units for section vertical margins to create clear breaks between different types of content (e.g., separating a gallery from a booking form). Gutters are kept consistent at 24px to provide a structured but airy flow.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layering** and **Ambient Shadows**. Surfaces should rarely feel "flat." Instead, use subtle shifts in background color—from Cream to a lighter Blush—to distinguish sections.

Shadows should be exceptionally soft and diffused, mimicking natural light. Use a low-opacity Gold or Sage-tinted shadow (e.g., `rgba(152, 165, 138, 0.1)`) rather than pure black to keep the aesthetic warm. For "floating" elements like cards or modals, use a large blur radius (30px+) with a very low offset to suggest they are gently resting on a bed of linen.

## Shapes

The shape language is characterized by **Rounded** geometry. While sharp edges can feel cold and corporate, the 0.5rem (8px) base radius used here introduces a softness that aligns with the "sweetness" of the business.

Images of carts, candies, and events should always feature rounded corners to maintain consistency. Decorative elements, such as image frames or pull quotes, may use larger `rounded-xl` (1.5rem) values to create a "pill" or "arch" effect, which is highly reminiscent of traditional wedding architecture and signage.

## Components

### Buttons
Primary buttons should use the Gold (Tertiary) color for backgrounds with white text, or a Blush background with a Sage border for secondary actions. Use a "Pill" shape for buttons to emphasize the friendly, celebratory vibe. A subtle hover transition that increases the shadow spread is recommended.

### Cards
Cards for displaying "Sweet Packages" or "Flavor Menus" should use the Cream background with a 1px Sage border at 20% opacity. This creates a "Ghost Border" effect that is elegant and unobtrusive.

### Input Fields
Inputs should be minimalist with a bottom-border-only style or a very light Sage outline. Focus states should transition the border to Gold. Use the sans-serif font for all user input to ensure clarity.

### Chips & Tags
Used for dietary labels (e.g., "Vegan," "Gluten-Free"), chips should use Sage Green at 10% opacity for the background with Sage text. This communicates organic health and professional attention to detail.

### Image Gallery
Utilize "Masonry" or staggered grid layouts for galleries. The organic flow of staggered images feels less rigid and more like a curated scrapbook or mood board.