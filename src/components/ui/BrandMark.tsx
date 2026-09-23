/** Ikon puncak emas kecil yang tampil di atas judul banner halaman */
export default function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="46"
      height="30"
      viewBox="0 0 46 30"
      fill="none"
      stroke="#B88E2F"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M2 28 L16 4 L23 16 L30 4 L44 28" />
      <path d="M14 28 L23 12 L32 28" />
    </svg>
  );
}
