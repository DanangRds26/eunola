export type PreweddingLayout =
  | "featured"
  | "normal"
  | "wide"
  | "tall";

export interface PreweddingImage {
  src: string;
  alt: string;
  enabled: boolean;
  layout?: PreweddingLayout;
  objectPosition?: string;
}

export const preweddingImages: PreweddingImage[] = [
  {
    src: "/prewedding/prewedding (1).jpeg",
    alt: "Prewedding 1",
    enabled: true,
    layout: "featured",
  },
  {
    src: "/prewedding/prewedding (2).jpeg",
    alt: "Prewedding 2",
    enabled: true,
    layout: "normal",
  },
  {
    src: "/prewedding/prewedding (3).jpeg",
    alt: "Prewedding 3",
    enabled: true,
    layout: "normal",
  },
  {
    src: "/prewedding/prewedding (4).jpeg",
    alt: "Prewedding 4",
    enabled: true,
    layout: "tall",
  },
  {
    src: "/prewedding/prewedding (5).jpeg",
    alt: "Prewedding 5",
    enabled: true,
    layout: "normal",
  },
  {
    src: "/prewedding/prewedding (6).jpeg",
    alt: "Prewedding 6",
    enabled: true,
    layout: "normal",
  },
  {
    src: "/prewedding/prewedding (7).jpeg",
    alt: "Prewedding 7",
    enabled: true,
    layout: "tall",
  },
  {
    src: "/prewedding/prewedding (8).jpeg",
    alt: "Prewedding 8",
    enabled: true,
    layout: "normal",
  },
  {
    src: "/prewedding/prewedding (9).jpeg",
    alt: "Prewedding 9",
    enabled: true,
    layout: "tall",
  },
  {
    src: "/prewedding/prewedding (10).jpeg",
    alt: "Prewedding 10",
    enabled: true,
    layout: "normal",
  },
  {
    src: "/prewedding/prewedding (11).jpeg",
    alt: "",
    enabled: false,
    layout: "wide",
  },
  {
    src: "/prewedding/prewedding (12).jpeg",
    alt: "Prewedding 12",
    enabled: false,
    layout: "normal",
  },
  {
    src: "/prewedding/prewedding (13).jpeg",
    alt: "Prewedding 13",
    enabled: false,
    layout: "featured",
  },
  {
    src: "/prewedding/prewedding (14).jpeg",
    alt: "Prewedding 14",
    enabled: false, 
    layout: "normal",
  },
  {
    src: "/prewedding/prewedding (15).jpeg",
    alt: "Prewedding 15",
    enabled: false, 
    layout: "tall",
  },
  {
    src: "/prewedding/prewedding (16).jpeg",
    alt: "Prewedding 16",
    enabled: false, 
    layout: "normal",
  },
  {
    src: "/prewedding/prewedding (17).jpeg",
    alt: "Prewedding 17",
    enabled: false, 
    layout: "wide",
  },
  {
    src: "/prewedding/prewedding (18).jpeg",
    alt: "Prewedding 18",
    enabled: false, 
    layout: "normal",
  },
  {
    src: "/prewedding/prewedding (19).jpeg",
    alt: "Prewedding 19",
    enabled: false, 
    layout: "normal",
  },
  {
    src: "/prewedding/prewedding (20).jpeg",
    alt: "Prewedding 20",
    enabled: false, 
    layout: "featured",
  },
];