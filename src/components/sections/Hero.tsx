'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/gallery/portada1.jpeg',
  '/gallery/portada2.jpeg',
  '/gallery/portada3.jpeg',
];

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 }),
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = images.length - 1;
      if (nextIndex >= images.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden bg-gray-900">
      
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${images[index]}')` }} />
          <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-[2px]"></div>
        </motion.div>
      </AnimatePresence>

      <button onClick={() => paginate(-1)} className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-black/30 text-white/70 hover:text-white hover:bg-black/50 backdrop-blur-md transition-all hidden sm:block">
        <ChevronLeft size={32} />
      </button>
      <button onClick={() => paginate(1)} className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-black/30 text-white/70 hover:text-white hover:bg-black/50 backdrop-blur-md transition-all hidden sm:block">
        <ChevronRight size={32} />
      </button>

      {/* Todo el bloque sube usando -translate-y-12 para compensar la barra de navegación */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pointer-events-none -translate-y-12 md:-translate-y-16">
        
        {/* LOGO GIGANTE EN EL CENTRO */}
        {/* Usamos un margen inferior negativo (-mb-8) para "comer" el espacio transparente del logo y acercar el título */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center -mb-8 md:-mb-12"
        >
          <Image 
            src="/logo.png" 
            alt="Logo Gran Formato" 
            width={500} 
            height={250} 
            priority
            className="w-56 sm:w-80 md:w-96 object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)]"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-tight uppercase">
            Fabricación y <br />
            <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(234,88,12,0.4)]">Colocación</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium">
            Transformamos tus espacios con aberturas a medida. Aportamos diseño, seguridad y aislación perfecta para tu hogar o negocio. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center pointer-events-auto">
            <a href="https://wa.me/5491159349228" className="bg-orange-600 hover:bg-orange-500 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,88,12,0.4)]">
              PRESUPUESTO SIN CARGO
            </a>
            <Link href="#galeria" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-all hover:bg-white/20">
              VER OBRAS
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setDirection(idx > index ? 1 : -1); setIndex(idx); }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${ index === idx ? 'bg-orange-500 scale-125' : 'bg-white/50 hover:bg-white/80' }`}
          />
        ))}
      </div>

    </section>
  );
}