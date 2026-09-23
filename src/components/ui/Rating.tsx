import { Star } from "lucide-react";

/** Bintang rating dengan dukungan setengah bintang (mis. 4.5) */
export default function Rating({ value, size = 16 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`Rating ${value} dari 5`}>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
            <Star size={size} className="absolute inset-0 text-gold/25" fill="currentColor" strokeWidth={0} />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star
                size={size}
                className="text-gold"
                fill="currentColor"
                strokeWidth={0}
                style={{ width: size, height: size, maxWidth: "none" }}
              />
            </span>
          </span>
        );
      })}
    </div>
  );
}
