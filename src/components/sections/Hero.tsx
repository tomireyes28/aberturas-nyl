'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920', // Fachada Moderna
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1920', // Interior con Ventanales
  'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1920'  // Detalle de Vidrio/Mampara
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Carrusel de Imágenes */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${images[index]}')` }}
          />
          <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-[2px]"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-none">
            DISEÑO EN <br />
            <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(234,88,12,0.4)]">ALUMINIO</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium">
            Fabricación propia de aberturas Línea Modena y Herrero. [cite: 2, 10] <br />
            Llevamos calidad a Almirante Brown y Zona Sur. [cite: 6]
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="https://wa.me/5491159349228"
              className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-orange-900/40"
            >
              PRESUPUESTO SIN CARGO
            </a>
            <Link 
              href="#galeria"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:bg-white/20"
            >
              VER OBRAS
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}