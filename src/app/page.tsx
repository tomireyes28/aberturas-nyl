
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About'; // <-- Nuevo
import Lines from '@/components/sections/Lines'; // <-- Nuevo
import Services from '@/components/sections/Services';
import Gallery from '@/components/sections/Gallery';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Lines />
      <Gallery />
      <Contact />
    </main>
  );
}