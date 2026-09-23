import Link from "next/link";
import type { Product } from "@/types";
import ProductCard from "@/components/product/ProductCard";

export default function RelatedProducts({ items }: { items: Product[] }) {
  if (items.length === 0) return null;
  return (
    <section className="section-y border-t border-gray-100">
      <div className="container-x">
        <h2 className="font-display text-center text-3xl font-semibold text-ink">Related Products</h2>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
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
