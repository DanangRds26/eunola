import { getThemeConfig } from "@/themes/registry";
import { getInvitationData } from "@/data/invitation/[slug]";
import WeddingInvitation from "@/components/invitation/WeddingInvitation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: { slug: string };
}

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