"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu mobile saat pindah halaman
  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href: string) =>
    !href.includes("#") && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 bg-white transition-shadow duration-300",
          scrolled ? "shadow-nav" : "shadow-none",
        )}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[84px] lg:px-12">
          <Link href="/" aria-label="Eunola — beranda" className="shrink-0">
            <Image
              src="/brand/logo-horizontal.png"
              alt="Eunola"
              width={954}
              height={261}
              priority
              className="h-10 w-auto lg:h-12"
            />
          </Link>

          <nav aria-label="Menu utama" className="hidden lg:block">
            <ul className="flex items-center gap-12">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-gold",
                      isActive(l.href) ? "text-gold" : "text-pine",
                    )}
                    aria-current={isActive(l.href) ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Buka pencarian"
              className="rounded-full p-2 text-pine transition-colors hover:bg-cream"
            >
              <Search className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="rounded-full p-2 text-pine transition-colors hover:bg-cream lg:hidden"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <nav
          id="mobile-menu"
          aria-label="Menu seluler"
          className={cn("border-t border-gray-100 bg-white lg:hidden", menuOpen ? "block" : "hidden")}
        >
          <ul className="container-x flex flex-col py-2">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={cn(
                    "block border-b border-gray-100 py-3.5 text-sm font-medium last:border-0",
                    isActive(l.href) ? "text-gold" : "text-pine",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
