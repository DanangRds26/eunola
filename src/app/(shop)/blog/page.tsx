"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import PageBanner from "@/components/ui/PageBanner";
import PostCard from "@/components/blog/PostCard";
import BlogSidebar from "@/components/blog/Sidebar";
import Pagination from "@/components/ui/Pagination";
import { posts, postCategories } from "@/data/posts";
import type { PostCategory } from "@/types";

const PAGE_SIZE = 4;

function BlogContent() {
  const params = useSearchParams();
  const initialCategory = params.get("category") as PostCategory | null;
  const initialQuery = params.get("q") ?? "";

  const [search, setSearch] = useState(initialQuery);
  const [category, setCategory] = useState<PostCategory | null>(
    initialCategory && postCategories.includes(initialCategory) ? initialCategory : null,
  );
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCategory = !category || p.category === category;
      const term = search.trim().toLowerCase();
      const matchesSearch = !term || `${p.title} ${p.excerpt}`.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  return (
    <>
      <PageBanner title="Blog" crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div>
            {pageItems.length === 0 ? (
              <p className="py-16 text-center text-muted">Tidak ada artikel yang cocok.</p>
            ) : (
              <div className="space-y-14">
                {pageItems.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            )}
            <Pagination
              page={currentPage}
              totalPages={totalPages}
              onChange={(n) => {
                setPage(n);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>

          <BlogSidebar
            search={search}
            onSearchChange={(v) => {
              setSearch(v);
              setPage(1);
            }}
            activeCategory={category}
            onCategoryChange={(c) => {
              setCategory(c);
              setPage(1);
            }}
          />
        </div>
      </section>
    </>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={null}>
      <BlogContent />
    </Suspense>
  );
}
