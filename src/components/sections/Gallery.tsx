'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData, type GalleryCategory } from '@/data/gallery';

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory>('Todas');

  const filteredImages = filter === 'Todas' 
    ? galleryData 
    : galleryData.filter(img => img.category === filter);

  return (
    <section id="galeria" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* ... (Cabecera y botones de filtro igual que antes) ... */}

        {/* Grilla Masonry que ajusta fotos verticales y horizontales */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative break-inside-avoid rounded-2xl overflow-hidden bg-gray-800 border border-white/5 group cursor-pointer"
              >
                {/* Usamos img nativa o Next Image con height automático para 
                  respetar la orientación original de la obra 
                */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <p className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-1">{item.category}</p>
                  <h3 className="text-white font-medium">{item.alt}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}