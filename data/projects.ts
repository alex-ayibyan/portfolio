export type Project = {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  challenges: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
  gallery: string[];
};

export const projects: Project[] = [
    {
    id: 1,
    title: "FindMySpot - Parkeerapp (In Progress)",
    description:
      "Een persoonlijk project gericht op het vereenvoudigen van parkeren. Gebouwd als gebruiksvriendelijke webapplicatie waarmee gebruikers snel beschikbare parkeerplaatsen kunnen vinden.",
    fullDescription:
      "FindMySpot is een persoonlijk project ontwikkeld om het zoeken naar parkeerplaatsen sneller en efficiënter te maken. De applicatie biedt een intuïtieve interface waarmee gebruikers eenvoudig parkeerlocaties kunnen bekijken en navigeren. Het project focust op gebruiksgemak, responsive design en een vlotte gebruikerservaring.",
    features: [
      "Overzicht van beschikbare parkeerlocaties",
      "Gebruiksvriendelijke en moderne interface",
      "Responsive design voor mobiel",
      "Snelle navigatie naar parkeerplaatsen",
      "Interactieve kaartweergave",
      "Geoptimaliseerde prestaties en laadtijden",
    ],
    challenges:
      "De grootste uitdaging was het ontwerpen van een eenvoudige en intuïtieve gebruikerservaring waarbij locatiegegevens overzichtelijk worden weergegeven. Dit werd opgelost door een duidelijke UI-structuur en performante front-end optimalisaties.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://alex-ayibyan.github.io/FindMySpotWebsite/",
    github: "https://github.com/alex-ayibyan/FindMySpotWebsite",
    image: "/findmyspot_frontpage.png",
    gallery: ["/findmyspot_mappage.png", "/findmyspot_directionpage.png", "/findmyspot_profilepage.png"],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Een moderne taakbeheer applicatie met real-time synchronisatie, team collaboration features en geavanceerde filtering opties.",
    fullDescription:
      "Een productiviteitstool die teams helpt om georganiseerd te blijven en effectief samen te werken. Met real-time updates kunnen teamleden direct zien wanneer taken worden gewijzigd of voltooid.",
    features: [
      "Real-time task synchronisatie met Socket.io",
      "Team collaboration met comments en mentions",
      "Drag-and-drop interface voor task management",
      "Geavanceerde filters en zoekfunctionaliteit",
      "Deadline tracking en notificaties",
      "Project templates en recurring tasks",
    ],
    challenges:
      "Het synchroniseren van data tussen meerdere gebruikers in real-time was complex. Door het implementeren van conflict resolution en optimistic updates werd een soepele gebruikerservaring bereikt.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
    github: "#",
    image: "/placeholder-project-2.jpg",
    gallery: ["/placeholder-1.jpg", "/placeholder-2.jpg", "/placeholder-3.jpg"],
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "Een tool die AI gebruikt om content te genereren voor marketing doeleinden. Integreert met OpenAI API en biedt diverse templates.",
    fullDescription:
      "Een krachtige content generatie tool die marketeers helpt om snel hoogwaardige content te creëren. De tool maakt gebruik van state-of-the-art AI modellen en biedt aanpasbare templates voor verschillende use cases.",
    features: [
      "Integratie met OpenAI GPT modellen",
      "10+ content templates (blog posts, social media, ads)",
      "Tone of voice aanpassingen",
      "Multi-language support",
      "Content history en versioning",
      "Export naar verschillende formaten",
    ],
    challenges:
      "Het balanceren tussen AI-gegenereerde content en menselijke creativiteit was essentieel. Door iteratieve prompting en fine-tuning werd de output kwaliteit significant verbeterd.",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    link: "#",
    github: "#",
    image: "/placeholder-project-3.jpg",
    gallery: ["/placeholder-1.jpg", "/placeholder-2.jpg", "/placeholder-3.jpg"],
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description:
      "Een comprehensive analytics dashboard voor data visualisatie met real-time updates en exportfunctionaliteit naar verschillende formaten.",
    fullDescription:
      "Een krachtig analytics platform dat complexe data omzet in begrijpelijke visualisaties. Perfect voor bedrijven die data-driven beslissingen willen maken met real-time inzichten.",
    features: [
      "Real-time data visualisatie met D3.js",
      "Aanpasbare dashboards en widgets",
      "Export naar PDF, CSV en Excel",
      "Geautomatiseerde rapportage",
      "Data filtering en segmentatie",
      "Multi-user access controls",
    ],
    challenges:
      "Het renderen van grote datasets zonder performance issues was cruciaal. Door data virtualisatie en efficiënte caching werd een vloeiende gebruikerservaring gegarandeerd.",
    tags: ["Vue.js", "D3.js", "Express", "Redis"],
    link: "#",
    github: "#",
    image: "/placeholder-project-4.jpg",
    gallery: ["/placeholder-1.jpg", "/placeholder-2.jpg", "/placeholder-3.jpg"],
  },
];
