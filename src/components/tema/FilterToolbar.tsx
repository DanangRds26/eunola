"use client";

import { Grid3x3, List, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductCategory } from "@/types";
import { categories } from "@/data/products";

export type SortKey = "default" | "price-asc" | "price-desc" | "name-asc";

interface Props {
  view: "grid" | "list";
  onViewChange: (v: "grid" | "list") => void;
  filterOpen: boolean;
  onToggleFilter: () => void;
  activeCategory: ProductCategory | "Semua";
  onCategoryChange: (c: ProductCategory | "Semua") => void;
  pageSize: number;
  onPageSizeChange: (n: number) => void;
  sort: SortKey;
  onSortChange: (s: SortKey) => void;
  rangeStart: number;
  rangeEnd: number;
  total: number;
}

const sortLabels: Record<SortKey, string> = {
  default: "Default",
  "price-asc": "Harga: Rendah ke Tinggi",
  "price-desc": "Harga: Tinggi ke Rendah",
  "name-asc": "Nama: A–Z",
};

export default function FilterToolbar({
  view,
  onViewChange,
  filterOpen,
  onToggleFilter,
  activeCategory,
  onCategoryChange,
  pageSize,
  onPageSizeChange,
  sort,
  onSortChange,
  rangeStart,
  rangeEnd,
  total,
}: Props) {
  return (
    <div className="bg-pine">
      <div className="container-x flex flex-wrap items-center justify-between gap-4 py-5 text-white">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onToggleFilter}
            aria-expanded={filterOpen}
            className="flex items-center gap-2 text-sm font-medium hover:text-gold"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filter
          </button>

          <span className="hidden h-5 w-px bg-white/30 sm:block" />

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => onViewChange("grid")}
              aria-label="Tampilan grid"
              aria-pressed={view === "grid"}
              className={cn("rounded p-1.5", view === "grid" ? "bg-white/20" : "hover:bg-white/10")}
            >
              <Grid3x3 className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onViewChange("list")}
              aria-label="Tampilan list"
              aria-pressed={view === "list"}
              className={cn("rounded p-1.5", view === "list" ? "bg-white/20" : "hover:bg-white/10")}
            >
              <List className="h-4 w-4" />
            </button>
          </div>

          <span className="hidden h-5 w-px bg-white/30 sm:block" />

          <p className="text-sm text-white/90">
            Showing {rangeStart}-{rangeEnd} of {total} results
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <label className="flex items-center gap-2">
            Show
            <select
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className="rounded-md border-0 bg-white px-3 py-1.5 text-ink outline-none"
            >
              {[8, 16, 24].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2">
            Short by
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value as SortKey)}
              className="rounded-md border-0 bg-white px-3 py-1.5 text-ink outline-none"
            >
              {(Object.keys(sortLabels) as SortKey[]).map((k) => (
                <option key={k} value={k}>
                  {sortLabels[k]}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {/* Panel filter kategori — muncul saat tombol Filter diklik */}
      {filterOpen && (
        <div className="border-t border-white/15 bg-pine-dark/30">
          <div className="container-x flex flex-wrap gap-2 py-4">
            {(["Semua", ...categories] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => onCategoryChange(c)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
                  activeCategory === c
                    ? "border-gold bg-gold text-white"
                    : "border-white/40 text-white hover:border-white",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
