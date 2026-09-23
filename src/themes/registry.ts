import type { InvitationThemeConfig } from "./types";
import { adatJawaCoklatConfig } from "./adat-jawa-coklat/config";

/**
 * GANTI DI SINI: daftarkan tema baru di sini agar otomatis punya halaman
 * demo di /tema/[slug]/preview. Key harus sama dengan `slug` produk di
 * src/data/products.ts.
 */
export const themeRegistry: Record<string, InvitationThemeConfig> = {
  "adat-jawa-coklat": adatJawaCoklatConfig,
};

export const getThemeConfig = (slug: string) => themeRegistry[slug];
