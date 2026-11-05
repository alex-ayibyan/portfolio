export type Dienst = {
  id: string;
  titel: string;
  intro: string;
  punten: string[];
};

export const diensten: Dienst[] = [
  {
    id: "website",
    titel: "Website & online zichtbaarheid",
    intro:
      "Klanten zoeken u eerst online. Een verzorgde website en een correct Google-profiel bepalen of ze u bellen of de concurrent.",
    punten: [
      "Nieuwe website, snel en perfect leesbaar op gsm",
      "Bestaande website vernieuwen en beveiligen (HTTPS)",
      "Webshop, online bestellen of click & collect",
      "Online afspraken en reservaties met herinneringen",
      "Google Bedrijfsprofiel volledig in orde",
      "E-mail op uw eigen naam: info@uwzaak.be",
    ],
  },
  {
    id: "sociale-media",
    titel: "Sociale media",
    intro:
      "Wie regelmatig zichtbaar is op Facebook en Instagram, blijft top-of-mind bij klanten in de buurt. Ik neem dat werk van u over.",
    punten: [
      "Vaste planning van berichten per week of maand",
      "Uw projecten en realisaties in de kijker",
      "Verhalen (stories) en korte video's",
      "Acties, nieuws en vakantiesluitingen tijdig gedeeld",
      "Profiel op punt met juiste info en links",
      "Maandelijks overzicht van bereik en resultaten",
    ],
  },
  {
    id: "e-facturatie",
    titel: "E-facturatie (Peppol)",
    intro:
      "Sinds 1 januari 2026 verstuurt u facturen aan andere bedrijven elektronisch via Peppol. Ik zorg dat u in orde bent, zonder kopzorgen.",
    punten: [
      "Advies over het juiste facturatiepakket",
      "Registratie op Peppol en volledige installatie",
      "Klanten en artikels overzetten",
      "Koppeling met uw boekhouder",
      "Korte opleiding zodat u zelf vlot verder kan",
    ],
  },
  {
    id: "kantoor-it",
    titel: "Kantoor-IT & ondersteuning",
    intro:
      "Uw computers, wifi en printer moeten gewoon werken. Loopt er iets mis, dan belt u één nummer en ik los het op.",
    punten: [
      "Microsoft 365 of Google Workspace opzetten",
      "Nieuwe pc of laptop: advies, installatie en overzetten",
      "Wifi en netwerk, met apart gastennetwerk",
      "Printers, scanners en kassa aan de praat",
      "Automatische back-ups van uw bestanden",
      "Snelle hulp op afstand of ter plaatse",
    ],
  },
  {
    id: "automatisering",
    titel: "Automatisering & slimme tools",
    intro:
      "Veel administratief werk kan vanzelf gebeuren. Dat bespaart u elke week tijd.",
    punten: [
      "Formulieren die automatisch in een lijst of agenda komen",
      "Koppelingen tussen webshop, kassa en facturatie",
      "AI-hulp voor teksten, mails en offertes",
      "Praktische opleidingen op maat van uw team",
    ],
  },
];

export const sectoren = [
  { sector: "Kapper & schoonheidssalon", aanbod: "Online afspraken met sms-herinnering, klantenfiches, kassa" },
  { sector: "Kinesist & praktijk", aanbod: "Online afspraken, veilig documenten delen, wachtzaal-wifi" },
  { sector: "Bakker, slager & traiteur", aanbod: "Online bestellen, click & collect, digitaal prijsbord" },
  { sector: "Restaurant, café & frituur", aanbod: "Reservaties of bestellingen online, QR-menukaart, gastenwifi" },
  { sector: "Aannemer & vakman", aanbod: "Offerte- en facturatiesoftware, planning op gsm, werffoto's delen" },
  { sector: "Winkel", aanbod: "Webshop gekoppeld aan uw voorraad, producten op Google" },
];

export const pakketten = [
  {
    naam: "IT-check",
    type: "Eenmalig",
    tekst:
      "Ik kom langs en bekijk uw computers, wifi, back-ups, website en Google-profiel. U krijgt een kort rapport met concrete tips.",
    uitgelicht: true,
  },
  {
    naam: "Starterspakket",
    type: "Eenmalig",
    tekst:
      "Eenvoudige website op uw eigen domein, e-mail op uw eigen naam en een volledig ingevuld Google Bedrijfsprofiel.",
    uitgelicht: false,
  },
  {
    naam: "Sociale media",
    type: "Per maand",
    tekst:
      "Vaste berichten en verhalen op Facebook en Instagram, inclusief teksten, planning en een maandelijks overzicht.",
    uitgelicht: false,
  },
  {
    naam: "Zorgeloos-abonnement",
    type: "Per maand",
    tekst:
      "Updates en back-ups opgevolgd, hulp op afstand en onderhoud van uw website. U belt, ik los het op.",
    uitgelicht: false,
  },
];

export const stappen = [
  { titel: "Kennismaking", tekst: "Een vrijblijvend gesprek van 30 minuten bij u in de zaak." },
  { titel: "Voorstel", tekst: "Een duidelijk voorstel met vaste prijs, zonder verrassingen." },
  { titel: "Uitvoering", tekst: "Ik werk alles uit en leg stap voor stap uit hoe het werkt." },
  { titel: "Opvolging", tekst: "Ook nadien blijf ik bereikbaar voor vragen en onderhoud." },
];
