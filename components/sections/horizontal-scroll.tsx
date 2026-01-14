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
      className={cn(
        "overflow-hidden min-h-screen bg-abyssal-black relative",
        className
      )}
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0 mix-blend-soft-light"
        style={{
          backgroundImage: 'url("/assets/images/refactor/texture-bg.png")',
          backgroundSize: "cover",
        }}
      />

      <div
        ref={sectionRef}
        className="relative z-10 h-full flex flex-col md:flex-row items-center md:px-[50vw] w-full md:w-fit py-20 md:py-0 gap-20"
      >
        <div className="shrink-0 w-80 text-antique-gold pl-8 md:pl-0">
          <h2 className="text-6xl font-serif font-bold leading-tight">
            The
            <br />
            Legacy
          </h2>
          <p className="mt-6 text-ivory-mist/80 text-lg border-l-2 border-antique-gold pl-4">
            A journey from humble beginnings to culinary royalty.
          </p>
        </div>

        {items.map((item) => (
          <div
            key={item.year}
            className="w-96 shrink-0 bg-charcoal-silk/90 backdrop-blur-md rounded-sm border border-antique-gold/10 hover:border-antique-gold/40 transition-all duration-500 flex flex-col h-[70vh] mx-4 md:mx-0 group overflow-hidden relative"
          >
            {/* Card Image */}
            <div className="h-1/2 w-full relative overflow-hidden">
              {item.image && (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-charcoal-silk via-transparent to-transparent" />
            </div>

            <div className="p-8 relative z-10 flex flex-col justify-end h-1/2">
              <span className="text-7xl font-bold text-antique-gold/20 block -mb-6 font-serif select-none group-hover:text-antique-gold/30 transition-colors">
                {item.year}
              </span>
              <div className="relative z-10 pt-4">
                <h3 className="text-3xl font-bold text-ivory-mist mb-4 font-serif group-hover:text-antique-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-base text-ivory-mist/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
