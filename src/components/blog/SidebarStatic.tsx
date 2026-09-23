import Link from "next/link";
import { Search } from "lucide-react";
import { categoryCount, postCategories, recentPosts } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import { img } from "@/data/images";
import SafeImage from "@/components/ui/SafeImage";

/** Versi statis sidebar blog untuk halaman detail artikel (server component) */
export default function BlogSidebarStatic() {
  return (
    <aside className="space-y-10">
      <form action="/blog" className="relative">
        <label htmlFor="blog-search-static" className="sr-only">
          Cari artikel
        </label>
        <input id="blog-search-static" name="q" placeholder="Cari artikel…" className="input pr-11" />
        <button type="submit" aria-label="Cari" className="absolute right-4 top-1/2 -translate-y-1/2 text-muted">
          <Search className="h-4 w-4" />
        </button>
      </form>

      <div>
        <h3 className="font-display text-lg font-semibold text-ink">Categories</h3>
        <ul className="mt-4 space-y-3 text-sm">
          {postCategories.map((c) => (
            <li key={c}>
              <Link href={`/blog?category=${encodeURIComponent(c)}`} className="flex items-center justify-between text-ink/80 hover:text-gold">
                <span>{c}</span>
                <span className="text-muted">{categoryCount(c)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold text-ink">Recent Posts</h3>
        <ul className="mt-4 space-y-4">
          {recentPosts(5).map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group flex items-center gap-3">
                <span className="h-14 w-14 shrink-0 overflow-hidden rounded-md">
                  <SafeImage src={img(p.image, 140, 140)} alt="" seed={p.slug} className="h-full w-full object-cover" />
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
