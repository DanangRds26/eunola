import type { InvitationThemeConfig } from "@/themes/types";
import { monochromeConfig } from "@/themes/monochrome/config";

export const danangGustutyData: InvitationThemeConfig = {
  ...monochromeConfig,
  id: "danang-gustuty",
  name: "Danang & Gustuty Wedding",

  couple: {
    ...monochromeConfig.couple,

    // Ganti Data Pengantin
    brideName: "Gustuty Indriyani",
    brideNickname: "Gustuty",
    brideParents: "Putri dari Bapak ... & Ibu ...",

    groomName: "Danang Rahmaddiansyah",
    groomNickname: "Danang",
    groomParents: "Putra dari Bapak ... & Ibu ...",

    loveStory: [
      {
        title: "Awal Pertemuan",
        date: "2020",
        text: "Tak ada yang kebetulan di dunia ini — pertemuan pertama kami terjadi di acara kampus yang sederhana, namun meninggalkan kesan yang tak terlupakan.",
      },

      {
        title: "Menjalin Hubungan",
        date: "2022",
        text: "Seiring berjalannya waktu, berawal dari sering nongkrong bareng. Kami memahami satu sama lain, saling mendukung, dan tumbuh menjadi pasangan yang kuat.",
      },

      {
        title: "Lamaran",
        date: "2025",
        text: "Dengan niat dan restu orang tua kedua belah pihak, kami memantapkan langkah menuju jenjang yang lebih serius.",
      },

      {
        title: "Hari Pernikahan",
        date: "2026",
        text: "Dan hari yang dinantikan pun tiba — kami resmi menjadi satu, di hadapan keluarga dan orang-orang tercinta.",
      },
    ],

    // Tanggal Acara
    eventDateTime: "2027-05-20T08:00:00+07:00",
    eventDateLabel: "Rabu, 20 Mei 2027",

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

    heroPhoto: "/foto/hero.jpg",

    bridePhoto: "/foto/bride-indri.jpg",

    groomPhoto: "/foto/groom-danang.jpg"
  },
};