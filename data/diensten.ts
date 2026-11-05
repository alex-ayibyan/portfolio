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
    id: "kantoor-it",
    titel: "Kantoor-IT & ondersteuning",
    intro:
      "Uw computers, printer en programma's moeten gewoon werken. Loopt er iets mis, dan belt u één nummer en ik los het op.",
    punten: [
      "Microsoft 365 of Google Workspace opzetten",
      "Nieuwe pc of laptop: advies, installatie en overzetten",
      "Printers, scanners en kassa aan de praat",
      "Automatische back-ups van uw bestanden",
      "Snelle hulp op afstand of ter plaatse",
    ],
  },
];

// AI & automatisering: concrete voorbeelden van wat het oplevert
export const aiVoorbeelden = [
  {
    titel: "AI leren gebruiken",
    tekst:
      "Praktische uitleg over ChatGPT, Copilot, Gemini of Claude: wat kan het, wat niet, en hoe gebruikt u het veilig met klantgegevens.",
  },
  {
    titel: "Sneller schrijven",
    tekst:
      "Offertes, mails, vacatures en berichten voor sociale media in een paar minuten in plaats van een uur, in uw eigen stijl.",
  },
  {
    titel: "Taken die vanzelf gebeuren",
    tekst:
      "Een aanvraag via uw website komt automatisch in uw agenda, een bestelling stuurt zelf een bevestiging, een afspraak stuurt zelf een herinnering.",
  },
  {
    titel: "Slimme assistent op maat",
    tekst:
      "Een AI-assistent die vragen van klanten beantwoordt, mails sorteert of documenten samenvat, afgestemd op uw zaak.",
  },
];

export const aiResultaten = [
  "Minder tijd kwijt aan administratie",
  "Geen overtypen tussen programma's",
  "Sneller antwoord voor uw klanten",
];

// Hulp aan huis voor particulieren
export const thuisHulp = [
  { titel: "Nieuwe gsm of tablet", tekst: "Instellen, contacten, foto's en WhatsApp overzetten van uw oude toestel." },
  { titel: "Laptop of computer", tekst: "Advies bij aankoop, installeren, oude bestanden overzetten en trage pc's opkuisen." },
  { titel: "Tv en streaming", tekst: "Smart-tv, Netflix, Streamz, Chromecast of decoder aansluiten en uitleggen." },
  { titel: "Printer en scanner", tekst: "Printer installeren op uw pc, laptop en gsm, scannen naar uw computer." },
  { titel: "Internet- en wifiproblemen", tekst: "Toestellen die geen verbinding maken, een vergeten wifi-wachtwoord of internet dat hapert." },
  { titel: "Software en problemen", tekst: "Programma's die niet werken, foutmeldingen, updates, mail of apps die haperen." },
  { titel: "Foto's en back-ups", tekst: "Uw foto's en documenten veilig bewaren en terugvinden, op de computer en in de cloud." },
  { titel: "Slimme toestellen", tekst: "Slimme lampen, deurbel, camera of luidspreker installeren en koppelen aan uw gsm." },
];

export const sectoren = [
  { sector: "Kapper & schoonheidssalon", aanbod: "Online afspraken met sms-herinnering, klantenfiches, kassa" },
  { sector: "Kinesist & praktijk", aanbod: "Online afspraken, veilig documenten delen, digitale afsprakenlijst" },
  { sector: "Bakker, slager & traiteur", aanbod: "Online bestellen, click & collect, digitaal prijsbord" },
  { sector: "Restaurant, café & frituur", aanbod: "Reservaties of bestellingen online, QR-menukaart, Google-reviews opvolgen" },
  { sector: "Aannemer & vakman", aanbod: "Sneller offertes opmaken met AI, planning op gsm, werffoto's delen" },
  { sector: "Winkel", aanbod: "Webshop gekoppeld aan uw voorraad, producten op Google" },
];

export const stappen = [
  { titel: "Kennismaking", tekst: "Een vrijblijvend gesprek van 30 minuten, in uw zaak of bij u thuis." },
  { titel: "Voorstel", tekst: "Een duidelijk voorstel op maat, zonder verrassingen." },
  { titel: "Uitvoering", tekst: "Ik werk alles uit en leg stap voor stap uit hoe het werkt." },
  { titel: "Opvolging", tekst: "Ook nadien blijf ik bereikbaar voor vragen en onderhoud." },
];
