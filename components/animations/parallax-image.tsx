"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // 0 to 1, where 1 is fastest relative movement
}

export function ParallaxImage({
  src,
  alt,
  className,
  speed = 0.5,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    // Movement calculation: The image needs to be larger than container to "move" inside it.
    // We scale it up and move it opposite to scroll direction.

    gsap.fromTo(
      image,
      {
        y: "0%",
        scale: 1.2, // Ensure image is larger enough to cover movement
      },
      {
        y: "20%", // Move down as we scroll down (creates depth behind foreground)
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom", // Start when container enters viewport bottom
          end: "bottom top", // End when container leaves viewport top
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
