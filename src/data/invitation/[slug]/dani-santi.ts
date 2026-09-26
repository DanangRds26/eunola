import type { InvitationThemeConfig } from "@/themes/types";
import { adatJawaCoklatConfig } from "@/themes/adat-jawa-coklat/config";

export const daniSantiData: InvitationThemeConfig = {
  ...adatJawaCoklatConfig,
  id: "dani-santi",
  name: "Dani & Santi Wedding",

  couple: {
    ...adatJawaCoklatConfig.couple,

    // Ganti Data Pengantin
    brideName: "Tri Susanti",
    brideNickname: "Santi",
    brideParents: "Putri dari Bapak Yonald Eduard Ngongoloy & Ibu Wasiah",

    groomName: "Danny Ramadhan",
    groomNickname: "Danny",
    groomParents: "Putra dari Bapak Hariyanto & Ibu Mulatsih",
    hashtag: "#DaniSantiForever",
    giftAddress:
      "Jalan Desa Panaragan RT 04/08 Sukamaju (Tulung Sawo) Tulang bawang barat kec Tulang bawang tengah",
    loveStory: [
      {
        title: "Awal Pertemuan",
        date: "2020",
        text: "Tak ada yang kebetulan di dunia ini — pertemuan pertama kami terjadi di sekolah, namun meninggalkan kesan yang tak terlupakan.",
      },

      {
        title: "Menjalin Hubungan",
        date: "2024",
        text: "Seiring berjalannya waktu, berawal dari sering nongkrong bareng. Kami memahami satu sama lain, saling mendukung, dan tumbuh menjadi pasangan yang kuat.",
      },

      {
        title: "Lamaran",
        date: "2026",
        text: "Dengan niat dan restu orang tua kedua belah pihak, kami memantapkan langkah menuju jenjang yang lebih serius.",
      },

      {
        title: "Hari Pernikahan",
        date: "2026",
        text: "Dan hari yang dinantikan pun tiba — kami resmi menjadi satu, di hadapan keluarga dan orang-orang tercinta.",
      },
    ],

    // Tanggal Acara
    eventDateTime: "2026-09-29T08:00:00+09:00",
    eventDateLabel: "Selasa, 29 September 2026",

    akadTime: "09.00 – 10.00 WIB",
    resepsiTime: "10.00 – Selesai WIB",

    venueName: "Rumah Mempelai Wanita",
    venueAddress: "Jalan Desa Panaragan RT 04/08 Sukamaju (Tulung Sawo) Tulang bawang barat kec Tulang bawang tengah",
    mapsUrl: "https://goo.gl/maps/NaEbdP5s4c7sqp276?g_st=aw",

    // Rekening & Kontak
    bankAccounts: [
      {
        bank: "SEABANK",
        number: "901293713381",
        holder: "Tri Susanti",
      },
      {
        bank: "DANA",
        number: " 081387417376",
        holder: "Tri Susanti",
      },
      {
        bank: "DANA",
        number: " 085788642819",
        holder: "Danny Ramadhan",
      },
    ],
    whatsappNumber: "6285788642819",

    heroPhoto: "/prewedding/prewedding-7.jpeg",

    bridePhoto: "/prewedding/prewedding-1.jpeg",

    groomPhoto: "/prewedding/prewedding-3.jpeg",

    
  },
  
  preweddingImages: [
      {
        src: "/prewedding/prewedding-1.jpeg",
        alt: "Prewedding 1",
        enabled: true,
      },
      {
        src: "/prewedding/prewedding-2.jpeg",
        alt: "Prewedding 2",
        enabled: true,
      },
      {
        src: "/prewedding/prewedding-3.jpeg",
        alt: "Prewedding 3",
        enabled: true,
      },
      {
        src: "/prewedding/prewedding-4.jpeg",
        alt: "Prewedding 4",
        enabled: true,
      },
      {
        src: "/prewedding/prewedding-5.jpeg",
        alt: "Prewedding 5",
        enabled: true,
      },
      {
        src: "/prewedding/prewedding-6.jpeg",
        alt: "Prewedding 6",
        enabled: true,
      },
      {
        src: "/prewedding/prewedding-7.jpeg",
        alt: "Prewedding 7",
        enabled: true,
      },
      {
        src: "/prewedding/prewedding-8.jpeg",
        alt: "Prewedding 8",
        enabled: true,
      },
      {
        src: "/prewedding/prewedding-9.jpeg",
        alt: "Prewedding 9",
        enabled: true,
      },
      {
        src: "/prewedding/prewedding-10.jpeg",
        alt: "Prewedding 10",
        enabled: true,
      },
      {
        src: "/prewedding/prewedding-11.jpeg",
        alt: "",
        enabled: false,
      },
      {
        src: "/prewedding/prewedding-12.jpeg",
        alt: "Prewedding 12",
        enabled: false,
      },
      {
        src: "/prewedding/prewedding-13.jpeg",
        alt: "Prewedding 13",
        enabled: false,
      },
      {
        src: "/prewedding/prewedding-14.jpeg",
        alt: "Prewedding 14",
        enabled: false, 
      },
      {
        src: "/prewedding/prewedding-15.jpeg",
        alt: "Prewedding 15",
        enabled: false, 
      },
      {
        src: "/prewedding/prewedding-16.jpeg",
        alt: "Prewedding 16",
        enabled: false, 
      },
      {
        src: "/prewedding/prewedding-17.jpeg",
        alt: "Prewedding 17",
        enabled: false, 
      },
      {
        src: "/prewedding/prewedding-18.jpeg",
        alt: "Prewedding 18",
        enabled: false, 
      },
      {
        src: "/prewedding/prewedding-19.jpeg",
        alt: "Prewedding 19",
        enabled: false, 
      },
      {
        src: "/prewedding/prewedding-20.jpeg",
        alt: "Prewedding 20",
        enabled: false, 
      },
    ],
};
