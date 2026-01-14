import { Hero } from "@/components/sections/hero";
import { HorizontalScroll } from "@/components/sections/horizontal-scroll";
import { PinnedFeature } from "@/components/sections/pinned-feature";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { brandStory } from "@/lib/data/brand";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Container } from "@/components/layout/container";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-abyssal-black text-ivory-mist overflow-x-hidden selection:bg-antique-gold selection:text-abyssal-black">
      <Header />

      {/* 1. HERO */}
      <Hero />

      {/* 2. INTRO NARRATIVE */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[url('/assets/images/refactor/v2/intro-fire.png')] bg-cover bg-center opacity-20 mix-blend-screen pointer-events-none" />
        <Container className="text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-serif text-antique-gold mb-8">
              &quot;We don&apos;t just cook crabs. We honor them.&quot;
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-ivory-mist/70 max-w-2xl mx-auto font-light leading-relaxed">
              From the deep mangroves of Southeast Asia to your plate. Our
              philosophy is simple: Primitive fire, premium ingredients, and an
              unyielding respect for the ocean&apos;s bounty.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* 3. SIGNATURE DISH SHOWCASE */}
      <section className="py-24 bg-charcoal-silk relative overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <ScrollReveal variant="slide-right">
                <div className="relative aspect-square rounded-full overflow-hidden border-4 border-antique-gold/20 shadow-2xl shadow-antique-gold/5">
                  <Image
                    src="/assets/images/refactor/dish-featured.png"
                    alt="Signature Singapore Chili Crab"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
              </ScrollReveal>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <ScrollReveal variant="slide-left">
                <span className="text-antique-gold tracking-widest uppercase text-sm font-bold">
                  The Crown Jewel
                </span>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-ivory-mist mt-4">
                  Royal Chili Crab
                </h2>
                <p className="text-xl text-ivory-mist/70 font-light leading-relaxed">
                  Bathed in a rich, spicy-sweet tomato gravy and thickened with
                  egg ribbons. Served with golden fried mantou buns to soak up
                  every drop of liquid gold. A dish fit for kings, prepared for
                  you.
                </p>
                <div className="pt-8">
                  <Button className="bg-antique-gold text-abyssal-black hover:bg-white text-lg px-8 py-6">
                    View Full Menu
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. HISTORY (Horizontal Scroll) */}
      <HorizontalScroll items={brandStory.history} />

      {/* 5. VALUES (Pinned) */}
      <PinnedFeature
        title="Our Code"
        description="The unwritten rules that govern our kitchen."
        values={brandStory.values}
        imageSrc="/assets/images/refactor/v2/values-chef.png"
      />

      {/* 6. LOCATION / CONTACT */}
      <section className="py-32 relative bg-abyssal-black text-center">
        <Container>
          <ScrollReveal>
            <h2 className="text-5xl font-serif text-antique-gold mb-16">
              Visit the Palace
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
              {/* Orchard */}
              <div className="group relative h-125 overflow-hidden rounded-md border border-white/10">
                <div className="absolute inset-0 bg-[url('/assets/images/refactor/v2/location-orchard.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute bottom-0 p-8 w-full group-hover:-translate-y-2.5 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-ivory-mist mb-2 font-serif">
                    Orchard Flagship
                  </h3>
                  <p className="text-antique-gold font-medium mb-4">
                    Palais Renaissance
                  </p>
                  <p className="text-ivory-mist/70 text-sm">390 Orchard Road</p>
                  <p className="text-ivory-mist/70 text-sm">
                    Daily: 11am - 10pm
                  </p>
                </div>
              </div>

              {/* MBS */}
              <div className="group relative h-125 overflow-hidden rounded-md border border-white/10">
                <div className="absolute inset-0 bg-[url('/assets/images/refactor/v2/location-mbs.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute bottom-0 p-8 w-full group-hover:-translate-y-2.5 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-ivory-mist mb-2 font-serif">
                    Marina Bay Sands
                  </h3>
                  <p className="text-antique-gold font-medium mb-4">
                    Bayfront Avenue
                  </p>
                  <p className="text-ivory-mist/70 text-sm">
                    10 Bayfront Ave, L1-88
                  </p>
                  <p className="text-ivory-mist/70 text-sm">Daily: 5pm - 2am</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
