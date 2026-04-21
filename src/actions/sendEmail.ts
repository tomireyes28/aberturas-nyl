'use server';

import { Resend } from 'resend';
import { contactSchema } from '@/lib/validations';

// La key la vas a poner en tu archivo .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: unknown) {
  // 1. Validación en el servidor (Seguridad)
  const result = contactSchema.safeParse(formData);
  
  if (!result.success) {
    return { error: 'Los datos enviados no son válidos.' };
  }

  const { name, city, phone, email, message } = result.data;

  try {
    // 2. Envío del mail a Nicolás
    await resend.emails.send({
      from: 'Aberturas N&L Web <onboarding@resend.dev>', // Por ahora usá el de prueba de Resend
      to: ['nicolaschazarreta199@gmail.com'], 
      subject: `Nuevo Presupuesto Web - ${name} de ${city}`,
      text: `
        Tenés una nueva consulta desde la web:
        
        Nombre: ${name}
        Ciudad: ${city}
        Teléfono: ${phone}
        Email: ${email}
        
        Mensaje:
        ${message}
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return { error: 'Hubo un problema de conexión al enviar el correo.' };
  }
}