"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { PreweddingImage } from "@/data/prewedding";

interface Props {
  images: PreweddingImage[];
  selectedIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function PreweddingLightbox({
  images,
  selectedIndex,
  onClose,
  onPrevious,
  onNext,
}: Props) {
  if (selectedIndex === null) return null;

  const image = images[selectedIndex];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4">

      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup galeri"
        className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white backdrop-blur-md"
      >
        <X size={24} />
      </button>

      {/* Previous */}
      <button
        type="button"
        onClick={onPrevious}
        aria-label="Foto sebelumnya"
        className="absolute left-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-md"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Image */}
      <div className="relative h-[75vh] w-full max-w-4xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>

      {/* Next */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Foto berikutnya"
        className="absolute right-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-md"
      >
        <ChevronRight size={28} />
      </button>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/80">
        {selectedIndex + 1} / {images.length}
      </div>

    </div>
  );
}