import { HeroSection } from "@/components/hero-section";
import { TrendingSection } from "@/components/trending-section";
import Upcoming from "@/components/Upcoming";
import Stories from "@/components/Stories";
import LanaFooter from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white ">
      {/* <Header /> */}
      <main>
        <HeroSection />
        <TrendingSection />
        <Upcoming />
        <Stories />
        <LanaFooter />
      </main>
    </div>
  );
}
