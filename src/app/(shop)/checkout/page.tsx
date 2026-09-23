"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import PageBanner from "@/components/ui/PageBanner";
import Field from "@/components/ui/Field";
import OrderSummary from "@/components/checkout/OrderSummary";
import { getProduct, products } from "@/data/products";
import { countries, provinces } from "@/data/site";
import { cn, isEmail, isPhone } from "@/lib/utils";

interface FormState {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  street: string;
  city: string;
  province: string;
  zip: string;
  phone: string;
  email: string;
  notes: string;
}

const emptyForm: FormState = {
  firstName: "",
  lastName: "",
  company: "",
  country: countries[0],
  street: "",
  city: "",
  province: provinces[0],
  zip: "",
  phone: "",
  email: "",
  notes: "",
};

function CheckoutContent() {
  const params = useSearchParams();
  const slug = params.get("tema");
  const qty = Math.max(1, Number(params.get("qty")) || 1);
  const product = useMemo(() => getProduct(slug ?? "") ?? products[0], [slug]);

  const [form, setForm] = useState<FormState>(emptyForm);
  const [payment, setPayment] = useState<"transfer" | "cod">("transfer");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [placing, setPlacing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) next.firstName = "Nama depan wajib diisi";
    if (!form.lastName.trim()) next.lastName = "Nama belakang wajib diisi";
    if (!form.street.trim()) next.street = "Alamat wajib diisi";
    if (!form.city.trim()) next.city = "Kota wajib diisi";
    if (!form.zip.trim()) next.zip = "Kode pos wajib diisi";
    if (!isPhone(form.phone)) next.phone = "Nomor telepon tidak valid";
    if (!isEmail(form.email)) next.email = "Email tidak valid";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onPlaceOrder = () => {
    if (!validate()) return;
    setPlacing(true);
    // GANTI DI SINI: kirim data ke API pemrosesan pesanan / payment gateway
    window.setTimeout(() => {
      setPlacing(false);
      setOrderPlaced(true);
    }, 900);
  };

  if (orderPlaced) {
    return (
      <section className="section-y">
        <div className="container-x max-w-lg text-center">
          <h1 className="font-display text-3xl font-semibold text-ink">Pesanan diterima</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Terima kasih, {form.firstName}. Instruksi pembayaran untuk tema{" "}
            <span className="font-medium text-ink">{product.name}</span> telah dikirim ke {form.email}.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageBanner title="Checkout" crumbs={[{ label: "Home", href: "/" }, { label: "Checkout" }]} />

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Billing details</h2>

            <div className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2">
              <Field label="First Name" htmlFor="firstName" error={errors.firstName}>
                <input
                  id="firstName"
                  className={cn("input", errors.firstName && "input-error")}
                  value={form.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                />
              </Field>
              <Field label="Last Name" htmlFor="lastName" error={errors.lastName}>
                <input
                  id="lastName"
                  className={cn("input", errors.lastName && "input-error")}
                  value={form.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                />
              </Field>

              <Field label="Company Name (Optional)" htmlFor="company" className="sm:col-span-2">
                <input
                  id="company"
                  className="input"
                  value={form.company}
                  onChange={(e) => set("company", e.target.value)}
                />
              </Field>

              <Field label="Country / Region" htmlFor="country" className="sm:col-span-2">
                <select
                  id="country"
                  className="input"
                  value={form.country}
                  onChange={(e) => set("country", e.target.value)}
                >
                  {countries.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>

              <Field label="Street address" htmlFor="street" error={errors.street} className="sm:col-span-2">
                <input
                  id="street"
                  className={cn("input", errors.street && "input-error")}
                  value={form.street}
                  onChange={(e) => set("street", e.target.value)}
                />
              </Field>

              <Field label="Town / City" htmlFor="city" error={errors.city}>
                <input
                  id="city"
                  className={cn("input", errors.city && "input-error")}
                  value={form.city}
                  onChange={(e) => set("city", e.target.value)}
                />
              </Field>

              <Field label="Province" htmlFor="province">
                <select
                  id="province"
                  className="input"
                  value={form.province}
                  onChange={(e) => set("province", e.target.value)}
                >
                  {provinces.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </Field>

              <Field label="ZIP code" htmlFor="zip" error={errors.zip}>
                <input
                  id="zip"
                  className={cn("input", errors.zip && "input-error")}
                  value={form.zip}
                  onChange={(e) => set("zip", e.target.value)}
                />
              </Field>

              <Field label="Phone" htmlFor="phone" error={errors.phone}>
                <input
                  id="phone"
                  type="tel"
                  className={cn("input", errors.phone && "input-error")}
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                />
              </Field>

              <Field label="Email address" htmlFor="email" error={errors.email} className="sm:col-span-2">
                <input
                  id="email"
                  type="email"
                  className={cn("input", errors.email && "input-error")}
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                />
              </Field>

              <Field label="Additional information" htmlFor="notes" className="sm:col-span-2">
                <textarea
                  id="notes"
                  rows={4}
                  className="input h-auto py-3"
                  placeholder="Additional information"
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                />
              </Field>
            </div>
          </div>

          <OrderSummary
            product={product}
            qty={qty}
            payment={payment}
            onPaymentChange={setPayment}
            onPlaceOrder={onPlaceOrder}
            placing={placing}
          />
        </div>
      </section>
    </>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={null}>
      <CheckoutContent />
    </Suspense>
  );
}
