'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Loader2, Send } from 'lucide-react';
import { contactSchema, type ContactFormData } from '@/lib/validations';
import { sendEmailAction } from '@/actions/sendEmail';

export default function Contact() {
  const [serverState, setServerState] = useState<{ success?: string; error?: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerState(null);
    const result = await sendEmailAction(data);

    if (result?.error) {
      setServerState({ error: result.error });
    } else {
      setServerState({ success: '¡Consulta enviada! Nos comunicaremos a la brevedad.' });
      reset();
    }
  };

  return (
    <section id="contacto" className="relative py-24 bg-gray-900 border-t border-gray-800 overflow-hidden">
      {/* Efectos de luz ambiental de fondo */}
      <div className="absolute top-1/2 right-0 w-125 h-125 bg-orange-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-75 h-75 bg-blue-600/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna Izquierda: Información con animación de entrada */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight">
              Contacto
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 shrink-0 border border-white/5 group-hover:border-orange-500/50 transition-colors">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Nuestras Sucursales</h4>
                  <p className="text-gray-400">Local 1: Figueroa 494, Don Orione[cite: 6, 9].</p>
                  <p className="text-gray-400">Local 2: Sánchez Gardel 810, Don Orione.</p>
                  <p className="text-gray-400">Claypole, Almirante Brown (CP 1849).</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 shrink-0 border border-white/5 group-hover:border-orange-500/50 transition-colors">
                  <Mail className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Email</h4>
                  <p className="text-gray-400">nicolaschazarreta199@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 shrink-0 border border-white/5 group-hover:border-orange-500/50 transition-colors">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Teléfonos</h4>
                  <p className="text-gray-400">11-5934-9228 [cite: 3, 9] | 11-3437-4195</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 shrink-0 border border-white/5 group-hover:border-orange-500/50 transition-colors">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Horarios de Atención</h4>
                  <p className="text-gray-400">Lunes a Viernes: 09:00 a 13:00 hs y 17:00 a 20:00 hs.</p>
                </div>
              </div>
            </div>

            {/* Mapa con marco estilo vidrio */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.523565651543!2d-58.35165!3d-34.81456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32da84a9e5a1b%3A0x6a2c3a5b6c7d8e9f!2sFigueroa%20494%2C%20B1849%20Claypole%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1714000000000!5m2!1ses!2sar" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
                allowFullScreen={false} 
                loading="lazy" 
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Columna Derecha: Formulario Glassmorphism con animación de escala */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 md:p-10 rounded-3xl bg-gray-800/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
            
            <h3 className="text-2xl font-bold text-white mb-8">Solicitá tu presupuesto</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Nombre y Apellido</label>
                  <input 
                    {...register('name')}
                    className="w-full bg-gray-900/60 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all" 
                    placeholder="Tu nombre" 
                  />
                  {errors.name && <p className="text-red-400 text-xs animate-pulse ml-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Localidad</label>
                  <input 
                    {...register('city')}
                    className="w-full bg-gray-900/60 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all" 
                    placeholder="Ej: Adrogué" 
                  />
                  {errors.city && <p className="text-red-400 text-xs animate-pulse ml-1">{errors.city.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Teléfono</label>
                  <input 
                    {...register('phone')}
                    className="w-full bg-gray-900/60 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all" 
                    placeholder="11 1234 5678" 
                  />
                  {errors.phone && <p className="text-red-400 text-xs animate-pulse ml-1">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                  <input 
                    {...register('email')}
                    className="w-full bg-gray-900/60 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all" 
                    placeholder="correo@ejemplo.com" 
                  />
                  {errors.email && <p className="text-red-400 text-xs animate-pulse ml-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Mensaje o Pedido</label>
                <textarea 
                  {...register('message')}
                  rows={4} 
                  className="w-full bg-gray-900/60 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all resize-none" 
                  placeholder="Detallanos las medidas o el tipo de abertura..."
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs animate-pulse ml-1">{errors.message.message}</p>}
              </div>

              {serverState?.success && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/50 rounded-xl text-green-300 text-sm flex items-center"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-ping" />
                  {serverState.success}
                </motion.div>
              )}
              
              {serverState?.error && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-300 text-sm"
                >
                  {serverState.error}
                </motion.div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full group bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-6 rounded-xl shadow-[0_10px_25px_rgba(234,88,12,0.3)] hover:shadow-[0_15px_35px_rgba(234,88,12,0.5)] transition-all duration-300 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" /> Procesando pedido...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                      ENVIAR CONSULTA
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}