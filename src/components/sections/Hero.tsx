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
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
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
    /* min-h-screen permite que la sección crezca si el contenido lo requiere. 
       py-20 asegura que el contenido no choque con los bordes en celulares. */
    <section id="inicio" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900 py-20 md:py-0">
      
      {/* Fondo con Imágenes */}
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
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${images[index]}')` }}
          />
          <div className="absolute inset-0 bg-gray-950/70 backdrop-blur-[2px]"></div>
        </motion.div>
      </AnimatePresence>

      {/* Flechas de Navegación (Solo en pantallas grandes para no estorbar) */}
      <button 
        onClick={() => paginate(-1)} 
        className="absolute left-4 z-30 p-3 rounded-full bg-black/20 text-white/70 hover:bg-black/50 transition-all hidden lg:block"
      >
        <ChevronLeft size={40} />
      </button>
      <button 
        onClick={() => paginate(1)} 
        className="absolute right-4 z-30 p-3 rounded-full bg-black/20 text-white/70 hover:bg-black/50 transition-all hidden lg:block"
      >
        <ChevronRight size={40} />
      </button>

      {/* Contenido Central Relativo */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Logo con ancho relativo máximo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-[180px] sm:max-w-[240px] md:max-w-[320px] mb-8"
        >
          <Image 
            src="/logo.png" 
            alt="Logo Aberturas N&L" 
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
          className="w-full"
        >
          <h1 className="text-[2.2rem] leading-[1.1] sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 uppercase">
            Fabricación y <br />
            <span className="text-orange-500">Colocación</span>
          </h1>
          
          <p className="text-base sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium">
            Transformamos tus espacios con aberturas a medida. Especialistas en diseño, seguridad y aislación perfecta para tu proyecto.
          </p>
          
          {/* Botones: en columna para móviles, fila para desktop */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <a 
              href="https://wa.me/5491159349228" 
              className="w-full sm:w-auto bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-all shadow-lg"
            >
              PRESUPUESTO SIN CARGO
            </a>
            <Link 
              href="#galeria" 
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              VER OBRAS
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Indicadores de diapositiva */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
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
    </section>
  );
}