# Bunny Innovations Design Guidelines

## Design Approach
**System**: Corporate/Enterprise B2B Design Pattern
**Reference Inspiration**: Professional tech companies (IBM, Microsoft Azure, AWS) - clean, trust-building, information-dense layouts with clear hierarchy and credibility signals.

**Core Principles**:
- Professional, enterprise-grade aesthetic matching brochure quality
- Information clarity over visual experimentation
- Trust-building through consistent, polished presentation
- Efficient information architecture for business decision-makers

---

## Color System
**Primary**: Navy blue (#1e3a8a or similar deep professional blue)
**Accent**: Orange (#f97316 for CTAs and highlights)
**Secondary Accents**: Teal (#14b8a6) and Green (#22c55e) for icons and supporting elements
**Background**: Clean white (#ffffff)
**Text**: Dark gray/charcoal (#1f2937) for body, navy for headings
**Borders**: Light gray (#e5e7eb) for subtle section dividers

---

## Typography
**Primary Font**: Inter or similar clean sans-serif (Google Fonts CDN)
**Secondary Font**: System stack for data/technical content

**Hierarchy**:
- H1 (Hero): text-5xl md:text-6xl, font-bold, navy
- H2 (Sections): text-3xl md:text-4xl, font-bold
- H3 (Cards/Subsections): text-xl md:text-2xl, font-semibold
- Body: text-base md:text-lg, leading-relaxed
- Small/Labels: text-sm, font-medium

---

## Layout System
**Spacing Units**: Tailwind scale focused on 4, 6, 8, 12, 16, 20, 24 (e.g., p-8, mb-12, py-20)

**Container Strategy**:
- Max-width: max-w-7xl for content sections
- Padding: px-6 md:px-12 for horizontal spacing
- Section spacing: py-16 md:py-24 between major sections

**Grid Patterns**:
- Capability cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Case studies: grid-cols-1 md:grid-cols-2
- Team/advisors: grid-cols-1 md:grid-cols-3
- Use-case cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4

---

## Component Library

**Navigation Header**:
- Sticky top navigation (sticky top-0 z-50)
- White background with subtle shadow
- Logo left, navigation links center, CTA buttons right
- Mobile: Hamburger menu

**Cards**:
- White background with subtle border (border border-gray-200)
- Rounded corners (rounded-lg)
- Minimal shadow (shadow-sm)
- Padding: p-6 md:p-8
- Icon at top with teal/green accent, title, description

**Buttons**:
- Primary CTA: Orange background, white text, rounded-lg, px-8 py-3
- Secondary: Navy border, navy text, same sizing
- On images: Backdrop blur (backdrop-blur-md bg-white/90) with no special hover states

**Forms**:
- Input fields: border border-gray-300, rounded-lg, p-3
- Focus states: ring-2 ring-navy
- Labels: text-sm font-medium text-gray-700

**Section Dividers**: Subtle horizontal line (border-t border-gray-200) with generous spacing

---

## Images

**Hero Section**: Large professional header image showcasing technology/innovation (servers, data centers, or abstract tech visualization). Image should be 1920x800px minimum, with dark overlay (bg-black/40) for text readability.

**Capability Icons**: Use Heroicons for consistency - outlined style in teal/green colors

**Case Study Cards**: Include placeholder images representing projects (dashboards, mobile apps, infrastructure)

**Team Photos**: Professional headshots in circular frames (rounded-full)

**QR Code**: Include placeholder QR graphic in hero or contact section

---

## Page-Specific Layouts

**Home**: Hero with large image + overlaid text/CTAs → About (2-column text) → Capability cards (4-col grid) → Deep-dive sections with alternating image-text layouts → Case studies grid → CTA section

**Capabilities/Use-Cases**: Header with description → Grid of detailed cards with icons

**Case Studies**: Grid layout with project cards showing image, client name, metrics

**Team**: Header → Founder spotlight card (larger) → Advisors grid

**Contact**: 2-column layout (form left, contact info + QR right)

**All Pages**: Consistent header, footer with contact details and links

---

## Animations
Minimal and purposeful only:
- Smooth scrolling for anchor navigation
- Subtle fade-in on scroll for sections (optional)
- Button hover: slight scale or brightness shift
- Card hover: subtle shadow increase

---

## Accessibility
- ARIA labels on all interactive elements
- Form inputs with proper labels and validation states
- Keyboard navigation support
- Sufficient color contrast (WCAG AA minimum)
- Mobile-first responsive design (readable on WhatsApp browser)