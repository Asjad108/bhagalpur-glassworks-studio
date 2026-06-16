import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Phone } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { BUSINESS, telLink, waLink } from "@/lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TMG – Taj Mahal Glass | UPVC & Interior Experts in Bhagalpur" },
      { name: "description", content: "TMG – Taj Mahal Glass is a trusted Bhagalpur company specialising in UPVC windows & doors, aluminium partitions, toughened glass, ACP cladding, steel railings and interior design." },
      { property: "og:title", content: "About TMG – Taj Mahal Glass" },
      { property: "og:description", content: "Bhagalpur's trusted UPVC, glass and interior design company." },
      { property: "og:url", content: "https://tajmahalglass.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://tajmahalglass.lovable.app/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://tajmahalglass.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://tajmahalglass.lovable.app/about" },
          ],
        }),
      },
    ],
  }),
  component: About,
});

const values = [
  "Premium, branded UPVC profiles & hardware",
  "ISI-grade toughened & laminated glass",
  "Trained in-house installation crew",
  "Transparent quotations — no hidden costs",
  "On-time, on-spec project delivery",
  "Dedicated after-sales support in Bhagalpur",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About TMG"
        title="A trusted name for windows, glass & interiors in Bhagalpur"
        sub="We design, fabricate and install premium UPVC windows & doors, aluminium and glass partitions, ACP cladding, steel railings and turnkey interiors."
      />

      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img src={heroImg} alt="TMG premium glass and UPVC project" loading="lazy"
              width={1920} height={1080} className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--navy)]">Our Story</span>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Built in Bhagalpur. Engineered for modern living.
            </h2>
            <p className="mt-4 text-muted-foreground">
              TMG – Taj Mahal Glass is a trusted name in Bhagalpur for UPVC windows,
              UPVC doors, aluminium partitions, glass work, ACP cladding, steel railings
              and interior design solutions. We focus on quality workmanship, durable
              materials, modern designs and customer satisfaction.
            </p>
            <p className="mt-3 text-muted-foreground">
              From individual homeowners and shop owners to architects, builders and
              property developers, our team brings together world-class materials with
              precise local installation across Bihar.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--navy)]" /> {v}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={telLink} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--navy)] px-5 py-3 text-sm font-semibold text-white">
                <Phone className="h-4 w-4" /> {BUSINESS.phone}
              </a>
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-5 py-3 text-sm font-semibold text-white">
                WhatsApp
              </a>
              <Link to="/projects" className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-semibold">
                View projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--silver-soft)]">
        <div className="container-px mx-auto grid max-w-7xl gap-6 py-16 md:grid-cols-4 md:py-20">
          {[
            { k: "500+", v: "Completed projects" },
            { k: "10+ yrs", v: "Industry experience" },
            { k: "100%", v: "Custom fabrication" },
            { k: "4.8★", v: "Customer rating" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl bg-white p-6 text-center shadow-soft">
              <div className="font-display text-3xl font-semibold text-[color:var(--navy-deep)]">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--navy-deep)] text-white">
      <div className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--silver)]">{eyebrow}</span>
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</h1>
        {sub && <p className="mt-4 max-w-2xl text-white/80">{sub}</p>}
      </div>
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[color:var(--navy)] opacity-40 blur-3xl" />
    </section>
  );
}