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
      className="relative h-screen w-full overflow-hidden bg-ocean-blue text-soft-pearl"
    >
      {/* Background Parallax Image */}
      <div className="absolute inset-0 z-0">
        <ParallaxImage
          src="/assets/images/hero/crab-feast.jpg"
          alt="Feast of Crabs"
          className="h-full w-full opacity-60"
          speed={0.2}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-ocean-blue via-ocean-blue/50 to-transparent" />
      </div>

      <Container className="relative z-10 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl space-y-8">
          {/* Animated Headline */}
          <div className="overflow-hidden">
            <TextReveal
              text="Taste the Ocean's Soul"
              className="text-6xl md:text-8xl font-serif font-bold text-soft-pearl leading-tight"
            />
          </div>

          {/* Subheadline with fade in */}
          <ScrollReveal delay={0.8} variant="slide-up">
            <p className="text-xl md:text-2xl text-soft-pearl/90 font-light max-w-2xl mx-auto">
              Authentic flavors, fresh catch, and a dining experience that tells
              a story.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={1.2} variant="zoom">
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="bg-sunset-coral hover:bg-sunset-coral/90 text-white min-w-40"
              >
                Book a Table
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-soft-pearl border-soft-pearl hover:bg-soft-pearl/10 min-w-40"
              >
                View Menu
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Scroll indicator */}
      <ScrollReveal
        delay={1.5}
        variant="fade"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-soft-pearl/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-soft-pearl/80 rounded-full" />
        </div>
      </ScrollReveal>
    </section>
  );
}
