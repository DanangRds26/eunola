import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eunola",
  description: "Designed to Celebrate Love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}