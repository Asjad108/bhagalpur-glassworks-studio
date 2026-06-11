import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS, NAV, telLink } from "@/lib/business";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-md bg-[color:var(--navy-deep)] font-display text-base font-bold text-white shadow-soft">
            TMG
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold text-foreground md:text-lg">
              Taj Mahal Glass
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Bhagalpur · Bihar
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-[color:var(--navy)] after:scale-x-100" }}
              className="relative text-sm font-medium text-foreground/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[color:var(--navy)] after:transition-transform hover:text-[color:var(--navy)] hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telLink}
            className="hidden items-center gap-2 rounded-full bg-[color:var(--navy)] px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-[color:var(--navy-deep)] md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
          <button
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-px mx-auto flex max-w-7xl flex-col py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-[color:var(--navy)]" }}
                className="border-b border-border/60 py-3 text-base font-medium text-foreground/85 last:border-none"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={telLink}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--navy)] px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}