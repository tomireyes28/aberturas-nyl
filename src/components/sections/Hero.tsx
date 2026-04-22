'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      
      {/* Fondo de imagen con efecto de zoom lento al cargar */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" 
        }}
      >
        <div className="absolute inset-0 bg-gray-950/70"></div> 
      </motion.div>

      {/* Contenido animado en cascada */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
        >
          Aberturas de Aluminio y <span className="text-orange-500">Vidriería a Medida</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Fabricación y colocación con calidad garantizada. Acompañamos tus proyectos residenciales y comerciales en toda la zona sur.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="https://wa.me/5491159349228"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] flex items-center justify-center hover:-translate-y-1"
          >
            Solicitar Presupuesto
          </a>
          <Link 
            href="#galeria"
            className="bg-gray-800/50 backdrop-blur-sm border-2 border-gray-400/50 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-md font-semibold text-lg transition-all flex items-center justify-center hover:-translate-y-1 hover:bg-gray-800/80"
          >
            Ver Nuestros Trabajos
          </Link>
        </motion.div>

      </div>
    </section>
  );
}