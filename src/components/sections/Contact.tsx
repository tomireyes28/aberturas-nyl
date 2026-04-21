import { MapPin, Phone, Mail, Clock, CreditCard } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="relative py-24 bg-gray-900 border-t border-gray-800 overflow-hidden">
      
      {/* Luz de fondo sutil para resaltar el formulario */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Columna Izquierda: Información y Mapa */}
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-8">
              Contacto
            </h2>
            
            <div className="space-y-6 mb-10 text-gray-300">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-orange-500 mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Nuestras Sucursales</h4>
                  <p>Local 1: Figueroa 494, Don Orione.</p>
                  <p>Local 2: Sánchez Gardel 810, Don Orione.</p>
                  <p>Claypole, Zona Sur (CP 1849)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-orange-500 mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p>nicolaschazarreta199@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-orange-500 mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Teléfonos</h4>
                  <p>11-5934-9228 | 11-3437-4195</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-orange-500 mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Horarios de Atención</h4>
                  <p>Lunes a Viernes de 09:00 a 13:00 hs y 17:00 a 20:00 hs.</p>
                </div>
              </div>

              <div className="flex items-start">
                <CreditCard className="w-6 h-6 text-orange-500 mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Formas de Pago</h4>
                  <p>Efectivo, Tarjetas de Débito y Crédito. Consultá por planes de cuotas.</p>
                </div>
              </div>
            </div>

            {/* Mapa de Google embebido con borde sutil */}
            <div className="w-full h-64 rounded-xl overflow-hidden border border-white/5 shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.56512683955!2d-58.3496839!3d-34.8168273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32c7c5b161f4d%3A0x8e8b61c56360b135!2sFigueroa%20494%2C%20B1849%20Claypole%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1715000000000!5m2!1ses-419!2sar" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Columna Derecha: Formulario con efecto Glassmorphism */}
          <div className="relative p-8 rounded-2xl bg-gray-800/40 backdrop-blur-xl border border-white/10 shadow-2xl h-fit">
            
            {/* Brillo superior simulando el borde de un vidrio */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <h3 className="text-2xl font-bold text-white mb-6">Solicitá tu presupuesto</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nombre y Apellido</label>
                  <input type="text" id="name" className="w-full bg-gray-900/50 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-400 mb-1">Ciudad / Localidad</label>
                  <input type="text" id="city" className="w-full bg-gray-900/50 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="Adrogué" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">Teléfono</label>
                  <input type="tel" id="phone" className="w-full bg-gray-900/50 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="11 1234 5678" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input type="email" id="email" className="w-full bg-gray-900/50 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="tu@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Mensaje (Medidas, tipo de trabajo, etc.)</label>
                <textarea id="message" rows={4} className="w-full bg-gray-900/50 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="Hola, necesito un presupuesto para..."></textarea>
              </div>

              <button type="button" className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-md shadow-[0_0_15px_rgba(234,88,12,0.4)] hover:shadow-[0_0_25px_rgba(234,88,12,0.6)] transition-all duration-300 mt-4">
                ENVIAR CONSULTA
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}