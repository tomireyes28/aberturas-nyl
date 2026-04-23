export type GalleryCategory = 'Todas' | 'Obras' | 'Baños' | 'Frentes';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const galleryData: GalleryItem[] = [
  // --- CATEGORÍA: FRENTES ---
  { id: 'frente-flores-1', src: '/gallery/frente-local-flores.png', alt: 'Frente de local, Flores', category: 'Frentes' },
  { id: 'frente-flores-2', src: '/gallery/frente-local-flores-2.png', alt: 'Frente de local, Flores', category: 'Frentes' },
  { id: 'frente-flores-3', src: '/gallery/frente-local-flores-3.png', alt: 'Frente de local, Flores', category: 'Frentes' },
  { id: 'frente-flores-4', src: '/gallery/frente-local-flores-4.png', alt: 'Frente de local, Flores', category: 'Frentes' },
  { id: 'frente-canning-1', src: '/gallery/frente-local-caninng.png', alt: 'Frente local, Canning', category: 'Frentes' }, // Respeta el error de tipeo de tu archivo
  { id: 'frente-canning-2', src: '/gallery/frente-local-canning-2.png', alt: 'Frente local, Canning', category: 'Frentes' },
  { id: 'frente-canning-3', src: '/gallery/frente-local-canning-3.png', alt: 'Frente local, Canning', category: 'Frentes' },
  { id: 'divisor-zambiazzo', src: '/gallery/divisor-oficinas-ferreteria-zambiazzo.png', alt: 'Divisor oficinas Ferretería Zambiazzo', category: 'Frentes' },

  // --- CATEGORÍA: BAÑOS ---
  { id: 'box-ducha', src: '/gallery/box-de-ducha-policarbonato-fume.png', alt: 'Box de ducha, policarbonato fumé', category: 'Baños' },
  { id: 'mampara-sicamore', src: '/gallery/mampara-de-baño-vidrio-sicamore.png', alt: 'Mampara de baño, vidrio sicamore', category: 'Baños' },
  { id: 'mampara-gen', src: '/gallery/mampara.png', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'panos-fijos', src: '/gallery/paños-fijo-en-vidrio-laminado.png', alt: 'Paños fijos en vidrio laminado', category: 'Baños' },

  // --- CATEGORÍA: OBRAS ---
  { id: 'baranda-talas-1', src: '/gallery/baranda-balcon-barrio-los-talas.png', alt: 'Baranda balcón, Barrio Los Talas', category: 'Obras' },
  { id: 'baranda-talas-2', src: '/gallery/baranda-balcon-barrio-los-talas-2.png', alt: 'Baranda balcón, Barrio Los Talas', category: 'Obras' },
  { id: 'baranda-talas-3', src: '/gallery/baranda-balcon-barrio-los-talas-3.png', alt: 'Baranda balcón, Barrio Los Talas', category: 'Obras' },
  { id: 'buffet-palermo-1', src: '/gallery/buffet-hipodromo-palermo.png', alt: 'Remodelación buffet, Hipódromo Palermo', category: 'Obras' },
  { id: 'buffet-palermo-2', src: '/gallery/buffet-hipodromo-palermo-2.png', alt: 'Remodelación buffet, Hipódromo Palermo', category: 'Obras' },
  { id: 'canning-duplex-1', src: '/gallery/canning-duplex.png', alt: 'Obra en Canning, Duplex', category: 'Obras' },
  { id: 'canning-duplex-2', src: '/gallery/Canning-duplex-2.png', alt: 'Obra en Canning, Duplex', category: 'Obras' }, // Respeta la C mayúscula
  { id: 'cap-sarmiento-1', src: '/gallery/capitan-sarmiento-1.png', alt: 'Vivienda unifamiliar, Capitán Sarmiento', category: 'Obras' },
  { id: 'cap-sarmiento-2', src: '/gallery/capitan-sarmiento-2.png', alt: 'Vivienda unifamiliar, Capitán Sarmiento', category: 'Obras' },
  { id: 'encuentro-modena', src: '/gallery/encuentro-en-esquina-linea-modena.png', alt: 'Encuentro en esquina, Línea Modena', category: 'Obras' },
  { id: 'gandulfo-1', src: '/gallery/hospital-gandulfo.png', alt: 'Remodelación aberturas, Hosp. Gandulfo', category: 'Obras' },
  { id: 'gandulfo-2', src: '/gallery/hospital-gandulfo-2.png', alt: 'Remodelación aberturas, Hosp. Gandulfo', category: 'Obras' },
  { id: 'bella-vista', src: '/gallery/obra-country-club-bella-vista.png', alt: 'Obra Country Club Bella Vista', category: 'Obras' },
  { id: 'pinamar-duplex', src: '/gallery/pinamar-duplex.png', alt: 'Obra en Pinamar, Duplex', category: 'Obras' },
  { id: 'pinamar-obra', src: '/gallery/pinamar-obra.png', alt: 'Obra en Pinamar, Vivienda Unifamiliar', category: 'Obras' },
  { id: 'platanos-techo-1', src: '/gallery/platanos-techo.png', alt: 'Techo con apertura, Plátanos', category: 'Obras' },
  { id: 'platanos-techo-2', src: '/gallery/platanos-techo-2.png', alt: 'Techo con apertura, Plátanos', category: 'Obras' },
  { id: 'puerta-doble', src: '/gallery/puerta-doble-linea-herrero-pesado.png', alt: 'Puerta doble, Línea Herrero', category: 'Obras' },
  { id: 'remodelacion-orione', src: '/gallery/remodelacion-barrio-don-orione.png', alt: 'Remodelación, Barrio Don Orione', category: 'Obras' },
  { id: 'abertura-1', src: '/gallery/abertura1.png', alt: 'Colocación de Aberturas', category: 'Obras' },
  { id: 'abertura-2', src: '/gallery/abertura2.png', alt: 'Colocación de Aberturas', category: 'Obras' },
  
  // Fotos de Fabrica
  { id: 'taller-1', src: '/gallery/taller-fabrica.png', alt: 'Taller-Fabrica FAMAR', category: 'Obras' },
  { id: 'taller-2', src: '/gallery/taller-fabrica-2.png', alt: 'Taller-Fabrica FAMAR', category: 'Obras' },
  { id: 'taller-3', src: '/gallery/taller-fabrica-3.png', alt: 'Taller-Fabrica FAMAR', category: 'Obras' },
];