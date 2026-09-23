import { CalendarPlus, MapPin } from "lucide-react";
import type { InvitationThemeConfig } from "@/themes/types";
import Reveal from "@/components/invitation/Reveal";

function gcalUrl(config: InvitationThemeConfig) {
  const start = new Date(config.couple.eventDateTime);
  const end = new Date(start.getTime() + 4 * 3600000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const text = encodeURIComponent(`Pernikahan ${config.couple.brideNickname} & ${config.couple.groomNickname}`);
  const details = encodeURIComponent(`Bertempat di ${config.couple.venueName}`);
  const location = encodeURIComponent(config.couple.venueAddress);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${fmt(start)}/${fmt(
    end,
  )}&details=${details}&location=${location}`;
}

function EventCard({
  title,
  time,
  config,
}: {
  title: string;
  time: string;
  config: InvitationThemeConfig;
}) {
  return (
    <Reveal variant="zoom-in" className="w-full max-w-sm">
      <div
        className="rounded-2xl border p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        style={{ borderColor: config.colors.accentSoft, backgroundColor: "#fff" }}
      >
        <h3 className="text-2xl" style={{ fontFamily: config.fonts.display, color: config.colors.text }}>
          {title}
        </h3>
        <p className="mt-3 text-sm" style={{ color: config.colors.textMuted }}>
          {config.couple.eventDateLabel}
        </p>
        <p className="mt-1 text-base font-medium" style={{ color: config.colors.accent }}>
          {time}
        </p>
      </div>
    </Reveal>
  );
}

export default function EventDetails({ config }: { config: InvitationThemeConfig }) {
  const { couple, colors } = config;

  return (
    <section className="px-6 py-20 text-center" style={{ backgroundColor: colors.surface }}>
      <Reveal variant="fade-up">
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: colors.accent }}>
          Save The Date
        </p>
        <h2 className="mt-2 text-3xl" style={{ fontFamily: config.fonts.script, color: colors.text }}>
          Waktu &amp; Tempat
        </h2>
      </Reveal>

      <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-6 sm:flex-row sm:justify-center">
        <EventCard title="Akad Nikah" time={couple.akadTime} config={config} />
        <EventCard title="Resepsi" time={couple.resepsiTime} config={config} />
      </div>

      <Reveal variant="fade-up" delay={150}>
        <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed" style={{ color: colors.textMuted }}>
          {couple.venueName} — {couple.venueAddress}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={couple.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-medium transition-colors hover:text-white"
            style={{ borderColor: colors.accent, color: colors.accent }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.accentSoft)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <MapPin className="h-4 w-4" /> Lihat Lokasi
          </a>
          <a
            href={gcalUrl(config)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
            style={{ backgroundColor: colors.accent }}
          >
            <CalendarPlus className="h-4 w-4" /> Simpan ke Kalender
          </a>
        </div>
      </Reveal>
    </section>
  );
}
