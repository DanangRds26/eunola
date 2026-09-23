"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sizes = ["L", "XL", "XS"];
const colors = ["#B88E2F", "#0F766E", "#C0322D"];

/** Selector ukuran, warna, kuantitas, dan tombol aksi pada halaman detail tema */
export default function ProductOptions({ productName, slug }: { productName: string; slug: string }) {
  const [size, setSize] = useState(sizes[0]);
  const [color, setColor] = useState(colors[0]);
  const [qty, setQty] = useState(1);

  return (
    <div>
      <div>
        <p className="mb-3 text-sm font-medium text-ink">Size</p>
        <div className="flex gap-2">
          {sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              aria-pressed={size === s}
              className={cn(
                "flex h-10 w-14 items-center justify-center rounded-md border text-sm font-medium transition-colors",
                size === s ? "border-gold bg-gold text-white" : "border-gray-300 text-ink hover:border-gold",
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-sm font-medium text-ink">Color</p>
        <div className="flex gap-3">
          {colors.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c)}
              aria-label={`Pilih warna ${c}`}
              aria-pressed={color === c}
              className={cn(
                "h-7 w-7 rounded-full ring-offset-2 transition-shadow",
                color === c ? "ring-2 ring-ink" : "",
              )}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <div className="flex h-12 items-center rounded-md border border-gray-300">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Kurangi jumlah"
            className="flex h-full w-10 items-center justify-center text-lg text-ink hover:bg-cream"
          >
            −
          </button>
          <span className="w-8 text-center text-sm font-medium" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            aria-label="Tambah jumlah"
            className="flex h-full w-10 items-center justify-center text-lg text-ink hover:bg-cream"
          >
            +
          </button>
        </div>

        <Link href={`/checkout?tema=${slug}&qty=${qty}`} className="btn-gold h-12 px-8">
          Pesan Tema
        </Link>
        <button type="button" className="btn-outline h-12 rounded-md px-6">
          + Bandingkan
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        {productName}, ukuran {size}, jumlah {qty}
      </p>
    </div>
  );
}
