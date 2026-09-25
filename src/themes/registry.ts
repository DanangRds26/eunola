import type { InvitationThemeConfig } from "./types";
import { adatJawaCoklatConfig } from "./adat-jawa-coklat/config";
import { monochromeConfig } from "./monochrome/config";
import { eleganConfig } from "./elegan/config";
import { loveFlowerConfig } from "./love-flower/config";
import { natureConfig } from "./nature/config";
import { leviosaConfig } from "./leviosa/config";
import { lolitoConfig } from "./lolito/config";
import { respiraConfig } from "./respira/config";
import { minimalistConfig } from "./minimalist/config";
import { rusticConfig } from "./rustic/config";
import { floralConfig } from "./floral/config";
import { royalConfig } from "./royal/config";
import { modernConfig } from "./modern/config";



/**
 * GANTI DI SINI: daftarkan tema baru di sini agar otomatis punya halaman
 * demo di /tema/[slug]/preview. Key harus sama dengan `slug` produk di
 * src/data/products.ts.
 */
export const themeRegistry: Record<string, InvitationThemeConfig> = {
  "adat-jawa-coklat": adatJawaCoklatConfig,
  "monochrome": monochromeConfig,
  "elegan": eleganConfig,
  "love-flower": loveFlowerConfig,
  "nature": natureConfig,
  "leviosa": leviosaConfig,
  "lolito": lolitoConfig,
  "respira": respiraConfig,
  "minimalist": minimalistConfig,
  "rustic": rusticConfig,
  "floral": floralConfig,
  "royal": royalConfig,
  "modern": modernConfig,
};

export const getThemeConfig = (slug: string) => themeRegistry[slug];
