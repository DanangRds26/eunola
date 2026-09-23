"use client";

import Link from "next/link";
import { formatRupiah } from "@/lib/utils";
import type { Product } from "@/types";

interface Props {
  product: Product;
  qty: number;
  payment: "transfer" | "cod";
  onPaymentChange: (p: "transfer" | "cod") => void;
  onPlaceOrder: () => void;
  placing: boolean;
}

export default function OrderSummary({ product, qty, payment, onPaymentChange, onPlaceOrder, placing }: Props) {
  const subtotal = product.price * qty;

  return (
    <div>
      <div className="border-b border-gray-200 pb-4">
        <div className="flex justify-between text-base font-semibold text-ink">
          <span>Product</span>
          <span>Subtotal</span>
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-gray-100 py-4 text-sm">
        <span className="text-ink/80">
          {product.name} <span className="text-muted">x {qty}</span>
        </span>
        <span className="text-ink">{formatRupiah(subtotal)}</span>
      </div>

      <div className="flex items-center justify-between py-4 text-sm">
        <span className="text-ink/80">Subtotal</span>
        <span className="text-ink">{formatRupiah(subtotal)}</span>
      </div>

      <div className="flex items-center justify-between border-b border-gray-200 pb-5 pt-1">
        <span className="text-base font-medium text-ink">Total</span>
        <span className="text-xl font-bold text-gold">{formatRupiah(subtotal)}</span>
      </div>

      <div className="space-y-4 py-6">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="radio"
            name="payment"
            checked={payment === "transfer"}
            onChange={() => onPaymentChange("transfer")}
            className="mt-1 h-4 w-4 accent-ink"
          />
          <span>
            <span className="block text-sm font-medium text-ink">Direct Bank Transfer</span>
            {payment === "transfer" && (
              <span className="mt-1 block text-xs leading-relaxed text-muted">
                Make your payment directly into our bank account. Please use your Order ID as the payment
                reference. Your order will not be shipped until the funds have cleared in our account.
              </span>
            )}
          </span>
        </label>
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="radio"
            name="payment"
            checked={payment === "cod"}
            onChange={() => onPaymentChange("cod")}
            className="h-4 w-4 accent-ink"
          />
          <span className="text-sm font-medium text-ink">Cash On Delivery</span>
        </label>
      </div>

      <p className="text-xs leading-relaxed text-muted">
        Your personal data will be used to support your experience throughout this website, to manage
        access to your account, and for other purposes described in our{" "}
        <Link href="/contact" className="font-semibold text-ink hover:text-gold">
          privacy policy.
        </Link>
      </p>

      <button
        type="button"
        onClick={onPlaceOrder}
        disabled={placing}
        className="btn-outline mt-6 w-full rounded-md py-3.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {placing ? "Memproses…" : "Place order"}
      </button>
    </div>
  );
}
