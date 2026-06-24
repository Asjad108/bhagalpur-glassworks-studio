import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import { PageHero } from "./about";
import projOffice from "@/assets/project-office.jpg";
import projUpvc from "@/assets/project-upvc.jpg";
import projRailing from "@/assets/project-railing.jpg";
import projShower from "@/assets/project-shower.jpg";
import projAcp from "@/assets/project-acp.jpg";
import projInterior from "@/assets/project-interior.jpg";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | UPVC, Glass & Interior Work in Bhagalpur — TMG" },
      { name: "description", content: "Browse TMG's recent UPVC windows, sliding doors, glass partitions, ACP cladding, steel railings and interior projects across Bhagalpur and Bihar." },
      { property: "og:title", content: "Projects | TMG – Taj Mahal Glass" },
      { property: "og:description", content: "Recent UPVC, glass and interior projects in Bhagalpur." },
      { property: "og:url", content: "https://tajmahalglass.com/projects" },
    ],
    links: [{ rel: "canonical", href: "https://tajmahalglass.com/projects" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://tajmahalglass.com/" },
            { "@type": "ListItem", position: 2, name: "Projects", item: "https://tajmahalglass.com/projects" },
          ],
        }),
      },
    ],
  }),
  component: Projects,
});

const CATEGORIES = [
  "All", "UPVC Windows", "UPVC Doors", "Sliding Windows", "Sliding Doors",
  "Aluminium Partitions", "Glass Doors", "Glass Partitions",
  "Toughened Glass", "ACP Cladding", "Steel Railings", "Home Interiors", "Office Interiors",
] as const;

type Project = {
  title: string; cat: typeof CATEGORIES[number]; loc: string; img: string; desc: string;
};

const projects: Project[] = [
  // UPVC Windows
  { title: "Casement UPVC Windows — Villa", cat: "UPVC Windows", loc: "Tilkamanjhi, Bhagalpur", img: projUpvc, desc: "Full villa fit-out with white UPVC casement windows and toughened glass." },
  { title: "Tilt & Turn UPVC Windows", cat: "UPVC Windows", loc: "Adampur, Bhagalpur", img: projUpvc, desc: "Dual-function tilt & turn windows for bedrooms with energy-efficient glazing." },
  { title: "Fixed UPVC Picture Windows", cat: "UPVC Windows", loc: "Sabour, Bhagalpur", img: projUpvc, desc: "Large fixed UPVC picture windows framing scenic views." },

  // UPVC Doors
  { title: "Main UPVC Entrance Door", cat: "UPVC Doors", loc: "Adampur, Bhagalpur", img: projUpvc, desc: "Wood-grain UPVC door with multi-point locking and laminated glass." },
  { title: "UPVC French Doors", cat: "UPVC Doors", loc: "Nathnagar, Bhagalpur", img: projUpvc, desc: "Twin-leaf French doors opening to the balcony with toughened glass." },
  { title: "UPVC Bathroom Door", cat: "UPVC Doors", loc: "Mojahidpur", img: projUpvc, desc: "Water-resistant UPVC door with frosted glass for bathrooms." },

  // Sliding Windows
  { title: "3-Track Sliding Windows", cat: "Sliding Windows", loc: "Mojahidpur", img: projOffice, desc: "Premium 3-track sliding windows with integrated mosquito mesh." },
  { title: "2-Track Sliding Windows", cat: "Sliding Windows", loc: "Tilkamanjhi", img: projOffice, desc: "Slimline 2-track sliding windows for compact rooms." },
  { title: "Bay Sliding Windows", cat: "Sliding Windows", loc: "Bhagalpur", img: projOffice, desc: "Corner bay sliding windows with panoramic glass." },

  // Sliding Doors
  { title: "Floor-to-Ceiling Sliding Doors", cat: "Sliding Doors", loc: "Sabour", img: heroImg, desc: "Living room opens out to garden via large sliding glass doors." },
  { title: "Balcony Sliding Door", cat: "Sliding Doors", loc: "Adampur", img: heroImg, desc: "Slim-profile 2-panel sliding door for high-rise balcony." },
  { title: "Patio Sliding Door System", cat: "Sliding Doors", loc: "Nathnagar", img: heroImg, desc: "4-panel sliding patio door with low-threshold track." },

  // Aluminium Partitions
  { title: "Office Cabin Partitions", cat: "Aluminium Partitions", loc: "Tilkamanjhi", img: projOffice, desc: "Aluminium cabins with frosted glass for a corporate office." },
  { title: "Conference Room Partition", cat: "Aluminium Partitions", loc: "Bhagalpur", img: projOffice, desc: "Floor-to-ceiling aluminium and glass partition for boardroom." },
  { title: "Reception Area Partition", cat: "Aluminium Partitions", loc: "Mojahidpur", img: projOffice, desc: "Custom reception partition with branded frosted film." },

  // Glass Doors
  { title: "Frameless Glass Door", cat: "Glass Doors", loc: "Bhagalpur Showroom", img: projOffice, desc: "12mm toughened frameless glass entrance with patch fittings." },
  { title: "Automatic Sliding Glass Door", cat: "Glass Doors", loc: "Tilkamanjhi", img: projOffice, desc: "Sensor-based automatic sliding glass door for showroom." },
  { title: "Pivot Glass Entrance Door", cat: "Glass Doors", loc: "Bhagalpur", img: projOffice, desc: "Heavy-duty pivot glass door with stainless steel hardware." },

  // Glass Partitions
  { title: "Boardroom Glass Partition", cat: "Glass Partitions", loc: "Bhagalpur", img: projOffice, desc: "Double-glazed acoustic partition for executive boardroom." },
  { title: "Cabin Glass Partition", cat: "Glass Partitions", loc: "Tilkamanjhi", img: projOffice, desc: "Single-glazed cabin partition with door for manager cabins." },
  { title: "Curved Glass Partition", cat: "Glass Partitions", loc: "Adampur", img: projOffice, desc: "Curved toughened glass partition for premium office lobby." },

  // Toughened Glass
  { title: "Toughened Glass Façade", cat: "Toughened Glass", loc: "Bhagalpur", img: projAcp, desc: "Structural toughened glass with spider fittings for shop frontage." },
  { title: "Bathroom Shower Enclosure", cat: "Toughened Glass", loc: "Bhagalpur", img: projShower, desc: "Frameless shower with 10mm toughened glass and premium hinges." },
  { title: "Toughened Glass Canopy", cat: "Toughened Glass", loc: "Tilkamanjhi", img: projAcp, desc: "Overhead toughened glass canopy with SS spider supports." },

  // ACP Cladding
  { title: "Shop ACP Façade", cat: "ACP Cladding", loc: "Tilkamanjhi", img: projAcp, desc: "Silver & charcoal ACP cladding with concealed LED channels." },
  { title: "Office Building ACP", cat: "ACP Cladding", loc: "Bhagalpur", img: projAcp, desc: "Multi-storey office ACP elevation in matte champagne finish." },
  { title: "Showroom Signage ACP", cat: "ACP Cladding", loc: "Adampur", img: projAcp, desc: "ACP signage wall with backlit branding for retail showroom." },

  // Steel Railings
  { title: "Staircase Glass Railing", cat: "Steel Railings", loc: "Nathnagar", img: projRailing, desc: "SS railing with 12mm toughened glass for a 3-storey home." },
  { title: "Balcony SS Railing", cat: "Steel Railings", loc: "Bhagalpur", img: projRailing, desc: "Stainless steel balcony railing with horizontal rods." },
  { title: "Terrace Glass Railing", cat: "Steel Railings", loc: "Sabour", img: projRailing, desc: "Frameless toughened glass railing for terrace garden." },

  // Home Interiors
  { title: "Modern Living Room Interior", cat: "Home Interiors", loc: "Bhagalpur", img: projInterior, desc: "Turnkey interior with TV unit, false ceiling and lighting." },
  { title: "Modular Kitchen", cat: "Home Interiors", loc: "Tilkamanjhi", img: projInterior, desc: "L-shaped modular kitchen with quartz countertop and tall units." },
  { title: "Master Bedroom Interior", cat: "Home Interiors", loc: "Adampur", img: projInterior, desc: "Master bedroom with wardrobe, headboard panelling and ambient lighting." },

  // Office Interiors
  { title: "Co-working Office Interior", cat: "Office Interiors", loc: "Tilkamanjhi", img: projOffice, desc: "Glass cabins, modular workstations and branded ACP wall." },
  { title: "Director's Cabin Interior", cat: "Office Interiors", loc: "Bhagalpur", img: projOffice, desc: "Premium director's cabin with veneer panelling and glass partition." },
  { title: "Reception & Lobby Interior", cat: "Office Interiors", loc: "Mojahidpur", img: projOffice, desc: "Corporate reception with backlit logo wall and lounge seating." },
];

function Projects() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.cat === active)),
    [active],
  );

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Selected work across Bhagalpur & Bihar"
        sub="From single windows to full interior turnkey projects — explore a sample of recent work delivered by TMG."
      />

      <section className="container-px mx-auto max-w-7xl py-10">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active === c
                  ? "border-[color:var(--navy)] bg-[color:var(--navy)] text-white"
                  : "border-border bg-card text-foreground hover:border-[color:var(--navy)]/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <figure key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1280} height={896}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <figcaption className="p-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--navy)]">{p.cat}</span>
                <h3 className="mt-1 font-display text-base font-semibold">{p.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {p.loc}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-muted-foreground">No projects in this category yet.</p>
        )}
      </section>
    </>
  );
}
