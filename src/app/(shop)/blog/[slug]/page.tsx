import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, Tag, User } from "lucide-react";
import PageBanner from "@/components/ui/PageBanner";
import BlogSidebarStatic from "@/components/blog/SidebarStatic";
import { getPost, posts } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import { img } from "@/data/images";
import SafeImage from "@/components/ui/SafeImage";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Artikel tidak ditemukan" };
  return { title: post.title, description: post.excerpt };
}

export default function BlogDetailPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <PageBanner
        title={post.title}
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.category }]}
      />

      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <article>
            <div className="aspect-[16/9] overflow-hidden rounded-lg">
              <SafeImage src={img(post.image, 1200, 675)} alt={post.title} seed={post.slug} className="h-full w-full object-cover" />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-muted">
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

            <h1 className="font-display mt-4 text-3xl font-semibold text-ink md:text-4xl">{post.title}</h1>

            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink/80">
              {post.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </article>

          <BlogSidebarStatic />
        </div>
      </section>
    </>
  );
}
