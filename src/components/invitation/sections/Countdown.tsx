"use client";

import { useEffect, useState } from "react";
import type { InvitationThemeConfig } from "@/themes/types";
import Reveal from "@/components/invitation/Reveal";

function diff(target: number) {
  const now = Date.now();
  const total = Math.max(0, target - now);
  return {
    days: Math.floor(total / 86400000),
    hours: Math.floor((total / 3600000) % 24),
    minutes: Math.floor((total / 60000) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

function Box({ value, label, config }: { value: number; label: string; config: InvitationThemeConfig }) {
  return (
    <div
      className="flex w-20 flex-col items-center rounded-xl border py-4 sm:w-24"
      style={{ borderColor: config.colors.accent, backgroundColor: `${config.colors.primary}` }}
    >
      <span
        key={value}
        className="text-3xl font-semibold sm:text-4xl"
        style={{ color: config.colors.accent, fontFamily: config.fonts.display, animation: "invitation-flip 0.5s ease-out" }}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-widest" style={{ color: config.colors.accentSoft }}>
        {label}
      </span>
    </div>
  );
}

export default function Countdown({ config }: { config: InvitationThemeConfig }) {
  const target = new Date(config.couple.eventDateTime).getTime();
  // Mulai dari semua nol agar render server & client pertama selalu sama (hindari hydration mismatch),
  // lalu dihitung ulang sesaat setelah komponen terpasang di browser.
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setTime(diff(target));
    const id = setInterval(() => setTime(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section className="px-6 py-20 text-center" style={{ backgroundColor: config.colors.primary }}>
      <Reveal variant="fade-up">
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: config.colors.accentSoft }}>
          Menghitung hari menuju
        </p>
        <h2 className="mt-2 text-3xl" style={{ fontFamily: config.fonts.script, color: config.colors.accent }}>
          Hari Bahagia Kami
        </h2>

        <div className="mt-8 flex justify-center gap-3 sm:gap-5">
          <Box value={time.days} label="Hari" config={config} />
          <Box value={time.hours} label="Jam" config={config} />
          <Box value={time.minutes} label="Menit" config={config} />
          <Box value={time.seconds} label="Detik" config={config} />
        </div>
      </Reveal>

      <style>{`
        @keyframes invitation-flip {
          from { transform: rotateX(90deg); opacity: 0.3; }
          to { transform: rotateX(0deg); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
