"use client";

import { useState } from "react";

const LINKS = [
  { href: "#sim-racing", label: "Sim Racing" },
  { href: "#solar-car", label: "Solar Car" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-telemetry/20 bg-graphite/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 md:px-12 flex items-center justify-between h-16">
        <a
          href="#top"
          className="font-display uppercase tracking-[0.15em] text-lg text-paper flex items-center min-h-11 -my-2 py-2"
        >
          X2 <span className="text-livery">Motorsports</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-tel text-xs tracking-[0.15em] uppercase text-telemetry hover:text-paper transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden font-tel text-xs tracking-[0.15em] uppercase text-paper border border-telemetry/40 px-4 min-h-11 flex items-center"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-telemetry/20 px-6 py-2 flex flex-col"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-tel text-sm tracking-[0.15em] uppercase text-paper min-h-12 flex items-center border-b border-telemetry/10 last:border-b-0"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
