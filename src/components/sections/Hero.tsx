'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/gallery/portada1.jpeg',
  '/gallery/portada2.jpg',
  '/gallery/portada3.jpg',
];

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? '100%' : '-100%', opacity: 0 }),
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    /* min-h-screen con flex-col y justify-center asegura que el contenido siempre esté centrado verticalmente 
       sin importar si el monitor es de 13 pulgadas o de 32 pulgadas. */
    <section id="inicio" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gray-900 py-20 px-4">
      
      {/* Background Slideshow con overlay oscuro para legibilidad */}
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
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        </motion.div>
      </AnimatePresence>

      {/* Contenedor Principal: Todo el contenido fluye en una sola columna centrada */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 md:gap-8 text-center pointer-events-none">
        
        {/* LOGO FLUIDO: Escala entre 150px y 350px según el ancho del monitor */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-[clamp(150px,25vw,350px)] h-auto"
        >
          <Image 
            src="/logo.png" 
            alt="Aberturas N&L" 
            width={400} 
            height={200} 
            priority
            className="w-full h-auto object-contain drop-shadow-2xl" 
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-4 md:gap-6"
        >
          {/* TÍTULO FLUIDO: Se ajusta perfectamente al monitor sin pisar otros elementos */}
          <h1 className="text-[clamp(1.8rem,6vw,5.5rem)] leading-none font-black text-white tracking-tighter uppercase">
            Fabricación y <br />
            <span className="text-orange-500">Colocación</span>
          </h1>
          
          <p className="text-[clamp(0.9rem,2vw,1.25rem)] text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed px-4">
            Transformamos tus espacios con aberturas a medida. Especialistas en diseño, seguridad y aislación perfecta para tu proyecto.
          </p>
          
          {/* BOTONES: Stack vertical en móviles, horizontal en desktop */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 pointer-events-auto w-full sm:w-auto">
            <a 
              href="https://wa.me/5491159349228" 
              className="bg-orange-600 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-orange-500 transition-all shadow-xl shadow-orange-900/20 text-center"
            >
              PRESUPUESTO SIN CARGO
            </a>
            <Link 
              href="#galeria" 
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center"
            >
              VER OBRAS
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Navegación por puntos inferior */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              index === idx ? 'w-8 h-2 bg-orange-500' : 'w-2 h-2 bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Flechas laterales solo para Desktop */}
      <button onClick={() => paginate(-1)} className="absolute left-6 z-30 p-2 text-white/50 hover:text-white transition-all hidden xl:block">
        <ChevronLeft size={48} />
      </button>
      <button onClick={() => paginate(1)} className="absolute right-6 z-30 p-2 text-white/50 hover:text-white transition-all hidden xl:block">
        <ChevronRight size={48} />
      </button>
    </section>
  );
}