import { BadgeCheck, Headset, PackageCheck, Trophy, type LucideIcon } from "lucide-react";

const badges: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: Trophy, title: "High Quality", text: "crafted from top materials" },
  { icon: BadgeCheck, title: "Warranty Protection", text: "Over 2 years" },
  { icon: PackageCheck, title: "Free Shipping", text: "Order over 150 $" },
  { icon: Headset, title: "24 / 7 Support", text: "Dedicated support" },
];

/** Baris 4 keunggulan di atas footer (tampil di semua halaman lewat layout.tsx) */
export default function TrustBadges() {
  return (
    <section aria-label="Keunggulan Eunola" className="bg-cream py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
        {badges.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-center gap-4">
            <Icon className="h-11 w-11 shrink-0 text-ink" strokeWidth={1.4} aria-hidden />
            <div>
              <p className="text-xl font-semibold leading-tight text-ink">{title}</p>
              <p className="mt-0.5 text-base text-muted">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
