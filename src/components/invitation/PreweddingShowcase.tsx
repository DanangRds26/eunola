"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { preweddingImages } from "@/data/prewedding";

const availableImages = preweddingImages.filter(
  (image) => image.enabled,
);

export default function PreweddingShowcase() {
  const [selectedImage, setSelectedImage] = useState(0);

  const activeImage = availableImages[selectedImage];

  const showPrevious = () => {
    setSelectedImage((current) =>
      current === 0
        ? preweddingImages.length - 1
        : current - 1
    );
  };

  const showNext = () => {
    setSelectedImage((current) =>
      current === preweddingImages.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <section className="w-full px-6 py-16">
      <div className="mx-auto max-w-3xl">

        {/* Foto utama */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">

        <AnimatePresence mode="wait">
            <motion.div
                key={activeImage.src}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
            >
                <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                priority
                className="object-cover"
                />
            </motion.div>
        </AnimatePresence>

          {/* Tombol Previous */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Foto sebelumnya"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Tombol Next */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Foto berikutnya"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md backdrop-blur-sm"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Thumbnail */}
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {availableImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(index)}
              className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg transition ${
                selectedImage === index
                  ? "ring-2 ring-black"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}