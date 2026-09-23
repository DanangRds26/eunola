export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** 75000 -> "Rp 75.000" (manual agar server & client selalu sama, tanpa hydration mismatch) */
export function formatRupiah(value: number) {
  return "Rp " + Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

/** "2026-09-14" -> "14 Sep 2026" */
export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${String(d).padStart(2, "0")} ${MONTHS[m - 1]} ${y}`;
}

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
export const isPhone = (v: string) => /^\+?[0-9][0-9\s-]{7,16}$/.test(v.trim());
