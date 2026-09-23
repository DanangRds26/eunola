"use client";

import { useMemo, useState } from "react";
import PageBanner from "@/components/ui/PageBanner";
import FilterToolbar, { type SortKey } from "@/components/tema/FilterToolbar";
import ProductCard from "@/components/product/ProductCard";
import Pagination from "@/components/ui/Pagination";
import { products } from "@/data/products";
import type { ProductCategory } from "@/types";

export default function TemaPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filterOpen, setFilterOpen] = useState(false);
  const [category, setCategory] = useState<ProductCategory | "Semua">("Semua");
  const [pageSize, setPageSize] = useState(16);
  const [sort, setSort] = useState<SortKey>("default");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = category === "Semua" ? products : products.filter((p) => p.category === category);
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "name-asc") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [category, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);

  const changePageSetting = <T,>(setter: (v: T) => void) => (v: T) => {
    setter(v);
    setPage(1);
  };

  return (
    <>
      <PageBanner title="Tema" crumbs={[{ label: "Beranda", href: "/" }, { label: "Tema" }]} />

      <FilterToolbar
        view={view}
        onViewChange={setView}
        filterOpen={filterOpen}
        onToggleFilter={() => setFilterOpen((v) => !v)}
        activeCategory={category}
        onCategoryChange={changePageSetting(setCategory)}
        pageSize={pageSize}
        onPageSizeChange={changePageSetting(setPageSize)}
        sort={sort}
        onSortChange={setSort}
        rangeStart={filtered.length === 0 ? 0 : start + 1}
        rangeEnd={Math.min(start + pageSize, filtered.length)}
        total={filtered.length}
      />

      <section className="section-y">
        <div className="container-x">
          {pageItems.length === 0 ? (
            <p className="py-16 text-center text-muted">Belum ada tema untuk kategori ini.</p>
          ) : view === "grid" ? (
            <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
              {pageItems.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          ) : (
            <div className="mx-auto flex max-w-3xl flex-col gap-3">
              {pageItems.map((p) => (
                <ProductCard key={p.slug} product={p} layout="list" />
              ))}
            </div>
          )}

          <Pagination page={currentPage} totalPages={totalPages} onChange={setPage} />
        </div>
      </section>
    </>
  );
}
