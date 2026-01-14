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
      className="relative h-screen w-full overflow-hidden bg-abyssal-black text-ivory-mist"
    >
      {/* Background Parallax Image */}
      <div className="absolute inset-0 z-0">
        <ParallaxImage
          src="/assets/images/refactor/hero-bg.png"
          alt="Royal Feast of Crabs"
          className="h-full w-full opacity-50"
          speed={0.2}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-abyssal-black/30 via-transparent to-abyssal-black" />
      </div>

      <Container className="relative z-10 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-5xl space-y-10">
          {/* Animated Headline */}
          <div className="overflow-hidden">
            <TextReveal
              text="Taste the Ocean's Soul"
              className="text-7xl md:text-9xl font-serif font-bold text-antique-gold drop-shadow-lg leading-tight tracking-tight"
            />
          </div>

          {/* Subheadline with fade in */}
          <ScrollReveal delay={0.8} variant="slide-up">
            <p className="text-xl md:text-3xl text-ivory-mist/90 font-light max-w-3xl mx-auto tracking-wide">
              An immersive culinary journey where primitive fire meets premium
              catch.
              <span className="block mt-2 text-antique-gold italic font-serif">
                Welcome to the feast.
              </span>
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={1.2} variant="zoom">
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
              <Button
                size="lg"
                className="bg-antique-gold text-abyssal-black hover:bg-rich-gold border-none font-bold text-lg min-w-48 transition-transform hover:scale-105"
              >
                Reserve Your Seat
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-antique-gold border-antique-gold hover:bg-antique-gold/10 font-bold text-lg min-w-48 backdrop-blur-sm"
              >
                Explore Menu
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
