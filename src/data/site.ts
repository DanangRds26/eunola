export const siteConfig = {
  name: "Eunola",
  tagline: "Undangan digital modern & elegan",
  description:
    "Eunola adalah platform undangan digital pernikahan & acara online dengan banyak template modern, RSVP real-time, galeri foto & video, serta fitur pemberian kado cashless dan wishlist kado. Undangan mudah dibuat, interaktif, dan siap dibagikan kapan saja.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** GANTI DI SINI: nomor WhatsApp admin (format internasional tanpa +) */
  whatsapp: "6281234567890",
};

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tema", href: "/tema" },
  { label: "Fitur", href: "/#fitur" },
  { label: "Tentang", href: "/#tentang" },
  { label: "Kontak", href: "/contact" },
];

export const footerLinks = {
  produk: [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/tema" },
    { label: "About", href: "/#tentang" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  help: [
    { label: "Payment Options", href: "/checkout" },
    { label: "Returns", href: "/contact" },
    { label: "Privacy Policies", href: "/contact" },
  ],
};

export const contactInfo = {
  address: "Jl. Melati No. 12, Kebayoran Baru, Jakarta Selatan 12110, Indonesia",
  mobile: "+62 812-3456-7890",
  hotline: "+62 21 5555 0199",
  hours: ["Senin–Jumat: 09.00 – 22.00", "Sabtu–Minggu: 09.00 – 21.00"],
};

export const countries = [
  "Indonesia",
  "Malaysia",
  "Singapura",
  "Brunei Darussalam",
  "Thailand",
  "Filipina",
  "Australia",
  "Lainnya",
];

export const provinces = [
  "Aceh", "Sumatera Utara", "Sumatera Barat", "Riau", "Kepulauan Riau", "Jambi",
  "Sumatera Selatan", "Kepulauan Bangka Belitung", "Bengkulu", "Lampung",
  "DKI Jakarta", "Banten", "Jawa Barat", "Jawa Tengah", "DI Yogyakarta", "Jawa Timur",
  "Bali", "Nusa Tenggara Barat", "Nusa Tenggara Timur",
  "Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur", "Kalimantan Utara",
  "Sulawesi Utara", "Gorontalo", "Sulawesi Tengah", "Sulawesi Barat", "Sulawesi Selatan", "Sulawesi Tenggara",
  "Maluku", "Maluku Utara", "Papua", "Papua Barat", "Papua Barat Daya", "Papua Selatan", "Papua Tengah", "Papua Pegunungan",
];
