"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import {
  preweddingImages,
  type PreweddingImage,
} from "@/data/prewedding";
import { getGalleryLayout } from "@/components/invitation/galleryLayout";

const INITIAL_VISIBLE = 6;
const LOAD_MORE_COUNT = 6;

function getLayoutClass(layout: "normal" | "wide" | "tall" | "featured") {
  switch (layout) {
    case "featured":
      return "col-span-2 row-span-2";

    case "wide":
      return "col-span-2 row-span-1";

    case "tall":
      return "col-span-1 row-span-2";

    default:
      return "col-span-1 row-span-1";
  }
}

export default function PreweddingGallery() {
  const [visibleCount, setVisibleCount] =
    useState(INITIAL_VISIBLE);

  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  // Hanya foto yang benar-benar tersedia
    const availableImages = preweddingImages.filter(
        (image) => image.enabled,
    );

  const totalImages = availableImages.length;

  const visibleImages = availableImages.slice(
    0,
    visibleCount,
  );

  const hasMore = visibleCount < totalImages;

  const showMore = () => {
    setVisibleCount((current) =>
      Math.min(
        current + LOAD_MORE_COUNT,
        totalImages,
      ),
    );
  };

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null || totalImages === 0) {
      return;
    }

    setSelectedIndex(
      selectedIndex === 0
        ? totalImages - 1
        : selectedIndex - 1,
    );
  };

  const showNext = () => {
    if (selectedIndex === null || totalImages === 0) {
      return;
    }

    setSelectedIndex(
      selectedIndex === totalImages - 1
        ? 0
        : selectedIndex + 1,
    );
  };

  const selectedImage =
    selectedIndex !== null
      ? availableImages[selectedIndex]
      : null;

  return (
    <>
      <section className="w-full px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-black/50">
              Our Memories
            </p>

            <h2 className="font-serif text-3xl md:text-4xl">
              Kisah yang Kami Simpan
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-black/60">
              Beberapa momen perjalanan kami yang ingin
              kami bagikan bersama.
            </p>
          </div>

          {/* Gallery */}
          {totalImages > 0 && (
            <div className="grid auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[180px] md:grid-cols-4 md:gap-4">
              <AnimatePresence>
                {visibleImages.map((image, index) => (
                  <GalleryItem
                    key={image.src}
                    image={image}
                    index={index}
                    total={visibleImages.length}
                    onClick={() =>
                      openLightbox(index)
                    }
                  />
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Tidak ada foto */}
          {totalImages === 0 && (
            <div className="py-16 text-center">
              <p className="text-sm text-black/50">
                Belum ada foto prewedding.
              </p>
            </div>
          )}

          {/* Lihat Lebih Banyak */}
          {hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={showMore}
                className="group flex items-center gap-3 rounded-full border border-black/15 px-6 py-3 text-sm transition-all duration-300 hover:bg-black hover:text-white"
              >
                <span>
                  Lihat Lebih Banyak
                </span>

                <span className="text-xs opacity-50 transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage &&
          selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close */}
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Tutup galeri"
                className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <X size={22} />
              </button>

              {/* Previous */}
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Foto sebelumnya"
                className="absolute left-3 z-20 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm md:left-8"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Image */}
              <motion.div
                key={selectedImage.src}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="relative h-[75vh] w-full max-w-5xl"
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </motion.div>

              {/* Next */}
              <button
                type="button"
                onClick={showNext}
                aria-label="Foto berikutnya"
                className="absolute right-3 z-20 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm md:right-8"
              >
                <ChevronRight size={24} />
              </button>

              {/* Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-sm">
                {selectedIndex + 1} / {totalImages}
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </>
  );
}

interface GalleryItemProps {
  image: PreweddingImage & { src: string };
  index: number;
  total: number;
  onClick: () => void;
}

function GalleryItem({
  image,
  index,
  total,
  onClick,
}: GalleryItemProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.04,
      }}
      className={`group relative min-h-0 overflow-hidden rounded-xl ${getLayoutClass(
        getGalleryLayout(index, total),
      )}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        style={{
          objectPosition:
            image.objectPosition ?? "center",
        }}
      />

      <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/15" />

      <div className="absolute bottom-3 left-3 rounded-full bg-black/30 px-2.5 py-1 text-[10px] text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.button>
  );
}