import type { InvitationThemeConfig } from "../types";

/**
 * Tema Floral
 *
 * Konsep:
 * - Romantic & elegant wedding
 * - Soft botanical floral
 * - Dusty rose sebagai warna utama
 * - Deep burgundy sebagai warna gelap
 * - Champagne gold sebagai aksen mewah
 * - Soft blush sebagai detail floral
 * - Warm ivory sebagai background utama
 * - Typography romantic, feminine, dan timeless
 * - Cocok untuk wedding yang romantic, intimate,
 *   garden, outdoor, dan luxurious
 */

export const floralConfig: InvitationThemeConfig = {
  id: "floral",
  name: "Floral",

  colors: {
    // Dusty rose — warna utama, heading, button
    primary: "#A86F7A",

    // Deep burgundy — hero gelap dan footer
    primaryDark: "#542F38",

    // Champagne gold — accent dan decorative element
    accent: "#C9A66B",

    // Soft blush — ornament dan decorative background
    accentSoft: "#E8D3D5",

    // Warm ivory — background utama
    surface: "#FBF7F2",

    // Deep warm charcoal — text utama
    text: "#3E3435",

    // Muted mauve — secondary text
    textMuted: "#8C7C7E",
  },

  fonts: {
    // Script sebagai aksen nama pasangan
    script: "var(--font-script)",

    // Elegant serif untuk heading
    display: "var(--font-garamond)",

    // Clean sans-serif untuk body
    body: "var(--font-poppins)",
  },

  // Musik sementara
  musicSrc: "/audio/Sampai Jadi Debu.mp3",

  couple: {
    brideName: "Ruby Melani",
    brideNickname: "Ruby",
    brideParents:
      "Putri Pertama dari Bapak Ridwan & Ibu Ririn Sumantri",

    groomName: "Jaden Ramadhan",
    groomNickname: "Jaden",
    groomParents:
      "Putra Kedua dari Bapak Mustafa & Ibu Jumariati",

    eventDateTime: "2026-11-15T13:00:00+07:00",
    eventDateLabel: "Minggu, 15 November 2026",

    akadTime: "13.00 – 14.45 WIB",
    resepsiTime: "15.30 – 19.30 WIB",

    venueName: "Kluwiland",

    venueAddress:
      "Jl. St Abdurachman, Sei Bangkong Bl E/211, Sungai Bangkong, Kec. Pontianak Kota, Kota Pontianak, Kalimantan Barat 78116",

    mapsUrl:
      "https://maps.google.com/?q=Kluwiland+Pontianak",

    hashtag: "#RubyJadenForever",

    quoteArabic:
      "وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ",

    quoteTranslation:
      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",

    quoteSource: "QS. Ar-Rum Ayat 21",

    doaArabic:
      "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",

    doaTransliteration:
      "Baarokalaahu laka wabaaroka 'alaika wajama'a bainakumaa fii khoirin.",

    doaTranslation:
      "Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, dan semoga Allah menyatukan kalian berdua dalam kebaikan.",

    loveStory: [
      {
        title: "Awal Pertemuan",
        date: "2021",
        text:
          "Tak ada yang kebetulan di dunia ini — pertemuan pertama kami terjadi di acara kampus yang sederhana, namun meninggalkan kesan yang tak terlupakan.",
      },
      {
        title: "Menjalin Hubungan",
        date: "2022",
        text:
          "Seiring berjalannya waktu, kedekatan itu tumbuh menjadi komitmen. Kami belajar saling memahami dan menguatkan satu sama lain.",
      },
      {
        title: "Lamaran",
        date: "2025",
        text:
          "Dengan niat dan restu orang tua kedua belah pihak, kami memantapkan langkah menuju jenjang yang lebih serius.",
      },
      {
        title: "Hari Pernikahan",
        date: "2026",
        text:
          "Dan hari yang dinantikan pun tiba — kami resmi menjadi satu, di hadapan keluarga dan orang-orang tercinta.",
      },
    ],

    bankAccounts: [
      {
        bank: "BCA",
        number: "1234567890",
        holder: "Ruby Melani",
      },
    ],

    giftAddress:
      "Jl. St Abdurachman, Sei Bangkong Bl E/211, Sungai Bangkong, Kec. Pontianak Kota, Kota Pontianak, Kalimantan Barat 78116",

    whatsappNumber: "6281234567890",

    closingCredit: "Undangan Digital by Eunola",

    // Foto sementara
    // Nantinya dapat diganti dengan foto khusus tema Floral
    heroPhoto: "1519741497674-611481863552",
    bridePhoto: "1465495976277-4387d4b0b4c6",
    groomPhoto: "1522673607200-164d1b6ce486",
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