"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { products } from "@/data/products";
import { posts } from "@/data/posts";
import { formatRupiah } from "@/lib/utils";

export default function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!open) return;
    setQ("");
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeRef.current();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const term = q.trim().toLowerCase();
  const productHits = term
    ? products
        .filter((p) => `${p.name} ${p.subtitle} ${p.category} ${p.tags.join(" ")}`.toLowerCase().includes(term))
        .slice(0, 5)
    : [];
  const postHits = term ? posts.filter((p) => p.title.toLowerCase().includes(term)).slice(0, 3) : [];
  const empty = term && productHits.length === 0 && postHits.length === 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cari tema atau artikel"
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/50 px-4 pt-[12vh]"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-xl overflow-hidden rounded-xl bg-white shadow-2xl">
        <div className="flex items-center gap-3 border-b border-gray-200 px-5">
          <Search className="h-5 w-5 shrink-0 text-pine" aria-hidden />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari tema, mis. Monochrome atau Pernikahan"
            aria-label="Kata kunci pencarian"
            className="h-14 w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
          <button type="button" onClick={onClose} aria-label="Tutup pencarian" className="text-muted hover:text-ink">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-2">
          {!term && <p className="px-3 py-6 text-center text-sm text-muted">Ketik untuk mencari tema atau artikel.</p>}
          {empty && <p className="px-3 py-6 text-center text-sm text-muted">Tidak ada hasil untuk “{q}”.</p>}

          {productHits.length > 0 && (
            <>
              <p className="px-3 pb-1 pt-2 text-xs font-semibold text-muted">Tema</p>
              {productHits.map((p) => (
                <Link
                  key={p.slug}
                  href={`/tema/${p.slug}`}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm hover:bg-cream"
                >
                  <span>
                    <span className="font-medium">{p.name}</span>
                    <span className="ml-2 text-muted">{p.subtitle}</span>
                  </span>
                  <span className="text-gold">{formatRupiah(p.price)}</span>
                </Link>
              ))}
            </>
          )}

          {postHits.length > 0 && (
            <>
              <p className="px-3 pb-1 pt-3 text-xs font-semibold text-muted">Artikel</p>
              {postHits.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  onClick={onClose}
                  className="block rounded-lg px-3 py-2.5 text-sm hover:bg-cream"
                >
                  {p.title}
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
