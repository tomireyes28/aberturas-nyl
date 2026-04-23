'use client';

import { useState } from 'react';
import Image from 'next/image'; // Importamos el componente optimizado de Next.js
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryData, type GalleryCategory } from '@/data/gallery';

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory>('Todas');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredImages = filter === 'Todas' 
    ? galleryData 
    : galleryData.filter(img => img.category === filter);

  const categories: GalleryCategory[] = ['Todas', 'Obras', 'Baños', 'Frentes'];

  return (
    <section id="galeria" className="py-24 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Nuestros <span className="text-orange-500">Trabajos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Proyectos reales que reflejan nuestro compromiso con la calidad y el diseño.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-orange-600 border-orange-600 text-white shadow-[0_0_15px_rgba(234,88,12,0.4)]' 
                  : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setSelectedImg(item.src)}
                className="relative break-inside-avoid rounded-2xl overflow-hidden bg-gray-800 border border-white/5 group cursor-pointer"
              >
                {/* Corrección 1: Usamos <Image /> con ancho/alto de referencia */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Corrección 2: Cambiamos bg-gradient-to-t por bg-linear-to-t */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <p className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-1">{item.category}</p>
                  <h3 className="text-white font-medium">{item.alt}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-100 bg-gray-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center"
            >
              {/* Corrección 1 (Modal): Usamos <Image /> nuevamente */}
              <Image
                src={selectedImg}
                alt="Vista ampliada"
                width={1920}
                height={1080}
                className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}