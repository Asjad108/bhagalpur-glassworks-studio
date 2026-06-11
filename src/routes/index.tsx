import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Hammer,
  Truck,
  Clock4,
  Star,
  ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import projOffice from "@/assets/project-office.jpg";
import projUpvc from "@/assets/project-upvc.jpg";
import projRailing from "@/assets/project-railing.jpg";
import projShower from "@/assets/project-shower.jpg";
import projAcp from "@/assets/project-acp.jpg";
import projInterior from "@/assets/project-interior.jpg";
import { BUSINESS, SERVICES, telLink, waLink } from "@/lib/business";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TMG – Taj Mahal Glass | UPVC Windows, Glass & Interiors in Bhagalpur" },
      { name: "description", content: "Premium UPVC windows, sliding doors, toughened glass, aluminium partitions, ACP cladding, steel railings and interior design in Bhagalpur, Bihar. Call +91 8271145798 for a free site visit." },
      { name: "keywords", content: "UPVC Window Bhagalpur, UPVC Door Bhagalpur, Glass Work Bhagalpur, Aluminium Partition Bhagalpur, Interior Designer Bhagalpur, Toughened Glass Bhagalpur, ACP Cladding Bhagalpur" },
      { property: "og:title", content: "TMG – Taj Mahal Glass | UPVC & Interiors in Bhagalpur" },
      { property: "og:description", content: "Premium UPVC windows, glass, aluminium partitions & interior design in Bhagalpur." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

const whyUs = [
  { icon: ShieldCheck, t: "Quality Materials", d: "Branded UPVC profiles, toughened glass & premium hardware." },
  { icon: Hammer, t: "Expert Installation", d: "Trained in-house team — clean, precise, on-spec fittings." },
  { icon: Sparkles, t: "Custom Designs", d: "Tailored to your home, office or commercial space." },
  { icon: CheckCircle2, t: "Affordable Pricing", d: "Direct supply pricing with transparent quotations." },
  { icon: Truck, t: "On-Time Delivery", d: "Project timelines we commit to and stick to." },
  { icon: MapPin, t: "Trusted Local Brand", d: "Hundreds of homes & businesses across Bhagalpur." },
];

const featured = [
  { img: projUpvc, title: "UPVC Casement Windows", loc: "Tilkamanjhi, Bhagalpur" },
  { img: projOffice, title: "Glass Office Partitions", loc: "Adampur, Bhagalpur" },
  { img: projRailing, title: "Steel & Glass Railing", loc: "Mojahidpur" },
  { img: projShower, title: "Frameless Shower Enclosure", loc: "Nathnagar" },
  { img: projAcp, title: "ACP Façade Cladding", loc: "Bhagalpur" },
  { img: projInterior, title: "Luxury Living Interior", loc: "Sabour" },
];

const reviews = [
  { n: "Ravi Sharma", r: "Builder, Bhagalpur", q: "Installed UPVC windows across 14 flats. Finish and timeline were excellent." },
  { n: "Anjali Verma", r: "Homeowner, Tilkamanjhi", q: "TMG transformed our living room with a stunning glass partition. Highly recommended." },
  { n: "Dr. Arun Kumar", r: "Clinic Owner", q: "Premium quality glass doors and partitions. Very professional team." },
];

const process = [
  { t: "Site Visit", d: "Free on-site consultation in Bhagalpur." },
  { t: "Measurement", d: "Precise measurements & material planning." },
  { t: "Design Approval", d: "Drawings, finishes & quote sign-off." },
  { t: "Installation", d: "Clean, expert installation by our team." },
  { t: "Final Inspection", d: "Quality check & after-sales support." },
];

const faqs = [
  { q: "Do you provide UPVC windows in Bhagalpur?", a: "Yes — TMG manufactures and installs premium UPVC windows across Bhagalpur, Tilkamanjhi and nearby areas in Bihar." },
  { q: "Do you offer free site visits?", a: "Yes, we offer a free site visit and measurement within Bhagalpur city. Call +91 8271145798 to schedule." },
  { q: "How long does installation take?", a: "Typical residential UPVC window or partition installation completes in 1–3 days after fabrication, depending on scope." },
  { q: "Do you handle complete interior design?", a: "Absolutely. We provide turnkey home, office and modular interior design including civil, ceiling, woodwork and glass." },
  { q: "Which areas do you serve?", a: "Bhagalpur, Tilkamanjhi, Naugachia, Sabour, Sultanganj, Kahalgaon, Banka, Munger and surrounding districts of Bihar." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Premium UPVC sliding glass doors in a luxury Bhagalpur home"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy-deep)]/85 via-[color:var(--navy-deep)]/65 to-[color:var(--navy-deep)]/30" />
        </div>

        <div className="relative">
          <div className="container-px mx-auto max-w-7xl py-20 md:py-32 lg:py-40">
            <div className="max-w-2xl text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/85 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> Bhagalpur · Since years of trust
              </span>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl">
                Premium UPVC Windows, Glass Solutions & Interior Design in Bhagalpur
              </h1>
              <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
                TMG – Taj Mahal Glass crafts elegant UPVC windows & doors, toughened glass
                partitions, ACP cladding, steel railings and turnkey interiors for homes,
                offices and showrooms across Bihar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={telLink} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--navy-deep)] shadow-elegant transition hover:bg-[color:var(--silver-soft)]">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-5 py-3 text-sm font-semibold text-white shadow-elegant transition hover:opacity-95">
                  WhatsApp Us
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                  Free Site Visit <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-6 text-white/85">
                <Stat k="500+" v="Projects" />
                <Stat k="10+ yrs" v="Experience" />
                <Stat k="100%" v="Custom-made" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <Section eyebrow="Why TMG" title="Built on quality, finished with craft">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <div key={w.t} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-[color:var(--silver-soft)] text-[color:var(--navy)]">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{w.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES GRID */}
      <Section eyebrow="Our Services" title="Complete UPVC, glass & interior solutions" bg>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 9).map((s) => (
            <Link
              key={s.slug}
              to="/services"
              hash={s.slug}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-[color:var(--navy)]/30 hover:shadow-soft"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[color:var(--navy-deep)] text-white">
                <ChevronRight className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--navy)] hover:underline">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section eyebrow="Featured Work" title="Recent projects across Bhagalpur">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <figure key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1280} height={896}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <figcaption className="p-5">
                <h3 className="font-display text-base font-semibold">{p.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {p.loc}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section eyebrow="Our Process" title="How we deliver, end-to-end" bg>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((p, i) => (
            <li key={p.t} className="rounded-2xl border border-border bg-card p-5">
              <div className="font-display text-3xl font-semibold text-[color:var(--silver)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 font-display text-base font-semibold">{p.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* REVIEWS */}
      <Section eyebrow="Reviews" title="What our customers say">
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote key={r.n} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex gap-0.5 text-[color:var(--navy)]">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">"{r.q}"</p>
              <footer className="mt-4 text-sm">
                <span className="font-semibold text-foreground">{r.n}</span>
                <span className="block text-xs text-muted-foreground">{r.r}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Common questions" bg>
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-semibold text-foreground">
                {f.q}
                <ChevronRight className="h-5 w-5 shrink-0 transition group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="overflow-hidden rounded-3xl bg-[color:var(--navy-deep)] p-8 text-white md:p-14">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                Ready to upgrade your space?
              </h2>
              <p className="mt-2 text-white/75">
                Get a free site visit and a transparent quote from Bhagalpur's
                trusted UPVC, glass and interior design team.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={telLink} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--navy-deep)]">
                <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
              </a>
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-5 py-3 text-sm font-semibold text-white">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-semibold text-white md:text-3xl">{k}</div>
      <div className="text-xs uppercase tracking-[0.16em] text-white/70">{v}</div>
    </div>
  );
}

function Section({
  eyebrow, title, children, bg = false,
}: { eyebrow: string; title: string; children: React.ReactNode; bg?: boolean }) {
  return (
    <section className={bg ? "bg-[color:var(--silver-soft)]" : ""}>
      <div className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--navy)]">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
