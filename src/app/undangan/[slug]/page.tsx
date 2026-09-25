import type { Metadata } from "next";

import { getThemeConfig } from "@/themes/registry";
import { getInvitationData } from "@/data/invitation/[slug]";

import WeddingInvitation from "@/components/invitation/WeddingInvitation";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{
    slug: string;
  }>;

  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const slug = resolvedParams.slug;

  const clientData = getInvitationData(slug);

  const themeConfig = clientData || getThemeConfig(slug);

  if (!themeConfig) {
    return {
      title: "Undangan Tidak Ditemukan",
    };
  }

  const to = resolvedSearchParams.to;

  const namaTamu = Array.isArray(to) ? to[0] : to;

  const title =
    themeConfig.title ||
    `${themeConfig.groomName || "Mempelai"} & ${
      themeConfig.brideName || "Mempelai"
    }`;

  const description = namaTamu
    ? `Tanpa Mengurangi Rasa Hormat, Kami Bermaksud Mengundang Kpd Yth. ${namaTamu} Pada Acara Pernikahan Kami.`
    : themeConfig.description ||
      "Tanpa Mengurangi Rasa Hormat, Kami Bermaksud Mengundang Bapak/Ibu/Saudara/i Pada Acara Pernikahan Kami.";

  const baseUrl = "https://eunola-inv.vercel.app";

  const ogImage = `${baseUrl}/prewedding/og-image.jpeg`;

  return {
    metadataBase: new URL(baseUrl),

    title,

    description,

    openGraph: {
      title,
      description,
      url: `${baseUrl}/undangan/${slug}`,
      siteName: "Eunola Wedding",

      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],

      locale: "id_ID",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ThemePreviewPage({ params }: Props) {
  const resolvedParams = await params;

  const clientData = getInvitationData(resolvedParams.slug);

  const themeConfig =
    clientData || getThemeConfig(resolvedParams.slug);

  if (!themeConfig) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
        <p className="text-sm text-muted">
          Undangan atau Tema tidak ditemukan.
        </p>

        <Link
          href="/tema"
          className="btn-outline-gold mt-6 inline-flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali
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