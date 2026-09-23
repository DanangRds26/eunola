import type { Config } from "tailwindcss";

/**
 * Palet warna diambil langsung dari desain Eunola (Figma export).
 * Ubah di sini untuk mengganti warna di seluruh website.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#B88E2F", // tombol utama
          dark: "#9C7824",
          soft: "#CCAC4A", // heading hero, footer heading
          light: "#E8D9B0",
        },
        pine: {
          DEFAULT: "#0F766E", // toolbar, breadcrumb bar, section hijau
          dark: "#0B5F58",
        },
        maroon: {
          DEFAULT: "#C0322D", // footer
          dark: "#A32824",
        },
        cream: {
          DEFAULT: "#F9F1E7", // background alt
          deep: "#F1E6D6",
        },
        sun: "#FFC700", // link footer
        ink: "#2C2C2C",
        olive: "#3B3A2E", // heading "Tema Kami"
        muted: "#8B8B8B",
        surface: "#F4F5F7", // body card produk
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        garamond: ["var(--font-garamond)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 4px 18px rgba(44, 44, 44, 0.07)",
        nav: "0 4px 20px rgba(44, 44, 44, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
