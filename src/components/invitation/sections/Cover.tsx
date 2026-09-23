"use client";

import type { InvitationThemeConfig } from "@/themes/types";
import { img } from "@/data/images";
import SafeImage from "@/components/ui/SafeImage";
import FloatingParticles from "@/components/invitation/FloatingParticles";

export default function Cover({
  config,
  onOpen,
}: {
  config: InvitationThemeConfig;
  onOpen: () => void;
}) {
  const { couple, colors, fonts } = config;

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden text-center">
      {/* Background Hero Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={img(couple.heroPhoto, 1200, 1600)}
          alt={`${couple.brideNickname} & ${couple.groomNickname}`}
          seed="cover"
          fill
          priority
          className="h-full w-full object-cover animate-[invitation-zoom_18s_ease-in-out_infinite_alternate]"
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to bottom, ${colors.primaryDark}66 0%, ${colors.primaryDark}22 45%, ${colors.primaryDark}CC 100%)`,
          }}
        />
      </div>

      {/* Partikel Melayang */}
      <FloatingParticles config={config} />

      {/* Konten Utama Sampul */}
      <div 
        className="relative
          z-10
          flex
          h-full
          flex-col
          items-center
          justify-center
          px-6
          pb-10
          text-center"
      >
        <p className="text-[14px] uppercase tracking-[0.35em]" style={{ color: colors.accentSoft }}>
          The Wedding Of
        </p>
        <h1
          className="
            mt-6
            flex
            flex-col
            items-center
            text-center
            font-display
            text-[56px]
            leading-[0.9]
            sm:text-[64px]
          "
          style={{
            fontFamily: config.fonts.display,
            color: colors.accent,
          }}
        >
          <span>{couple.brideNickname}</span>

          <span className="my-3 text-[18px] leading-none">
            &amp;
          </span>

          <span>{couple.groomNickname}</span>

          <div className="mt-5 flex items-center gap-6">
          <span
            className="h-px w-10 opacity-60"
            style={{
              backgroundColor: colors.accent,
            }}
          />

          <span
            className="text-xs"
            style={{
              color: colors.accent,
            }}
          >
            ✦
          </span>

          <span
            className="h-px w-10 opacity-60"
            style={{
              backgroundColor: colors.accent,
            }}
          />
        </div>
        </h1>

        

        <p className="mt-5 text-sm tracking-widest" style={{ color: colors.accentSoft }}>
          {couple.eventDateLabel}
        </p>

        {/* Tombol Buka Undangan */}
        <button
          type="button"
          onClick={onOpen}
          className="mt-10
            border
            border-white/70
            px-8
            py-3
            text-[10px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-white
            transition-all
            duration-300
            hover:bg-white
            hover:text-black"
          style={{
            borderColor: colors.accent,
            boxShadow: `0 0 24px ${colors.accent}55`,
            animation: "invitation-pulse 2.4s ease-in-out infinite",
          }}
        >
          Buka Undangan
        </button>
      </div>

      <style jsx global>{`
        @keyframes invitation-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes invitation-fade-in {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes invitation-pulse {
          0%, 100% { box-shadow: 0 0 16px ${colors.accent}44; }
          50% { box-shadow: 0 0 30px ${colors.accent}99; }
        }
      `}</style>
    </section>
  );
}