"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { InvitationThemeConfig } from "@/themes/types";
import Reveal from "@/components/invitation/Reveal";
import { formatDate } from "@/lib/utils";

interface Wish {
  name: string;
  attending: "hadir" | "tidak-hadir";
  message: string;
  createdAt: string; // ISO
}

function storageKey(themeId: string) {
  return `eunola-rsvp-${themeId}`;
}

function loadWishes(themeId: string): Wish[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(storageKey(themeId));
    return raw ? (JSON.parse(raw) as Wish[]) : [];
  } catch {
    return [];
  }
}

export default function Rsvp({ config }: { config: InvitationThemeConfig }) {
  const { colors } = config;
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<Wish["attending"]>("hadir");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setWishes(loadWishes(config.id));
  }, [config.id]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError("Nama minimal 2 karakter");
      return;
    }
    if (!message.trim()) {
      setError("Ucapan tidak boleh kosong");
      return;
    }
    setError("");

    const next: Wish = { name: name.trim(), attending, message: message.trim(), createdAt: new Date().toISOString() };
    const updated = [next, ...wishes];
    setWishes(updated);
    window.localStorage.setItem(storageKey(config.id), JSON.stringify(updated));
    setName("");
    setMessage("");
  };

  const hadirCount = wishes.filter((w) => w.attending === "hadir").length;
  const tidakHadirCount = wishes.filter((w) => w.attending === "tidak-hadir").length;

  return (
    <section className="px-6 py-20" style={{ backgroundColor: colors.surface }}>
      <div className="mx-auto max-w-xl">
        <Reveal variant="fade-up">
          <h2 className="text-center text-3xl" style={{ fontFamily: config.fonts.script, color: colors.text }}>
            Konfirmasi Kehadiran &amp; Do&apos;a
          </h2>
          <p className="mt-3 text-center text-sm" style={{ color: colors.textMuted }}>
            Kirimkan ucapan dan doa restu untuk kami
          </p>
          <p className="mt-4 text-center text-sm font-medium" style={{ color: colors.accent }}>
            {hadirCount} Hadir &nbsp;|&nbsp; {tidakHadirCount} Tidak Hadir
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={100}>
          <form onSubmit={onSubmit} noValidate className="mt-8 space-y-4 rounded-2xl border bg-white p-6" style={{ borderColor: colors.accentSoft }}>
            <div>
              <label className="mb-1.5 block text-xs font-medium" style={{ color: colors.text }}>
                Nama
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
                placeholder="Nama Anda"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium" style={{ color: colors.text }}>
                Kehadiran
              </label>
              <div className="flex gap-4 text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={attending === "hadir"}
                    onChange={() => setAttending("hadir")}
                    className="h-4 w-4"
                    style={{ accentColor: colors.accent }}
                  />
                  Hadir
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={attending === "tidak-hadir"}
                    onChange={() => setAttending("tidak-hadir")}
                    className="h-4 w-4"
                    style={{ accentColor: colors.accent }}
                  />
                  Tidak Hadir
                </label>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium" style={{ color: colors.text }}>
                Ucapan &amp; Doa
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="input h-auto py-3"
                placeholder="Tulis ucapan dan doa restu Anda…"
              />
            </div>

            {error && <p className="text-xs text-red-600">{error}</p>}

            <button
              type="submit"
              className="w-full rounded-full py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: colors.accent }}
            >
              Kirim
            </button>
          </form>
        </Reveal>

        {wishes.length > 0 && (
          <ul className="mt-8 space-y-4">
            {wishes.map((w, i) => (
              <Reveal key={w.createdAt + i} variant="fade-up" delay={i * 60}>
                <li className="rounded-xl border bg-white p-4" style={{ borderColor: colors.accentSoft }}>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold" style={{ color: colors.text }}>
                      {w.name}
                    </p>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-medium"
                      style={{
                        backgroundColor: w.attending === "hadir" ? `${colors.accent}22` : "#f3f4f6",
                        color: w.attending === "hadir" ? colors.accent : colors.textMuted,
                      }}
                    >
                      {w.attending === "hadir" ? "Hadir" : "Tidak Hadir"}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed" style={{ color: colors.textMuted }}>
                    {w.message}
                  </p>
                  <p className="mt-1 text-[11px] text-gray-400">{formatDate(w.createdAt.slice(0, 10))}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
