"use client";

import { useState } from "react";
import { Check, Copy, MessageCircle } from "lucide-react";
import type { InvitationThemeConfig } from "@/themes/types";
import Reveal from "@/components/invitation/Reveal";

function CopyButton({ value, config }: { value: string; config: InvitationThemeConfig }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // GANTI DI SINI: fallback jika clipboard API diblokir browser lama
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors"
      style={{ borderColor: config.colors.accent, color: config.colors.accent }}
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Tersalin!" : "Salin"}
    </button>
  );
}

export default function Gift({ config }: { config: InvitationThemeConfig }) {
  const { colors, couple } = config;

  return (
    <section className="px-6 py-20 text-center" style={{ backgroundColor: colors.surface }}>
      <Reveal variant="fade-up">
        <h2 className="text-3xl" style={{ fontFamily: config.fonts.script, color: colors.text }}>
          Wedding Gift
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: colors.textMuted }}>
          Tanpa mengurangi rasa hormat, bagi Anda yang ingin memberikan tanda kasih untuk mempelai, dapat
          melalui virtual account atau E-wallet berikut.
        </p>

        <div className="mx-auto mt-8 flex max-w-xs flex-col gap-4">
          {couple.bankAccounts.map((acc) => (
            <div
              key={acc.number}
              className="rounded-xl border bg-white p-5 text-left shadow-sm"
              style={{ borderColor: colors.accentSoft }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: colors.accent }}>
                {acc.bank}
              </p>
              <div className="mt-1 flex items-center justify-between gap-3">
                <p className="text-lg font-semibold" style={{ color: colors.text }}>
                  {acc.number}
                </p>
                <CopyButton value={acc.number} config={config} />
              </div>
              <p className="mt-1 text-sm" style={{ color: colors.textMuted }}>
                a.n. {acc.holder}
              </p>
            </div>
          ))}

          <div className="rounded-xl border bg-white p-5 text-left shadow-sm" style={{ borderColor: colors.accentSoft }}>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: colors.accent }}>
              Alamat Kirim Kado
            </p>
            <div className="mt-1 flex items-start justify-between gap-3">
              <p className="text-sm leading-relaxed" style={{ color: colors.text }}>
                {couple.giftAddress}
              </p>
              <CopyButton value={couple.giftAddress} config={config} />
            </div>
          </div>
        </div>

        <a
          href={`https://wa.me/${couple.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
          style={{ backgroundColor: colors.accent }}
        >
          <MessageCircle className="h-4 w-4" /> Hubungi Kami
        </a>
      </Reveal>
    </section>
  );
}
