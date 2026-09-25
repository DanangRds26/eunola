import { Metadata } from "next";
import { getThemeConfig } from "@/themes/registry";
import { getInvitationData } from "@/data/invitation/[slug]";
import WeddingInvitation from "@/components/invitation/WeddingInvitation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// 1. TAMBAHKAN FUNGSI GENERATEMETADATA
export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const clientData = getInvitationData(params.slug);
  const themeConfig = clientData || getThemeConfig(params.slug);

  // Fallback jika tema/data tidak ditemukan
  if (!themeConfig) {
    return {
      title: "Undangan Tidak Ditemukan",
      description: "Halaman undangan atau tema tidak ditemukan.",
    };
  }

  // Ambil nama tamu jika ada query parameter (?to=nama)
  const namaTamu = searchParams?.to ? `Kpd Yth. ${searchParams.to}` : undefined;

  // Sesuaikan nama field di bawah ini dengan struktur object `themeConfig` atau `clientData` Anda
  const title = themeConfig.title || `${themeConfig.groomName || 'Mempelai'} & ${themeConfig.brideName || 'Mempelai'}`;
  const description = namaTamu 
    ? `Tanpa Mengurangi Rasa Hormat, Kami Bermaksud Mengundang ${namaTamu} Pada Acara Pernikahan Kami.`
    : (themeConfig.description || "Tanpa Mengurangi Rasa Hormat, Kami Bermaksud Mengundang Bapak/Ibu/Saudara/i Pada Acara Pernikahan Kami.");
  
  // Pastikan URL gambar adalah URL Absolut (HTTPS)
  const imageUrl = themeConfig.ogImage || "https://eunola-inv.vercel.app/prewedding/prewedding (2).jpeg";

  return {
    metadataBase: new URL("https://eunola-inv.vercel.app"),
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `https://eunola-inv.vercel.app/undangan/${params.slug}`,
      siteName: "Eunola Wedding",
      images: [
        {
          url: imageUrl, // Wajib diawali https://
          width: 1200,
          height: 630,
          alt: `Undangan ${title}`,
        },
      ],
      locale: "id_ID",
      type: "website",
    },
  };
}

// 2. KOMPONEN UTAMA (TIDAK BERUBAH)
export default function ThemePreviewPage({ params }: Props) {
  // Cek apakah ada data pelanggan kustom, jika tidak ada cek dari theme registry (demo)
  const clientData = getInvitationData(params.slug);
  const themeConfig = clientData || getThemeConfig(params.slug);

  if (!themeConfig) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
        <p className="text-sm text-muted">Undangan atau Tema tidak ditemukan.</p>
        <Link href="/tema" className="btn-outline-gold mt-6 inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Kembali
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#eee9df]">
      <div className="flex justify-center">
        <div className="w-full min-h-screen">
          <WeddingInvitation config={themeConfig} />
        </div>
      </div>
    </main>
  );
}