# Crabs Khai - Technical Design Document

**Project:** Crabs Khai - Interactive Brand Website  
**Version:** 1.0  
**Author:** MiniMax Agent  
**Date:** January 2025  
**Status:** Ready for Implementation

---

## 1. Executive Summary

Crabs Khai is a premium, interactive brand website designed to showcase a local crab restaurant brand through an immersive, scroll-driven storytelling experience. The primary objective is to create a "WOW" factor that captivates visitors and communicates the brand's essence—fresh, delicious crabs prepared with authentic recipes and passionate craftsmanship. This project prioritizes frontend excellence, smooth animations, and mobile-responsive interactions over complex backend functionality, making it a portfolio-worthy demonstration of modern web development capabilities.

The website will serve as a digital flagship for the brand, allowing customers to explore the menu, learn about the brand's story, view mouth-watering food photography, and easily contact or locate the restaurant. The design philosophy centers on creating an emotional connection between the visitor and the brand through carefully crafted visual narratives that unfold as users scroll through the page. Every interaction, from hover effects to scroll-triggered animations, is designed to surprise and delight, turning ordinary browsing into an memorable experience.

This technical design document outlines the complete architecture, technology stack, component structure, and implementation strategy for building Crabs Khai. The approach leverages Next.js 16's latest features, combining GSAP's powerful scroll-triggered animations with Framer Motion's declarative animation capabilities to achieve the desired visual impact. Tailwind CSS v4 provides the styling foundation, enabling rapid development while maintaining design consistency across all screen sizes.

---

## 2. Technology Stack

### 2.1 Core Framework and Language

The foundation of Crabs Khai is built on **Next.js 16**, specifically utilizing the App Router architecture for modern React development. Next.js 16 offers several advantages that align perfectly with our project goals: server-side rendering for improved SEO and initial load performance, automatic code splitting for optimal bundle sizes, and built-in image optimization to handle the high-quality food photography essential to a restaurant website. The App Router enables us to leverage React Server Components for static content while using Client Components only where interactivity is needed, resulting in a highly performant application.

The project is built with **TypeScript**, providing type safety and improved developer experience throughout the codebase. TypeScript's static typing helps catch errors early in the development process and makes the code more maintainable, which is particularly important when working with complex animation libraries and component hierarchies. The type definitions for GSAP, Framer Motion, and other libraries ensure that we have excellent IDE support and can confidently refactor code without introducing regressions.

**React 19** serves as the underlying UI library, bringing the latest features including the improved concurrent rendering capabilities and the new use hook APIs. React 19's enhancements to form handling and resource loading will be leveraged to create snappy, responsive interactions throughout the site. The combination of Next.js 16 and React 19 represents the cutting edge of React development, ensuring our implementation follows current best practices and is well-positioned for future updates.

### 2.2 Animation and Interaction Libraries

**GSAP (GreenSock Animation Platform)** with **ScrollTrigger** plugin is the primary animation engine for the scroll-driven storytelling elements. GSAP is the industry standard for complex web animations, offering precise control over timing, easing, and sequencing that other libraries cannot match. The ScrollTrigger plugin enables us to pin elements, scrub animations based on scroll position, and trigger events when specific elements enter or exit the viewport. For Crabs Khai, GSAP will power the major narrative sections—the hero journey, menu reveals, and testimonial carousels—where fluid, timeline-based animations are essential to the storytelling experience.

**Framer Motion** complements GSAP by providing a more declarative approach to animations, perfect for component-level interactions like button hover states, modal transitions, and enter/exit animations. Framer Motion's layout animations and shared element transitions create smooth visual continuity when navigating between sections or revealing new content. The library's integration with React's animation hooks makes it ideal for creating polished micro-interactions that enhance the overall user experience without the overhead of configuring GSAP timelines for simple effects.

**Lenis** is included for smooth scrolling behavior, which is crucial for creating a premium feel on scroll-heavy websites. Native browser scrolling can feel jerky and inconsistent across different devices, but Lenis normalizes the scrolling experience with momentum-based scrolling that feels natural and luxurious. This smooth scrolling foundation ensures that our GSAP ScrollTrigger animations play back flawlessly, with synchronized timing that enhances rather than distracts from the content.

### 2.3 Styling and UI Components

**Tailwind CSS v4** provides the utility-first styling foundation, offering unprecedented flexibility and performance compared to previous versions. The new engine in Tailwind v4 compiles even faster and produces smaller CSS bundles through improved tree-shaking and automatic content detection. The configuration-first approach combined with the new CSS variables integration allows us to define a comprehensive design system that can be easily extended or modified as the project evolves.

**Shadcn/ui** serves as the component library foundation, providing accessible, well-designed primitives that we can customize to match the Crabs Khai brand identity. Unlike traditional component libraries that impose their styling, Shadcn/ui gives us full ownership of the underlying code, allowing us to modify every aspect of each component to create a unique visual identity. The primitives cover all essential UI elements—buttons, cards, dialogs, navigation—ensuring consistency while providing the building blocks for custom designs.

**Lucide React** provides a comprehensive icon library that complements the design system with clean, consistent iconography. The icons will be used throughout the interface for navigation, visual enhancements, and interactive elements, all styled with Tailwind to match the brand's color palette and visual language.

---

## 3. Architecture Overview

### 3.1 Monolithic Next.js Structure

Crabs Khai follows a **monolithic architecture** within a single Next.js application, which is the optimal approach for this project type. Given that the website is primarily content-focused with minimal dynamic requirements, a monolithic structure simplifies deployment, reduces infrastructure complexity, and enables excellent performance through Next.js's built-in optimizations. All pages, components, and utilities reside within a unified codebase, making development straightforward and maintenance manageable.

The App Router structure organizes the application into logical feature-based directories. The `app/` directory contains the route structure, with each major section of the website represented as a route group or nested route. The `components/` directory is organized by feature and component type, separating UI primitives from feature-specific compositions. The `lib/` directory houses utility functions, constants, and configuration, while `styles/` contains global styles and Tailwind configuration.

Server Components serve as the default throughout the application, rendering static content on the server for optimal performance. Only components requiring user interaction or browser-only APIs are marked as Client Components, typically containing the animation logic and event handlers. This hybrid approach ensures fast initial page loads while maintaining rich interactivity where needed.

### 3.2 Data Architecture

While Crabs Khai is primarily a static website, we implement a **content-driven architecture** that allows for easy updates without code changes. Menu items, restaurant information, and story content are structured as data objects that can be maintained in dedicated configuration files. This approach provides the flexibility to update prices, add seasonal menu items, or modify text content without deploying new code.

The content structure follows a domain-driven pattern where related data is grouped together. The `menu` domain includes categories, items, prices, and descriptions. The `brand` domain contains the story, values, and messaging. The `location` domain holds address, hours, and contact information. This organization makes it easy to locate and update content while maintaining type safety through TypeScript interfaces.

For the initial version, all content is stored in TypeScript files within the project, eliminating the need for a database or CMS. This decision reduces operational complexity and hosting costs while providing immediate access to all content during development. If the need for a CMS arises in the future, the data architecture is designed to easily accommodate a headless CMS integration without major refactoring.

### 3.3 Performance Architecture

Performance is a core architectural concern, recognizing that smooth animations require efficient rendering and fast load times are essential for user engagement. The performance strategy encompasses multiple layers: asset optimization, code splitting, lazy loading, and efficient animation practices.

**Next.js Image component** handles all image optimization automatically, generating appropriately sized variants for different devices, supporting modern formats like WebP and AVIF, and implementing lazy loading with blur placeholders. Given the visual nature of a restaurant website with many food photographs, this optimization is crucial for maintaining fast load times without sacrificing visual quality.

**Code splitting** occurs automatically at the route level, ensuring that users only download the JavaScript needed for the current page. Within pages, heavy components like animation controllers and complex visualizations are dynamically imported with loading states, preventing large bundles from blocking initial interactivity. The GSAP library itself is loaded only on pages or sections where scroll animations are required.

**Animation performance** follows best practices: animating only transform and opacity properties, using `will-change` hints for complex animations, and leveraging hardware acceleration where possible. The Lenis smooth scrolling integration ensures that scroll-linked animations maintain consistent timing regardless of the user's scroll wheel or touch gesture characteristics.

---

## 4. Component Architecture

### 4.1 Component Organization

The component structure follows a layered architecture that separates concerns and promotes reuse. The hierarchy moves from generic UI primitives at the base, through layout components, to feature-specific compositions at the top. This organization makes it easy to understand where new components should be added and ensures consistency across similar elements.

The `components/ui/` directory contains Shadcn/ui primitives and basic HTML wrappers styled according to the design system. These components are entirely presentational, accepting props for content and styling without business logic. Examples include buttons, cards, containers, and typography components that establish the visual language of the site.

The `components/layout/` directory holds structural components that define the page architecture: the navigation header, footer, section containers, and grid systems. These components manage the overall page structure while delegating content rendering to child components. Layout components often implement responsive behavior, adjusting the structure based on viewport size.

The `components/sections/` directory contains the major content sections that make up each page. Each section is a self-contained unit with its own animation logic, content, and styling. Examples include the Hero section, Menu showcase, About story, Testimonials carousel, and Contact information. Sections are designed to work independently, allowing for flexible page composition.

The `components/animations/` directory houses reusable animation components and hooks that abstract common animation patterns. These components wrap GSAP and Framer Motion functionality, providing simpler APIs for specific use cases like fade-ins, slide effects, and parallax movements. The abstraction layer makes it easy to apply consistent animation styles across different components.

### 4.2 Core Component Specifications

**Navigation Header Component** (`Header.tsx`) implements a responsive navigation system that transforms based on scroll position and viewport size. On desktop, a horizontal menu presents navigation links with hover-reveal effects and smooth scroll transitions to section anchors. On mobile, a hamburger menu triggers a full-screen drawer navigation with staggered menu item animations. The header features a scroll-triggered state change, transitioning from transparent at the top to a solid, blurred background as the user scrolls down, ensuring readability while maintaining visual appeal.

**Hero Section Component** (`Hero.tsx`) creates the powerful first impression essential for a premium brand website. The hero features a full-viewport background—either an immersive video showcase or a high-resolution image slider—overlaid with animated typography that reveals the brand message character by character. Scroll-triggered animations create depth and movement, drawing the eye downward and encouraging exploration. The section includes a prominent call-to-action button with hover scale and glow effects that invites users to explore the menu or find a location.

**Menu Showcase Component** (`MenuShowcase.tsx`) presents the restaurant's offerings through an engaging, visual-first experience. Rather than a simple list, the menu section uses horizontal scrolling or card-based layouts to showcase each dish with professional food photography. Scroll-triggered reveals animate each category into view, with hover states that display additional details like ingredients, spice levels, and preparation notes. The design balances visual appeal with practical information, making it easy for customers to browse and decide.

**About Story Component** (`AboutStory.tsx`) communicates the brand's heritage and values through scroll-driven storytelling. The section uses a split-layout design with sticky scrolling on one side, allowing narrative text to scroll while visual elements remain pinned and transform to illustrate different eras or values. Parallax effects create depth between text and imagery, while testimonial quotes interspersed throughout add social proof. The storytelling approach transforms what could be a static "about us" page into an engaging narrative journey.

**Testimonials Component** (`Testimonials.tsx`) showcases customer reviews through an animated carousel or masonry layout. Each testimonial card features subtle hover effects—lift, shadow increase, or image spotlight—that draw attention to individual reviews. The carousel uses smooth, physics-based transitions for navigation, with auto-play functionality that can be paused on interaction. Profile photos, star ratings, and quoted text are composed elegantly, with the design emphasizing authenticity and social proof.

**Contact Section Component** (`ContactSection.tsx`) provides essential location and contact information in an accessible, visually appealing format. The section includes an embedded map with custom styling to match the brand colors, address information with icon-enhanced formatting, hours of operation, and contact links. A functional contact form captures customer inquiries with animated field focus states and submission feedback. The design ensures information is scannable while creating visual interest through icon animations and decorative elements.

### 4.3 Animation Component Specifications

**Scroll Reveal Component** (`ScrollReveal.tsx`) is a wrapper that automatically animates its children into view when they enter the viewport. The component accepts configuration for animation type (fade, slide, scale), direction, duration, and easing, providing flexibility while maintaining consistent behavior. Built using Framer Motion's `whileInView` prop, the component handles all visibility detection and animation triggering internally, simplifying implementation in child components.

**Parallax Image Component** (`ParallaxImage.tsx`) creates the depth effect where images move at different speeds than the surrounding content during scroll. The component accepts an image source and a speed factor, using GSAP ScrollTrigger to calculate position offsets based on scroll progress. The implementation ensures the effect works smoothly across all devices, with touch-friendly behavior on mobile and optimized rendering for performance.

**Stagger List Component** (`StaggerList.tsx`) animates list items in sequence, creating the cascading effect commonly seen in premium websites. The component wraps multiple child elements and applies progressively delayed animations, with the delay configurable based on list size and desired pacing. This component is ideal for navigation menus, feature lists, and any grouped content where sequential revelation enhances the visual impact.

**Counter Animation Component** (`Counter.tsx`) animates numerical values from zero to their final destination, useful for statistics, ratings, or price displays. The component uses GSAP to smoothly interpolate values over a specified duration, with optional easing functions for natural-feeling acceleration and deceleration. The animation triggers when the counter enters the viewport, ensuring users see the animation regardless of when they scroll to that section.

---

## 5. Design System

### 5.1 Color Palette

The Crabs Khai color palette is designed to evoke the warmth of seafood dining, the vibrancy of fresh ingredients, and the premium positioning of the brand. The primary palette centers on deep ocean-inspired blues that convey trust and quality, while accent colors draw from the warm tones of cooked crab shells and aromatic spices. The complete palette supports the animated elements with sufficient contrast and visual interest.

**Primary Colors:**
- Deep Ocean Blue (`#1a3a5c`) serves as the primary brand color, used for headers, primary buttons, and key UI elements. This rich blue-green tone connects to the seafood theme while providing excellent readability and a sophisticated feel.
- Marine Teal (`#2d6a7c`) offers a lighter, more vibrant variation of the primary, used for gradients, hover states, and secondary elements that need to complement without competing with the main brand color.

**Accent Colors:**
- Sunset Coral (`#ff7f50`) provides a warm, appetizing accent that draws attention to important actions and creates visual excitement. This color references the cooked crab shell and stimulates appetite, making it ideal for call-to-action buttons and promotional elements.
- Golden Spice (`#d4a574`) adds warmth and richness, used for highlights, decorative elements, and to create depth in layered compositions. This earthy tone balances the cool blues and warm coral.

**Neutral Colors:**
- Charcoal Slate (`#1f2937`) serves as the primary text color, offering high contrast for readability while being softer than pure black. This color maintains the sophisticated feel while being easy on the eyes for extended reading.
- Warm Sand (`#f5f0e8`) provides a cream-like background color that creates warmth and complements the brand colors without the clinical feeling of pure white. This color is used for section backgrounds and card surfaces.
- Soft Pearl (`#fefefe`) serves as the primary background for clean, bright sections where maximum contrast is needed. This near-white color maintains warmth through subtle undertones.

### 5.2 Typography System

The typography establishes a clear visual hierarchy while reinforcing the brand's premium positioning. The font selection balances readability for menu descriptions with distinctive character for headlines that capture attention and communicate personality.

**Primary Headline Font:** A bold, expressive serif font (e.g., Playfair Display) handles all major headlines and brand messaging. The elegant curves and confident presence of serif typography convey quality and tradition, appropriate for a restaurant brand with heritage. The font is used for the hero headline, section titles, and any text meant to make a strong visual statement.

**Body Font:** A clean, highly readable sans-serif font (e.g., Inter or Source Sans Pro) handles all body text, navigation, and functional UI elements. The neutral character of the sans-serif ensures legibility at all sizes while complementing the expressive headlines. Extended menu descriptions, testimonials, and informational content use this font for optimal reading experience.

**Accent Font:** A playful display font (e.g., Pacifico or similar handwritten style) adds personality for decorative elements, special promotions, and brand accents. Used sparingly, this font creates visual interest and warmth that balances the more formal headline and body fonts.

**Type Scale:**
- Display (Hero): 4rem to 6rem, tight line height, responsive scaling
- H1 (Section Titles): 2.5rem to 3.5rem, moderate line height
- H2 (Subsection): 1.75rem to 2.25rem
- H3 (Card Titles): 1.25rem to 1.5rem
- Body Large (Menu Items): 1.125rem
- Body (Standard): 1rem
- Caption (Details): 0.875rem

### 5.3 Spacing and Layout

The spacing system uses an 8-pixel base unit with consistent multipliers to create harmonious proportions throughout the design. This mathematical approach ensures visual balance and makes it easy to maintain consistency across different components and sections. The spacing scale progresses geometrically: 4px (0.25rem), 8px (0.5rem), 16px (1rem), 24px (1.5rem), 32px (2rem), 48px (3rem), 64px (4rem), 96px (6rem), 128px (8rem).

**Container System:**
- Narrow Container (600px): For focused content like testimonials and single-column text
- Standard Container (900px): For standard content sections with balanced whitespace
- Wide Container (1200px): For feature sections and visual-heavy content
- Full Container (100%): For hero sections and backgrounds requiring edge-to-edge coverage

**Section Spacing:**
- Small Sections: 48px vertical padding (mobile), 64px (desktop)
- Standard Sections: 80px vertical padding (mobile), 128px (desktop)
- Large Sections: 128px vertical padding (mobile), 192px (desktop)
- Negative space between elements follows the 8px base with multipliers of 1, 2, 3, 4 for gap sizes

### 5.4 Interactive States

All interactive elements implement thoughtful state changes that provide feedback and create delightful micro-interactions. The states follow a consistent pattern across the interface, building familiarity while adding polish.

**Button States:**
- Default state presents the button with subtle shadow and scale
- Hover state increases scale by 5%, intensifies shadows, and applies a subtle glow effect matching brand colors
- Active (press) state reduces scale by 3% and increases shadow depth
- Focus state adds a ring outline matching the accent color for accessibility
- Disabled state reduces opacity and removes interactive feedback

**Card States:**
- Default state presents the card with minimal styling
- Hover state lifts the card (translate Y: -8px), increases shadow, and reveals any hidden details
- Focus state adds a subtle border highlight matching the brand color
- Active state continues the lift animation with additional scale reduction

**Link States:**
- Default state shows the link in primary or accent color with no decoration
- Hover state underlines with a sliding animated underline effect
- Focus state adds standard outline focus rings
- Visited state (where appropriate) maintains the brand color without color shift

---

## 6. Animation Strategy

### 6.1 Scroll-Driven Animation Framework

The animation framework centers on GSAP ScrollTrigger for major narrative sections, creating the immersive storytelling experience that distinguishes Crabs Khai from typical restaurant websites. Scroll-driven animations are designed to enhance content comprehension rather than distract from it, using movement to guide attention and reveal information at the optimal moment in the user's scroll journey.

**ScrollTrigger Configuration:**
- Default trigger settings position the animation start 20% from the viewport top and end at 80% from the viewport top, ensuring animations begin before content exits and complete before the next section overwhelms
- Pinning behavior is applied where elements need to remain visible while related content scrolls, enabling split-layout designs and sticky information panels
- Scrubbing ties animation progress directly to scroll position, giving users control over the animation timeline and creating a sense of physical interaction with the content
- Toggle actions control animation behavior on repeated visits, typically setting `enter` to play forward, `leave` to reverse, and `enterBack` to play backward

**Animation Categories:**
- **Reveal Animations** introduce content as it enters the viewport, using combinations of opacity, scale, and position to create engaging entrances. These animations draw attention to new content and create a sense of progression through the page.
- **Parallax Animations** create depth by moving content at different speeds during scroll. Background elements move slower than foreground elements, creating the illusion of 3D space that adds visual richness without overwhelming the content.
- **Sticky Animations** maintain context while content changes, keeping important information visible while new content scrolls into view. This pattern is essential for the "About" section where narrative text scrolls while visual elements transform.
- **Timeline Animations** coordinate multiple elements into sequenced storytelling, where each animation triggers the next based on scroll position or completion of previous animations. This pattern creates the narrative flow that distinguishes scroll-driven storytelling from simple effects.

### 6.2 Micro-Interaction Design

Micro-interactions are small, focused moments of interaction that provide feedback and delight. These animations are implemented with Framer Motion for its declarative syntax and smooth spring physics. While individually subtle, micro-interactions collectively create the premium feel that elevates the user experience.

**Hover Interactions:**
- Button hover effects combine scale increase with subtle glow and shadow deepening
- Image hover effects apply gentle zoom or reveal overlay content
- Card hover effects lift the card and reveal action buttons or additional information
- Navigation hover effects animate underline or background fill

**Focus Interactions:**
- Input field focus expands the field, highlights the border, and reveals the label
- Modal open/close uses scale with opacity transitions and backdrop blur
- Accordion expand/collapse uses smooth height animation with staggered child reveals
- Dropdown reveal uses scale with origin positioning to animate naturally

**Loading Interactions:**
- Page load reveals use staggered sequences that feel organized and intentional
- Image loading uses blur-up placeholders that fade to the final image
- Button clicks use immediate feedback with ripple or scale effects
- Form submission uses progress indication followed by success animation

### 6.3 Performance Considerations

Animation performance is carefully managed to ensure smooth 60fps rendering on all target devices. The following guidelines govern animation implementation:

**Property Selection:**
- Only animate `transform` (translate, scale, rotate) and `opacity` properties, which can be handled by the GPU
- Avoid animating layout properties like `width`, `height`, `margin`, or `padding` that trigger reflow
- Use `will-change: transform` for elements undergoing frequent animation, but apply judiciously to avoid memory overhead
- Limit the number of simultaneously animating elements to maintain frame rates

**Scroll Performance:**
- Implement scroll caching to prevent unnecessary recalculations during rapid scrolling
- Use `requestAnimationFrame` for any custom scroll-linked calculations
- Throttle scroll event listeners where immediate response is not critical
- Test animations on lower-powered devices to identify and optimize performance bottlenecks

**Bundle Management:**
- Dynamically import GSAP and ScrollTrigger only where needed, not in the initial bundle
- Use the GSAP trial version for development, upgrading to a licensed version for production if advanced plugins are needed
- Remove unused animation configurations and commented-out code to keep bundles clean
- Monitor bundle size throughout development using Next.js built-in analysis tools

---

## 7. File Structure

```
crabs-khai/
├── .github/
│   └── workflows/
│       └── ci-cd.yml                 # CI/CD pipeline configuration
├── .vscode/
│   ├── extensions.json               # Recommended VSCode extensions
│   └── settings.json                 # Workspace settings
├── public/
│   ├── assets/
│   │   ├── images/                   # Optimized images (WebP/AVIF)
│   │   │   ├── hero/                 # Hero section images
│   │   │   ├── menu/                 # Food photography
│   │   │   ├── about/                # Brand imagery
│   │   │   └── testimonials/         # Customer photos
│   │   └── icons/                    # Static icon assets
│   ├── fonts/                        # Local font files
│   └── robots.txt                    # SEO configuration
├── src/
│   ├── app/
│   │   ├── globals.css               # Global styles and Tailwind imports
│   │   ├── layout.tsx                # Root layout with providers
│   │   ├── page.tsx                  # Homepage (scroll-driven experience)
│   │   ├── menu/
│   │   │   └── page.tsx              # Dedicated menu page
│   │   ├── about/
│   │   │   └── page.tsx              # Brand story page
│   │   └── contact/
│   │       └── page.tsx              # Contact information page
│   ├── components/
│   │   ├── ui/                       # Shadcn/ui primitives
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── container.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── header.tsx            # Main navigation header
│   │   │   ├── footer.tsx            # Site footer
│   │   │   ├── navigation.tsx        # Navigation menu
│   │   │   └── section.tsx           # Section wrapper with defaults
│   │   ├── sections/
│   │   │   ├── hero.tsx              # Hero section with animations
│   │   │   ├── menu-showcase.tsx     # Menu presentation section
│   │   │   ├── about-story.tsx       # Brand storytelling section
│   │   │   ├── testimonials.tsx      # Customer reviews section
│   │   │   ├── locations.tsx         # Location information
│   │   │   └── cta-section.tsx       # Call to action section
│   │   ├── animations/
│   │   │   ├── scroll-reveal.tsx     # Scroll reveal wrapper
│   │   │   ├── parallax-image.tsx    # Parallax image component
│   │   │   ├── stagger-list.tsx      # Stagger animation wrapper
│   │   │   ├── counter.tsx           # Number counter animation
│   │   │   └── index.ts              # Animation exports
│   │   └── index.ts                  # Component exports
│   ├── lib/
│   │   ├── constants/
│   │   │   ├── animations.ts         # Animation configuration
│   │   │   ├── breakpoints.ts        # Responsive breakpoints
│   │   │   └── timings.ts            # Animation timing constants
│   │   ├── data/
│   │   │   ├── menu.ts               # Menu content data
│   │   │   ├── brand.ts              # Brand story and values
│   │   │   └── locations.ts          # Location and contact data
│   │   ├── utils/
│   │   │   ├── cn.ts                 # Classname utility
│   │   │   └── animation.ts          # Animation helper functions
│   │   └── index.ts                  # Library exports
│   ├── styles/
│   │   ├── theme.css                 # CSS custom properties (variables)
│   │   └── animations.css            # Global animation keyframes
│   └── hooks/
│       ├── use-scroll.ts             # Scroll position hook
│       ├── use-breakpoint.ts         # Breakpoint detection hook
│       └── use-prefers-reduced-motion.ts # Accessibility hook
├── .eslintrc.json                    # ESLint configuration
├── .gitignore                        # Git ignore rules
├── .prettierrc                       # Prettier configuration
├── next.config.ts                    # Next.js configuration
├── package.json                      # Dependencies and scripts
├── postcss.config.mjs                # PostCSS configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
└── README.md                         # Project documentation
```

---

## 8. Implementation Phases

### 8.1 Phase 1: Foundation Setup

The foundation phase establishes the project infrastructure, configuration, and core components necessary for all subsequent development. This phase focuses on creating a solid, well-configured base that supports efficient development and maintains code quality throughout the project lifecycle.

**Days 1-2: Project Initialization:**
- Initialize Next.js 16 project with TypeScript, App Router, and Tailwind CSS v4
- Configure ESLint and Prettier for consistent code formatting
- Set up Git repository with appropriate branching strategy (main/develop/feature branches)
- Configure VSCode workspace with recommended extensions and settings
- Establish the component directory structure following the architecture plan

**Days 3-4: Design System Implementation:**
- Configure Tailwind CSS with Crabs Khai color palette, typography system, and spacing scale
- Implement CSS custom properties for theme values
- Create base UI components from Shadcn/ui primitives
- Build the design system documentation page for reference
- Test responsive behavior across device sizes

**Days 5-6: Layout Architecture:**
- Implement the root layout with providers and global styles
- Build the responsive navigation header with mobile drawer
- Create the footer component with location and contact information
- Establish section wrapper components with consistent defaults
- Set up smooth scrolling with Lenis integration

**Deliverables:**
- Fully configured Next.js project with TypeScript and Tailwind v4
- Complete design system implemented in components
- Responsive layout with navigation and footer
- Smooth scrolling foundation ready for animations

### 8.2 Phase 2: Content and Data Structure

Phase 2 creates the content foundation, implementing the data structures that drive the site's content and preparing all the visual assets needed for the animated sections. This phase ensures that content management is straightforward and that all assets are optimized for performance.

**Days 7-8: Content Architecture:**
- Define TypeScript interfaces for all content types (menu items, testimonials, locations)
- Create menu data structure with categories, items, prices, and descriptions
- Build brand story content with sections and key messages
- Prepare testimonial content with quotes, customer names, and photos
- Set up location and contact information data

**Days 9-10: Asset Preparation:**
- Source and optimize hero section imagery
- Prepare food photography with consistent styling and multiple sizes
- Create testimonial profile photos with uniform dimensions
- Generate favicon and social media meta images
- Optimize all images for Next.js Image component formats

**Days 11-12: Static Content Pages:**
- Build static about page with brand story content
- Create contact page with location information and embedded map
- Implement basic menu page with organized content display
- Add SEO meta tags and Open Graph configuration for all pages
- Verify accessibility of all static content

**Deliverables:**
- Complete content data structure with TypeScript interfaces
- Optimized and prepared visual assets
- Static content pages with proper SEO
- Content management system ready for updates

### 8.3 Phase 3: Hero and Introduction Animations

Phase 3 implements the critical first impression—the hero section and initial animations that set the tone for the entire website. This phase requires careful attention to performance and polish, as these elements form the user's initial perception of the brand.

**Days 13-14: Hero Section Implementation:**
- Build hero section with full-viewport background
- Implement background video or image slider with smooth transitions
- Create animated typography reveal for brand messaging
- Add primary call-to-action button with hover animations
- Ensure responsive behavior across all screen sizes

**Days 15-16: Scroll Reveal System:**
- Implement ScrollReveal component for consistent reveal animations
- Create parallax effect for hero background elements
- Add smooth scroll-triggered transitions to next section
- Fine-tune animation timing and easing for natural feel
- Test performance on target devices

**Days 17-18: Navigation Integration:**
- Implement scroll-based header transformation (transparent to solid)
- Add smooth scroll functionality for anchor links
- Create mobile navigation drawer with staggered animations
- Implement active section highlighting based on scroll position
- Add keyboard navigation support for accessibility

**Deliverables:**
- Fully animated hero section with engaging entrance
- Scroll reveal system working consistently
- Responsive navigation with smooth interactions
- Performance-optimized animations

### 8.4 Phase 4: Menu Showcase Animation

Phase 4 creates the visually stunning menu section that transforms a typical restaurant menu into an immersive visual experience. The section showcases the culinary offerings through engaging animations that stimulate appetite and simplify ordering decisions.

**Days 19-20: Menu Grid Architecture:**
- Build menu section layout with responsive grid system
- Create category filtering with animated transitions
- Implement card components for individual menu items
- Design hover states with reveal of additional details
- Optimize for mobile touch interactions

**Days 21-22: Menu Item Animations:**
- Add scroll-triggered reveal for menu categories
- Implement staggered animation for menu items within categories
- Create hover effects for menu item cards (zoom, info reveal)
- Add image gallery for featured dishes with navigation
- Implement quick-add functionality with animation feedback

**Days 23-24: Interactive Elements:**
- Build dietary filter system with animated chips
- Create spice level indicators with visual animations
- Implement price highlighting with count-up animation
- Add seasonal special section with spotlight animation
- Fine-tune performance with lazy loading for images

**Deliverables:**
- Fully animated menu section with filtering
- Responsive card-based menu item display
- Interactive hover and filter animations
- Performance-optimized image handling

### 8.5 Phase 5: Storytelling and Social Proof

Phase 5 implements the brand storytelling section that communicates the restaurant's heritage and values, along with the testimonials section that provides social proof. These sections build emotional connection and trust, encouraging customers to choose Crabs Khai.

**Days 25-26: About Storytelling Section:**
- Build split-layout storytelling section with sticky visuals
- Implement scroll-linked narrative progression
- Create timeline animations for brand history
- Add parallax effects between text and images
- Implement reveal animations for key values and messages

**Days 27-28: Testimonials Implementation:**
- Build testimonials carousel with physics-based navigation
- Create testimonial card designs with consistent styling
- Implement auto-play with pause-on-interaction
- Add profile photo reveal animations
- Create rating display with star animations

**Days 29-30: Social Proof Integration:**
- Add statistics counters with animated values
- Implement integration logos or certifications section
- Create Instagram or social media feed preview
- Build "As Seen In" section with animated reveals
- Final polish and accessibility verification

**Deliverables:**
- Engaging brand storytelling section
- Smooth testimonial carousel with auto-play
- Social proof elements with consistent animations
- Accessible and responsive layouts

### 8.6 Phase 6: Contact and Footer Integration

Phase 6 implements the final functional sections—contact information, location map, and the comprehensive footer—completing the user journey with practical information and clear calls to action.

**Days 31-32: Contact Section:**
- Build contact section with location information
- Implement embedded map with custom styling
- Create hours display with clear visual hierarchy
- Add contact form with animated field states
- Implement form validation and submission feedback

**Days 33-34: Footer Implementation:**
- Build comprehensive footer with multiple columns
- Create footer navigation with category organization
- Add social media links with hover animations
- Implement newsletter signup with animated feedback
- Add legal links and accessibility information

**Days 35-36: Final Integration:**
- Connect all sections with smooth scroll transitions
- Implement scroll-to-top functionality
- Add loading states for all dynamic content
- Verify cross-browser compatibility
- Final performance optimization and testing

**Deliverables:**
- Complete contact section with functional form
- Comprehensive footer with all necessary links
- Integrated page flow with smooth transitions
- Cross-browser tested and optimized

### 8.7 Phase 7: Testing and Polish

Phase 7 focuses on comprehensive testing, accessibility verification, and final polish to ensure the website meets professional standards for quality, performance, and inclusivity.

**Days 37-38: Testing Implementation:**
- Write Playwright tests for critical user journeys
- Test all interactive components and animations
- Verify form functionality and validation
- Test responsive behavior across device sizes
- Implement error boundaries and loading states

**Days 39-40: Accessibility Audit:**
- Conduct WCAG 2.1 AA compliance review
- Test keyboard navigation throughout the site
- Verify screen reader compatibility
- Check color contrast and focus indicators
- Implement accessibility improvements as needed

**Days 41-42: Performance Optimization:**
- Run Lighthouse performance audit
- Optimize images and lazy loading
- Minimize JavaScript bundle sizes
- Implement proper caching strategies
- Verify fast load times and smooth animations

**Deliverables:**
- Comprehensive test suite with passing tests
- WCAG 2.1 AA compliant website
- Performance-optimized production build
- Deployment-ready codebase

### 8.8 Phase 8: Deployment

Phase 8 handles the final deployment to production, configuring hosting, setting up monitoring, and establishing maintenance workflows.

**Days 43-44: Deployment Setup:**
- Configure Vercel or alternative hosting platform
- Set up custom domain with SSL
- Configure environment variables
- Implement CI/CD pipeline with automated deployments
- Set up monitoring and error tracking

**Days 45-46: Launch Preparation:**
- Final content review and proofreading
- SEO verification and meta tag confirmation
- Social media card preview testing
- Launch checklist completion
- Communication plan activation

**Deliverables:**
- Production website with custom domain
- Automated deployment pipeline
- Monitoring and error tracking configured
- Launch-ready status confirmed

---

## 9. Performance Targets

### 9.1 Core Web Vitals

The project targets excellent Core Web Vitals scores to ensure fast, responsive user experience that meets Google's quality standards and provides the smooth, premium feel expected of a high-end brand website.

**Largest Contentful Paint (LCP):**
- Target: Under 2.5 seconds
- Strategy: Optimized hero image with appropriate sizing, lazy loading below-fold content, proper image formats (WebP/AVIF), CDN delivery

**First Input Delay (FID):**
- Target: Under 100 milliseconds
- Strategy: Minimal main thread blocking through efficient code splitting, deferred non-critical JavaScript, optimized event handlers

**Cumulative Layout Shift (CLS):**
- Target: Under 0.1
- Strategy: Explicit image dimensions, reserved space for dynamic content, font loading optimization to prevent FOIT/FOUT

### 9.2 Animation Performance

Animation targets ensure that the rich interactive experience maintains smooth, professional quality without causing performance issues or user discomfort.

**Frame Rate:**
- Target: Consistent 60fps for all animations
- Strategy: GPU-accelerated properties only, efficient cleanup of animation instances, performance monitoring during development

**Scroll Performance:**
- Target: No jank or stuttering during scroll
- Strategy: Lenis smooth scrolling, throttled scroll handlers, optimized animation calculations, hardware acceleration

**Mobile Performance:**
- Target: Smooth experience on mid-range devices
- Strategy: Reduced animation complexity on mobile, touch-optimized interactions, progressive enhancement

### 9.3 Bundle Size

Bundle size targets ensure fast initial load and efficient caching for returning visitors.

**Initial JavaScript Bundle:**
- Target: Under 150KB (gzipped)
- Strategy: Route-based code splitting, dynamic imports for heavy libraries, tree shaking unused exports

**Total Page Weight:**
- Target: Under 2MB for initial load
- Strategy: Next.js Image optimization, modern image formats, efficient asset delivery

---

## 10. Accessibility Standards

### 10.1 WCAG 2.1 AA Compliance

The website targets WCAG 2.1 Level AA compliance, ensuring that the rich visual experience remains accessible to users with diverse abilities. Accessibility is integrated throughout the design and development process rather than addressed as an afterthought.

**Color and Contrast:**
- Text contrast ratio of at least 4.5:1 for normal text
- Text contrast ratio of at least 3:1 for large text
- Color not used as the only visual means of conveying information
- Sufficient distinction between interactive and non-interactive elements

**Keyboard Navigation:**
- All interactive elements reachable via keyboard
- Visible focus indicators on all focusable elements
- Logical tab order matching visual layout
- Skip links for main content and navigation

**Screen Reader Support:**
- Semantic HTML structure with proper heading hierarchy
- ARIA labels for interactive elements without visible text
- Descriptive alt text for all meaningful images
- Dynamic content announced via ARIA live regions

**Motion and Animation:**
- Respect `prefers-reduced-motion` media query
- No animation that flashes more than three times per second
- User control over auto-playing content
- Smooth scroll behavior with override options

### 10.2 Testing and Validation

Accessibility testing is integrated throughout the development process with multiple verification methods.

**Automated Testing:**
- ESLint with jsx-a11y plugin for component-level checking
- axe-core integration for automated accessibility audits
- Lighthouse accessibility audits during development

**Manual Testing:**
- Keyboard-only navigation testing
- Screen reader testing (VoiceOver, NVDA, JAWS)
- Color blindness simulation and verification
- Zoom testing up to 200% without content loss

---

## 11. Development Standards

### 11.1 Code Quality Guidelines

All code follows consistent standards to ensure maintainability and collaborative development. These standards apply across the entire codebase and are enforced through linting and code review.

**TypeScript Standards:**
- Strict mode enabled with no implicit any types
- Explicit return types for all functions
- Comprehensive interfaces for all data structures
- Union types for finite value sets (e.g., menu categories)
- Generics for reusable component logic

**Component Standards:**
- Functional components with hooks (no class components)
- Prop types defined via TypeScript interfaces
- Consistent file naming (PascalCase for components, camelCase for utilities)
- Barrel exports from feature directories
- Max 200 lines per component (refactor when exceeded)

**Animation Code:**
- Animation logic extracted to dedicated hooks or utilities
- Cleanup functions for all subscription and animation methods
- Consistent naming conventions for animation variants
- Comments explaining animation intent and timing

**Git Workflow:**
- Feature branches from develop branch
- Commit messages following conventional commits format
- Pull requests with description and screenshots
- Review required before merge to main

### 11.2 Testing Requirements

Comprehensive testing ensures code quality and prevents regressions, particularly important for a visual, interactive website where bugs can significantly impact user experience.

**Unit Testing:**
- Utility functions tested with Jest
- Component rendering tested with React Testing Library
- Animation behavior tested with mock scroll interactions
- Minimum 80% code coverage for utility functions

**Integration Testing:**
- User flows tested with Playwright
- Form submission and validation tested
- Navigation and scroll behavior tested
- Critical path tests for all major features

**Visual Testing:**
- Storybook for component documentation
- Visual regression testing for critical components
- Screenshot comparison for design consistency

---

## 12. Future Considerations

### 12.1 Potential Enhancements

The current scope focuses on delivering an exceptional scroll-driven brand experience, but the architecture supports future enhancements that could expand functionality without major restructuring.

**Content Management:**
- Integration with a headless CMS (Contentful, Sanity, Strapi) for easier content updates
- Preview environment for content editors
- Multi-language support for international visitors
- Seasonal menu variations with date-based activation

**E-Commerce Features:**
- Online ordering system with cart functionality
- Delivery integration with delivery platforms
- Payment processing for online orders
- Customer accounts with order history

**Marketing Features:**
- Email signup with newsletter integration
- Social media feed integration
- Blog or news section for updates
- Event hosting information and RSVP

**Technical Enhancements:**
- PWA capabilities for mobile app-like experience
- Offline support for menu browsing
- Advanced analytics integration
- A/B testing framework for optimization

### 12.2 Scalability Considerations

While the current implementation is a static website, the architecture supports growth if additional functionality becomes necessary.

**Performance Scaling:**
- CDN already configured via Vercel edge network
- Image optimization handles increasing asset library
- Code splitting ensures consistent load times

**Content Scaling:**
- Content data structure supports unlimited menu items
- Component architecture allows section additions
- CMS integration path identified for future needs

**Team Scaling:**
- Clear component organization supports parallel development
- Documentation and style guide support onboarding
- Git workflow scales for multiple contributors

---

## 13. Conclusion

This technical design document provides the comprehensive blueprint for building Crabs Khai, an immersive, scroll-driven brand website that showcases a local crab restaurant with the visual excellence and interactive polish expected of a premium digital experience. The architecture balances aesthetic ambition with practical development considerations, ensuring that the final product is not only visually stunning but also performant, accessible, and maintainable.

The technology stack—Next.js 16, GSAP with ScrollTrigger, Framer Motion, and Tailwind CSS v4—provides the perfect foundation for creating the rich, animated experience while maintaining development velocity and code quality. The phased implementation plan breaks the project into manageable segments, each delivering tangible progress toward the complete vision while allowing for flexibility and refinement based on ongoing review.

Success will be measured not just by completion of features, but by the emotional impact of the final experience—a website that makes visitors crave the restaurant's offerings, trust the brand's quality, and remember the experience long after they've closed the tab. With careful attention to animation timing, visual hierarchy, and performance optimization, Crabs Khai will stand as a testament to what's possible when modern web development techniques are applied with creative vision and technical precision.

---

**Document Prepared by:** MiniMax Agent  
**Version:** 1.0  
**Last Updated:** January 2025  
**Status:** Ready for Implementation
