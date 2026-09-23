"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { img, PHOTO } from "@/data/images";
import SafeImage from "@/components/ui/SafeImage";

const slides = [
  { label: "01 — Bed Room", title: "Inner Peace" },
  { label: "02 — Living Room", title: "Quiet Hours" },
  { label: "03 — Garden", title: "Golden Hour" },
  { label: "04 — Dining", title: "Warm Table" },
];

/** Section hijau tua "50+ Berbagai macam Template": 2 kolom, teks kiri + kolase kanan */
export default function TemplateShowcase() {
  const [active, setActive] = useState(0);
  const photos = PHOTO.interiors;

  return (
    <section id="fitur" className="bg-pine section-y">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="text-white">
          <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
            50+ Berbagai macam Template
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
            Tim desain kami terus menambah pilihan tema baru setiap bulan, dari yang minimalis hingga yang
            mewah — semua siap dipakai dan mudah disesuaikan.
          </p>
          <Link href="/tema" className="btn-gold mt-7 inline-flex">
            Explore More
          </Link>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-lg sm:col-span-1">
              <SafeImage
                src={img(photos[active % photos.length], 700, 500)}
                alt=""
                seed={`showcase-a-${active}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-md bg-white/95 px-4 py-3">
                <div>
                  <p className="text-[11px] font-semibold text-muted">{slides[active].label}</p>
                  <p className="text-base font-semibold text-ink">{slides[active].title}</p>
                </div>
                <Link
                  href="/tema"
                  aria-label={`Lihat tema ${slides[active].title}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative hidden aspect-[16/10] overflow-hidden rounded-lg sm:block">
              <SafeImage
                src={img(photos[(active + 1) % photos.length], 700, 500)}
                alt=""
                seed={`showcase-b-${active}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-2 lg:justify-start">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Tampilkan slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2.5 rounded-full transition-all ${
                  active === i ? "w-6 bg-gold" : "w-2.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
