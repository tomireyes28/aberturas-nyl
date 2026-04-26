'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Imagen de Trayectoria */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full lg:w-1/2 aspect-square max-w-lg"
          >
            <div className="absolute -inset-4 border border-orange-500/30 rounded-2xl translate-x-8 translate-y-8 hidden md:block"></div>
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/gallery/nosotros.jpg" 
                alt="Nuestro taller" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-orange-950/20"></div>
            </div>
            
            {/* Medalla de años */}
            <div className="absolute -bottom-6 -right-6 bg-orange-600 p-8 rounded-2xl shadow-xl">
              <span className="block text-4xl font-black text-white leading-none">30</span>
              <span className="text-xs font-bold text-orange-100 uppercase tracking-widest">Años de experiencia</span>
            </div>
          </motion.div>

          {/* Texto Sobre Nosotros */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Trayectoria y Confianza</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Transformando espacios <br /> desde hace 15 años.
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                En <span className="text-white font-bold">Aberturas N&L</span>, llevamos 15 años transformando espacios con aberturas a medida, combinando diseño, funcionalidad y durabilidad. Contamos con <span className="text-orange-500 font-semibold">30 años de experiencia</span> en el rubro, lo que nos permite ofrecer soluciones adaptadas a cada necesidad.
              </p>
              <p>
                Nos especializamos en la fabricación y colocación de aberturas de aluminio, brindando atención personalizada y cuidando cada detalle, desde la primera consulta hasta la instalación final.
              </p>
              <p>
                Trabajamos con responsabilidad, experiencia y dedicación para lograr resultados que perduren en el tiempo, creciendo junto a nuestros clientes en cada proyecto.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 pt-8 border-t border-gray-800">
              <div>
                <span className="block text-3xl font-bold text-white mb-1">100%</span>
                <span className="text-gray-500 text-sm">A medida</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white mb-1">Garantía</span>
                <span className="text-gray-500 text-sm">En colocación</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}