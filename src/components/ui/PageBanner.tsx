import SafeImage from "./SafeImage";
import BrandMark from "./BrandMark";
import Breadcrumb, { type Crumb } from "./Breadcrumb";
import { img, PHOTO } from "@/data/images";

interface Props {
  title: string;
  crumbs: Crumb[];
  /** Dipakai halaman Tema agar toolbar hijau menempel di bawah banner */
  className?: string;
}

/** Banner judul halaman: foto blur + overlay putih + ikon + judul + breadcrumb */
export default function PageBanner({ title, crumbs, className = "" }: Props) {
  return (
    <section className={`relative h-[210px] overflow-hidden md:h-[316px] ${className}`}>
      <SafeImage
        src={img(PHOTO.banner, 1600, 700)}
        alt=""
        seed="eunola-banner"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-[3px]"
      />
      <div className="absolute inset-0 bg-white/60" />
      <div className="container-x relative flex h-full flex-col items-center justify-center gap-1 text-center">
        <BrandMark />
        <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">{title}</h1>
        <Breadcrumb items={crumbs} />
      </div>
    </section>
  );
}
