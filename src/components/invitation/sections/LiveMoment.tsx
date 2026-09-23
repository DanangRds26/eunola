import type { InvitationThemeConfig } from "@/themes/types";
import Reveal from "@/components/invitation/Reveal";

export default function LiveMoment({ config }: { config: InvitationThemeConfig }) {
  const { colors, couple } = config;

  return (
    <section className="px-6 py-20 text-center" style={{ backgroundColor: colors.primary }}>
      <Reveal variant="fade-up">
        <h2 className="text-2xl uppercase tracking-widest" style={{ color: colors.accentSoft }}>
          Live Moment
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: colors.accentSoft }}>
          Bantu mengabadikan momen-momen bahagia di hari pernikahan kami dengan menandai postingan Anda
          dengan hashtag berikut:
        </p>

        <p
          className="mt-6 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl"
          style={{
            fontFamily: config.fonts.display,
            backgroundImage: `linear-gradient(90deg, ${colors.accent}, #fff, ${colors.accent})`,
            backgroundSize: "200% auto",
            animation: "invitation-shimmer 3.5s linear infinite",
          }}
        >
          {couple.hashtag}
        </p>
      </Reveal>

      <style>{`
        @keyframes invitation-shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}
