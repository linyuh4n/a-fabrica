export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description?: string;
  category?: "banner" | "facility" | "team" | "training";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "banner-1",
    src: "/images/banners/academia-banner.jpg",
    alt: "A Fábrica - Musculação e Artes Marciais - Identidade visual da academia",
    title: "Identidade Visual A Fábrica",
    description: "Logotipo, fotografias esportivas e slogan da academia",
    category: "banner",
  },
  {
    id: "banner-2",
    src: "/images/gallery/carlson-gracie.jpg",
    alt: "Equipe Carlson Gracie - Material promocional com identidade visual e planos de Jiu-Jitsu",
    title: "Equipe Carlson Gracie",
    description: "Material promocional da equipe Carlson Gracie apresentando identidade visual e planos de Jiu-Jitsu",
    category: "banner",
  },
];

export const heroImages = [
  {
    id: "hero-main",
    src: "/images/banners/academia-banner.jpg",
    alt: "A Fábrica - Academia de musculação e Jiu-Jitsu em Uvaranas",
  },
];

export function getGalleryImages(): GalleryImage[] {
  return galleryImages.filter(img => img.src && img.src.trim() !== "");
}

export function hasGalleryImages(): boolean {
  return getGalleryImages().length > 0;
}
