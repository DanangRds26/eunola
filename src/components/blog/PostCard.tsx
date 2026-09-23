import Link from "next/link";
import { CalendarDays, Tag, User } from "lucide-react";
import type { Post } from "@/types";
import { formatDate } from "@/lib/utils";
import { img } from "@/data/images";
import SafeImage from "@/components/ui/SafeImage";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article>
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-lg">
        <div className="aspect-[16/10] overflow-hidden">
          <SafeImage
            src={img(post.image, 900, 560)}
            alt={post.title}
            seed={post.slug}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
          />
        </div>
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <User className="h-3.5 w-3.5" /> {post.author}
        </span>
        <span className="flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5" /> {formatDate(post.date)}
        </span>
        <span className="flex items-center gap-1.5">
          <Tag className="h-3.5 w-3.5" /> {post.category}
        </span>
      </div>

      <h2 className="mt-3 text-2xl font-semibold text-ink">
        <Link href={`/blog/${post.slug}`} className="hover:text-gold">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ink/70">{post.excerpt}</p>

      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-block border-b border-ink text-sm font-medium text-ink hover:border-gold hover:text-gold"
      >
        Read more
      </Link>
    </article>
  );
}
