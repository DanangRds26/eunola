"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { categoryCount, postCategories, recentPosts } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import { img } from "@/data/images";
import SafeImage from "@/components/ui/SafeImage";
import type { PostCategory } from "@/types";

interface Props {
  search: string;
  onSearchChange: (v: string) => void;
  activeCategory: PostCategory | null;
  onCategoryChange: (c: PostCategory | null) => void;
}

export default function BlogSidebar({ search, onSearchChange, activeCategory, onCategoryChange }: Props) {
  return (
    <aside className="space-y-10">
      <div className="relative">
        <label htmlFor="blog-search" className="sr-only">
          Cari artikel
        </label>
        <input
          id="blog-search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Cari artikel…"
          className="input pr-11"
        />
        <Search className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold text-ink">Categories</h3>
        <ul className="mt-4 space-y-3 text-sm">
          {postCategories.map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => onCategoryChange(activeCategory === c ? null : c)}
                className={`flex w-full items-center justify-between transition-colors ${
                  activeCategory === c ? "font-semibold text-gold" : "text-ink/80 hover:text-gold"
                }`}
              >
                <span>{c}</span>
                <span className="text-muted">{categoryCount(c)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold text-ink">Recent Posts</h3>
        <ul className="mt-4 space-y-4">
          {recentPosts(5).map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="flex items-center gap-3 group">
                <span className="h-14 w-14 shrink-0 overflow-hidden rounded-md">
                  <SafeImage
                    src={img(p.image, 140, 140)}
                    alt=""
                    seed={p.slug}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span>
                  <span className="block text-sm font-medium text-ink group-hover:text-gold">{p.title}</span>
                  <span className="text-xs text-muted">{formatDate(p.date)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
