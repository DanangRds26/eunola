"use client";

import { useEffect, useRef, useState } from "react";
import type { InvitationThemeConfig } from "@/themes/types";
import LoadingScreen from "@/components/invitation/sections/LoadingScreen";
import Cover from "@/components/invitation/sections/Cover";
import Quote from "@/components/invitation/sections/Quote";
import Couple from "@/components/invitation/sections/Couple";
import Countdown from "@/components/invitation/sections/Countdown";
import EventDetails from "@/components/invitation/sections/EventDetails";
import LiveMoment from "@/components/invitation/sections/LiveMoment";
import LoveStory from "@/components/invitation/sections/LoveStory";
import Gift from "@/components/invitation/sections/Gift";
import Rsvp from "@/components/invitation/sections/Rsvp";
import ClosingPrayer from "@/components/invitation/sections/ClosingPrayer";
import Closing from "@/components/invitation/sections/Closing";
import FloatingButtons from "@/components/invitation/FloatingButtons";

export default function WeddingInvitation({ config }: { config: InvitationThemeConfig }) {
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 2200);
    return () => window.clearTimeout(t);
  }, []);

  const onOpen = () => {
    setOpened(true);
    if (audioRef.current && config.musicSrc) {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch((err) => {
          console.log("Autoplay diblokir browser:", err);
        });
    }
  };

  const toggleMusic = () => {
    const el = audioRef.current;
    if (!el || !config.musicSrc) return;
    
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      el.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white" style={{ fontFamily: config.fonts.body }}>
      <LoadingScreen config={config} visible={loading} />

      {/* Cover dengan Animasi Sembunyi / Terangkat ke Atas */}
      <div 
        id="cover" 
        className={opened ? "animate-[cover-slide-up_0.8s_ease-in-out_forwards]" : "relative z-30"}
      >
        <Cover config={config} onOpen={onOpen} />
      </div>

      {/* Isi Undangan */}
      {opened && (
        <div className="animate-[invitation-content-in_1s_ease-out_0.3s_both]">
          <Quote config={config} />
          <div id="couple"><Couple config={config} /></div>
          <div id="countdown"><Countdown config={config} /></div>
          <div id="event"><EventDetails config={config} /></div>
          <LiveMoment config={config} />
          <div id="love-story"><LoveStory config={config} /></div>
          <div id="gift"><Gift config={config} /></div>
          <div id="rsvp"><Rsvp config={config} /></div>
          <ClosingPrayer config={config} />
          <Closing config={config} />
        </div>
      )}

      {/* Floating Buttons & Audio Element disatukan di sini */}
      <FloatingButtons config={config} audioRef={audioRef} playing={playing} onToggleMusic={toggleMusic} />

      <style>{`
        @keyframes cover-slide-up {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; display: none; }
        }
        @keyframes invitation-content-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}