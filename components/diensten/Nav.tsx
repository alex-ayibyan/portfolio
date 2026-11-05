"use client";

import { useEffect, useState } from "react";

const items = [
  { href: "#diensten", label: "Diensten" },
  { href: "#sectoren", label: "Voor wie" },
  { href: "#pakketten", label: "Pakketten" },
  { href: "#werkwijze", label: "Werkwijze" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">
            AA
          </span>
          <span className="text-lg font-semibold text-ink">Alex Ayibyan</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] text-slate-600 transition-colors hover:text-brand-700"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-brand-600 px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-brand-700"
          >
            Contact
          </a>
        </div>

        <button
          className="rounded-lg p-2 text-slate-700 hover:bg-sand md:hidden"
          aria-label="Menu openen"
          aria-expanded={open}
          aria-controls="mobiel-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobiel-menu" className="border-t border-sand bg-white px-6 py-4 shadow-sm md:hidden">
          <div className="flex flex-col gap-1">
            {[...items, { href: "#contact", label: "Contact" }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-slate-700 hover:bg-cream"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
