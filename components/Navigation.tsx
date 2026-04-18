"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when a nav link is clicked
  const handleNavClick = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary bg-opacity-95 backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-display font-bold tracking-tight hover:text-accent transition-colors duration-300"
          >
            {"<Alex Ayibyan/>"}
          </a>

          <div className="hidden md:flex gap-8 items-center">
            <a
              href="#about"
              className="text-sm font-display tracking-wider uppercase hover:text-accent transition-colors duration-300"
            >
              Over Mij
            </a>
            <a
              href="#projects"
              className="text-sm font-display tracking-wider uppercase hover:text-accent transition-colors duration-300"
            >
              Projecten
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-accent hover:bg-highlight transition-colors duration-300 text-sm font-display tracking-wider uppercase"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-accent"
            aria-label="Navigatiemenu openen"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-primary bg-opacity-98 border-t border-accent border-opacity-20 px-6 py-4 flex flex-col gap-4"
        >
          <a
            href="#about"
            onClick={handleNavClick}
            className="text-sm font-display tracking-wider uppercase hover:text-accent transition-colors duration-300 py-2"
          >
            Over Mij
          </a>
          <a
            href="#projects"
            onClick={handleNavClick}
            className="text-sm font-display tracking-wider uppercase hover:text-accent transition-colors duration-300 py-2"
          >
            Projecten
          </a>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="px-6 py-3 bg-accent hover:bg-highlight transition-colors duration-300 text-sm font-display tracking-wider uppercase text-center"
          >
            Contact
          </a>
        </div>
      )}
    </motion.nav>
  );
}
