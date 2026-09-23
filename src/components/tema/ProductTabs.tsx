"use client";

import { useState } from "react";
import { cn, formatDate } from "@/lib/utils";
import { additionalInfo, commonFeatures, reviews } from "@/data/products";
import { img, PHOTO } from "@/data/images";
import SafeImage from "@/components/ui/SafeImage";
import Rating from "@/components/ui/Rating";

type Tab = "description" | "info" | "reviews";

export default function ProductTabs({ description }: { description: string }) {
  const [tab, setTab] = useState<Tab>("description");

  const tabs: Array<{ key: Tab; label: string }> = [
    { key: "description", label: "Description" },
    { key: "info", label: "Additional Information" },
    { key: "reviews", label: `Reviews [${reviews.length}]` },
  ];

  return (
    <div>
      <div role="tablist" aria-label="Detail tema" className="flex flex-wrap justify-center gap-8 border-b border-gray-200">
        {tabs.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={tab === t.key}
            onClick={() => setTab(t.key)}
            className={cn(
              "-mb-px border-b-2 pb-4 text-base font-medium transition-colors",
              tab === t.key ? "border-gold text-ink" : "border-transparent text-muted hover:text-ink",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="pt-10">
        {tab === "description" && (
          <div>
            <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-ink/80">
              <p>{description}</p>
              <p>{commonFeatures}</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[PHOTO.interiors[0], PHOTO.interiors[1]].map((id, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg bg-cream">
                  <SafeImage src={img(id, 700, 520)} alt="" seed={`desc-${i}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "info" && (
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {additionalInfo.map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-gray-100 pb-3 text-sm">
                <dt className="text-muted">{label}</dt>
                <dd className="text-right font-medium text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        )}

        {tab === "reviews" && (
          <ul className="mx-auto flex max-w-2xl flex-col gap-6">
            {reviews.map((r) => (
              <li key={r.name} className="border-b border-gray-100 pb-6 last:border-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-ink">{r.name}</p>
                  <span className="text-xs text-muted">{formatDate(r.date)}</span>
                </div>
                <Rating value={r.rating} size={14} />
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{r.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
