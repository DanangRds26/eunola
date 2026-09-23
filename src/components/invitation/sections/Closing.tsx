import type { InvitationThemeConfig } from "@/themes/types";
import Reveal from "@/components/invitation/Reveal";

export default function Closing({ config }: { config: InvitationThemeConfig }) {
  const { colors, couple, fonts } = config;

  return (
    <section
      className="relative overflow-hidden px-6 py-24 text-center"
      style={{ backgroundColor: colors.primaryDark }}
    >
      <Reveal variant="fade-up">
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: colors.accentSoft }}>
          Atas kehadiran dan do&apos;a restu dari Bapak/Ibu/Saudara/i sekalian, kami mengucapkan
        </p>
        <h2 className="mt-4 text-5xl sm:text-6xl" style={{ fontFamily: fonts.script, color: colors.accent }}>
          Terima Kasih
        </h2>
        <p className="mt-8 text-xs uppercase tracking-[0.3em]" style={{ color: colors.accentSoft }}>
          Join Our Wedding
        </p>
        <p className="mt-2 text-2xl" style={{ fontFamily: fonts.display, color: "#fff" }}>
          {couple.brideNickname} &amp; {couple.groomNickname}
        </p>
        <p className="mt-1 text-sm" style={{ color: colors.accentSoft }}>
          {couple.eventDateLabel}
        </p>

        <p className="mt-14 text-[11px]" style={{ color: `${colors.accentSoft}99` }}>
          {couple.closingCredit}
        </p>
      </Reveal>
    </section>
  );
}
