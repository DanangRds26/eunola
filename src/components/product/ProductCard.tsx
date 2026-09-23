"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, Repeat, Share2 } from "lucide-react";
import type { Product } from "@/types";
import { formatRupiah } from "@/lib/utils";
import { img, PHOTO } from "@/data/images";
import SafeImage from "@/components/ui/SafeImage";

interface Props {
  product: Product;
  /** "grid" (default): kartu vertikal persegi. "list": baris horizontal untuk toggle tampilan list di halaman Tema. */
  layout?: "grid" | "list";
}

/** Kartu tema: dipakai di carousel Beranda, grid/list halaman Tema, dan Related Products */
export default function ProductCard({ product, layout = "grid" }: Props) {
  const [hover, setHover] = useState(false);
  const photoId = product.images[0] ?? PHOTO.interiors[0];

  if (layout === "list") {
    return (
      <Link
        href={`/tema/${product.slug}`}
        className="flex items-center gap-5 bg-surface p-3 transition-colors hover:bg-cream"
      >
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md sm:h-28 sm:w-28">
          <SafeImage
            src={img(photoId, 300, 300)}
            alt={product.name}
            seed={product.slug}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-medium text-ink">{product.name}</h3>
          <p className="mt-0.5 text-sm text-muted">{product.subtitle}</p>
          <p className="mt-2 text-sm">
            <span className="font-semibold text-ink">{formatRupiah(product.price)}</span>
            {product.oldPrice && (
              <span className="ml-2 text-muted line-through">{formatRupiah(product.oldPrice)}</span>
            )}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link href={`/tema/${product.slug}`} className="block" aria-label={`Lihat tema ${product.name}`}>
        <div className="relative aspect-square overflow-hidden">
          <SafeImage
            src={img(photoId, 700, 700)}
            alt={product.name}
            seed={product.slug}
            className="h-full w-full object-cover"
          />

          {/* Overlay hover: tombol Lihat Tema + ikon aksi, sesuai mockup */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center gap-4 bg-ink/55 transition-opacity duration-300 ${
              hover ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="rounded-sm bg-white px-6 py-3 text-xs font-semibold tracking-wide text-ink">
              LIHAT TEMA
            </span>
            <div className="flex items-center gap-4 text-xs font-medium text-white">
              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-1 hover:text-gold"
              >
                <Share2 className="h-3.5 w-3.5" /> Share
              </button>
              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-1 hover:text-gold"
              >
                <Repeat className="h-3.5 w-3.5" /> Compare
              </button>
              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-1 hover:text-gold"
              >
                <Heart className="h-3.5 w-3.5" /> Like
              </button>
            </div>
          </div>
        </div>

        <div className="bg-surface px-4 py-4 text-center">
          <h3 className="text-base font-medium text-ink">{product.name}</h3>
          <p className="mt-0.5 text-sm text-muted">{product.subtitle}</p>
          <p className="mt-2 text-sm">
            <span className="font-semibold text-ink">{formatRupiah(product.price)}</span>
            {product.oldPrice && (
              <span className="ml-2 text-muted line-through">{formatRupiah(product.oldPrice)}</span>
            )}
          </p>
        </div>
      </Link>
    </div>
  );
}
