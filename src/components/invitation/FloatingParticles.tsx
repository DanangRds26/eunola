"use client";

import type { InvitationThemeConfig } from "@/themes/types";

/** Kelopak/partikel jatuh perlahan — murni CSS, tanpa canvas, ringan dipakai di banyak section */
export default function FloatingParticles({ config, count = 8 }: { config: InvitationThemeConfig; count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((i) => {
        const left = (i * 137.5) % 100; // sebaran semu-acak yang stabil (deterministik)
        const duration = 9 + (i % 5) * 2;
        const delay = (i % 7) * 1.3;
        const size = 6 + (i % 3) * 3;
        
        return (
          <span
            key={i}
            className="absolute top-[-5%] rounded-full opacity-70"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              background: config.colors.accentSoft,
              animation: `invitation-fall ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}

      {/* Tag style dipindah keluar dari map agar tidak terduplikasi 14 kali */}
      <style jsx global>{`
        @keyframes invitation-fall {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.5; }
          100% { transform: translateY(115vh) translateX(30px) rotate(180deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}