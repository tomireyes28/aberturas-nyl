import { servicesData } from '@/data/services';

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Soluciones Integrales en <span className="text-orange-500">Aberturas</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Fabricamos a medida y colocamos en obra. Calidad, diseño y durabilidad garantizada para cada etapa de tu proyecto.
          </p>
        </div>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id} 
                className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-orange-500/50 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}