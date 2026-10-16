export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  image: string;
  size?: string;
  ingredients?: string[];
  directions?: string;
  benefits?: string[];
  comingSoon?: boolean;
}

export const products: Product[] = [
  {
    id: "lip-balm",
    name: "SKINOVA Lip Balm",
    shortDescription: "Everyday hydration for soft, protected lips.",
    description: "Our signature lip balm offers a refined, everyday solution to keep your lips hydrated and protected. Designed with simplicity in mind, it provides a smooth, non-greasy finish perfect for daily use.",
    category: "Lip Care",
    image: "/logo.jpg", // Using logo as a placeholder mockup for now
    comingSoon: true,
  },
  {
    id: "moisturiser",
    name: "SKINOVA Moisturiser",
    shortDescription: "A balanced daily moisturiser for a natural glow.",
    description: "Experience modern hydration with our balanced daily moisturiser. Thoughtfully formulated to absorb quickly while leaving your skin feeling soft, nourished, and ready for the day.",
    category: "Face Care",
    image: "/logo.jpg", // Using logo as a placeholder mockup for now
    comingSoon: true,
  }
];
