"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { footerLinks, siteConfig } from "@/data/site";

/** Ikon WhatsApp & X tidak ada di lucide-react versi ini, jadi dibuat manual sebagai SVG kecil */
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12.01 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.32A9.93 9.93 0 0 0 12.01 22C17.53 22 22 17.52 22 12S17.53 2 12.01 2Zm0 18.13c-1.63 0-3.15-.44-4.46-1.22l-.32-.19-3 .78.8-2.93-.21-.3A8.08 8.08 0 0 1 3.9 12c0-4.48 3.64-8.12 8.11-8.12S20.12 7.52 20.12 12s-3.64 8.13-8.11 8.13Zm4.45-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.21-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03s.87 2.36 1 2.53c.12.16 1.71 2.62 4.15 3.67.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-7.6 8.68L23.4 22h-7.02l-5.5-7.19L4.6 22H1.5l8.13-9.29L.9 2h7.2l4.97 6.57L18.9 2Zm-1.23 18h1.94L7.4 3.9H5.32L17.67 20Z" />
    </svg>
  );
}

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: <Facebook className="h-5 w-5" /> },
  { label: "WhatsApp", href: `https://wa.me/${siteConfig.whatsapp}`, icon: <WhatsAppIcon /> },
  { label: "YouTube", href: "https://youtube.com", icon: <Youtube className="h-5 w-5" /> },
  { label: "X", href: "https://x.com", icon: <XIcon /> },
  { label: "Instagram", href: "https://instagram.com", icon: <Instagram className="h-5 w-5" /> },
];

const paymentLogos = [
  "VISA", "Mastercard", "JCB", "American Express", "BCA", "BNI", "BANK BRI", "mandiri", "PermataBank",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // GANTI DI SINI: hubungkan ke provider newsletter (mis. Mailchimp) lewat API route
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-maroon text-white">
      <div className="container-x grid gap-10 py-14 md:py-16 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
        {/* Kolom 1: Logo + deskripsi */}
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/brand/logo-stacked.png"
              alt="Eunola"
              width={600}
              height={300}
              className="h-14 w-auto brightness-0 invert"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/85">{siteConfig.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-maroon transition-transform hover:scale-105"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Kolom 2: Produk */}
        <nav aria-label="Produk">
          <h3 className="mb-4 text-base font-semibold">Produk</h3>
          <ul className="space-y-2.5 text-sm">
            {footerLinks.produk.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sun/90 hover:text-sun hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kolom 3: Help */}
        <nav aria-label="Bantuan">
          <h3 className="mb-4 text-base font-semibold">Help</h3>
          <ul className="space-y-2.5 text-sm">
            {footerLinks.help.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sun/90 hover:text-sun hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kolom 4: Newsletter */}
        <div>
          <h3 className="mb-4 text-base font-semibold">Newsletter</h3>
          <form onSubmit={onSubscribe} className="flex overflow-hidden rounded-md bg-white">
            <label htmlFor="newsletter-email" className="sr-only">
              Alamat email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              className="w-full px-4 py-3 text-sm text-ink outline-none"
            />
            <button
              type="submit"
              className="shrink-0 bg-ink px-4 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-black"
            >
              SUBSCRIBE
            </button>
          </form>
          {subscribed && <p className="mt-2 text-xs text-sun">Terima kasih! Cek email Anda untuk konfirmasi.</p>}

          <h3 className="mb-3 mt-8 text-base font-semibold">Metode Pembayaran</h3>
          <div className="flex flex-wrap gap-x-3 gap-y-2 rounded-md bg-white p-3">
            {paymentLogos.map((p) => (
              <span key={p} className="text-[11px] font-bold uppercase tracking-tight text-ink/70">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/75 sm:flex-row">
          <p>© {new Date().getFullYear()} Eunola. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
