import type { InvitationThemeConfig } from "@/themes/types";
import Reveal from "@/components/invitation/Reveal";

export default function Quote({ config }: { config: InvitationThemeConfig }) {
  const { couple, colors, fonts } = config;

  return (
    <section className=" relative
    flex
    min-h-[70svh]
    items-center
    justify-center
    px-7
    py-24
    text-center" style={{ backgroundColor: colors.surface, color: colors.text }}>
      <div className="mx-auto max-w-[330px]">
        <Reveal variant="fade-up">
          <p dir="rtl" lang="ar" className="text-2xl leading-loose sm:text-3xl" style={{ fontFamily: fonts.display }}>
            {couple.quoteArabic}
          </p>
        </Reveal>
        <Reveal variant="fade-up" delay={150}>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed" style={{ color: colors.textMuted }}>
            &ldquo;{couple.quoteTranslation}&rdquo;
          </p>
        </Reveal>
        <Reveal variant="fade-up" delay={300}>
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest" style={{ color: colors.accent }}>
            {couple.quoteSource}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
