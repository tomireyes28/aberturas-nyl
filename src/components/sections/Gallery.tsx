'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryData, type GalleryCategory } from '@/data/gallery';

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory>('Todas');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Filtramos los datos según la categoría seleccionada
  const filteredImages = filter === 'Todas' 
    ? galleryData 
    : galleryData.filter(img => img.category === filter);

  const categories: GalleryCategory[] = ['Todas', 'Obras', 'Baños', 'Frentes'];

  return (
    <section id="galeria" className="py-24 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
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

        {/* Barra de Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-orange-600 border-orange-600 text-white shadow-[0_0_15px_rgba(234,88,12,0.4)]' 
                  : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grilla Animada */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImg(item.src)}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-800 cursor-pointer border border-white/5"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Overlay al hacer hover */}
                <div className="absolute inset-0 bg-gray-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-[2px]">
                  <span className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-medium text-lg">
                    {item.alt}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal de Imagen (Lightbox) */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-gray-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10"
            >
              <Image
                src={selectedImg}
                alt="Vista ampliada"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}