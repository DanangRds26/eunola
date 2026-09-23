# Eunola — Platform Undangan Digital

Website marketplace/SaaS untuk menjual template undangan digital, dibangun dengan
**Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## Menjalankan Proyek

Butuh Node.js 18.18 atau lebih baru.

```bash
npm install
npm run dev
```

Buka http://localhost:3000 di browser.

Untuk build production:

```bash
npm run build
npm start
```

## Struktur Folder

```
src/
  app/                  → Routing (App Router)
    page.tsx            → Beranda (/)
    tema/page.tsx        → Katalog tema (/tema)
    tema/[slug]/page.tsx → Detail tema (/tema/monochrome, dst.)    checkout/page.tsx    → Checkout (/checkout?tema=slug&qty=1)
    contact/page.tsx     → Kontak (/contact)
    blog/page.tsx         → Daftar artikel (/blog)
    blog/[slug]/page.tsx  → Detail artikel (/blog/judul-artikel)
    layout.tsx            → Layout global: Navbar + TrustBadges + Footer, font, metadata
    globals.css           → Tailwind base + kelas util (.btn-gold, .input, dll.)

  components/
    layout/     → Navbar, Footer, SearchModal, TrustBadges
    home/       → Hero, ThemeCarousel, TemplateShowcase, HashtagGallery (khusus Beranda)
    tema/       → FilterToolbar, ProductGallery, ProductOptions, ProductTabs, RelatedProducts
    checkout/   → OrderSummary
    blog/       → PostCard, Sidebar (interaktif), SidebarStatic (untuk halaman detail)
    product/    → ProductCard (dipakai di banyak halaman)
    ui/         → Komponen dasar: Breadcrumb, PageBanner, Pagination, Rating, Field, SafeImage, BrandMark

  data/         → SEMUA KONTEN ADA DI SINI (lihat komentar "GANTI DI SINI")
    site.ts       → Nama brand, nav menu, link footer, info kontak, daftar negara/provinsi
    products.ts   → 12 template undangan (nama, harga, deskripsi, kategori, galeri)
    posts.ts      → 6 artikel blog
    images.ts     → ID foto Unsplash placeholder (diambil lewat helper img())

  lib/utils.ts    → Helper: format Rupiah, format tanggal, validasi email/telepon, class merge
  types/index.ts  → Tipe TypeScript: Product, Post, kategori, dll.

public/brand/     → Aset logo (logo-horizontal, logo-stacked, monogram, seal, app-icon)
```

## Sistem Tema Undangan Langsung (Live Preview)

Selain kartu produk generik, sebagian tema (ditandai `hasLivePreview: true` di
`src/data/products.ts`) punya halaman demo undangan yang benar-benar hidup dan
bisa dicoba di `/tema/[slug]/preview` — lengkap dengan animasi scroll, hitung
mundur real-time, RSVP tersimpan di localStorage, dsb. Halaman ini sengaja
berada di luar layout toko (grup route `(full)`) supaya tampil full-screen
tanpa navbar/footer Eunola, sama seperti undangan yang akan diterima tamu.

```
src/app/
  (shop)/            → semua halaman toko, pakai layout Navbar+Footer
  (full)/
    tema/[slug]/preview/page.tsx  → undangan full-screen, layout polos

src/themes/
  types.ts                        → definisi ThemeConfig (warna, font, data pasangan)
  registry.ts                     → daftar tema yang punya live preview
  adat-jawa-coklat/config.ts      → contoh: tema "Adat Jawa Coklat" (Ruby & Jaden)

src/components/invitation/
  WeddingInvitation.tsx           → orkestrator: loading screen, cover, semua section
  Reveal.tsx                      → animasi scroll-reveal (pengganti AOS, tanpa dependency)
  FloatingButtons.tsx             → tombol musik, WhatsApp, menu navigasi
  sections/                       → 10 section: Cover, Quote, Couple, Countdown,
                                     EventDetails, LiveMoment, LoveStory, Gift,
                                     Rsvp, ClosingPrayer, Closing
```

### Membuat tema undangan baru

1. Duplikat folder `src/themes/adat-jawa-coklat/` → `src/themes/nama-tema-baru/`,
   lalu ubah warna (`colors`), font (`fonts`), dan seluruh data pasangan
   (`couple`) di `config.ts`-nya. Cukup satu file ini yang perlu diubah — semua
   section otomatis mengikuti warna & font baru karena dibaca dari `config`,
   bukan ditulis manual di tiap komponen.
2. Import config baru itu dan tambahkan ke `themeRegistry` di
   `src/themes/registry.ts`, dengan key sama seperti `slug` produknya.
3. Tambahkan produk baru di `src/data/products.ts` dengan `slug` yang sama dan
   `hasLivePreview: true`.
4. Selesai — kartu produk, halaman detail (tombol "Lihat Demo Undangan
   Langsung"), dan halaman `/tema/slug-anda/preview` otomatis muncul.

Catatan: musik latar (`musicSrc` di config) masih kosong secara default agar
proyek tidak membawa file audio berukuran besar — taruh file musik di
`public/music/nama-file.mp3` lalu isi `musicSrc: "/music/nama-file.mp3"`.

## Mengganti Konten

Hampir semua teks & data ada di folder `src/data/`, ditandai komentar `GANTI DI SINI`:

- **Tambah/ubah tema undangan** → edit array `products` di `src/data/products.ts`.
  Halaman katalog, detail, related products, dan search akan otomatis mengikuti.
- **Tambah/ubah artikel blog** → edit array `posts` di `src/data/posts.ts`.
- **Ganti foto** → semua foto masih placeholder dari Unsplash (lihat `src/data/images.ts`).
  Jika sebuah foto gagal dimuat, komponen `<SafeImage>` otomatis memakai gambar cadangan
  dari Picsum, jadi halaman tidak akan pernah rusak. Untuk memakai foto asli, taruh file di
  `public/images/` lalu ubah pemanggilan `img(...)` menjadi path lokal, atau langsung isi
  field `images` di `products.ts` / `posts.ts` dengan path tersebut.
- **Ganti nomor WhatsApp, alamat, jam kerja** → `src/data/site.ts`.
- **Ganti logo** → timpa file di `public/brand/` (nama file tetap sama), atau ubah path di
  `Navbar.tsx` / `Footer.tsx` jika ingin nama file berbeda.
- **Ganti warna** → semua warna brand ada sebagai token Tailwind di `tailwind.config.ts`
  (`gold`, `pine`, `maroon`, `cream`, dll.), jadi cukup ubah nilai hex di satu tempat.

## Fitur yang Sudah Berfungsi

- Navbar sticky + shadow saat scroll, menu mobile, modal pencarian (cari tema & artikel)
- Katalog Tema: filter kategori, urutkan harga/nama, ubah jumlah per halaman, toggle
  tampilan grid/list, pagination — semua reaktif tanpa reload halaman
- Detail tema: galeri thumbnail, pilih ukuran/warna/jumlah, tab Description/Additional
  Information/Reviews, related products berdasarkan kategori yang sama
- Checkout: form billing dengan validasi (nama, alamat, email, telepon), ringkasan
  pesanan otomatis dari tema yang dipilih (lewat query `?tema=slug&qty=n`), pilihan metode
  pembayaran, simulasi "Place order"
- Contact: form dengan validasi + status terkirim
- Blog: pencarian judul/isi, filter kategori, pagination, sidebar recent posts

## Yang Perlu Anda Sambungkan Sendiri (belum ada backend)

Proyek ini murni frontend dengan data statis di `src/data/`. Titik-titik berikut sudah
diberi komentar `GANTI DI SINI` dan siap disambungkan ke API/layanan sungguhan:

- `Footer.tsx` → submit newsletter (mis. Mailchimp/Sendinblue)
- `contact/page.tsx` → kirim form kontak (mis. Resend, API route sendiri)
- `checkout/page.tsx` → proses pesanan & pembayaran (mis. Midtrans, Xendit)

## Deployment

Proyek ini siap di-deploy ke **Vercel** (paling mudah, tinggal hubungkan repo Git) atau
platform Next.js lain seperti Netlify. Set environment variable `NEXT_PUBLIC_SITE_URL`
sesuai domain production Anda (lihat `.env.example`).
