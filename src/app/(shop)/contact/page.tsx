"use client";

import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageBanner from "@/components/ui/PageBanner";
import Field from "@/components/ui/Field";
import { contactInfo } from "@/data/site";
import { cn, isEmail } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const empty: FormState = { name: "", email: "", subject: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Nama wajib diisi";
    if (!isEmail(form.email)) next.email = "Email tidak valid";
    if (!form.message.trim()) next.message = "Pesan wajib diisi";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // GANTI DI SINI: kirim pesan lewat API route / layanan email (mis. Resend)
    setSent(true);
    setForm(empty);
  };

  return (
    <>
      <PageBanner title="Contact" crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <section className="section-y">
        <div className="container-x max-w-4xl text-center">
          <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">Get In Touch With Us</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
            For More Information About Our Product &amp; Services. Please Feel Free To Drop Us An Email.
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="container-x mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-10">
            <div className="flex gap-4">
              <MapPin className="h-6 w-6 shrink-0 text-ink" />
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Address</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{contactInfo.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="h-6 w-6 shrink-0 text-ink" />
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Phone</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  Mobile: {contactInfo.mobile}
                  <br />
                  Hotline: {contactInfo.hotline}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="h-6 w-6 shrink-0 text-ink" />
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Working Time</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {contactInfo.hours.map((h) => (
                    <span key={h} className="block">
                      {h}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="space-y-6">
            <Field label="Your name" htmlFor="name" error={errors.name}>
              <input
                id="name"
                placeholder="Abc"
                className={cn("input", errors.name && "input-error")}
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
              />
            </Field>
            <Field label="Email address" htmlFor="email" error={errors.email}>
              <input
                id="email"
                type="email"
                placeholder="Abc@def.com"
                className={cn("input", errors.email && "input-error")}
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
              />
            </Field>
            <Field label="Subject" htmlFor="subject">
              <input
                id="subject"
                placeholder="This is an optional"
                className="input"
                value={form.subject}
                onChange={(e) => set("subject", e.target.value)}
              />
            </Field>
            <Field label="Message" htmlFor="message" error={errors.message}>
              <textarea
                id="message"
                rows={5}
                placeholder="Hi! i'd like to ask about"
                className={cn("input h-auto py-3", errors.message && "input-error")}
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
              />
            </Field>

            <button type="submit" className="btn-gold rounded-md">
              Submit
            </button>

            {sent && (
              <p className="flex items-center gap-2 text-sm text-pine">
                <Mail className="h-4 w-4" /> Pesan terkirim. Tim kami akan membalas secepatnya.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
