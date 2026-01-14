import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { menuData } from "@/lib/data/menu";
import { Button } from "@/components/ui/button";

export default function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="grow pt-32 pb-20">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-ocean-blue mb-4">
              Our Menu
            </h1>
            <p className="text-xl text-charcoal-slate/80">
              Expertly crafted dishes from the heart of the ocean.
            </p>
          </div>

          <div className="space-y-20">
            {menuData.map((category) => (
              <section key={category.id}>
                <h2 className="text-3xl font-serif font-bold text-marine-teal mb-2">
                  {category.title}
                </h2>
                <p className="text-charcoal-slate/60 mb-8">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg overflow-hidden flex shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      {/* Placeholder for real image */}
                      <div className="w-32 h-auto bg-gray-200 shrink-0"></div>
                      <div className="p-6 grow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg text-ocean-blue">
                            {item.name}
                          </h3>
                          <span className="font-bold text-sunset-coral">
                            {item.currency}
                            {item.price.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-sm text-charcoal-slate/70 mb-4">
                          {item.description}
                        </p>
                        <div className="flex gap-2">
                          {item.isSpicy && (
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                              Spicy
                            </span>
                          )}
                          {item.isGlutenFree && (
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                              GF
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button size="lg">Download PDF Menu</Button>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
