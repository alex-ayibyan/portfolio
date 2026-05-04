"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hero = document.querySelector("section");
    if (!hero) { setHeroVisible(false); return; }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
        if (entry.isIntersecting) setMenuOpen(false);
      },
      { threshold: 0.2 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: heroVisible ? -120 : 0, opacity: heroVisible ? 0 : 1 }}
      transition={{ duration: 0.35 }}
      className={`fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 ${heroVisible ? "pointer-events-none" : ""}`}
    >
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between border px-4 py-3 sm:px-6 sm:py-4 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[#1a1a1a]/90 shadow-[0_8px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
            : "border-white/[0.06] bg-[#1a1a1a]/60 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display text-sm font-bold uppercase tracking-[0.22em] text-white hover:text-accent transition-colors duration-300"
        >
          Alex Ayibyan
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-xs uppercase tracking-[0.22em] text-slate-400 transition-colors duration-300 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-400 hover:text-accent transition-colors duration-300"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="mx-auto mt-px max-w-6xl border border-t-0 border-white/10 bg-[#1a1a1a]/95 px-6 py-4 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-xs uppercase tracking-[0.22em] text-slate-400 transition-colors duration-300 hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
}
