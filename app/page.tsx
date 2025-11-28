import { HeroSection } from "./components/HeroSection"
import { FeaturesSection } from "./components/FeaturesSection"
import { TestimonialsSection } from "./components/TestimonialsSection"
import { PricingSection } from "./components/PricingSection"
import { Footer } from "./components/FooterSection"
import {Navbar } from "./components/NavbarSection"
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="pricing">
          <PricingSection />
        </div>
      </main>
      <Footer />
    </>
  )
}