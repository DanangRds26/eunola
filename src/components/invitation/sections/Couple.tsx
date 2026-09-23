import type { InvitationThemeConfig } from "@/themes/types";
import { img } from "@/data/images";
import SafeImage from "@/components/ui/SafeImage";
import Reveal from "@/components/invitation/Reveal";

function ProfileCard({
  photo,
  name,
  parents,
  config,
}: {
  photo: string;
  name: string;
  parents: string;
  config: InvitationThemeConfig;
}) {
  return (
    <div className="text-center">
      <div
        className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 p-1 sm:h-48 sm:w-48"
        style={{ borderColor: config.colors.accent }}
      >
        <SafeImage src={img(photo, 400, 400)} alt={name} seed={name} className="h-full w-full overflow-hidden rounded-full" />
      </div>
      <h3 className="mt-6 text-3xl" style={{ fontFamily: config.fonts.display, color: config.colors.text }}>
        {name}
      </h3>
      <p className="mx-auto mt-2 max-w-[220px] text-xs leading-relaxed" style={{ color: config.colors.textMuted }}>
        {parents}
      </p>
    </div>
  );
}

export default function Couple({ config }: { config: InvitationThemeConfig }) {
  const { couple, colors } = config;

  return (
    <section className="px-6 py-20" style={{ backgroundColor: "#ffffff" }}>
      <div className="mx-auto max-w-3xl text-center">
        <Reveal variant="fade-up">
          <p className="mx-auto max-w-xl text-sm leading-relaxed" style={{ color: colors.textMuted }}>
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta&apos;ala, insyaaAllah kami akan
            menyelenggarakan acara pernikahan:
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6">
          <Reveal variant="slide-left">
            <ProfileCard photo={couple.bridePhoto} name={couple.brideName} parents={couple.brideParents} config={config} />
          </Reveal>

          <Reveal variant="zoom-in" delay={200}>
            <span className="text-2xl" style={{ fontFamily: config.fonts.script, color: colors.accent }}>
              &amp;
            </span>
          </Reveal>

          <Reveal variant="slide-right">
            <ProfileCard photo={couple.groomPhoto} name={couple.groomName} parents={couple.groomParents} config={config} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
