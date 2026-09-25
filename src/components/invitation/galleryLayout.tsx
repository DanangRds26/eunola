import type { PreweddingLayout } from "@/data/prewedding";

export function getGalleryLayout(
  index: number,
  total: number,
): PreweddingLayout {
  // 1 foto
  if (total === 1) {
    return "featured";
  }

  // 2 foto
  if (total === 2) {
    return index === 0 ? "featured" : "normal";
  }

  // 3 foto
  if (total === 3) {
    if (index === 0) return "featured";
    return "normal";
  }

  // 4 foto
  if (total === 4) {
    if (index === 0) return "featured";
    if (index === 1) return "tall";
    return "normal";
  }

  // 5–6 foto
  if (total <= 6) {
    const pattern: PreweddingLayout[] = [
      "featured",
      "normal",
      "normal",
      "wide",
      "normal",
      "normal",
    ];

    return pattern[index] ?? "normal";
  }

  // 7–9 foto
  if (total <= 9) {
    const pattern: PreweddingLayout[] = [
      "featured",
      "normal",
      "normal",
      "wide",
      "tall",
      "normal",
      "normal",
      "wide",
      "normal",
    ];

    return pattern[index] ?? "normal";
  }

  // 10+ foto
  const pattern: PreweddingLayout[] = [
    "featured",
    "normal",
    "normal",
    "wide",
    "tall",
    "normal",
    "wide",
    "normal",
    "normal",
    "featured",
  ];

  return pattern[index % pattern.length];
}