import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Alex Ayibyan | IT Professional & Developer",
  description:
    "Portfolio van Alex Ayibyan — IT-professional gespecialiseerd in webontwikkeling, backend-systemen en cloud-infrastructuur. Gevestigd in Antwerpen, België.",
  authors: [{ name: "Alex Ayibyan" }],
  keywords: [
    "Alex Ayibyan",
    "portfolio",
    "webontwikkeling",
    "developer",
    "Next.js",
    "React",
    "TypeScript",
    "Antwerpen",
  ],
  openGraph: {
    type: "website",
    locale: "nl_BE",
    title: "Alex Ayibyan | IT Professional & Developer",
    description:
      "Portfolio van Alex Ayibyan — IT-professional gespecialiseerd in webontwikkeling, backend-systemen en cloud-infrastructuur.",
    siteName: "Alex Ayibyan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Ayibyan | IT Professional & Developer",
    description:
      "Portfolio van Alex Ayibyan — IT-professional gespecialiseerd in webontwikkeling, backend-systemen en cloud-infrastructuur.",
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
