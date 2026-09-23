import type { InvitationThemeConfig } from "@/themes/types";
import Reveal from "@/components/invitation/Reveal";

export default function LoveStory({ config }: { config: InvitationThemeConfig }) {
  const { colors, couple } = config;

  return (
    <section className="px-6 py-20" style={{ backgroundColor: "#fff" }}>
      <Reveal variant="fade-up">
        <h2 className="text-center text-3xl" style={{ fontFamily: config.fonts.script, color: colors.text }}>
          Our Stories
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-14 max-w-lg">
        <div
          className="absolute bottom-0 left-4 top-0 w-px sm:left-1/2"
          style={{ backgroundColor: colors.accentSoft }}
          aria-hidden
        />

        <ol className="space-y-12">
          {couple.loveStory.map((moment, i) => (
            <li key={moment.title} className="relative pl-12 sm:pl-0">
              <Reveal variant={i % 2 === 0 ? "slide-right" : "slide-left"} className="sm:grid sm:grid-cols-2 sm:gap-10">
                <div className={i % 2 === 0 ? "sm:col-start-1 sm:text-right" : "sm:col-start-2"}>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: colors.accent }}>
                    {moment.date}
                  </p>
                  <h3 className="mt-1 text-xl" style={{ fontFamily: config.fonts.display, color: colors.text }}>
                    {moment.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: colors.textMuted }}>
                    {moment.text}
                  </p>
                </div>
              </Reveal>

              <span
                className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 bg-white sm:left-1/2"
                style={{ borderColor: colors.accent }}
                aria-hidden
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
