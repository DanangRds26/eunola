import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ThemeCarousel from "@/components/home/ThemeCarousel";
import TemplateShowcase from "@/components/home/TemplateShowcase";
import HashtagGallery from "@/components/home/HashtagGallery";

export const metadata: Metadata = {
  title: "Undangan Digital Modern & Elegan",
};

export default function ShopPage() {
  return (
    <>
      <Hero />
      <ThemeCarousel />
      <TemplateShowcase />
      <HashtagGallery />
    </>
  );
}
