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
- **Component Composition:** Creating a `layout` folder for structural parts vs `ui` for dumb primitives.

---

## 🧠 Concepts Cleared

_A registry of things we've learned and implemented._

### 1. The "Why" of our Tech Stack

- **Next.js 16:** For SEO and modern React features (Server Components).
- **Tailwind v4:** Speed of styling.
- **GSAP:** Complex, timeline-based animations (The main "Story").
- **Framer Motion:** Simple UI interactions (Hover, Click).

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
