import type { InvitationThemeConfig } from "../types";

/**
 * GANTI DI SINI: satu-satunya tempat yang perlu diubah untuk membuat
 * undangan baru dengan tema "Adat Jawa Coklat" — ganti warna, font, atau
 * seluruh data pasangan di objek `couple` di bawah.
 */
export const adatJawaCoklatConfig: InvitationThemeConfig = {
  id: "adat-jawa-coklat",
  name: "Adat Jawa Coklat",
  colors: {
    primary: "#3E2A1C", // coklat tua — background hero, footer
    primaryDark: "#2A1B11",
    accent: "#C9A15E", // emas — ornamen, border, tombol
    accentSoft: "#E4D2A6",
    surface: "#FBF4E7", // krem — background section terang
    text: "#3A2A1D",
    textMuted: "#8A7358",
  },
  fonts: {
    script: "var(--font-script)", // Great Vibes
    display: "var(--font-garamond)", // Cormorant Garamond
    body: "var(--font-poppins)",
  },
  musicSrc: "/audio/Sampai Jadi Debu.mp3",
  couple: {
    brideName: "Ruby Melani",
    brideNickname: "Ruby",
    brideParents: "Putri Pertama dari Bapak Ridwan & Ibu Ririn Sumantri",
    groomName: "Jaden Ramadhan",
    groomNickname: "Jaden",
    groomParents: "Putra Kedua dari Bapak Mustafa & Ibu Jumariati",
    eventDateTime: "2026-11-15T13:00:00+07:00",
    eventDateLabel: "Minggu, 15 November 2026",
    akadTime: "13.00 – 14.45 WIB",
    resepsiTime: "15.30 – 19.30 WIB",
    venueName: "Kluwiland",
    venueAddress:
      "Jl. St Abdurachman, Sei Bangkong Bl E/211, Sungai Bangkong, Kec. Pontianak Kota, Kota Pontianak, Kalimantan Barat 78116",
    mapsUrl: "https://maps.google.com/?q=Kluwiland+Pontianak",
    hashtag: "#RubyJadenForever",
    quoteArabic:
      "وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ",
    quoteTranslation:
      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    quoteSource: "QS. Ar-Rum Ayat 21",
    doaArabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    doaTransliteration: "Baarokalaahu laka wabaaroka 'alaika wajama'a bainakumaa fii khoirin.",
    doaTranslation:
      "Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, dan semoga Allah menyatukan kalian berdua dalam kebaikan.",
    loveStory: [
      {
        title: "Awal Pertemuan",
        date: "2021",
        text: "Tak ada yang kebetulan di dunia ini — pertemuan pertama kami terjadi di acara kampus yang sederhana, namun meninggalkan kesan yang tak terlupakan.",
      },
      {
        title: "Menjalin Hubungan",
        date: "2022",
        text: "Seiring berjalannya waktu, kedekatan itu tumbuh menjadi komitmen. Kami belajar saling memahami dan menguatkan satu sama lain.",
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
    bankAccounts: [{ bank: "BCA", number: "1234567890", holder: "Ruby Melani" }],
    giftAddress:
      "Jl. St Abdurachman, Sei Bangkong Bl E/211, Sungai Bangkong, Kec. Pontianak Kota, Kota Pontianak, Kalimantan Barat 78116",
    whatsappNumber: "6281234567890",
    closingCredit: "Undangan Digital by Eunola",
    heroPhoto: "1519741497674-611481863552",
    bridePhoto: "1465495976277-4387d4b0b4c6",
    groomPhoto: "1522673607200-164d1b6ce486",
  },
};
