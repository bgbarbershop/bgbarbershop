import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bgbarbershop.vercel.app"),
  title: "BG Barbershop — Coiffeur & Barbier",
  description:
    "BG Barbershop, votre salon de coiffure et barbier en France. Coupes, barbe, rasage à la lame. Réservez en ligne.",
  openGraph: {
    title: "BG Barbershop — Coiffeur & Barbier",
    description: "Coiffeur & Barbier à Beynes. Réservez en ligne.",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 400, height: 400, alt: "BG Barbershop" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-noir text-blanc antialiased">
        {children}
      </body>
    </html>
  );
}
