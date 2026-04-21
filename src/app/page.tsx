import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import PromoBanner from "@/components/sections/PromoBanner";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <PromoBanner />
      <Gallery />
      <Contact />
    </main>
  );
}