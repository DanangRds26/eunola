import type { InvitationThemeConfig } from "@/themes/types";
import Reveal from "@/components/invitation/Reveal";

export default function ClosingPrayer({ config }: { config: InvitationThemeConfig }) {
  const { colors, couple } = config;

  return (
    <section className="px-6 py-20 text-center" style={{ backgroundColor: "#fff" }}>
      <Reveal variant="fade-up">
        <p
          dir="rtl"
          lang="ar"
          className="text-2xl sm:text-3xl"
          style={{
            fontFamily: config.fonts.display,
            color: colors.accent,
            animation: "invitation-glow 3s ease-in-out infinite",
          }}
        >
          {couple.doaArabic}
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm italic" style={{ color: colors.textMuted }}>
          {couple.doaTransliteration}
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed" style={{ color: colors.text }}>
          &ldquo;{couple.doaTranslation}&rdquo;
        </p>
      </Reveal>

      <style>{`
        @keyframes invitation-glow {
          0%, 100% { text-shadow: 0 0 6px ${colors.accent}33; }
          50% { text-shadow: 0 0 18px ${colors.accent}88; }
        }
      `}</style>
    </section>
  );
}
