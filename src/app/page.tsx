import { redirect } from 'next/navigation';

export default function RootPage() {
  // Mengarahkan otomatis pengunjung dari domain utama ke halaman preview undangan
  redirect('/tema/adat-jawa-coklat/preview');
}