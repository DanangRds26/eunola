import type { Post, PostCategory } from "@/types";
import { PHOTO } from "./images";

const w = PHOTO.workspace;

const sharedBody = [
  "Undangan digital kini menjadi pilihan utama banyak pasangan karena praktis, hemat biaya, dan bisa dibagikan ke ratusan tamu hanya dalam hitungan menit. Namun tampilan yang menarik tetap menjadi kunci agar undangan terasa personal.",
  "Mulailah dari tema besar: tentukan suasana yang ingin dibangun, lalu pilih palet warna dan tipografi yang konsisten. Gunakan foto berkualitas tinggi dan sisakan ruang kosong agar informasi penting seperti tanggal dan lokasi mudah ditemukan.",
  "Terakhir, jangan lupakan detail kecil: musik latar yang lembut, hitung mundur, dan tombol RSVP yang jelas. Detail seperti inilah yang membuat tamu merasa dilibatkan sejak pertama kali membuka undangan.",
];

/** GANTI DI SINI: artikel blog. `body` boleh diisi paragraf sendiri. */
export const posts: Post[] = [
  {
    slug: "desain-undangan-digital-ala-milenial",
    title: "Desain undangan digital ala milenial",
    excerpt:
      "Warna hangat, tipografi tegas, dan animasi tipis kini menjadi ciri undangan digital masa kini. Simak cara memadukannya tanpa membuat halaman terasa ramai dan berat.",
    category: "Design",
    author: "Admin",
    date: "2026-09-14",
    image: w[0],
    body: sharedBody,
  },
  {
    slug: "cara-baru-mendekorasi-hari-bahagia",
    title: "Cara baru mendekorasi hari bahagiamu",
    excerpt:
      "Dekorasi tidak harus mahal. Dari pilihan bunga sampai pencahayaan, berikut ide menata ruang acara agar serasi dengan tema undangan digital yang Anda pilih.",
    category: "Interior",
    author: "Admin",
    date: "2026-09-09",
    image: w[1],
    body: sharedBody,
  },
  {
    slug: "sentuhan-handmade-pada-undangan-digital",
    title: "Sentuhan handmade pada undangan digital",
    excerpt:
      "Ilustrasi tangan dan tulisan tangan memberi kesan personal yang sulit ditiru template biasa. Kami rangkum cara menyisipkannya ke dalam desain digital.",
    category: "Handmade",
    author: "Admin",
    date: "2026-09-03",
    image: w[4],
    body: sharedBody,
  },
  {
    slug: "inspirasi-tema-rustic-dengan-elemen-kayu",
    title: "Inspirasi tema rustic dengan elemen kayu",
    excerpt:
      "Tekstur kayu dan warna tanah selalu berhasil menghadirkan suasana hangat. Pelajari cara menggabungkan elemen rustic pada undangan tanpa kehilangan kesan rapi.",
    category: "Wood",
    author: "Admin",
    date: "2026-08-27",
    image: w[2],
    body: sharedBody,
  },
  {
    slug: "memadukan-warna-emas-dan-hijau",
    title: "Memadukan warna emas dan hijau yang elegan",
    excerpt:
      "Emas memberi kesan mewah, hijau tua memberi ketenangan. Kombinasi keduanya menjadi identitas banyak brand elegan, dan cocok untuk undangan pernikahan.",
    category: "Design",
    author: "Admin",
    date: "2026-08-20",
    image: w[3],
    body: sharedBody,
  },
  {
    slug: "kerajinan-tangan-untuk-souvenir-pernikahan",
    title: "Kerajinan tangan untuk souvenir pernikahan",
    excerpt:
      "Souvenir buatan tangan meninggalkan kesan yang lebih lama bagi tamu. Berikut beberapa ide sederhana yang bisa dikerjakan sendiri bersama keluarga.",
    category: "Crafts",
    author: "Admin",
    date: "2026-08-12",
    image: w[5],
    body: sharedBody,
  },
];

export const postCategories: PostCategory[] = ["Crafts", "Design", "Handmade", "Interior", "Wood"];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const recentPosts = (limit = 5) =>
  [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);

export const categoryCount = (c: PostCategory) => posts.filter((p) => p.category === c).length;
