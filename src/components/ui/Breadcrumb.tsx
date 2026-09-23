import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  items: Crumb[];
  /** "banner": teks kecil di tengah banner. "bar": bar hijau penuh (halaman detail tema). */
  variant?: "banner" | "bar";
}

export default function Breadcrumb({ items, variant = "banner" }: Props) {
  const list = (
    <ol
      className={
        variant === "bar"
          ? "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm"
          : "flex items-center justify-center gap-2 text-sm"
      }
    >
      {items.map((item, i) => {
        const last = i === items.length - 1;
        const tone =
          variant === "bar"
            ? last
              ? "text-white"
              : "text-white/70 hover:text-white"
            : last
              ? "text-ink/70"
              : "font-medium text-ink hover:text-gold";
        return (
          <li key={item.label} className="flex items-center gap-2 sm:gap-3">
            {variant === "bar" && last && <span aria-hidden className="mr-1 h-7 w-px bg-white/40" />}
            {item.href && !last ? (
              <Link href={item.href} className={`transition-colors ${tone}`}>
                {item.label}
              </Link>
            ) : (
              <span className={tone} aria-current={last ? "page" : undefined}>
                {item.label}
              </span>
            )}
            {!last && (
              <ChevronRight className={variant === "bar" ? "h-4 w-4 text-white" : "h-4 w-4 text-ink"} aria-hidden />
            )}
          </li>
        );
      })}
    </ol>
  );

  if (variant === "bar") {
    return (
      <nav aria-label="Breadcrumb" className="bg-pine py-6 md:py-7">
        <div className="container-x">{list}</div>
      </nav>
    );
  }
  return <nav aria-label="Breadcrumb">{list}</nav>;
}
