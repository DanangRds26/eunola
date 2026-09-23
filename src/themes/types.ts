/**
 * Sistem tema undangan digital.
 * Setiap tema baru cukup membuat satu file config baru (lihat
 * src/themes/adat-jawa-coklat/config.ts sebagai contoh) — warna, font,
 * dan data pasangan semuanya diatur dari satu tempat.
 */

export interface ThemeColors {
  /** Warna utama: dipakai untuk background gelap, tombol, heading besar */
  primary: string;
  primaryDark: string;
  /** Warna aksen (biasanya emas/gold) untuk ornamen, border, teks penting */
  accent: string;
  accentSoft: string;
  /** Warna latar terang untuk section selang-seling */
  surface: string;
  /** Warna teks utama di atas latar terang */
  text: string;
  textMuted: string;
}

export interface ThemeFonts {
  /** Font untuk nama pasangan & judul besar (biasanya cursive/script) */
  script: string;
  /** Font untuk heading section */
  display: string;
  /** Font untuk paragraf/body */
  body: string;
}

export interface LoveStoryMoment {
  title: string;
  date?: string;
  text: string;
}

export interface BankAccount {
  bank: string;
  number: string;
  holder: string;
}

export interface CoupleData {
  brideName: string;
  brideNickname: string;
  brideParents: string;
  groomName: string;
  groomNickname: string;
  groomParents: string;
  /** ISO datetime acara resepsi, dipakai untuk countdown, mis. "2026-11-14T15:30:00+07:00" */
  eventDateTime: string;
  eventDateLabel: string;
  akadTime: string;
  resepsiTime: string;
  venueName: string;
  venueAddress: string;
  mapsUrl: string;
  hashtag: string;
  quoteArabic: string;
  quoteTranslation: string;
  quoteSource: string;
  doaArabic: string;
  doaTransliteration: string;
  doaTranslation: string;
  loveStory: LoveStoryMoment[];
  bankAccounts: BankAccount[];
  giftAddress: string;
  whatsappNumber: string; // format 62xxxxxxxxxx, tanpa +
  closingCredit: string;
  /** foto: 'heroCouple' | daftar id dari data/images.ts, dipakai untuk cover & galeri */
  heroPhoto: string;
  bridePhoto: string;
  groomPhoto: string;
}

export interface InvitationThemeConfig {
  id: string;
  name: string;
  colors: ThemeColors;
  fonts: ThemeFonts;
  /** Path musik latar di /public, kosongkan jika belum ada file musik */
  musicSrc?: string;
  couple: CoupleData;
}
