import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { brandStory } from "@/lib/data/brand";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="grow pt-32 pb-20">
        <Container>
          {/* Intro */}
          <section className="max-w-3xl mx-auto text-center mb-24">
            <h1 className="text-5xl font-serif font-bold text-ocean-blue mb-6">
              {brandStory.headline}
            </h1>
            <p className="text-2xl text-marine-teal font-serif italic mb-8">
              {brandStory.subheadline}
            </p>
            <p className="text-lg text-charcoal-slate/80 leading-relaxed text-left">
              {brandStory.intro}
              <br />
              <br />
              {brandStory.fullStory}
            </p>
          </section>

          {/* Values */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {brandStory.values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 bg-soft-pearl rounded-xl border border-ocean-blue/10"
              >
                <h3 className="text-2xl font-serif font-bold text-ocean-blue mb-4">
                  {value.title}
                </h3>
                <p className="text-charcoal-slate/70">{value.description}</p>
              </div>
            ))}
          </section>

          {/* Timeline Placeholder */}
          <section className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-ocean-blue mb-12">
              Our Journey
            </h2>
            <div className="space-y-12">
              {brandStory.history.map((event) => (
                <div key={event.year} className="flex gap-6">
                  <div className="w-24 text-right font-bold text-sunset-coral shrink-0 pt-1">
                    {event.year}
                  </div>
                  <div className="border-l-2 border-marine-teal pl-6 pb-2">
                    <h3 className="text-xl font-bold text-ocean-blue mb-2">
                      {event.title}
                    </h3>
                    <p className="text-charcoal-slate/70">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
