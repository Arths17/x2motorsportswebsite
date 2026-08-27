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
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto max-w-5xl px-6 md:px-10 flex items-center justify-between h-16">
        <a href="#top" className="font-display italic text-lg">
          X2 Motorsports
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-sm border border-line px-3 min-h-11 flex items-center"
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
          className="md:hidden border-t border-line px-6 py-2 flex flex-col"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base min-h-12 flex items-center border-b border-line last:border-b-0"
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
