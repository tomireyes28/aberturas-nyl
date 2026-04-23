'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920', // Fachada
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1920', // Interior
  'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1920'  // Detalle
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
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
    const timer = setInterval(() => {
      paginate(1);
    }, 6000); 
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
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${images[index]}')` }}
          />
          <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-[2px]"></div>
        </motion.div>
      </AnimatePresence>

      <button 
        className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-black/30 text-white/70 hover:text-white hover:bg-black/50 backdrop-blur-md transition-all hidden sm:block"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-black/30 text-white/70 hover:text-white hover:bg-black/50 backdrop-blur-md transition-all hidden sm:block"
        onClick={() => paginate(1)}
      >
        <ChevronRight size={32} />
      </button>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-tight uppercase">
            Fabricación y <br />
            <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(234,88,12,0.4)]">Colocación</span>
          </h1>
          
          {/* Nuevo texto más ganchero y comercial */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-medium">
            Transformamos tus espacios con aberturas a medida. Aportamos diseño, seguridad y aislación perfecta para tu hogar o negocio. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center pointer-events-auto">
            <a 
              href="https://wa.me/5491159349228"
              className="bg-orange-600 hover:bg-orange-500 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)]"
            >
              PRESUPUESTO SIN CARGO
            </a>
            <Link 
              href="#galeria"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-all hover:bg-white/20"
            >
              VER OBRAS
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > index ? 1 : -1);
              setIndex(idx);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === idx ? 'bg-orange-500 scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

    </section>
  );
}