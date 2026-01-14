import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="grow pt-24">
        <section className="py-20 bg-soft-pearl">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold font-serif text-ocean-blue mb-6">
                Welcome to Crabs Khai
              </h1>
              <p className="text-xl text-charcoal-slate/80 mb-8 leading-relaxed">
                We are currently building an immersive digital experience. Our
                foundation is set with Tailwind v4, nice typography, and basic
                layout components.
              </p>
              <div className="flex gap-4">
                <Button size="lg">Explore Menu</Button>
                <Button variant="outline" size="lg">
                  Our Story
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
