import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getProjects } from "@/lib/github";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </main>
  );
}
