import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import PromoBanner from "@/components/sections/PromoBanner";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <PromoBanner />
      <Gallery />
    </main>
  );
}