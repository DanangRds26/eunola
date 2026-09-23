import type { ReactNode } from "react";

interface Props {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

/** Pembungkus label + input + pesan error, dipakai di Checkout & Contact */
export default function Field({ label, htmlFor, error, children, className = "" }: Props) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-3 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="mt-1.5 text-xs text-maroon">
          {error}
        </p>
      )}
    </div>
  );
}
