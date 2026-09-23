import Link from "next/link";
import { img, PHOTO } from "@/data/images";
import SafeImage from "@/components/ui/SafeImage";

/** Ornamen daun emas kecil di sudut foto — SVG sederhana, boleh diganti */
function LeafOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      className={className}
      fill="none"
      stroke="#0F766E"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M60 4 C20 40 20 100 60 196" />
      <path d="M60 30 C40 45 32 60 60 75" />
      <path d="M60 70 C36 82 28 100 60 115" />
      <path d="M60 110 C34 122 26 142 60 158" />
      <path d="M60 150 C38 160 32 175 60 190" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-x grid items-center gap-10 py-16 md:py-20 lg:grid-cols-2 lg:gap-6">
        <div className="relative z-10 max-w-xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-pine">LIFE IS AN EVENT</p>
          <h1 className="mt-4 text-3xl font-bold leading-[1.15] text-gold sm:text-4xl md:text-[2.75rem]">
            UNDANGAN DIGITAL MODERN &amp; ELEGAN, SIAP DIBAGIKAN DALAM HITUNGAN MENIT
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/70">
            Pilih tema, isi detail acara Anda, dan bagikan undangan yang terasa personal — tanpa perlu
            keahlian desain sama sekali.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/tema" className="btn-gold">
              BUAT PESANAN
            </Link>
            <Link href="/tema" className="btn-outline-gold">
              LIHAT
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
          <LeafOrnament className="absolute -right-2 -top-6 h-40 w-24 opacity-80 md:h-56 md:w-32" />
          <LeafOrnament className="absolute -left-4 bottom-0 h-32 w-20 -scale-x-100 opacity-60" />
          <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
            <SafeImage
              src={img(PHOTO.heroCouple, 900, 1100)}
              alt="Pasangan pengantin memegang buket bunga"
              seed="eunola-hero"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Ornamen titik emas */}
          <span className="absolute left-6 top-10 h-2 w-2 rounded-full bg-gold" aria-hidden />
          <span className="absolute left-16 top-24 h-1.5 w-1.5 rounded-full bg-gold/70" aria-hidden />
          <span className="absolute right-10 bottom-16 h-2 w-2 rounded-full bg-gold" aria-hidden />
        </div>
      </div>
    </section>
  );
}
