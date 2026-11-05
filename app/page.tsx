// Dienstensite (branch feature/diensten-site).
// De portfolio/CV-versie van deze pagina staat op tag `portfolio-cv-v1` en op branch `main`.
import Nav from "@/components/diensten/Nav";
import Hero from "@/components/diensten/Hero";
import { Diensten, Sectoren, Pakketten, Werkwijze, Voet } from "@/components/diensten/Secties";
import ContactForm from "@/components/diensten/ContactForm";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Diensten />
      <Sectoren />
      <Pakketten />
      <Werkwijze />
      <ContactForm />
      <Voet />
    </main>
  );
}
