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
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
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
  { title: "Casement UPVC Windows — Villa", cat: "UPVC Windows", loc: "Tilkamanjhi, Bhagalpur", img: projUpvc, desc: "Full villa fit-out with white UPVC casement windows and toughened glass." },
  { title: "Main UPVC Entrance Door", cat: "UPVC Doors", loc: "Adampur, Bhagalpur", img: projUpvc, desc: "Wood-grain UPVC door with multi-point locking and laminated glass." },
  { title: "3-Track Sliding Windows", cat: "Sliding Windows", loc: "Mojahidpur", img: projOffice, desc: "Premium 3-track sliding windows with integrated mosquito mesh." },
  { title: "Floor-to-Ceiling Sliding Doors", cat: "Sliding Doors", loc: "Sabour", img: heroImg, desc: "Living room opens out to garden via large sliding glass doors." },
  { title: "Office Cabin Partitions", cat: "Aluminium Partitions", loc: "Tilkamanjhi", img: projOffice, desc: "Aluminium cabins with frosted glass for a corporate office." },
  { title: "Frameless Glass Door", cat: "Glass Doors", loc: "Bhagalpur Showroom", img: projOffice, desc: "12mm toughened frameless glass entrance with patch fittings." },
  { title: "Boardroom Glass Partition", cat: "Glass Partitions", loc: "Bhagalpur", img: projOffice, desc: "Double-glazed acoustic partition for executive boardroom." },
  { title: "Toughened Glass Façade", cat: "Toughened Glass", loc: "Bhagalpur", img: projAcp, desc: "Structural toughened glass with spider fittings for shop frontage." },
  { title: "Shop ACP Façade", cat: "ACP Cladding", loc: "Tilkamanjhi", img: projAcp, desc: "Silver & charcoal ACP cladding with concealed LED channels." },
  { title: "Staircase Glass Railing", cat: "Steel Railings", loc: "Nathnagar", img: projRailing, desc: "SS railing with 12mm toughened glass for a 3-storey home." },
  { title: "Modern Living Room Interior", cat: "Home Interiors", loc: "Bhagalpur", img: projInterior, desc: "Turnkey interior with TV unit, false ceiling and lighting." },
  { title: "Bathroom Shower Enclosure", cat: "Toughened Glass", loc: "Bhagalpur", img: projShower, desc: "Frameless shower with 10mm toughened glass and premium hinges." },
  { title: "Co-working Office Interior", cat: "Office Interiors", loc: "Tilkamanjhi", img: projOffice, desc: "Glass cabins, modular workstations and branded ACP wall." },
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