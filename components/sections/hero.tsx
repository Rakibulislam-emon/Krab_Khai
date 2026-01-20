"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/animations/text-reveal";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { Container } from "@/components/layout/container";

export function Hero() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      role="region"
      aria-label="Hero section - Crabs Khai restaurant introduction"
      className="relative min-h-screen w-full overflow-hidden bg-abyssal-black text-ivory-mist py-20 md:py-0 md:h-screen"
    >
      {/* Ambient Particles Effect */}
      <div
        className="absolute inset-0 z-0 opacity-30 motion-reduce:opacity-10"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-antique-gold/40 rounded-full animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-deep-teal/30 rounded-full animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-antique-gold/20 rounded-full animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        />
        <div
          className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-soft-pearl/20 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-deep-teal/40 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s", animationDuration: "4.5s" }}
        />
      </div>

      {/* Background Parallax Image */}
      <div className="absolute inset-0 z-0">
        <ParallaxImage
          src="/assets/images/refactor/hero-bg.png"
          alt="Royal Feast of Crabs"
          className="h-full w-full opacity-50"
          speed={0.2}
        />
        {/* Enhanced Gradient Overlay with Radial */}
        <div className="absolute inset-0 bg-gradient-to-b from-abyssal-black/40 via-transparent to-abyssal-black" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-abyssal-black/60" />

        {/* Vignette Effect */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(5, 10, 16, 0.4) 100%)",
          }}
        />
      </div>

      <Container className="relative z-10 flex h-full min-h-[80vh] flex-col items-center justify-center text-center">
        <div className="max-w-5xl space-y-8 md:space-y-10">
          {/* Animated Headline */}
          <div className="overflow-hidden">
            <TextReveal
              text="Taste the Ocean's Soul"
              className="font-serif text-5xl font-bold leading-tight tracking-wide text-antique-gold drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)] md:text-7xl lg:text-9xl"
            />
          </div>

          {/* Subheadline with fade in */}
          <ScrollReveal delay={0.8} variant="slide-up">
            <p className="mx-auto max-w-3xl text-lg font-light tracking-wide text-ivory-mist/90 md:text-xl lg:text-2xl">
              An immersive culinary journey where primitive fire meets premium
              catch.
              <span className="mt-2 block font-serif italic text-antique-gold">
                Welcome to the feast.
              </span>
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={1.2} variant="zoom">
            <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row sm:gap-6 md:pt-10">
              <Button
                size="lg"
                className="group min-w-48 cursor-pointer border-none bg-antique-gold text-lg font-bold text-abyssal-black shadow-lg transition-all duration-200 hover:scale-105 hover:bg-rich-gold hover:shadow-[0_8px_24px_rgba(212,175,55,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-antique-gold focus-visible:ring-offset-2 focus-visible:ring-offset-abyssal-black motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                Reserve Your Seat
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-w-48 cursor-pointer border-2 border-antique-gold bg-transparent text-lg font-bold text-antique-gold backdrop-blur-sm transition-all duration-200 hover:bg-antique-gold/20 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-antique-gold focus-visible:ring-offset-2 focus-visible:ring-offset-abyssal-black motion-reduce:transition-none"
              >
                Explore Menu
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Enhanced Scroll Indicator */}
      <ScrollReveal
        delay={1.5}
        variant="fade"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-reduce:animate-none md:bottom-10"
      >
        <div
          className="flex h-10 w-6 animate-bounce cursor-pointer items-start justify-center rounded-full border-2 border-soft-pearl/50 pt-2 transition-colors hover:border-antique-gold motion-reduce:animate-none"
          aria-label="Scroll down to explore more"
          role="button"
          tabIndex={0}
        >
          <div className="h-2 w-1 animate-pulse rounded-full bg-soft-pearl/80 motion-reduce:animate-none" />
        </div>
      </ScrollReveal>
    </section>
  );
}
