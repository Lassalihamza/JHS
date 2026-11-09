/**
 * Central asset registry for Joumana Hair Style
 */

export interface GalleryAsset {
  id: string;
  category: 'balayage' | 'coloration' | 'soins' | 'coiffure' | 'mariee';
  src: string;
  vignetteType: 'hair-waves' | 'balayage' | 'soin' | 'color' | 'bridal-glam';
}

export const assets = {
  // Authentic Rose Gold / Copper Floral Brand Logos
  logo: '/assets/aistudio/Rose-Gold_Floral_JHS_Hair_Logo_231fbc4a.png',
  logoTransparent: '/assets/aistudio/Rose-Gold_Floral_JHS_Hair_Logo_231fbc4a.png',
  logoMonogram: '/assets/aistudio/Rose-Gold_JHS_Floral_Emblem_9e68088b.png',

  // Hero & Visual Highlights
  heroMedia: '/assets/hero-bg.mp4',
  heroVideo: '/assets/hero-bg.mp4',
  heroBackdrop: '/assets/balayage-waves.jpg',
  heroArch: '/assets/balayage-waves.jpg',

  // Hair Artistry Photography
  balayageWaves: '/assets/balayage-waves.jpg',
  hairBalayage: '/assets/hair-balayage.jpg',
  balayageHairHero: '/assets/hair-balayage.jpg',
  perfumeTray: '/assets/perfume-tray.jpg',
  copperPedicure: '/assets/copper-pedicure.jpg',
  hydrafacialSkin: '/assets/hammam-marble.jpg',
};

export const ASSETS = {
  ...assets,
  gallery: [
    {
      id: 'gallery-balayage-sunlight',
      category: 'balayage',
      src: '/assets/balayage-waves.jpg',
      vignetteType: 'hair-waves',
    },
    {
      id: 'gallery-hair-styling',
      category: 'coiffure',
      src: '/assets/hair-balayage.jpg',
      vignetteType: 'hair-waves',
    },
    {
      id: 'gallery-burgundy-glow',
      category: 'coloration',
      src: '/assets/balayage-waves.jpg',
      vignetteType: 'color',
    },
    {
      id: 'gallery-hair-care-ritual',
      category: 'soins',
      src: '/assets/perfume-tray.jpg',
      vignetteType: 'soin',
    },
    {
      id: 'gallery-dimensional-blonde',
      category: 'balayage',
      src: '/assets/hair-balayage.jpg',
      vignetteType: 'balayage',
    },
    {
      id: 'gallery-bridal-coiffure',
      category: 'mariee',
      src: '/assets/balayage-waves.jpg',
      vignetteType: 'bridal-glam',
    },
  ] as GalleryAsset[],
};
