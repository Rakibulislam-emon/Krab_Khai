# Animation Guide - Crabs Khai

This document serves as a learning hub for the animation concepts used in the Crabs Khai project. As we implement "WOW" factors, we will document the _what_, _why_, and _how_ here.

## Core Libraries

### 1. GSAP (GreenSock Animation Platform)

**What it is:** The industry standard for high-performance web animations. It handles "tweens" (animations between two states) and "timelines" (sequences of animations).

**Key Concepts:**

- **Tween:** The basic building block. A single animation.
  ```javascript
  // Move .box to x: 100 over 1 second
  gsap.to(".box", { x: 100, duration: 1 });
  ```
- **Timeline:** A container for multiple tweens. It lets you sequence animations (e.g., "Do A, then B, then C") without messy callbacks.
  ```javascript
  const tl = gsap.timeline();
  tl.to(".box", { x: 100 }).to(".circle", { y: 50 }); // Happens after box moves
  ```
- **from() vs to() vs fromTo():**
  - `to()`: Animate _to_ a destination state.
  - `from()`: Animate _from_ a state (useful for entrances - element starts invisible and moves in).
  - `fromTo()`: Define both start and end states (safest for repeated animations).

### 2. ScrollTrigger (GSAP Plugin)

**What it is:** The magic behind "scroll-driven" storytelling. It lets animations play, pause, reverse, or scrub based on the user's scroll position.

**Key Concepts:**

- **Trigger:** The element that triggers the animation when it enters the viewport.
- **Start/End:**
  - `start: "top center"` means "When the **top** of the trigger hits the **center** of the viewport".
  - `end: "bottom top"` means "When the **bottom** of the trigger hits the **top** of the viewport".
- **Markets:** Debugging indicators (`markers: true`) that show you exactly where start/end points are.
- **Scrub:** Links the animation progress directly to the scrollbar. If you stop scrolling, the animation stops.
- **Pin:** "Sticks" an element in place while you scroll past it (great for the "About Story" section).

### 3. Framer Motion

**What it is:** A React-focused animation library.
**Why use it alongside GSAP?**

- **GSAP** is best for complex, timeline-based, scroll-controlled stories (The "Macro" experience).
- **Framer Motion** is best for simple UI interactions like hover states, modal popups, and list transitions (The "Micro" interactions). It's easier to use for simple "enter/exit" animations in React.

## Animation Strategies for Crabs Khai

### The "Scroll Reveal"

Instead of content just appearing, we trigger it to fade up and in when the user scrolls to it.
_Why?_ It guides the eye and feels premium.

### Parallax

Background images move slower than foreground content.
_Why?_ Creates depth (3D feeling) on a 2D screen.

### Staggering

Animating a list of items (like menu cards) one after another with a small delay.
_Why?_ clearer to process than everything flashing on screen at once.
