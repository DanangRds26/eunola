"use client";

import type { InvitationThemeConfig } from "@/themes/types";

export default function LoadingScreen({ config, visible }: { config: InvitationThemeConfig; visible: boolean }) {
  const initials = `${config.couple.brideNickname[0]}${config.couple.groomNickname[0]}`;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-700 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{ backgroundColor: config.colors.primary }}
    >
      <div
        className="font-display text-5xl"
        style={{
          borderColor: config.colors.accent,
          color: config.colors.accent,
          fontFamily: config.fonts.display,
        }}
      >
        {initials}
      </div>
      <p className="mt-5 text-[10px] uppercase tracking-[0.3em]" style={{ color: config.colors.accentSoft }}>
        Memuat undangan…
      </p>

      
    </div>
  );
}
