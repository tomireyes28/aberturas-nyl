import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
              ABERTURAS <span className="text-orange-500">N&L</span>
            </Link>
          </div>

          {/* Enlaces Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-gray-300 hover:text-white transition-colors font-medium">Inicio</Link>
            <Link href="#servicios" className="text-gray-300 hover:text-white transition-colors font-medium">Qué Hacemos</Link>
            <Link href="#galeria" className="text-gray-300 hover:text-white transition-colors font-medium">Galería</Link>
            <Link href="#contacto" className="text-gray-300 hover:text-white transition-colors font-medium">Contacto</Link>
          </div>

          {/* Botón CTA Desktop */}
          <div className="hidden md:flex">
            <a 
              href="https://wa.me/5491159349228" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold transition-all shadow-lg shadow-orange-900/20"
            >
              Cotizar Ahora
            </a>
          </div>

          {/* Menú Hamburguesa Mobile (Maqueta estática por ahora) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}