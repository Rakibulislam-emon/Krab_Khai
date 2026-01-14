# Project Progress & Dev Diary

**Project:** Crabs Khai
**Goal:** Interactive Brand Website

This file tracks our journey, the changes we make, the concepts we master, and how to fix things if they break.

## 🚀 Current Status

**Phase:** 1. Foundation Setup
**Focus:** Setting up the project structure, documentation, and basic animations.

---

## 📅 Change Log

### [Date: Today] - Project Setup & Documentation

**What Changed:**

- Analyzed `crabs-khai-technical-design.md` to understand scope.
- Created `animations.md` to document animation strategies (GSAP/Framer).
- Created `typescript.md` to document TS learning.
- Created `progress.md` (this file).

**Why:**

- To establish a clear learning path while building.
- To keep track of "Why we did this" for future reference.

**Concepts Cleared:**

- **Project Scope:** Monolithic Next.js 16 app with focus on frontend polish.
- **Documentation Strategy:** Keeping technical docs separate from learning guides.

### [Date: Today] - Phase 1: Foundation Setup

**What Changed:**

- Installed `gsap`, `framer`, `lenis`, `lucide-react`.
- Configured **Tailwind v4** with brand colors (`ocean-blue`, `sunset-coral`).
- Created base components (`Header`, `Footer`, `Button`, `Container`).
- Updated `page.tsx` to verify the layout.
- Created `lib/utils.ts` for clean class merging.

**Why:**

- We need a solid base before jumping into complex animations.
- Reusable components like `Container` ensure consistent spacing.

**Concepts Cleared:**

- **Tailwind v4 Configuration:** It uses CSS variables in `@theme` block inside CSS instead of `tailwind.config.ts`.
- **Tailwind v4 Configuration:** It uses CSS variables in `@theme` block inside CSS instead of `tailwind.config.ts`.
- **Component Composition:** Creating a `layout` folder for structural parts vs `ui` for dumb primitives.

### [Date: Today] - Phase 2: Content & Data

**What Changed:**

- Created `lib/types.ts` with interfaces (`MenuItem`, `BrandStory`, `Location`).
- Created "database" files: `lib/data/menu.ts`, `brand.ts`, `locations.ts`.
- Built Static Pages: `/menu`, `/about`, `/contact`.

**Why:**

- Hardcoding text in `page.tsx` is bad practice.
- We need a "Single Source of Truth" for data so edits are easy.
- TypeScript ensures we don't accidentally ship a menu item without a price.

**Concepts Cleared:**

- **Separation of Concerns:** Data vs. UI.
- **TypeScript Interfaces:** Defining contracts for our content.

### [Date: Today] - Phase 3: Hero & Animations

**What Changed:**

- Created reusable animation components: `ScrollReveal`, `TextReveal`, `ParallaxImage`.
- Built the **Hero Section** with a parallax background and character-staggered headline.
- Implemented **Glassmorphism Header** that blurs on scroll.
- Integrated `framer-motion` and `gsap` for layout animations.

**Why:**

- Animations guide the user's eye and create a premium feel.
- Reusable components ensure consistency across the site.

---

## 🧠 Concepts Cleared

_A registry of things we've learned and implemented._

### 1. The "Why" of our Tech Stack

- **Next.js 16:** For SEO and modern React features (Server Components).
- **Tailwind v4:** Speed of styling.
- **GSAP:** Complex, timeline-based animations (The main "Story").
- **Framer Motion:** Simple UI interactions (Hover, Click).

### [Date: Today] - Phase 4: Advanced GSAP

**What Changed:**

- Created `HorizontalScroll` and `PinnedFeature` components.
- Implemented `GSAP MatchMedia` to ensure these effects only run on desktop.
- On mobile, they gracefully degrade to vertical scrolling stacks.

**Why:**

- "Scroll-jacking" feels broken on touchscreens. Native scroll is better for mobile.

### [Date: Today] - Phase 6: The Magician Refactor

**What Changed:**

- **Aesthetic:** Shifted to "Midnight Gold" theme (`#050A10` + `#D4AF37`).
- **Assets:** Generated bespoke premium AI imagery for Hero, Texture, and Dishes.
- **Structure:** Consolidated `Intro`, `History`, `Values`, and `Contact` into a single immersive `page.tsx`.
- **Experience:** Improved ScrollReveal and added "Signature Dish" showcase.

**Why:**

- To achieve a "rich, premium, out-of-the-box" feel as requested. Reduced clicking, increased immersion.

### [Date: Today] - Phase 7: Award-Winning Visuals

**What Changed:**

- **Visuals:** Integrated 6 cinematic assets (Fire intro, Historical visuals, Chef hands, Luxury interiors).
- **Components:** Upgraded `HorizontalScroll` and `PinnedFeature` to support visual narratives.
- **Polish:** Refined typography and spacing for an "expensive" feel.
- **Locations:** Converted text blocks to immersive visual cards.

**Why:**

- To elevate the site from "Premium" to "Award-Winning", focusing on emotional storytelling through imagery.

### [Date: Today] - Phase 4: Advanced GSAP

**What Changed:**

- Created `HorizontalScroll` component (Timeline) using `ScrollTrigger` pinning.
- Created `PinnedFeature` component (Values) for split-screen scroll effects.
- Updated `/about` page to use these immersive layouts.

**Why:**

- Vertical scrolling is boring. Horizontal movements surprise the user.
- Pinning content keeps important context visible while details scroll.

---

## 🛠️ Revert Plan / Troubleshooting

_If things go wrong, look here._

### General Reverting

If a major feature breaks the build:

1. `git log` to find the last working commit.
2. `git checkout [commit-hash]` to go back to that state.
3. OR `git checkout .` to discard local uncommitted changes if you just messed up a file.

### Common Issues

- **Animation causing scroll issues:** Check if `lenis` (smooth scroll) is conflicting with `ScrollTrigger`. usually, we need to update ScrollTrigger after DOM updates.
- **Hydration Errors:** If UI looks different on server vs client. common with random numbers or dates generated on render. Use `useEffect` or specific hooks to handle this.
