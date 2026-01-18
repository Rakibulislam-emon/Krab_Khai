import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="bg-abyssal-black text-soft-pearl py-12 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Crabs Khai</h3>
            <p className="text-soft-pearl/80 max-w-sm">
              Authentic flavors, fresh catch, and a dining experience that tells
              a story.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-antique-gold">Explore</h4>
            <ul className="space-y-2 text-sm text-soft-pearl/80">
              <li>
                <a href="#" className="hover:text-white">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Locations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-antique-gold">Contact</h4>
            <ul className="space-y-2 text-sm text-soft-pearl/80">
              <li>info@crabskhai.com</li>
              <li>+880 123 456 7890</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-soft-pearl/60">
          © {new Date().getFullYear()} Crabs Khai. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
