---
name: Sephara Institutional AI
colors:
  surface: '#f7fafd'
  surface-dim: '#d7dadd'
  surface-bright: '#f7fafd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f7'
  surface-container: '#ebeef1'
  surface-container-high: '#e5e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#181c1e'
  on-surface-variant: '#4a4453'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f4'
  outline: '#7b7484'
  outline-variant: '#ccc3d5'
  surface-tint: '#7141c3'
  primary: '#350076'
  on-primary: '#ffffff'
  primary-container: '#4f14a0'
  on-primary-container: '#bb95ff'
  inverse-primary: '#d4bbff'
  secondary: '#731be5'
  on-secondary: '#ffffff'
  secondary-container: '#8d42ff'
  on-secondary-container: '#fdf6ff'
  tertiary: '#002c3c'
  on-tertiary: '#ffffff'
  tertiary-container: '#00435b'
  on-tertiary-container: '#00b5ef'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ebdcff'
  primary-fixed-dim: '#d4bbff'
  on-primary-fixed: '#260058'
  on-primary-fixed-variant: '#5923aa'
  secondary-fixed: '#ebdcff'
  secondary-fixed-dim: '#d4bbff'
  on-secondary-fixed: '#270058'
  on-secondary-fixed-variant: '#5d00c2'
  tertiary-fixed: '#c2e8ff'
  tertiary-fixed-dim: '#75d1ff'
  on-tertiary-fixed: '#001e2b'
  on-tertiary-fixed-variant: '#004d67'
  background: '#f7fafd'
  on-background: '#181c1e'
  surface-variant: '#e0e3e6'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The brand personality for the SEPHARA IA proposal is rooted in the intersection of cutting-edge technology and civic responsibility. It must project "Intelligent Authority"—combining the visionary nature of AI with the stability required for public administration (Prefeitura de Niterói).

The design style is **Corporate / Modern** with subtle **Glassmorphism** accents. This approach ensures a clean, organized layout that conveys efficiency, while using translucent layers and refined gradients to signify the "ethereal" and sophisticated nature of artificial intelligence. The visual language emphasizes clarity, data transparency, and institutional trust.

## Colors
The palette is dominated by "Deep Purple" and "Vibrant Purple" to represent the SEPHARA IA identity. 

- **Primary (Deep Purple):** Used for headers, primary actions, and brand reinforcement to establish depth and authority.
- **Secondary (Vibrant Purple):** Used for interactive elements, highlights, and to represent the "energy" of AI processing.
- **Accent (Electric Blue):** A tertiary color used sparingly for data visualizations or status indicators to provide a "tech" feel.
- **Neutral/Background:** A high-legibility range of whites and light grays (#F4F7FA) to ensure the content remains the focus, essential for dense public management documents.

## Typography
This design system utilizes a dual-font strategy to balance innovation with institutional accessibility.

- **Space Grotesk (Headlines):** Its geometric and slightly technical letterforms evoke a sense of future-forward engineering, perfect for the SEPHARA IA brand voice.
- **Public Sans (Body & UI):** Originally designed for government interfaces, it provides exceptional legibility and a neutral, trustworthy tone for the detailed prose of a commercial proposal. Use heavier weights for labels to maintain a structured hierarchy.

## Layout & Spacing
The layout follows a **Fixed Grid** model for document-style proposals, transitioning to a fluid 12-column grid for digital dashboards. A strict 8px rhythmic scale ensures vertical consistency. 

Generous whitespace (stack-lg) is used between major sections to prevent cognitive overload, emphasizing a "clean and organized" administration. Content should be centered within a 1200px max-width container to ensure optimal line lengths for reading technical specifications.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Ambient Shadows**. Surfaces are primarily flat and white, but "feature cards" or "IA modules" utilize a soft backdrop blur (Glassmorphism) with a very subtle 2px Deep Purple stroke at 10% opacity.

Shadows should be "Airy": high blur (20px+), low opacity (5-8%), and slightly tinted with the Primary Purple color to avoid a "muddy" gray appearance. This creates a sense of light and transparency, moving away from heavy, old-fashioned shadows.

## Shapes
The shape language is **Rounded**, striking a balance between the friendliness of modern SaaS and the seriousness of a government contractor. 

Standard components (buttons, inputs) use a 0.5rem radius. Larger containers, such as data cards or content blocks, use "rounded-lg" (1rem) to create a soft, modern frame. Avoid sharp 90-degree corners to maintain a sophisticated, approachable tech aesthetic.

## Components
- **Buttons:** Primary buttons use a solid Deep Purple to Vibrant Purple horizontal gradient. Secondary buttons use a "Ghost" style with a Vibrant Purple border.
- **Chips:** Used for "Tagging" AI features or categories (e.g., "Big Data", "Gestão de Saúde"). These should have a light purple background with dark purple text.
- **Cards:** White background with a 1px "Grey-200" border. On hover, apply the ambient purple shadow and a subtle increase in border thickness.
- **Input Fields:** Minimalist style with a light gray fill (#F9FAFB) and a bottom-only border that turns Vibrant Purple on focus.
- **Data Visualizations:** Charts should utilize the Primary, Secondary, and Tertiary (Electric Blue) colors to ensure distinct data sets are easily readable.
- **Status Indicators:** Use the "Pill-shape" (rounded-full) for status badges (e.g., "Em Processamento", "Concluído") with high-contrast text.