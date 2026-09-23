import { img, PHOTO } from "@/data/images";
import SafeImage from "@/components/ui/SafeImage";

/** Grid asimetris gaya kolase untuk section #EunolaTemplate */
export default function HashtagGallery() {
  const photos = [...PHOTO.interiors, ...PHOTO.weddings];

  const tiles = [
    "row-span-2",
    "row-span-1",
    "row-span-1",
    "row-span-2",
    "row-span-2",
    "row-span-1",
    "row-span-1",
  ];

  return (
    <section id="tentang" className="section-y bg-cream">
      <div className="container-x text-center">
        <p className="text-sm text-muted">Share your design with</p>
        <h2 className="font-display mt-1 text-3xl font-semibold text-ink md:text-4xl">#EunolaTemplate</h2>

        <div className="mt-10 grid auto-rows-[110px] grid-cols-2 gap-4 sm:auto-rows-[130px] sm:grid-cols-4 md:auto-rows-[150px]">
          {tiles.map((span, i) => (
            <div key={i} className={`overflow-hidden rounded-lg ${span}`}>
              <SafeImage
                src={img(photos[i % photos.length], 500, 500)}
                alt=""
                seed={`hashtag-${i}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
