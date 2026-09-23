import { cn } from "@/lib/utils";

interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onChange }: Props) {
  if (totalPages <= 1) return null;
  const base = "flex h-11 min-w-11 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors";

  return (
    <nav aria-label="Pagination" className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-5">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-current={n === page ? "page" : undefined}
          aria-label={`Halaman ${n}`}
          className={cn(base, n === page ? "bg-gold text-white" : "bg-cream text-ink hover:bg-cream-deep")}
        >
          {n}
        </button>
      ))}
      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
        className={cn(base, "bg-cream px-6 text-ink hover:bg-cream-deep disabled:cursor-not-allowed disabled:opacity-50")}
      >
        Next
      </button>
    </nav>
  );
}
