/**
 * Semua foto placeholder ada di sini (Unsplash).
 * GANTI DI SINI: ganti ID dengan foto template asli, atau ubah `img()` agar
 * menunjuk ke /public/images/... milik Anda.
 * Jika sebuah foto gagal dimuat, <SafeImage> otomatis memakai gambar cadangan.
 */
export const img = (id: string, w = 800, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=80`;

export const PHOTO = {
  heroCouple: "1519741497674-611481863552",
  banner: "1616486338812-3dadae4b4ace",
  interiors: [
    "1586023492125-27b2c045efd7",
    "1555041469-a586c61ea9bc",
    "1493663284031-b7e3aefcae8e",
    "1524758631624-e2822e304c36",
    "1502672260266-1c1ef2d93688",
    "1505693416388-ac5ce068fe85",
    "1540518614846-7eded433c457",
    "1616486338812-3dadae4b4ace",
  ],
  weddings: [
    "1511285560929-80b456fea0bc",
    "1465495976277-4387d4b0b4c6",
    "1583939003579-730e3918a45a",
    "1522673607200-164d1b6ce486",
    "1520854221256-17451cc331bf",
    "1478146896981-b80fe463b330",
  ],
  workspace: [
    "1498050108023-c5249f4df085",
    "1455390582262-044cdead277a",
    "1517842645767-c639042777db",
    "1484480974693-6ca0a78fb36b",
    "1499750310107-5fef28a66643",
    "1519389950473-47ba0277781c",
  ],
};
