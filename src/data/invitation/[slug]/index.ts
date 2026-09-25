// PERBAIKAN: Hapus './[slug]/' dari path import
import { andiSalsaData } from "./andi-salsa";
import { danangGustutyData } from "./danang-gustuty";

// Mapping semua data pesanan berdasarkan slug
export const invitationsData: Record<string, any> = {
  "andi-salsa": andiSalsaData,
  "danang-gustuty": danangGustutyData,
};

export function getInvitationData(slug: string) {
  return invitationsData[slug] || null;
}