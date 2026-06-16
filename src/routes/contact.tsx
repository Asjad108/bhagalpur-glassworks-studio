import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import { PageHero } from "./about";
import { BUSINESS, SERVICES, telLink, waLink } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TMG – Taj Mahal Glass | Bhagalpur UPVC & Interiors" },
      { name: "description", content: "Contact TMG – Taj Mahal Glass in Tilkamanjhi, Bhagalpur. Call +91 8271145798, WhatsApp us or request a free site visit for UPVC, glass and interior projects." },
      { property: "og:title", content: "Contact TMG – Taj Mahal Glass" },
      { property: "og:description", content: "Get in touch for UPVC windows, glass work and interior design in Bhagalpur." },
      { property: "og:url", content: "https://tajmahalglass.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://tajmahalglass.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://tajmahalglass.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://tajmahalglass.lovable.app/contact" },
          ],
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const text = `Hi TMG, I'd like a quote.%0A%0AName: ${fd.get("name")}%0APhone: ${fd.get("phone")}%0AService: ${fd.get("service")}%0AMessage: ${fd.get("message")}`;
    window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's plan your project"
        sub="Tell us a little about your space — we'll respond with availability, pricing and the next step. Free site visits within Bhagalpur."
      />

      <section className="container-px mx-auto grid max-w-7xl gap-10 py-16 lg:grid-cols-5">
        {/* Info card */}
        <aside className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h2 className="font-display text-xl font-semibold">TMG – Taj Mahal Glass</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-[color:var(--navy)]" />
                <span>{BUSINESS.address.line1},<br />{BUSINESS.address.line2}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-[color:var(--navy)]" />
                <a href={telLink} className="hover:underline">{BUSINESS.phone}</a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="h-5 w-5 text-[color:var(--navy)]" />
                <a href={waLink()} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp +91 8271145798</a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-[color:var(--navy)]" />
                <span>{BUSINESS.hours}</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={telLink} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--navy)] px-4 py-2.5 text-sm font-semibold text-white">Call Now</a>
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-4 py-2.5 text-sm font-semibold text-white">WhatsApp</a>
              <a href={BUSINESS.mapsLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold">Open in Maps</a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title="TMG location on Google Maps"
              src={BUSINESS.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full"
            />
          </div>
        </aside>

        {/* Form */}
        <div className="lg:col-span-3">
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
            <h2 className="font-display text-2xl font-semibold">Request a free quote</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill in the details and we'll continue the conversation on WhatsApp.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" required placeholder="e.g. Rahul Kumar" />
              <Field label="Phone number" name="phone" type="tel" required placeholder="+91" />
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Service interested in</label>
                <select name="service" defaultValue="UPVC Windows"
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-[color:var(--navy)]">
                  {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
                  <option>Something else</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <textarea name="message" rows={4} placeholder="Tell us about your project, location & timeline"
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-[color:var(--navy)]" />
              </div>
            </div>

            <button type="submit"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--navy)] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[color:var(--navy-deep)]">
              Send on WhatsApp
            </button>

            {sent && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[color:var(--silver-soft)] px-3 py-2 text-sm text-[color:var(--navy-deep)]">
                <CheckCircle2 className="h-4 w-4" /> Opening WhatsApp… we'll reply shortly.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, required }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}{required && <span className="text-[color:var(--navy)]"> *</span>}</label>
      <input name={name} type={type} required={required} placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-[color:var(--navy)]" />
    </div>
  );
}