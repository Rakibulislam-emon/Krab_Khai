import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { brandStory } from "@/lib/data/brand";
import { HorizontalScroll } from "@/components/sections/horizontal-scroll";
import { PinnedFeature } from "@/components/sections/pinned-feature";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      <Header />
      <main className="grow">
        {/* Intro Hero */}
        <section className="pt-40 pb-24 bg-soft-pearl">
          <Container className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-ocean-blue mb-8 leading-tight">
              {brandStory.headline}
            </h1>
            <p className="text-2xl text-marine-teal font-serif italic mb-12">
              {brandStory.subheadline}
            </p>
            <div className="text-lg text-charcoal-slate/80 leading-relaxed text-left max-w-2xl mx-auto space-y-6">
              <p>{brandStory.intro}</p>
              <p>{brandStory.fullStory}</p>
            </div>
          </Container>
        </section>

        {/* Pinned Values Section */}
        <PinnedFeature
          title="Our Core Values"
          description="These principles guide every decision we make, from the boat to your table."
          values={brandStory.values}
        />

        {/* Horizontal Timeline Section */}
        <HorizontalScroll
          items={brandStory.history}
          className="border-t border-ocean-blue/5"
        />
      </main>
      <Footer />
    </div>
  );
}
