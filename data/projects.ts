import type { Project } from "@/lib/github";

export type ProjectEnrichment = Partial<
  Omit<Project, "id" | "github" | "tags">
> & {
  tags?: string[];
};

export const projectOrder: string[] = [
  "gosmartlib",
  "FindMySpotWebsite",
  "verkeersongevallen-belgie",
  "VanAschVisuals",
  "CityTripApplication",
  "UfoSightingApp",
  "GameProject",
];

export const hiddenRepos: string[] = [
  "juice-shop",
  "IctArchitecture",
  "portfolio",
  "RentApp"
];

export const githubEnrichments: Record<string, ProjectEnrichment> = {
  "verkeersongevallen-belgie": {
    title: "Verkeersongevallen België",
    description:
      "Data-analyse van verkeersongevallen in België. Visualiseert trends, risicolocaties en statistieken op basis van open overheidsdata.",
    fullDescription:
      "Een data-analyseproject dat verkeersongevallendata van de Belgische overheid verwerkt en visualiseert. Het project brengt gevaarlijke locaties, tijdspatronen en risicogroepen in kaart via interactieve grafieken en kaarten. Doel is om inzicht te geven in verkeersveiligheid op basis van cijfers.",
    features: [
      "Visualisatie van ongevallen per regio en gemeente",
      "Tijdsanalyse: uur, dag en seizoenspatronen",
      "Risicogroepen en voertuigtypes in kaart gebracht",
      "Interactieve grafieken en kaartweergave",
      "Gebaseerd op open overheidsdata",
    ],
    tags: ["Python", "Pandas", "Matplotlib", "Jupyter", "Streamlit"],
    link: "https://trafficaccidents.streamlit.app/",
    image: "/verkeersdata_homepage.png",
  },
  VanAschVisuals: {
    image: "/vanaschvisuals_mainpage.png",
    tags: ["Next.js"],
  },
  CityTripApplication: {
    image: "/citytripapp_homepage.png",
  },
  GameProject: {
    image: "/gameproject_game.png",
  },
  UfoSightingApp: {
    image: "/ufosightingapp_homepage.jpeg",
    tags: ["React Native"],
  },
  FindMySpotWebsite: {
    title: "FindMySpot - Parkeerapp (In Progress)",
    description:
      "Een persoonlijk project gericht op het vereenvoudigen van parkeren. Gebouwd als gebruiksvriendelijke webapplicatie waarmee gebruikers snel beschikbare parkeerplaatsen kunnen vinden.",
    fullDescription:
      "FindMySpot is een persoonlijk project ontwikkeld om het zoeken naar parkeerplaatsen sneller en efficienter te maken. De applicatie biedt een intuitieve interface waarmee gebruikers eenvoudig parkeerlocaties kunnen bekijken en navigeren. Het project focust op gebruiksgemak, responsive design en een vlotte gebruikerservaring.",
    features: [
      "Overzicht van beschikbare parkeerlocaties",
      "Gebruiksvriendelijke en moderne interface",
      "Responsive design voor mobiel",
      "Snelle navigatie naar parkeerplaatsen",
      "Interactieve kaartweergave",
      "Geoptimaliseerde prestaties en laadtijden",
    ],
    challenges:
      "De grootste uitdaging was het ontwerpen van een eenvoudige en intuitieve gebruikerservaring waarbij locatiegegevens overzichtelijk worden weergegeven. Dit werd opgelost door een duidelijke UI-structuur en performante front-end optimalisaties.",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    link: "https://alex-ayibyan.github.io/FindMySpotWebsite/",
    image: "/findmyspot_frontpage.png",
    gallery: [
      "/findmyspot_mappage.png",
      "/findmyspot_directionpage.png",
      "/findmyspot_profilepage.png",
    ],
  },
};

export const manualProjects: Project[] = [
  {
    id: "gosmartlib",
    title: "GoSmartLib (In Progress)",
    description:
      "Een slimme bibliotheekbeheer applicatie ontwikkeld als teamproject binnen de bacheloropleiding IT. Integreert Google Books API voor boekgegevens en Smartschool SSO voor eenvoudig inloggen.",
    fullDescription:
      "GoSmartLib is een teamproject ontwikkeld tijdens het softwareproject van de bacheloropleiding IT (2025-2026) in opdracht van de GO! Scholengroep. De applicatie biedt een uitgebreide oplossing voor bibliotheekbeheer met koppeling aan de Google Books API voor automatisch ophalen van boekgegevens en Smartschool SSO voor naadloze authenticatie. Het project werd agile ontwikkeld in sprints via GitLab.",
    features: [
      "Beheer van boeken en uitleningen",
      "Google Books API koppeling voor boekgegevens",
      "Smartschool SSO authenticatie",
      "Overzichtelijk dashboard",
      "Zoek- en filterfunctionaliteit",
      "Agile ontwikkelproces met sprints",
    ],
    challenges:
      "Het samenwerken in een team en het afstemmen van verschillende componenten vroeg om duidelijke communicatie en een goede taakverdeling. Door gebruik te maken van GitLab en agile methodieken werd dit efficient aangepakt.",
    tags: ["Next.js", "Spring Boot", "MySQL"],
    link: "https://gosmartlib06.tech",
    github:
      "https://gitlab.apstudent.be/bachelor-it/software-project/25-26/team-06/gosmartlib",
    image: "/gosmartlib_homepage.png",
    gallery: [
      "/gosmartlib_cataloguepage.png",
      "/gosmartlib_uploadpage.png",
      "/gosmartlib_detailpage.png",
    ],
  },
];

export const projects = manualProjects;
