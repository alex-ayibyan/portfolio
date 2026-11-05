import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const titel = "Alex Ayibyan IT | Website, IT & sociale media voor ondernemers in Westerlo";
const beschrijving =
  "IT-hulp voor kleine zaken in Westerlo en omgeving: websites, sociale media, e-facturatie (Peppol), kantoor-IT en ondersteuning. Eén vast aanspreekpunt, vaste prijzen.";

export const metadata: Metadata = {
  title: titel,
  description: beschrijving,
  authors: [{ name: "Alex Ayibyan" }],
  keywords: [
    "IT Westerlo",
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
