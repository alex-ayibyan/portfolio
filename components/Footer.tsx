export default function Footer() {
  return (
    <footer className="border-t border-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted text-sm">
              © {new Date().getFullYear()} Portfolio. Alle rechten voorbehouden.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#about"
              className="text-sm text-muted hover:text-accent transition-colors duration-300"
            >
              Over Mij
            </a>
            <a
              href="#projects"
              className="text-sm text-muted hover:text-accent transition-colors duration-300"
            >
              Projecten
            </a>
            <a
              href="#contact"
              className="text-sm text-muted hover:text-accent transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
