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
  className?: string;
}

export function PinnedFeature({
  values,
  title,
  description,
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
      className={cn("min-h-screen flex flex-col md:flex-row", className)}
    >
      {/* Left Column (Pinned) */}
      <div
        ref={leftColRef}
        className="w-full md:w-1/2 h-screen sticky top-0 flex flex-col justify-center p-12 bg-ocean-blue text-soft-pearl"
      >
        <div className="max-w-md mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-6">{title}</h2>
          <p className="text-xl text-soft-pearl/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Right Column (Scrollable) */}
      <div className="w-full md:w-1/2 bg-soft-pearl p-12 lg:p-24 flex flex-col gap-24 py-32">
        {values.map((value) => (
          <div key={value.title} className="max-w-md group">
            <div className="flex items-center gap-4 mb-4">
              <CheckCircle2 className="w-8 h-8 text-sunset-coral" />
              <h3 className="text-3xl font-bold text-ocean-blue group-hover:text-marine-teal transition-colors">
                {value.title}
              </h3>
            </div>
            <p className="text-lg text-charcoal-slate/80 leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
