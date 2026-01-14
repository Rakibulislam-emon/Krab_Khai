import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { locations } from "@/lib/data/locations";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="grow pt-32 pb-20">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-ocean-blue mb-4">
              Visit Us
            </h1>
            <p className="text-xl text-charcoal-slate/80">
              We can&apos;t wait to serve you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6"
              >
                <div className="h-64 bg-gray-200 rounded-xl w-full mb-2 flex items-center justify-center text-gray-400">
                  Map Placeholder ({loc.coordinates.lat}, {loc.coordinates.lng})
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-ocean-blue mb-4">
                    {loc.name}
                  </h2>

                  <div className="space-y-4">
                    <div className="flex gap-3 items-start text-charcoal-slate/80">
                      <MapPin className="w-5 h-5 text-sunset-coral shrink-0" />
                      <span>{loc.address}</span>
                    </div>

                    <div className="flex gap-3 items-center text-charcoal-slate/80">
                      <Phone className="w-5 h-5 text-sunset-coral shrink-0" />
                      <span>{loc.phone}</span>
                    </div>

                    <div className="flex gap-3 items-center text-charcoal-slate/80">
                      <Mail className="w-5 h-5 text-sunset-coral shrink-0" />
                      <span>{loc.email}</span>
                    </div>

                    <div className="flex gap-3 items-start text-charcoal-slate/80">
                      <Clock className="w-5 h-5 text-sunset-coral shrink-0" />
                      <div className="flex flex-col">
                        <span>Mon-Fri: {loc.hours.weekdays}</span>
                        <span>Sat-Sun: {loc.hours.weekends}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-4 flex gap-4">
                  <Button className="flex-1">Get Directions</Button>
                  <Button variant="outline" className="flex-1">
                    Call Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
