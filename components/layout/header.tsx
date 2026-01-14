import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 bg-soft-pearl/80 backdrop-blur-md border-b border-ocean-blue/10">
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-ocean-blue font-serif"
        >
          Crabs Khai
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {["Menu", "Story", "Locations"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-charcoal-slate hover:text-ocean-blue transition-colors font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="secondary" size="sm">
            Book a Table
          </Button>
        </div>
      </Container>
    </header>
  );
}
