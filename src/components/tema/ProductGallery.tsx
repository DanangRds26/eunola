"use client";

import { useState } from "react";
import { img } from "@/data/images";
import SafeImage from "@/components/ui/SafeImage";
import { cn } from "@/lib/utils";

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        {images.map((id, i) => (
          <button
            key={id + i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Lihat foto ${i + 1}`}
            aria-current={active === i}
            className={cn(
              "h-16 w-16 shrink-0 overflow-hidden rounded-md border-2 transition-colors sm:h-20 sm:w-20",
              active === i ? "border-gold" : "border-transparent",
            )}
          >
            <SafeImage src={img(id, 200, 200)} alt="" seed={`${name}-thumb-${i}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      <div className="relative aspect-square flex-1 overflow-hidden rounded-lg bg-cream">
        <SafeImage
          src={img(images[active], 900, 900)}
          alt={name}
          seed={`${name}-main-${active}`}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
