'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ShieldCheck, Thermometer, Volume2 } from 'lucide-react';

const lineas = [
  {
    id: 'herrero',
    nombre: 'Línea Herrero',
    descripcion: 'La opción más económica y tradicional. Ideal para obras estándar y presupuestos optimizados sin descuidar la durabilidad.',
    nivel: 25,
    foto: '/lines/herrero.jpeg',
    detalles: 'Es el sistema más tradicional del mercado. Su diseño de perfiles livianos permite una fabricación ágil y un costo competitivo, siendo ideal para viviendas unifamiliares estándar.',
    ventajas: ['Económica', 'Versátil', 'Fácil mantenimiento']
  },
  {
    id: 'modena',
    nombre: 'Línea Modena',
    descripcion: 'El estándar de calidad del mercado. Ofrece un equilibrio perfecto entre estética curva/recta y una hermeticidad superior.',
    nivel: 50,
    foto: '/lines/modena.jpeg',
    detalles: 'Modena ha revolucionado el mercado por su tecnología y diseño. Posee un sistema de cierre perimetral que mejora notablemente la aislación respecto a líneas básicas.',
    ventajas: ['Gran hermeticidad', 'Estética moderna', 'Doble vidriado (DVH)']
  },
  {
    id: 'a30new',
    nombre: 'Línea A30 New',
    descripcion: 'Alta prestación para proyectos exigentes. Permite aberturas de gran tamaño con una resistencia y hermeticidad excepcionales.',
    nivel: 75,
    foto: '/lines/a30.jpg',
    detalles: 'Diseñada para aberturas de gran porte. Su robustez permite instalar vidrios de gran espesor y soportar altas presiones de viento, ideal para edificios o casas en zonas abiertas.',
    ventajas: ['Máxima resistencia', 'Hojas de gran tamaño', 'Cierres de alta gama']
  },
  {
    id: 'a40',
    nombre: 'Línea A40',
    descripcion: 'La cima del diseño y la tecnología. Perfiles minimalistas y robustos con la máxima aislación térmica y acústica disponible.',
    nivel: 100,
    foto: '/lines/a40.jpg',
    detalles: 'Es la línea de mayor prestación. Combina un diseño de líneas rectas y minimalistas con la mayor capacidad de aislación térmica y acústica del mercado actual.',
    ventajas: ['Diseño minimalista', 'Aislación termoacústica', 'Calidad Premium']
  }
];

export default function Lines() {
  const [selectedLine, setSelectedLine] = useState<typeof lineas[0] | null>(null);

  return (
    <section id="lineas" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">
            Líneas de <span className="text-orange-500">Carpintería</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ordenadas de menor a mayor prestación, para que elijas la solución perfecta según tu exigencia.
          </p>
        </div>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {lineas.map((linea, index) => (
            <motion.div 
              key={linea.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedLine(linea)}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all group cursor-pointer flex flex-col shadow-xl"
            >
              <div className="relative h-52 w-full bg-gray-800 overflow-hidden">
                <Image 
                  src={linea.foto}
                  alt={linea.nombre}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4">
                   <span className="bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                     Click para ver más
                   </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-white font-bold text-xl mb-3">{linea.nombre}</h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {linea.descripcion}
                </p>
                
                <div className="space-y-2 mt-auto">
                  <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-orange-500">
                    <span>Nivel de Prestación</span>
                    <span>{linea.nivel}%</span>
                  </div>
                  <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${linea.nivel}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-orange-600 shadow-[0_0_10px_rgba(234,88,12,0.5)]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL DETALLADO (LIGHTBOX) */}
      <AnimatePresence>
        {selectedLine && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLine(null)}
            className="fixed inset-0 z-100 bg-gray-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row cursor-default max-h-[90vh]"
            >
              {/* Lado Izquierdo: Imagen */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-gray-800">
                <Image 
                  src={selectedLine.foto}
                  alt={selectedLine.nombre}
                  fill
                  className="object-cover"
                />
                <button 
                  onClick={() => setSelectedLine(null)}
                  className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded-full md:hidden"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Lado Derecho: Contenido */}
              <div className="p-8 md:p-12 w-full md:w-1/2 overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Línea Seleccionada</span>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase">{selectedLine.nombre}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedLine(null)}
                    className="text-gray-500 hover:text-white transition-colors hidden md:block"
                  >
                    <X size={32} />
                  </button>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {selectedLine.detalles}
                </p>

                <div className="grid grid-cols-1 gap-4 mb-8">
                  {selectedLine.ventajas.map((ventaja) => (
                    <div key={ventaja} className="flex items-center gap-3 text-white font-medium">
                      <ShieldCheck className="text-orange-500" size={20} />
                      {ventaja}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-8 border-t border-gray-800">
                  <div className="flex flex-col items-center gap-2 text-gray-400">
                    <Thermometer size={24} className="text-orange-500/50" />
                    <span className="text-[10px] uppercase font-bold tracking-tighter">Térmica</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-gray-400">
                    <Volume2 size={24} className="text-orange-500/50" />
                    <span className="text-[10px] uppercase font-bold tracking-tighter">Acústica</span>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedLine(null)}
                  className="w-full mt-10 bg-white/5 hover:bg-white/10 text-white py-4 rounded-xl font-bold transition-all border border-white/10"
                >
                  CERRAR VISTA
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}