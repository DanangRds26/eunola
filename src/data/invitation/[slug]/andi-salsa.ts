import type { InvitationThemeConfig } from "@/themes/types";
import { monochromeConfig } from "@/themes/monochrome/config";

export const andiSalsaData: InvitationThemeConfig = {
  ...monochromeConfig,
  id: "andi-salsa",
  name: "Andi & Salsa Wedding",

  couple: {
    ...monochromeConfig.couple,

    // Ganti Data Pengantin
    brideName: "Salsa Indriyani",
    brideNickname: "Salsa",
    brideParents: "Putri dari Bapak ... & Ibu ...",

    groomName: "Andi Prasetyo",
    groomNickname: "Andi",
    groomParents: "Putra dari Bapak ... & Ibu ...",

    // Tanggal Acara
    eventDateTime: "2026-05-20T08:00:00+07:00",
    eventDateLabel: "Rabu, 20 Mei 2026",

    akadTime: "08.00 – 10.00 WIB",
    resepsiTime: "11.00 – 15.00 WIB",

    venueName: "Gedung / Rumah",
    venueAddress: "Alamat Lengkap Acara",
    mapsUrl: "https://maps.google.com/?q=...",

    // Rekening & Kontak
    bankAccounts: [
      {
        bank: "BCA",
        number: "1234567890",
        holder: "Danang Rahmaddiansyah",
      },
    ],
    whatsappNumber: "628xxxxxxxxxx",
  },
};