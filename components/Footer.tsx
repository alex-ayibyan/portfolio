export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.22em] text-accent">
              Alex Ayibyan
            </p>
            <p className="mt-2 text-sm text-slate-400">
              {new Date().getFullYear()} portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a
              href="#about"
              className="text-sm text-slate-400 transition-colors duration-300 hover:text-accent"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-slate-400 transition-colors duration-300 hover:text-accent"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-400 transition-colors duration-300 hover:text-accent"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
