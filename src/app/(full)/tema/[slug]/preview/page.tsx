import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProduct, products } from "@/data/products";
import { getThemeConfig } from "@/themes/registry";
import WeddingInvitation from "@/components/invitation/WeddingInvitation";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.filter((p) => p.hasLivePreview).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProduct(params.slug);
  return { title: product ? `Demo — ${product.name}` : "Demo tema" };
}

export default function ThemePreviewPage({ params }: Props) {
  const product = getProduct(params.slug);
  const themeConfig = getThemeConfig(params.slug);

  if (!product || !themeConfig) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
        <p className="text-sm text-muted">
          {product ? "Demo untuk tema ini sedang disiapkan." : "Tema tidak ditemukan."}
        </p>
        <Link
          href={product ? `/tema/${product.slug}` : "/tema"}
          className="btn-outline-gold mt-6 inline-flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#eee9df]">
      {/* INVITATION */}
      <div className="flex justify-center">
        <div
          className="
            w-full min-h-screen
          "
        >
          <WeddingInvitation config={themeConfig} />
        </div>
      </div>
    </main>
  );
}