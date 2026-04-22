import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 py-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright */}
        <div className="text-gray-500 text-sm order-3 md:order-1 text-center md:text-left">
          © {currentYear} Aberturas N&L.<br className="block md:hidden" /> Todos los derechos reservados.
        </div>

        {/* Logo */}
        <div className="order-1 md:order-2">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
            ABERTURAS <span className="text-orange-500">N&L</span>
          </Link>
        </div>

        {/* Ubicación / Cierre */}
        <div className="text-gray-500 text-sm font-medium order-2 md:order-3">
          Almirante Brown, Buenos Aires.
        </div>

      </div>
    </footer>
  );
}