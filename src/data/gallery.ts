export type GalleryCategory = 'Todas' | 'Obras' | 'Baños' | 'Frentes';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const galleryData: GalleryItem[] = [
  {
    id: 'obra-bella-vista',
    src: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Obra Country Club Bella Vista',
    category: 'Obras',
  },
  {
    id: 'hospital-gandulfo',
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Remodelación aberturas, Hosp. Gandulfo',
    category: 'Obras',
  },
  {
    id: 'mampara-sicamore',
    src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Mampara de baño vidrio sicamore',
    category: 'Baños',
  },
  {
    id: 'frente-flores',
    src: 'https://images.unsplash.com/photo-1582282577239-bfa90ff5bdf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Frente de local en Flores',
    category: 'Frentes',
  },
  {
    id: 'obra-pinamar',
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Obra en Pinamar Vivienda Unifamiliar',
    category: 'Obras',
  },
  {
    id: 'duplex-canning',
    src: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Duplex en Canning, Línea Modena',
    category: 'Obras',
  },
];