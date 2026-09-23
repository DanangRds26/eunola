"use client";

import { useState, type RefObject } from "react";
import { Menu, Music, Pause, X } from "lucide-react";
import type { InvitationThemeConfig } from "@/themes/types";

const NAV_SECTIONS = [
  { id: "cover", label: "Home" },
  { id: "couple", label: "Mempelai" },
  { id: "countdown", label: "Countdown" },
  { id: "event", label: "Acara" },
  { id: "love-story", label: "Love Story" },
  { id: "gift", label: "Gift" },
  { id: "rsvp", label: "RSVP" },
];

export default function FloatingButtons({
  config,
  audioRef,
  playing,
  onToggleMusic,
}: {
  config: InvitationThemeConfig;
  audioRef: RefObject<HTMLAudioElement | null>;
  playing: boolean;
  onToggleMusic: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { colors } = config;

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleMusicClick = () => {
    const el = audioRef.current;
    
    // Validasi: Cegah pemutaran jika audio belum siap atau src tidak valid
    if (!el || !config.musicSrc) {
      console.warn("Audio belum siap atau file musik belum ditentukan di config.musicSrc");
      return;
    }

    onToggleMusic();
  };

  return (
    <>
      {/* Menu navigasi */}
      <div className="fixed right-4 top-4 z-40">
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu navigasi"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full text-black/70 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: colors.primary }}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {menuOpen && (
          <nav
            className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border shadow-xl"
            style={{ backgroundColor: "#fff", borderColor: colors.accentSoft }}
          >
            <ul className="py-1 text-sm">
              {NAV_SECTIONS.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => goTo(s.id)}
                    className="block w-full px-4 py-2.5 text-left transition-colors hover:opacity-80"
                    style={{ color: colors.text }}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Tombol musik (Hanya muncul jika config.musicSrc diisi) */}
      {config.musicSrc && (
        <button
          type="button"
          onClick={handleMusicClick}
          aria-label={playing ? "Jeda musik" : "Putar musik"}
          className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105"
          style={{ backgroundColor: colors.accent }}
        >
          {playing ? <Pause className="h-4 w-4" /> : <Music className="h-4 w-4" />}
        </button>
      )}

      {/* Tag Audio Tersembunyi */}
      {config.musicSrc && (
        <audio ref={audioRef} src={config.musicSrc} loop preload="auto" />
      )}
    </>
  );
}