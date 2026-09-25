// PERBAIKAN: Hapus './[slug]/' dari path import
import { andiSalsaData } from "./andi-salsa";
import { danangGustutyData } from "./danang-gustuty";
import { daniSantiData } from "./dani-santi";
import { InvitationThemeConfig } from "@/themes/types";

// Mapping semua data pesanan berdasarkan slug
export const invitationsRegistry: Record<string, InvitationThemeConfig> = {
  "andi-salsa": andiSalsaData,
  "danang-gustuty": danangGustutyData,
  "dani-santi": daniSantiData,
};

export function getInvitationData(slug: string) {
  return invitationsRegistry[slug] || null;
}