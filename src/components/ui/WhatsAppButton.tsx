'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5491159349228"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all flex items-center justify-center group"
    >
      {/* Animación de Pulso */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>
      
      <MessageCircle size={32} className="relative z-10" />
      
      {/* Tooltip al hacer hover */}
      <span className="absolute right-16 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
        ¿Consultas? Escribinos
      </span>
    </motion.a>
  );
}