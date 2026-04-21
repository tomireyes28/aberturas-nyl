import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  city: z.string().min(2, "La ciudad es obligatoria"),
  phone: z.string().min(8, "Número de teléfono inválido"),
  email: z.string().email("Ingresá un email válido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;