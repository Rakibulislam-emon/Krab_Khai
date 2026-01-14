"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TimelineEvent } from "@/lib/types";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  items: TimelineEvent[];
  className?: string;
}

export function HorizontalScroll({ items, className }: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    if (!section || !trigger) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop: Horizontal Scroll
      const getScrollAmount = () => -(section.scrollWidth - window.innerWidth);

      gsap.to(section, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => `+=${section.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, [items]);

  return (
    <section
      ref={triggerRef}
      className={cn("overflow-hidden min-h-screen bg-soft-pearl", className)}
    >
      <div
        ref={sectionRef}
        className="h-full flex flex-col md:flex-row items-center md:px-[50vw] w-full md:w-fit py-20 md:py-0 gap-20"
      >
        <div className="shrink-0 w-80 text-ocean-blue">
          <h2 className="text-6xl font-serif font-bold">
            Our
            <br />
            Journey
          </h2>
          <p className="mt-4 text-charcoal-slate/80">
            Scroll to explore our history
          </p>
        </div>

        {items.map((item) => (
          <div
            key={item.year}
            className="w-96 shrink-0 bg-white p-8 rounded-2xl border border-ocean-blue/10 shadow-sm flex flex-col justify-center h-[60vh]"
          >
            <span className="text-8xl font-bold text-sunset-coral/20 block -mb-10 font-serif">
              {item.year}
            </span>
            <div className="relative z-10 pt-4">
              <h3 className="text-3xl font-bold text-ocean-blue mb-4">
                {item.title}
              </h3>
              <p className="text-lg text-charcoal-slate/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
