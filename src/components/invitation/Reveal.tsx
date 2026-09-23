"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";
import { cn } from "@/lib/utils";

type Variant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom-in";

const hidden: Record<Variant, string> = {
  "fade-up": "opacity-0 translate-y-8",
  "fade-in": "opacity-0",
  "slide-left": "opacity-0 -translate-x-10",
  "slide-right": "opacity-0 translate-x-10",
  "zoom-in": "opacity-0 scale-95",
};

interface Props {
  children: ReactNode;
  variant?: Variant;
  delay?: number; // ms
  className?: string;
}

/** Bungkus elemen apa pun dengan animasi scroll-reveal elegan (sekali jalan, hormat reduced-motion) */
export default function Reveal({ children, variant = "fade-up", delay = 0, className }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "translate-x-0 translate-y-0 scale-100 opacity-100" : hidden[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}
