"use client";

import { useEffect, useState } from "react";

const items = [
  { href: "#diensten", label: "Diensten" },
  { href: "#sectoren", label: "Sectoren" },
  { href: "#pakketten", label: "Pakketten" },
  { href: "#werkwijze", label: "Werkwijze" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 pt-3 sm:pt-4">
      <div className="container mx-auto px-6">
        <div
          className={`flex items-center justify-between border px-4 py-3 sm:px-6 sm:py-4 transition-all duration-300 ${
            scrolled
              ? "border-white/10 bg-[#1a1a1a]/90 shadow-[0_8px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
              : "border-white/[0.06] bg-[#1a1a1a]/60 backdrop-blur-md"
          }`}
        >
          <a
            href="#"
            className="font-display text-sm font-bold uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:text-accent"
          >
            Alex Ayibyan <span className="text-accent">IT</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-xs uppercase tracking-[0.22em] text-slate-400 transition-colors duration-300 hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="border border-accent bg-accent px-4 py-2 font-display text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-accent/80"
            >
              Contact
            </a>
          </div>

          <button
            className="text-slate-400 transition-colors duration-300 hover:text-accent md:hidden"
            aria-label="Menu openen"
            aria-expanded={open}
            aria-controls="mobiel-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div
            id="mobiel-menu"
            className="mt-px border border-t-0 border-white/10 bg-[#1a1a1a]/95 px-6 py-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {[...items, { href: "#contact", label: "Contact" }].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-xs uppercase tracking-[0.22em] text-slate-400 transition-colors duration-300 hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
