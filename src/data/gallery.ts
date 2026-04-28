export type GalleryCategory = 'Todas' | 'Obras' | 'Baños' | 'Frentes';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const galleryData: GalleryItem[] = [
  // --- CATEGORÍA: FRENTES ---
  { id: 'frente-1', src: '/gallery/frente.jpg', alt: 'Frente de local 1', category: 'Frentes' },
  { id: 'frente-2', src: '/gallery/frente2.jpg', alt: 'Frente de local 2', category: 'Frentes' },
  { id: 'frente-3', src: '/gallery/frente3.jpg', alt: 'Frente de local 3', category: 'Frentes' },
  { id: 'frente-4', src: '/gallery/frente4.jpg', alt: 'Frente de local 4', category: 'Frentes' },
  { id: 'frente-5', src: '/gallery/frente5.jpg', alt: 'Frente de local 5', category: 'Frentes' },
  { id: 'frente-6', src: '/gallery/frente6.jpg', alt: 'Frente de local 6', category: 'Frentes' },
  { id: 'frente-7', src: '/gallery/frente7.jpg', alt: 'Frente de local 7', category: 'Frentes' },
  { id: 'frente-8', src: '/gallery/frente8.jpg', alt: 'Frente de local 8', category: 'Frentes' },
  { id: 'frente-9', src: '/gallery/frente9.jpg', alt: 'Frente de local 9', category: 'Frentes' },
  { id: 'frente-10', src: '/gallery/frente10.jpg', alt: 'Frente de local 10', category: 'Frentes' },
  { id: 'frente-11', src: '/gallery/frente11.jpg', alt: 'Frente de local 11', category: 'Frentes' },
  { id: 'frente-12', src: '/gallery/frente12.jpg', alt: 'Frente de local 12', category: 'Frentes' },
  { id: 'frente-13', src: '/gallery/frente13.jpg', alt: 'Frente de local 13', category: 'Frentes' },
  { id: 'frente-14', src: '/gallery/frente14.jpg', alt: 'Frente de local 14', category: 'Frentes' },
  { id: 'frente-15', src: '/gallery/frente15.jpg', alt: 'Frente de local 15', category: 'Frentes' },
  { id: 'frente-16', src: '/gallery/frente16.jpg', alt: 'Frente de local 16', category: 'Frentes' },
  { id: 'frente-flores-1', src: '/gallery/frente-local-flores.jpg', alt: 'Frente de local, Flores', category: 'Frentes' },
  { id: 'frente-flores-2', src: '/gallery/frente-local-flores-2.jpg', alt: 'Frente de local, Flores', category: 'Frentes' },
  { id: 'frente-flores-3', src: '/gallery/frente-local-flores-3.jpg', alt: 'Frente de local, Flores', category: 'Frentes' },
  { id: 'frente-flores-4', src: '/gallery/frente-local-flores-4.jpg', alt: 'Frente de local, Flores', category: 'Frentes' },
  { id: 'frente-canning-1', src: '/gallery/frente-local-caninng.jpg', alt: 'Frente local, Canning', category: 'Frentes' }, // Respeta el error de tipeo de tu archivo
  { id: 'frente-canning-2', src: '/gallery/frente-local-canning-2.jpg', alt: 'Frente local, Canning', category: 'Frentes' },
  { id: 'frente-canning-3', src: '/gallery/frente-local-canning-3.jpg', alt: 'Frente local, Canning', category: 'Frentes' },
  { id: 'divisor-zambiazzo', src: '/gallery/divisor-oficinas-ferreteria-zambiazzo.jpg', alt: 'Divisor oficinas Ferretería Zambiazzo', category: 'Frentes' },

  // --- CATEGORÍA: BAÑOS ---
  { id: 'box-ducha', src: '/gallery/box-de-ducha-policarbonato-fume.jpg', alt: 'Box de ducha, policarbonato fumé', category: 'Baños' },
  { id: 'mampara-sicamore', src: '/gallery/mampara-de-baño-vidrio-sicamore.jpg', alt: 'Mampara de baño, vidrio sicamore', category: 'Baños' },
  { id: 'panos-fijos', src: '/gallery/paños-fijo-en-vidrio-laminado.jpg', alt: 'Paños fijos en vidrio laminado', category: 'Baños' },
  { id: 'mampara-gen', src: '/gallery/mampara.jpg', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'mampara3', src: '/gallery/mampara2.jpg', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'mampara4', src: '/gallery/mampara3.jpg', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'mampara5', src: '/gallery/mampara4.jpg', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'mampara6', src: '/gallery/mampara5.jpg', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'mampara7', src: '/gallery/mampara6.jpg', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'mampara8', src: '/gallery/mampara7.jpg', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'mampara9', src: '/gallery/mampara8.jpg', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'mampara10', src: '/gallery/mampara9.jpg', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'mampara11', src: '/gallery/mampara10.jpg', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'mampara12', src: '/gallery/mampara11.jpg', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'mampara13', src: '/gallery/mampara12.jpg', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'mampara14', src: '/gallery/mampara13.jpg', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'mampara15', src: '/gallery/mampara14.jpg', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'mampara16', src: '/gallery/mampara15.jpg', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'mampara17', src: '/gallery/mampara16.jpg', alt: 'Mampara a medida', category: 'Baños' },
  { id: 'mampara18', src: '/gallery/mampara17.jpg', alt: 'Mampara a medida', category: 'Baños' },
  

  // --- CATEGORÍA: OBRAS ---
  { id: 'baranda-talas-1', src: '/gallery/baranda-balcon-barrio-los-talas.jpg', alt: 'Baranda balcón, Barrio Los Talas', category: 'Obras' },
  { id: 'baranda-talas-2', src: '/gallery/baranda-balcon-barrio-los-talas-2.jpg', alt: 'Baranda balcón, Barrio Los Talas', category: 'Obras' },
  { id: 'baranda-talas-3', src: '/gallery/baranda-balcon-barrio-los-talas-3.jpg', alt: 'Baranda balcón, Barrio Los Talas', category: 'Obras' },
  { id: 'buffet-palermo-1', src: '/gallery/buffet-hipodromo-palermo.jpg', alt: 'Remodelación buffet, Hipódromo Palermo', category: 'Obras' },
  { id: 'buffet-palermo-2', src: '/gallery/buffet-hipodromo-palermo-2.jpg', alt: 'Remodelación buffet, Hipódromo Palermo', category: 'Obras' },
  { id: 'canning-duplex-1', src: '/gallery/canning-duplex.jpg', alt: 'Obra en Canning, Duplex', category: 'Obras' },
  { id: 'canning-duplex-2', src: '/gallery/Canning-duplex-2.jpg', alt: 'Obra en Canning, Duplex', category: 'Obras' }, // Respeta la C mayúscula
  { id: 'cap-sarmiento-1', src: '/gallery/capitan-sarmiento-1.jpg', alt: 'Vivienda unifamiliar, Capitán Sarmiento', category: 'Obras' },
  { id: 'cap-sarmiento-2', src: '/gallery/capitan-sarmiento-2.jpg', alt: 'Vivienda unifamiliar, Capitán Sarmiento', category: 'Obras' },
  { id: 'encuentro-modena', src: '/gallery/encuentro-en-esquina-linea-modena.jpg', alt: 'Encuentro en esquina, Línea Modena', category: 'Obras' },
  { id: 'gandulfo-1', src: '/gallery/hospital-gandulfo.jpg', alt: 'Remodelación aberturas, Hosp. Gandulfo', category: 'Obras' },
  { id: 'gandulfo-2', src: '/gallery/hospital-gandulfo-2.jpg', alt: 'Remodelación aberturas, Hosp. Gandulfo', category: 'Obras' },
  { id: 'bella-vista', src: '/gallery/obra-country-club-bella-vista.jpg', alt: 'Obra Country Club Bella Vista', category: 'Obras' },
  { id: 'pinamar-duplex', src: '/gallery/pinamar-duplex.jpg', alt: 'Obra en Pinamar, Duplex', category: 'Obras' },
  { id: 'pinamar-obra', src: '/gallery/pinamar-obra.jpg', alt: 'Obra en Pinamar, Vivienda Unifamiliar', category: 'Obras' },
  { id: 'platanos-techo-1', src: '/gallery/platanos-techo.jpg', alt: 'Techo con apertura, Plátanos', category: 'Obras' },
  { id: 'platanos-techo-2', src: '/gallery/platanos-techo-2.jpg', alt: 'Techo con apertura, Plátanos', category: 'Obras' },
  { id: 'puerta-doble', src: '/gallery/puerta-doble-linea-herrero-pesado.jpg', alt: 'Puerta doble, Línea Herrero', category: 'Obras' },
  { id: 'remodelacion-orione', src: '/gallery/remodelacion-barrio-don-orione.jpg', alt: 'Remodelación, Barrio Don Orione', category: 'Obras' },
  { id: 'abertura-1', src: '/gallery/abertura1.jpg', alt: 'Colocación de Aberturas', category: 'Obras' },
  { id: 'abertura-2', src: '/gallery/abertura2.jpg', alt: 'Colocación de Aberturas', category: 'Obras' },
  { id: 'obra-1', src: '/gallery/obras.jpg', alt: 'Obra 1', category: 'Obras' },
  { id: 'obra-2', src: '/gallery/obras2.jpg', alt: 'Obra 2', category: 'Obras' },
  { id: 'obra-3', src: '/gallery/obras3.jpg', alt: 'Obra 3', category: 'Obras' },
  { id: 'obra-4', src: '/gallery/obras4.jpg', alt: 'Obra 4', category: 'Obras' },
  { id: 'obra-5', src: '/gallery/obras5.jpg', alt: 'Obra 5', category: 'Obras' },
  { id: 'obra-6', src: '/gallery/obras6.jpg', alt: 'Obra 6', category: 'Obras' },
  { id: 'obra-7', src: '/gallery/obras7.jpg', alt: 'Obra 7', category: 'Obras' },
  { id: 'obra-8', src: '/gallery/obras8.jpg', alt: 'Obra 8', category: 'Obras' },
  { id: 'obra-9', src: '/gallery/obras9.jpg', alt: 'Obra 9', category: 'Obras' },
  { id: 'obra-10', src: '/gallery/obras10.jpg', alt: 'Obra 10', category: 'Obras' },
  { id: 'obra-11', src: '/gallery/obras11.jpg', alt: 'Obra 11', category: 'Obras' },
  { id: 'obra-12', src: '/gallery/obras12.jpg', alt: 'Obra 12', category: 'Obras' },
  { id: 'obra-13', src: '/gallery/obras13.jpg', alt: 'Obra 13', category: 'Obras' },
  { id: 'obra-14', src: '/gallery/obras14.jpg', alt: 'Obra 14', category: 'Obras' },
  { id: 'obra-15', src: '/gallery/obras15.jpg', alt: 'Obra 15', category: 'Obras' },
  
  // Fotos de Fabrica
  { id: 'taller-1', src: '/gallery/taller-fabrica.jpg', alt: 'Taller-Fabrica FAMAR', category: 'Obras' },
  { id: 'taller-2', src: '/gallery/taller-fabrica-2.jpg', alt: 'Taller-Fabrica FAMAR', category: 'Obras' },
  { id: 'taller-3', src: '/gallery/taller-fabrica-3.jpg', alt: 'Taller-Fabrica FAMAR', category: 'Obras' },
];