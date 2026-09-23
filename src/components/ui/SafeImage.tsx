"use client";

import { useState, type ImgHTMLAttributes } from "react";

interface Props extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  src: string;
  alt: string;
  /** Seed untuk gambar cadangan (picsum) jika `src` gagal dimuat */
  seed?: string;
}

/**
 * <img> dengan lazy loading + gambar cadangan otomatis.
 * Berguna selama memakai foto placeholder: jika satu URL mati, halaman tidak rusak.
 */
export default function SafeImage({ src, alt, seed, className, ...rest }: Props) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const fallback = `https://picsum.photos/seed/${encodeURIComponent(seed ?? alt)}/800/800`;

  return (
    <img
      loading="lazy"
      decoding="async"
      {...rest}
      src={failedSrc === src ? fallback : src}
      alt={alt}
      className={className}
      onError={() => setFailedSrc(src)}
    />
  );
}
