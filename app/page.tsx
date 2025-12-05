import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProductsSection } from "@/components/sections/products-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { DrinksCarouselSection } from "@/components/sections/drinks-carousel-section"
import { VideoSection } from "@/components/sections/video-section"
import { SustainabilitySection } from "@/components/sections/sustainability-section"
import { CommunitySection } from "@/components/sections/community-section"
import { GuidesSection } from "@/components/sections/guides-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <HowItWorksSection />
        <DrinksCarouselSection />
        <VideoSection />
        <SustainabilitySection />
        <CommunitySection />
        <GuidesSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
