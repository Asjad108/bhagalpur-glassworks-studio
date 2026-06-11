import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BUSINESS, NAV, telLink, waLink } from "@/lib/business";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[color:var(--navy-deep)] text-white/85">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-white font-display text-base font-bold text-[color:var(--navy-deep)]">
              TMG
            </span>
            <span className="font-display text-lg font-semibold text-white">
              Taj Mahal Glass
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Bhagalpur's trusted name for premium UPVC windows, glass solutions,
            aluminium partitions, ACP cladding and interior design.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-white/70 transition hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--silver)]" />
              <span>
                {BUSINESS.address.line1},<br />
                {BUSINESS.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-[color:var(--silver)]" />
              <a href={telLink} className="hover:text-white">{BUSINESS.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-[color:var(--silver)]" />
              <a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-white">
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--silver)]" />
              <span>{BUSINESS.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white">Service Areas</h3>
          <p className="mt-4 text-sm text-white/70">
            Bhagalpur · Tilkamanjhi · Naugachia · Sabour · Kahalgaon · Banka ·
            Munger · Sultanganj · across Bihar.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-5 text-xs text-white/55 md:flex-row">
          <p>© {new Date().getFullYear()} TMG – Taj Mahal Glass. All rights reserved.</p>
          <p>Designed for premium UPVC, glass & interior projects in Bihar.</p>
        </div>
      </div>
    </footer>
  );
}