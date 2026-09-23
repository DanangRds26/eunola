export type ProductCategory = "Pernikahan" | "Khitanan" | "Ulang Tahun" | "Wisuda";

export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  category: ProductCategory;
  tags: string[];
  sku: string;
  rating: number;
  reviewCount: number;
  /** Paragraf deskripsi khas tema ini */
  description: string;
  /** ID foto Unsplash — gambar pertama = gambar utama */
  images: string[];
  /** true jika tema punya halaman demo undangan sungguhan di /tema/[slug]/preview */
  hasLivePreview?: boolean;
}

export interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
}

export type PostCategory = "Crafts" | "Design" | "Handmade" | "Interior" | "Wood";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  author: string;
  date: string; // YYYY-MM-DD
  image: string; // ID foto Unsplash
  body: string[];
}
