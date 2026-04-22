'use client';

import { servicesData } from '@/data/services';
import { motion } from 'framer-motion';

// Configuramos cómo aparece el contenedor principal
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15 // Esto hace que cada tarjeta tarde 0.15s más que la anterior en aparecer
    }
  }
};

// Configuramos cómo aparece cada tarjeta individualmente
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Círculos de luz de fondo para resaltar el glassmorphism */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título animado al hacer scroll */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Soluciones en <span className="text-orange-500">Aberturas</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Calidad industrial con diseño de vanguardia. Fabricamos a medida y colocamos en obra.
          </p>
        </motion.div>

        {/* Grilla de Tarjetas con animación en cascada */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={service.id}
                variants={cardVariants}
                className="relative group p-8 rounded-2xl bg-gray-800/40 backdrop-blur-md border border-white/5 hover:border-orange-500/50 transition-colors duration-500 shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                {/* Icono con animación sutil al hacer hover en la tarjeta */}
                <div className="w-14 h-14 bg-gray-900/80 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600/20 group-hover:scale-110 transition-all duration-300 border border-white/5">
                  <IconComponent className="w-7 h-7 text-orange-500" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}