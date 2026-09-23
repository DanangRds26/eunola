import type { Product, ProductCategory, Review } from "@/types";
import { PHOTO } from "./images";

/** Ambil 4 foto berurutan mulai dari indeks tertentu supaya tiap tema punya galeri berbeda */
const gallery = (start: number) => {
  const pool = [...PHOTO.interiors, ...PHOTO.weddings];
  return Array.from({ length: 4 }, (_, i) => pool[(start + i) % pool.length]);
};

/**
 * GANTI DI SINI: data template undangan.
 * Tambah objek baru di array ini — halaman katalog, detail, dan related products otomatis ikut.
 */
export const products: Product[] = [
  {
    slug: "monochrome",
    name: "Monochrome",
    subtitle: "Hitam Putih",
    price: 75000,
    oldPrice: 125000,
    category: "Pernikahan",
    tags: ["Pernikahan", "Minimalis", "Hitam Putih"],
    sku: "EU-001",
    rating: 4.5,
    reviewCount: 5,
    description:
      "Tema monokrom adalah konsep visual yang menggunakan satu warna dasar (hue) beserta berbagai gradasi turunannya, seperti tingkat kecerahan (tint) dan kegelapan (shade). Meskipun sering dikaitkan dengan kombinasi hitam dan putih, monokrom sebenarnya bisa menggunakan warna apa saja.",
    images: gallery(0),
  },
  {
    slug: "elegan",
    name: "Elegan",
    subtitle: "Elegan dan Mewah",
    price: 75000,
    category: "Pernikahan",
    tags: ["Pernikahan", "Mewah", "Klasik"],
    sku: "EU-002",
    rating: 5,
    reviewCount: 8,
    description:
      "Tema Elegan memadukan tipografi klasik, ornamen emas tipis, dan ruang kosong yang lega untuk kesan mewah yang tetap hangat. Cocok untuk pasangan yang menginginkan undangan berkelas tanpa terasa berlebihan.",
    images: gallery(1),
  },
  {
    slug: "love-flower",
    name: "Love Flower",
    subtitle: "Keindahan Bunga Sakura",
    price: 75000,
    oldPrice: 140000,
    category: "Pernikahan",
    tags: ["Pernikahan", "Floral", "Romantis"],
    sku: "EU-003",
    rating: 4.5,
    reviewCount: 12,
    description:
      "Kelopak sakura dan ilustrasi bunga yang lembut menghiasi setiap bagian undangan. Palet pastel yang manis membuat Love Flower terasa romantis dan segar, terutama untuk pernikahan bertema taman.",
    images: gallery(2),
  },
  {
    slug: "nature",
    name: "Nature",
    subtitle: "Ketenangan Alam",
    price: 150000,
    category: "Pernikahan",
    tags: ["Pernikahan", "Alam", "Outdoor"],
    sku: "EU-004",
    rating: 5,
    reviewCount: 9,
    description:
      "Nuansa hijau daun, tekstur kayu, dan foto lanskap membawa ketenangan alam ke dalam undangan Anda. Pilihan tepat untuk pernikahan outdoor, garden party, atau acara syukuran di alam terbuka.",
    images: gallery(3),
  },
  {
    slug: "leviosa",
    name: "Leviosa",
    subtitle: "Hitam Putih",
    price: 75000,
    category: "Pernikahan",
    tags: ["Pernikahan", "Modern", "Hitam Putih"],
    sku: "EU-005",
    rating: 4,
    reviewCount: 4,
    description:
      "Leviosa memakai animasi mengambang yang halus pada foto dan teks, dengan komposisi hitam putih yang tegas. Tampilannya modern dan bersih, nyaman dibaca di layar ponsel.",
    images: gallery(4),
  },
  {
    slug: "lolito",
    name: "Lolito",
    subtitle: "Manis dan Ceria",
    price: 95000,
    oldPrice: 150000,
    category: "Ulang Tahun",
    tags: ["Ulang Tahun", "Ceria", "Anak"],
    sku: "EU-006",
    rating: 4.5,
    reviewCount: 6,
    description:
      "Warna cerah, balon animasi, dan hitung mundur yang seru menjadikan Lolito favorit untuk ulang tahun anak. Tamu bisa langsung konfirmasi hadir dan mengirim ucapan.",
    images: gallery(5),
  },
  {
    slug: "respira",
    name: "Respira",
    subtitle: "Tenang dan Sederhana",
    price: 120000,
    category: "Khitanan",
    tags: ["Khitanan", "Islami", "Sederhana"],
    sku: "EU-007",
    rating: 4.5,
    reviewCount: 3,
    description:
      "Respira dirancang untuk acara khitanan dan syukuran keluarga dengan nuansa hijau lembut dan kaligrafi sederhana. Ringkas, hangat, dan mudah dibagikan lewat WhatsApp.",
    images: gallery(6),
  },
  {
    slug: "minimalist",
    name: "Minimalist",
    subtitle: "Bersih dan Ringkas",
    price: 65000,
    oldPrice: 99000,
    category: "Pernikahan",
    tags: ["Pernikahan", "Minimalis", "Hemat"],
    sku: "EU-008",
    rating: 4,
    reviewCount: 7,
    description:
      "Tata letak satu kolom, tipografi tegas, dan hanya satu aksen warna. Minimalist memuat cepat di koneksi lambat dan cocok bagi pasangan yang ingin undangan tampil sederhana namun rapi.",
    images: gallery(7),
  },
  {
    slug: "rustic",
    name: "Rustic",
    subtitle: "Hangat ala Kayu",
    price: 85000,
    category: "Pernikahan",
    tags: ["Pernikahan", "Rustic", "Kayu"],
    sku: "EU-009",
    rating: 4.5,
    reviewCount: 5,
    description:
      "Tekstur kayu, tulisan tangan, dan warna tanah memberi kesan hangat seperti pesta di kebun. Rustic cocok untuk pernikahan intim dengan konsep sederhana dan personal.",
    images: gallery(8),
  },
  {
    slug: "floral",
    name: "Floral",
    subtitle: "Bunga Warna-warni",
    price: 95000,
    oldPrice: 150000,
    category: "Ulang Tahun",
    tags: ["Ulang Tahun", "Floral", "Cantik"],
    sku: "EU-010",
    rating: 5,
    reviewCount: 10,
    description:
      "Ilustrasi bunga watercolor yang tumbuh perlahan saat undangan digulir. Floral pas untuk ulang tahun, tunangan, atau acara arisan dengan suasana ceria.",
    images: gallery(9),
  },
  {
    slug: "royal",
    name: "Royal",
    subtitle: "Emas dan Megah",
    price: 199000,
    oldPrice: 299000,
    category: "Pernikahan",
    tags: ["Pernikahan", "Mewah", "Emas"],
    sku: "EU-011",
    rating: 5,
    reviewCount: 14,
    description:
      "Royal adalah tema premium dengan bingkai emas, animasi pembuka amplop, dan galeri layar penuh. Dilengkapi musik latar dan hitung mundur untuk pengalaman undangan yang berkesan.",
    images: gallery(10),
  },
  {
    slug: "modern",
    name: "Modern",
    subtitle: "Tegas dan Segar",
    price: 110000,
    category: "Wisuda",
    tags: ["Wisuda", "Modern", "Profesional"],
    sku: "EU-012",
    rating: 4.5,
    reviewCount: 4,
    description:
      "Modern memakai tipografi geometris dan blok warna berani, ideal untuk undangan wisuda, syukuran kelulusan, atau acara komunitas. Foto profil dan galeri momen ditampilkan besar dan jelas.",
    images: gallery(11),
  },
  {
    slug: "adat-jawa-coklat",
    name: "Adat Jawa Coklat",
    subtitle: "Elegan & Tradisional",
    price: 175000,
    oldPrice: 250000,
    category: "Pernikahan",
    tags: ["Pernikahan", "Adat Jawa", "Tradisional", "Islami"],
    sku: "EU-013",
    rating: 5,
    reviewCount: 11,
    description:
      "Nuansa coklat hangat khas adat Jawa dipadukan dengan ornamen batik halus, tipografi klasik, dan animasi scroll yang lembut. Lengkap dengan hitung mundur, love story bertimeline, amplop digital, serta RSVP dan buku ucapan — cocok untuk pernikahan bernuansa tradisional yang tetap terasa modern.",
    images: gallery(12),
    hasLivePreview: true,
  },
];

export const categories: ProductCategory[] = ["Pernikahan", "Khitanan", "Ulang Tahun", "Wisuda"];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const getRelated = (slug: string, limit = 4) => {
  const current = getProduct(slug);
  const others = products.filter((p) => p.slug !== slug);
  // Prioritaskan kategori yang sama, lalu lengkapi dengan lainnya
  const same = others.filter((p) => p.category === current?.category);
  const rest = others.filter((p) => p.category !== current?.category);
  return [...same, ...rest].slice(0, limit);
};

/** Fitur umum yang tampil di semua detail tema */
export const commonFeatures =
  "Setiap tema sudah termasuk musik latar, hitung mundur real-time, galeri foto, RSVP dan buku ucapan, tombol lokasi Google Maps, serta fitur amplop digital. Link undangan aktif selama 12 bulan dan bisa dibagikan langsung lewat WhatsApp.";

export const additionalInfo: Array<[string, string]> = [
  ["Format", "Website undangan (link)"],
  ["Masa aktif", "12 bulan"],
  ["Estimasi pengerjaan", "1 × 24 jam"],
  ["Fitur", "RSVP, galeri, musik, countdown, amplop digital"],
  ["Responsif", "Ya, semua ukuran layar"],
  ["Revisi", "Maksimal 2 kali"],
];

export const reviews: Review[] = [
  { name: "Nadia & Rafi", rating: 5, date: "2026-08-21", text: "Prosesnya cepat, tim sangat responsif. Tamu kami memuji tampilannya yang rapi di HP." },
  { name: "Sinta Maharani", rating: 5, date: "2026-08-02", text: "Fitur RSVP-nya membantu sekali, kami tidak perlu lagi mendata kehadiran satu per satu." },
  { name: "Bagas Pratama", rating: 4, date: "2026-07-18", text: "Desain bagus dan animasinya halus. Semoga ke depan ada pilihan musik lebih banyak." },
  { name: "Ayu Lestari", rating: 5, date: "2026-07-05", text: "Harganya sepadan. Revisi nama dan foto dikerjakan di hari yang sama." },
  { name: "Dimas & Putri", rating: 4, date: "2026-06-27", text: "Undangan mudah dibagikan lewat WhatsApp dan tampil bagus di berbagai ukuran layar." },
];
