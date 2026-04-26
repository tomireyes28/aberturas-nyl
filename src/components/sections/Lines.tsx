'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ShieldCheck, Maximize2 } from 'lucide-react';

const lineas = [
  {
    id: 'herrero',
    nombre: 'Línea Herrero',
    descripcion: 'La opción más económica y tradicional. Ideal para obras estándar y presupuestos optimizados sin descuidar la durabilidad y funcionalidad básica.',
    nivel: 25,
    foto: '/lines/herrero.png',
    ventajas: ['Presupuesto accesible', 'Versátil', 'Fácil mantenimiento']
  },
  {
    id: 'modena',
    nombre: 'Línea Modena',
    descripcion: 'El estándar de calidad del mercado. Ofrece un equilibrio perfecto entre estética curva/recta y una hermeticidad superior gracias a su cierre perimetral.',
    nivel: 50,
    foto: '/lines/modena.png',
    ventajas: ['Gran hermeticidad', 'Estética moderna', 'Apta para doble vidrio']
  },
  {
    id: 'a30new',
    nombre: 'Línea A30 New',
    descripcion: 'Alta prestación para proyectos exigentes. Permite aberturas de gran tamaño y peso, soportando altas presiones de viento con una resistencia excepcional.',
    nivel: 75,
    foto: '/lines/a30.png',
    ventajas: ['Máxima resistencia estructural', 'Hojas de gran tamaño', 'Cierres de alta gama']
  },
  {
    id: 'a40',
    nombre: 'Línea A40',
    descripcion: 'La cima del diseño y la tecnología. Perfiles rectos y minimalistas con la máxima capacidad de aislación térmica y acústica del mercado actual.',
    nivel: 100,
    foto: '/lines/a40.png',
    ventajas: ['Diseño premium minimalista', 'Aislación termoacústica total', 'Herrajes europeos']
  }
];

export default function Lines() {
  const [activeTab, setActiveTab] = useState(lineas[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="lineas" className="py-24 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">
            Sistemas de <span className="text-orange-500">Aluminio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explorá nuestras líneas de menor a mayor prestación y encontrá el nivel de tecnología exacto que tu proyecto necesita.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* Menú de Selección (Tabs) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {lineas.map((linea) => (
              <button
                key={linea.id}
                onClick={() => setActiveTab(linea)}
                className={`relative p-6 text-left rounded-2xl transition-all duration-300 border ${
                  activeTab.id === linea.id
                    ? 'bg-gray-900 border-orange-500 shadow-[0_0_20px_rgba(234,88,12,0.15)]'
                    : 'bg-transparent border-gray-800 hover:border-gray-600 hover:bg-gray-900/50'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className={`text-xl font-bold transition-colors ${activeTab.id === linea.id ? 'text-white' : 'text-gray-400'}`}>
                    {linea.nombre}
                  </h3>
                  {activeTab.id === linea.id && (
                    <motion.div layoutId="indicator" className="w-2 h-2 rounded-full bg-orange-500" />
                  )}
                </div>
                <p className="text-xs uppercase font-bold tracking-widest text-gray-500 mt-2">
                  Prestación: {linea.nivel}%
                </p>
              </button>
            ))}
          </div>

          {/* Visualizador Principal */}
          <div className="w-full lg:w-2/3 bg-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-800 relative min-h-125 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row items-center gap-10 w-full h-full"
              >
                {/* PNG Flotante Interactivo */}
                <div 
                  className="w-full md:w-1/2 relative group cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <div className="aspect-4/5 relative">
                    {/* El drop-shadow es clave para que el PNG resalte sobre el fondo oscuro */}
                    <Image 
                      src={activeTab.foto}
                      alt={activeTab.nombre}
                      fill
                      priority
                      className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-orange-500/90 text-white p-3 rounded-full backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                </div>

                {/* Detalles Técnicos */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h4 className="text-3xl font-black text-white mb-4">{activeTab.nombre}</h4>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {activeTab.descripcion}
                  </p>

                  <div className="space-y-4 mb-8">
                    {activeTab.ventajas.map((ventaja) => (
                      <div key={ventaja} className="flex items-center gap-3 text-gray-200">
                        <ShieldCheck className="text-orange-500 shrink-0" size={20} />
                        <span className="font-medium text-sm">{ventaja}</span>
                      </div>
                    ))}
                  </div>

                  {/* Barra de Nivel */}
                  <div className="mt-auto">
                    <div className="flex justify-between text-xs uppercase font-bold tracking-widest text-orange-500 mb-2">
                      <span>Nivel de Prestación</span>
                      <span>{activeTab.nivel}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-950 rounded-full overflow-hidden border border-gray-800">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${activeTab.nivel}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-linear-to-r from-orange-600 to-orange-400"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* MODAL FULLSCREEN PARA EL PNG */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-100 bg-gray-950/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 bg-gray-900 p-2 rounded-full"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={32} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl aspect-square flex items-center justify-center pointer-events-none"
            >
              <Image 
                src={activeTab.foto}
                alt={activeTab.nombre}
                fill
                className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,1)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}