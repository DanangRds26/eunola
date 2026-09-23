"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

/** Section "Tema Kami": carousel horizontal + panah navigasi + tombol Show More */
export default function ThemeCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const featured = products.slice(0, 8);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <h2 className="font-display text-center text-3xl font-semibold text-olive md:text-4xl">Tema Kami</h2>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Tema sebelumnya"
            className="absolute left-0 top-1/2 z-10 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 shadow-nav md:flex"
          >
            <ChevronLeft className="h-5 w-5 text-ink" />
          </button>

          <div
            ref={trackRef}
            className="grid grid-flow-col auto-cols-[80%] gap-5 overflow-x-auto scroll-smooth pb-2 sm:auto-cols-[46%] lg:auto-cols-[24%]"
            style={{ scrollbarWidth: "none" }}
          >
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Tema berikutnya"
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-4 items-center justify-center rounded-full bg-white p-3 shadow-nav md:flex"
          >
            <ChevronRight className="h-5 w-5 text-ink" />
          </button>
        </div>

        <div className="mt-10 text-center">
          <Link href="/tema" className="btn-outline-gold">
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
}
