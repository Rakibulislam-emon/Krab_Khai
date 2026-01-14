"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-soft-pearl/90 backdrop-blur-md border-b border-ocean-blue/10 shadow-sm py-3"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "text-2xl font-bold font-serif transition-colors",
            isScrolled ? "text-ocean-blue" : "text-soft-pearl"
          )}
        >
          Crabs Khai
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {["Menu", "Story", "Locations"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={cn(
                "transition-colors font-medium",
                isScrolled
                  ? "text-charcoal-slate hover:text-ocean-blue"
                  : "text-soft-pearl/90 hover:text-white"
              )}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant={"secondary"}
            size="sm"
            className={cn(
              !isScrolled &&
                "bg-soft-pearl text-ocean-blue hover:bg-white shadow-none"
            )}
          >
            Book a Table
          </Button>
        </div>
      </Container>
    </header>
  );
}
