import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { PageHero } from "./about";
import { SERVICES, telLink, waLink } from "@/lib/business";
import projOffice from "@/assets/project-office.jpg";
import projUpvc from "@/assets/project-upvc.jpg";
import projRailing from "@/assets/project-railing.jpg";
import projShower from "@/assets/project-shower.jpg";
import projAcp from "@/assets/project-acp.jpg";
import projInterior from "@/assets/project-interior.jpg";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — UPVC, Glass, Aluminium & Interiors in Bhagalpur | TMG" },
      { name: "description", content: "UPVC windows & doors, sliding & casement windows, aluminium & glass partitions, toughened glass, ACP cladding, steel railings and interior design in Bhagalpur, Bihar." },
      { property: "og:title", content: "Services | TMG – Taj Mahal Glass Bhagalpur" },
      { property: "og:description", content: "Premium UPVC, glass, aluminium and interior design services in Bhagalpur." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

type Detail = { slug: string; title: string; img: string; long: string; bullets: string[] };

const details: Detail[] = [
  { slug: "upvc-windows", title: "UPVC Windows in Bhagalpur", img: projUpvc,
    long: "Premium UPVC windows engineered for Bihar's climate — weather-sealed, sound-insulating and virtually maintenance free. Available in casement, sliding, tilt-and-turn and fixed configurations.",
    bullets: ["Multi-chamber UPVC profiles", "5mm / 8mm toughened glass options", "Stainless steel hardware", "10-year frame durability"] },
  { slug: "upvc-doors", title: "UPVC Doors", img: projUpvc,
    long: "Termite-proof, water-resistant UPVC doors for main entries, balconies, bathrooms and utility areas — built with multi-point locking and German-style hinges.",
    bullets: ["Hinged, sliding & French styles", "High-security multi-point locks", "Wood-grain & plain finishes", "Toughened or laminated glass infills"] },
  { slug: "sliding-windows", title: "Sliding Windows", img: projOffice,
    long: "Space-saving sliding UPVC and aluminium windows in 2, 3 or 4 tracks — perfect for compact rooms, balconies and kitchens.",
    bullets: ["Smooth twin-roller carriage", "Mosquito-mesh integration", "Wide span openings", "Easy clean & maintain"] },
  { slug: "sliding-doors", title: "Sliding Doors", img: heroImg,
    long: "Large-format sliding doors that open up living rooms, balconies and showrooms with light and flow.",
    bullets: ["Floor-to-ceiling spans", "Heavy-duty rollers", "Toughened glass panes", "Slim aluminium or UPVC frames"] },
  { slug: "aluminium-partitions", title: "Aluminium Partitions", img: projOffice,
    long: "Sleek aluminium framed partitions for cabins, conference rooms, shops and apartments — combined with clear, frosted or printed glass.",
    bullets: ["Office cabin systems", "Frosted privacy options", "Sliding & hinged door integration", "Quick clean installation"] },
  { slug: "glass-doors", title: "Glass Doors", img: projOffice,
    long: "Frameless and patch-fitting glass doors with high-end stainless steel handles — ideal for showrooms, salons, offices and homes.",
    bullets: ["12mm toughened glass", "Patch fittings & floor springs", "Frameless or framed", "Designer pull handles"] },
  { slug: "glass-partitions", title: "Glass Partitions", img: projOffice,
    long: "Modern glass partitions for offices, clinics and homes — creating bright, premium interiors without losing space.",
    bullets: ["Single & double glazed", "Frosted graphics & branding", "Aluminium / wood framing", "Acoustic options"] },
  { slug: "acp-cladding", title: "ACP Cladding", img: projAcp,
    long: "Premium ACP (Aluminium Composite Panel) façade cladding for shopfronts, showrooms and commercial buildings — durable, weatherproof and visually striking.",
    bullets: ["Branded ACP sheets", "Custom colours & finishes", "Weather & UV resistant", "Steel sub-structure"] },
  { slug: "steel-railings", title: "Steel Railings with Glass", img: projRailing,
    long: "Stainless steel railings combined with toughened glass for staircases, balconies and terraces — timeless and ultra-safe.",
    bullets: ["SS 304 grade pipes", "12mm toughened glass", "Custom heights & spans", "Polished mirror finish"] },
  { slug: "shower-enclosures", title: "Shower Enclosures", img: projShower,
    long: "Frameless, semi-frameless and hinged shower enclosures crafted from 8–10mm toughened glass for a modern bathroom look.",
    bullets: ["Custom-sized cabins", "Anti-slip floors compatible", "Premium hinges & handles", "Easy-clean coatings"] },
  { slug: "interior-design", title: "Interior Design", img: projInterior,
    long: "Turnkey home, office and modular interior design — from layout planning and false ceilings to modular kitchens, wardrobes and lighting.",
    bullets: ["Home & office interiors", "Modular kitchens & wardrobes", "False ceilings, lighting, woodwork", "End-to-end project management"] },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Premium UPVC, Glass, Aluminium & Interior Solutions"
        sub="Everything you need under one roof — manufactured, supplied and installed by TMG across Bhagalpur and Bihar."
      />

      {/* Quick service grid */}
      <section className="container-px mx-auto max-w-7xl py-14">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <a key={s.slug} href={`#${s.slug}`}
              className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition hover:border-[color:var(--navy)]/30 hover:text-[color:var(--navy)]">
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* Detailed sections */}
      <div className="container-px mx-auto max-w-7xl space-y-20 pb-24">
        {details.map((d, i) => (
          <article key={d.slug} id={d.slug} className="scroll-mt-24">
            <div className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden rounded-3xl shadow-soft">
                <img src={d.img} alt={d.title} loading="lazy" width={1280} height={896}
                  className="aspect-[4/3] w-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--navy)]">
                  Bhagalpur · Bihar
                </span>
                <h2 className="mt-3 font-display text-2xl font-semibold md:text-3xl">{d.title}</h2>
                <p className="mt-3 text-muted-foreground">{d.long}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {d.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 text-[color:var(--navy)]" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={telLink} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--navy)] px-5 py-2.5 text-sm font-semibold text-white">
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <a href={waLink(`Hi TMG, I'd like a quote for ${d.title}.`)} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-5 py-2.5 text-sm font-semibold text-white">
                    WhatsApp Quote
                  </a>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-semibold text-[color:var(--navy)] hover:underline">
                    Request site visit <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}