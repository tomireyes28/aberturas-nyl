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
    <section id="inicio" className="relative h-[85vh] md:h-[90vh] w-full flex items-center justify-center overflow-hidden bg-gray-900">
      
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

      <button onClick={() => paginate(-1)} className="absolute left-2 md:left-8 z-20 p-2 md:p-3 rounded-full bg-black/30 text-white/70 hover:text-white backdrop-blur-md hidden sm:block">
        <ChevronLeft size={24} className="md:w-8 md:h-8" />
      </button>
      <button onClick={() => paginate(1)} className="absolute right-2 md:right-8 z-20 p-2 md:p-3 rounded-full bg-black/30 text-white/70 hover:text-white backdrop-blur-md hidden sm:block">
        <ChevronRight size={24} className="md:w-8 md:h-8" />
      </button>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* LOGO ADAPTABLE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-4 md:mb-6"
        >
          <Image 
            src="/logo.png" 
            alt="Logo Aberturas N&L" 
            width={400} 
            height={200} 
            priority
            className="w-40 sm:w-56 md:w-72 object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 md:mb-6 leading-tight uppercase">
            Fabricación y <br />
            <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(234,88,12,0.4)]">Colocación</span>
          </h1>
          
          <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto font-medium leading-snug">
            Transformamos tus espacios con aberturas a medida. Aportamos diseño, seguridad y aislación perfecta para tu hogar o negocio. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center">
            <a href="https://wa.me/5491159349228" className="bg-orange-600 hover:bg-orange-500 text-white px-6 md:px-10 py-3 md:py-5 rounded-full font-bold text-sm md:text-lg transition-all transform hover:scale-105 shadow-lg">
              PRESUPUESTO SIN CARGO
            </a>
            <Link href="#galeria" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 md:px-10 py-3 md:py-5 rounded-full font-bold text-sm md:text-lg transition-all hover:bg-white/20">
              VER OBRAS
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-20 flex justify-center gap-2 md:gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${ index === idx ? 'bg-orange-500 scale-125' : 'bg-white/50' }`}
          />
        ))}
      </div>

    </section>
  );
}