import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const titel = "Alex Ayibyan | AI, IT-hulp en hulp aan huis in Westerlo";
const beschrijving =
  "Digitale hulp in Westerlo en omgeving: AI en automatisaties voor ondernemers, websites en sociale media, e-facturatie, en hulp aan huis bij uw gsm, laptop, tv, printer of wifi.";

export const metadata: Metadata = {
  title: titel,
  description: beschrijving,
  authors: [{ name: "Alex Ayibyan" }],
  keywords: [
    "IT Westerlo",
    "computerhulp aan huis Westerlo",
    "AI opleiding kmo",
    "automatisatie kmo",
    "website laten maken Westerlo",
    "sociale media beheer",
    "e-facturatie Peppol",
    "IT-ondersteuning kmo",
    "Tongerlo",
    "Oevel",
    "Heultje",
  ],
  openGraph: {
    type: "website",
    locale: "nl_BE",
    title: titel,
    description: beschrijving,
    siteName: "Alex Ayibyan IT",
  },
  twitter: {
    card: "summary_large_image",
    title: titel,
    description: beschrijving,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${workSans.variable}`} style={{ fontFamily: "var(--font-sans)" }}>
      <body>{children}</body>
    </html>
  );
}
