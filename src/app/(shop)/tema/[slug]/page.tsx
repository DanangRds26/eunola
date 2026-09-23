import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Facebook, Linkedin, PlayCircle } from "lucide-react";
import { getProduct, getRelated, products } from "@/data/products";
import { formatRupiah } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Rating from "@/components/ui/Rating";
import ProductGallery from "@/components/tema/ProductGallery";
import ProductOptions from "@/components/tema/ProductOptions";
import ProductTabs from "@/components/tema/ProductTabs";
import RelatedProducts from "@/components/tema/RelatedProducts";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Tema tidak ditemukan" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default function TemaDetailPage({ params }: Props) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = getRelated(product.slug, 4);

  return (
    <>
      <Breadcrumb
        variant="bar"
        items={[
          { label: "Beranda", href: "/" },
          { label: "Tema", href: "/tema" },
          { label: product.name },
        ]}
      />

      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery images={product.images} name={product.name} />

          <div>
            <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">{product.name}</h1>
            <p className="mt-2 text-xl text-muted">{formatRupiah(product.price)}</p>

            {product.hasLivePreview && (
              <Link
                href={`/tema/${product.slug}/preview`}
                target="_blank"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-pine hover:text-pine-dark"
              >
                <PlayCircle className="h-4 w-4" /> Lihat Demo Undangan Langsung
              </Link>
            )}

            <div className="mt-3 flex items-center gap-3">
              <Rating value={product.rating} />
              <span className="text-sm text-muted">{product.reviewCount} Customer Review</span>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/75">{product.description}</p>

            <div className="mt-7">
              <ProductOptions productName={product.name} slug={product.slug} />
            </div>

            <div className="mt-8 space-y-2 border-t border-gray-100 pt-6 text-sm">
              <p>
                <span className="text-muted">SKU</span>
                <span className="ml-8 text-ink">: {product.sku}</span>
              </p>
              <p>
                <span className="text-muted">Category</span>
                <span className="ml-2 text-ink">: {product.category}</span>
              </p>
              <p>
                <span className="text-muted">Tags</span>
                <span className="ml-9 text-ink">: {product.tags.join(", ")}</span>
              </p>
              <div className="flex items-center gap-2">
                <span className="text-muted">Share</span>
                <span className="text-ink">:</span>
                <a href="#" aria-label="Bagikan ke Facebook" className="text-ink hover:text-gold">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Bagikan ke LinkedIn" className="text-ink hover:text-gold">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className="container-x">
          <ProductTabs description={product.description} />
        </div>
      </section>

      <RelatedProducts items={related} />
    </>
  );
}
