import { Type, Grid2X2, DoorOpen, Store, Bug, PenTool, LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'ventanas',
    title: 'Ventanas',
    description: 'Fabricación e instalación de ventanas a medida. Trabajamos Línea Herrero y Línea Modena para adaptarnos a tus necesidades.',
    icon: Grid2X2,
  },
  {
    id: 'puertas',
    title: 'Puertas',
    description: 'Puertas de aluminio de alta seguridad y diseño moderno. Interiores, exteriores y puertas dobles con herrajes pesados.',
    icon: DoorOpen,
  },
  {
    id: 'mamparas',
    title: 'Mamparas de Baño',
    description: 'Diseños elegantes en vidrio laminado, sicamore o policarbonato fumé. Boxes de ducha y paños fijos a medida.',
    icon: Type, // Placeholder: Lucide no tiene un icono específico de mampara, usamos uno genérico
  },
  {
    id: 'frentes',
    title: 'Frentes de Local',
    description: 'Cerramientos comerciales completos. Maximizá la visibilidad y seguridad de tu negocio con nuestras estructuras.',
    icon: Store,
  },
  {
    id: 'mosquiteros',
    title: 'Mosquiteros y Postigos',
    description: 'Protección contra insectos sin perder ventilación ni diseño. Opciones fijas, corredizas o enrollables.',
    icon: Bug,
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento',
    description: 'Servicio técnico especializado para aberturas. Reparación, ajuste de herrajes y cambio de vidrios rotos o empañados.',
    icon: PenTool,
  },
];