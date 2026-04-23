'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Barra bien fina y elegante */}
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo en Texto Puro (Minimalista) */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-black tracking-tighter text-white hover:text-orange-500 transition-colors">
              ABERTURAS <span className="text-orange-500">N&L</span>
            </Link>
          </div>

          {/* Enlaces Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-gray-300 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider">Inicio</Link>
            <Link href="#servicios" className="text-gray-300 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider">Qué Hacemos</Link>
            <Link href="#galeria" className="text-gray-300 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider">Galería</Link>
            <Link href="#contacto" className="text-gray-300 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider">Contacto</Link>
          </div>

          {/* Botón CTA Desktop */}
          <div className="hidden md:flex">
            <a 
              href="https://wa.me/5491159349228" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-md font-bold transition-all shadow-[0_0_15px_rgba(234,88,12,0.4)] hover:shadow-[0_0_25px_rgba(234,88,12,0.6)]"
            >
              Cotizar Ahora
            </a>
          </div>

          {/* Botón Menú Hamburguesa Mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none relative z-50"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <Link href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors font-medium py-4 border-b border-gray-800/50">Inicio</Link>
            <Link href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors font-medium py-4 border-b border-gray-800/50">Qué Hacemos</Link>
            <Link href="#galeria" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors font-medium py-4 border-b border-gray-800/50">Galería</Link>
            <Link href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors font-medium py-4 border-b border-gray-800/50">Contacto</Link>
            <a href="https://wa.me/5491159349228" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="bg-orange-600 text-white px-6 py-3 rounded-md font-bold text-center mt-6 shadow-[0_0_15px_rgba(234,88,12,0.4)] block">Cotizar Ahora</a>
          </div>
        </div>
      )}
    </nav>
  );
}