import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrustBadges from "@/components/layout/TrustBadges";

/**
 * Layout khusus halaman toko (Beranda, Tema, Checkout, Contact, Blog).
 * Halaman demo undangan (`/tema/[slug]/preview`) sengaja berada DI LUAR grup ini
 * supaya tampil full-screen tanpa navbar/footer Eunola.
 */
export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <TrustBadges />
      <Footer />
    </div>
  );
}
