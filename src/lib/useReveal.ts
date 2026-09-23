"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hook animasi scroll-reveal ringan (tanpa library eksternal seperti AOS).
 * Elemen mendapat class "is-visible" saat 20% bagiannya masuk viewport,
 * lalu berhenti mengamati (animasi hanya terjadi sekali).
 */
export function useReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Hormati preferensi "reduced motion": langsung tampil tanpa animasi
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
