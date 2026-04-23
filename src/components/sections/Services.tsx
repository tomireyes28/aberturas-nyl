'use client';

import { servicesData } from '@/data/services';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-white mb-4">QUÉ HACEMOS</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service) => (
            <FlipCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ service }: { service: any }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <div 
      className="relative h-75 w-full perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="w-full h-full relative preserve-3d"
      >
        {/* Frente de la Tarjeta */}
        <div className="absolute inset-0 backface-hidden bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-orange-600/20 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/30">
            <Icon className="text-orange-500 w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
          <p className="mt-4 text-orange-500 font-bold text-sm">TOCAR PARA VER DETALLES</p>
        </div>

        {/* Dorso de la Tarjeta (Giro 180) */}
        <div className="absolute inset-0 backface-hidden bg-orange-600 rounded-3xl p-8 flex flex-col items-center justify-center text-center rotate-y-180">
          <h3 className="text-xl font-bold text-white mb-4">Información Técnica</h3>
          <p className="text-white text-lg leading-snug font-medium">
            {service.description}
          </p>
          <div className="mt-6 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <Icon className="text-white w-6 h-6" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}