import { Metadata } from "next";
import { getThemeConfig } from "@/themes/registry";
import { getInvitationData } from "@/data/invitation/[slug]";
import WeddingInvitation from "@/components/invitation/WeddingInvitation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  // AWAI PROMISE UNTUK NEXT.JS 15
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const slug = resolvedParams.slug;
  const clientData = getInvitationData(slug);
  const themeConfig = (clientData || getThemeConfig(slug)) as any;

  if (!themeConfig) {
    return {
      title: "Undangan Tidak Ditemukan",
    };
  }

  const namaTamu = resolvedSearchParams?.to ? `Kpd Yth. ${resolvedSearchParams.to}` : undefined;
  const title = themeConfig.title || `${themeConfig.groomName || 'Mempelai'} & ${themeConfig.brideName || 'Mempelai'}`;
  const description = namaTamu 
    ? `Tanpa Mengurangi Rasa Hormat, Kami Bermaksud Mengundang ${namaTamu} Pada Acara Pernikahan Kami.`
    : (themeConfig.description || "Tanpa Mengurangi Rasa Hormat, Kami Bermaksud Mengundang Bapak/Ibu/Saudara/i Pada Acara Pernikahan Kami.");

  return {
    metadataBase: new URL("https://eunola-inv.vercel.app"),
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `/undangan/${slug}`,
      siteName: "Eunola Wedding",
      images: [
        {
          url: "https://eunola-inv.vercel.app/prewedding/prewedding-2.jpeg", // Pastikan nama file tanpa spasi!
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "id_ID",
      type: "website",
    },
  };
}

export default async function ThemePreviewPage({ params }: Props) {
  const resolvedParams = await params;
  const clientData = getInvitationData(resolvedParams.slug);
  const themeConfig = clientData || getThemeConfig(resolvedParams.slug);

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