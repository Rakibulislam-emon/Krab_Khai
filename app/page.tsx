import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";

import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="grow">
        <Hero />
        <section className="py-20 bg-soft-pearl">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-serif text-ocean-blue mb-6">
                Culinary Excellence
              </h2>
              <p className="text-xl text-charcoal-slate/80 mb-8 leading-relaxed">
                Experience the finest crab dishes prepared with passion and
                tradition.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
