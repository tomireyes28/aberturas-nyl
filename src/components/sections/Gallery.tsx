import Image from 'next/image';
import { galleryData } from '@/data/gallery';

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Nuestros <span className="text-orange-500">Trabajos</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explorá algunos de nuestros proyectos más destacados. Desde viviendas unifamiliares hasta remodelaciones comerciales.
          </p>
        </div>

        {/* Grilla de Imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {galleryData.map((item) => (
            <div 
              key={item.id} 
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-800"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Capa oscura que aparece al hacer hover con el texto */}
              <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-orange-500 text-sm font-bold tracking-wider uppercase mb-1">
                  {item.category}
                </span>
                <h3 className="text-white font-medium text-lg leading-snug">
                  {item.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}