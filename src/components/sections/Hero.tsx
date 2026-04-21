import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[85vh] flex items-center justify-center">
      
      {/* Fondo de imagen con Overlay (Capa oscura) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" 
        }}
      >
        {/* Este div actúa como filtro oscuro para que las letras blancas resalten */}
        <div className="absolute inset-0 bg-gray-950/70"></div> 
      </div>

      {/* Contenido de texto y botones */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          Aberturas de Aluminio y <span className="text-orange-500">Vidriería a Medida</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Fabricación y colocación con calidad garantizada. Acompañamos tus proyectos residenciales y comerciales en toda la zona sur.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/5491159349228"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-lg shadow-orange-900/30 flex items-center justify-center"
          >
            Solicitar Presupuesto
          </a>
          <Link 
            href="#galeria"
            className="bg-transparent border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-md font-semibold text-lg transition-all flex items-center justify-center"
          >
            Ver Nuestros Trabajos
          </Link>
        </div>
      </div>
      
    </section>
  );
}