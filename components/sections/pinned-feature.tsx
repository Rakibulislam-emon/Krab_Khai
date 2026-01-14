"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandValue } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface PinnedFeatureProps {
  values: BrandValue[];
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}

export function PinnedFeature({
  values,
  title,
  description,
  imageSrc,
  className,
}: PinnedFeatureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const leftCol = leftColRef.current;

    if (!container || !leftCol) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        pin: leftCol,
        pinSpacing: false,
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className={cn(
        "min-h-screen flex flex-col md:flex-row bg-abyssal-black",
        className
      )}
    >
      {/* Left Column (Pinned) */}
      <div
        ref={leftColRef}
        className="w-full md:w-1/2 h-screen sticky top-0 flex flex-col justify-end p-0 bg-deep-teal overflow-hidden group"
      >
        <div className="absolute inset-0 bg-black/20 z-10" />
        {/* Background Image Anchor */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-105"
          style={{ backgroundImage: `url('${imageSrc}')` }}
        />

        <div className="relative z-20 p-12 max-w-xl">
          <div className="w-20 h-1 bg-antique-gold mb-8" />
          <h2 className="text-6xl font-serif font-bold mb-6 text-ivory-mist leading-[1.1] drop-shadow-md">
            {title}
          </h2>
          <p className="text-xl text-ivory-mist/90 leading-relaxed font-light drop-shadow-sm">
            {description}
          </p>
        </div>
      </div>

      {/* Right Column (Scrollable) */}
      <div className="w-full md:w-1/2 bg-abyssal-black p-12 lg:p-24 flex flex-col gap-32 py-32">
        {values.map((value) => (
          <div
            key={value.title}
            className="max-w-md group border-l border-white/10 pl-8 hover:border-antique-gold transition-colors duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <CheckCircle2 className="w-8 h-8 text-antique-gold" />
              <h3 className="text-4xl font-serif font-bold text-ivory-mist group-hover:text-antique-gold transition-colors">
                {value.title}
              </h3>
            </div>
            <p className="text-lg text-ivory-mist/60 leading-relaxed group-hover:text-ivory-mist/90 transition-colors">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
