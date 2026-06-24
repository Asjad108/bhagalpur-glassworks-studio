import { createFileRoute } from "@tanstack/react-router";
import { Star, Phone } from "lucide-react";
import { PageHero } from "./about";
import { BUSINESS, telLink, waLink } from "@/lib/business";
import projUpvc from "@/assets/project-upvc.jpg";
import projOffice from "@/assets/project-office.jpg";
import projInterior from "@/assets/project-interior.jpg";
import projRailing from "@/assets/project-railing.jpg";
import projShower from "@/assets/project-shower.jpg";
import projAcp from "@/assets/project-acp.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews & Testimonials | TMG – Taj Mahal Glass Bhagalpur" },
      { name: "description", content: "Read customer reviews for TMG – Taj Mahal Glass. Trusted UPVC, glass and interior design service across Bhagalpur, Bihar." },
      { property: "og:title", content: "Customer Reviews | TMG Bhagalpur" },
      { property: "og:description", content: "What our customers say about our UPVC, glass and interior projects." },
      { property: "og:url", content: "https://tajmahalglass.com/reviews" },
    ],
    links: [{ rel: "canonical", href: "https://tajmahalglass.com/reviews" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://tajmahalglass.com/" },
            { "@type": "ListItem", position: 2, name: "Reviews", item: "https://tajmahalglass.com/reviews" },
          ],
        }),
      },
    ],
  }),
  component: Reviews,
});

const reviews = [
  { n: "Ravi Sharma", r: "Builder", q: "Installed UPVC windows in 14 apartments. Finish and project timeline were excellent. Will continue working with TMG.", img: projUpvc, stars: 5 },
  { n: "Anjali Verma", r: "Homeowner, Tilkamanjhi", q: "TMG transformed our living room with a stunning toughened glass partition. Very neat installation and friendly team.", img: projOffice, stars: 5 },
  { n: "Dr. Arun Kumar", r: "Clinic Owner", q: "Frameless glass doors and partitions look premium. Project was completed on time within the agreed budget.", img: projOffice, stars: 5 },
  { n: "Sunita Devi", r: "Homeowner, Sabour", q: "Loved the modular interior design. Wardrobes, kitchen and ceiling — all spot on. Highly recommended in Bhagalpur.", img: projInterior, stars: 5 },
  { n: "Imran Ali", r: "Showroom Owner", q: "ACP cladding for my showroom front looks amazing. TMG handled everything end-to-end.", img: projAcp, stars: 5 },
  { n: "Manoj Kumar", r: "Architect", q: "Reliable partner for glass and UPVC work. Quality is consistent and pricing is transparent.", img: projRailing, stars: 4 },
  { n: "Priya Singh", r: "Homeowner, Nathnagar", q: "Beautiful shower enclosure and wardrobe glass. Team was punctual and very polite.", img: projShower, stars: 5 },
];

function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Trusted by homeowners, builders & businesses in Bhagalpur"
        sub="Real feedback from real projects. Every TMG installation is backed by quality materials and an experienced installation team."
      />

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="mb-10 flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-1 text-[color:var(--navy)]">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              <span className="ml-2 font-display text-lg font-semibold text-foreground">4.9 / 5</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Average rating across UPVC, glass and interior projects.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={telLink} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--navy)] px-4 py-2.5 text-sm font-semibold text-white">
              <Phone className="h-4 w-4" /> {BUSINESS.phone}
            </a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-[color:var(--whatsapp)] px-4 py-2.5 text-sm font-semibold text-white">WhatsApp</a>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.n} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img src={r.img} alt={`${r.n}'s project`} loading="lazy" width={1280} height={896}
                className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <div className="flex gap-0.5 text-[color:var(--navy)]">
                  {[...Array(r.stars)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">"{r.q}"</p>
                <footer className="mt-4 text-sm">
                  <span className="font-semibold">{r.n}</span>
                  <span className="block text-xs text-muted-foreground">{r.r}</span>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
