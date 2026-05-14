import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bgbarbershop.com"),
  title: {
    default: "BG Barbershop — Coiffeur & Barbier à Beynes (78)",
    template: "%s | BG Barbershop",
  },
  description:
    "BG Barbershop à Beynes (78650) — coupe homme, taille de barbe et rasage à la lame. Réservation en ligne disponible. Centre commercial du Val des 4 Pignons.",
  keywords: [
    "barbershop Beynes",
    "coiffeur homme Beynes",
    "barbier Beynes",
    "coupe homme 78650",
    "taille barbe Beynes",
    "rasage lame Beynes",
    "BG Barbershop",
    "coiffeur Yvelines",
    "barbier 78",
  ],
  authors: [{ name: "BG Barbershop" }],
  creator: "BG Barbershop",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.bgbarbershop.com",
  },
  openGraph: {
    title: "BG Barbershop — Coiffeur & Barbier à Beynes (78)",
    description: "Coupe homme, barbe et rasage à la lame à Beynes. Réservez en ligne.",
    locale: "fr_FR",
    type: "website",
    url: "https://www.bgbarbershop.com",
    siteName: "BG Barbershop",
    images: [{ url: "/opengraph-image.png", width: 400, height: 400, alt: "BG Barbershop — Coiffeur & Barbier à Beynes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BG Barbershop — Coiffeur & Barbier à Beynes",
    description: "Coupe homme, barbe et rasage à la lame à Beynes (78). Réservez en ligne.",
    images: ["/opengraph-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "BG Barbershop",
  "description": "Coiffeur et barbier à Beynes. Coupe homme, taille de barbe, rasage à la lame.",
  "url": "https://www.bgbarbershop.com",
  "telephone": "+33615367617",
  "image": "https://www.bgbarbershop.com/opengraph-image.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. du Centre, Centre commercial du Val des 4 Pignons",
    "addressLocality": "Beynes",
    "postalCode": "78650",
    "addressCountry": "FR",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8558201,
    "longitude": 1.9030745,
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "10:00", "closes": "13:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "14:00", "closes": "20:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "18:00" },
  ],
  "priceRange": "€€",
  "hasMap": "https://maps.google.com/?q=BG+BARBERSHOP+Beynes",
  "sameAs": ["https://www.instagram.com/bgbarber_78/", "https://www.planity.com/bg-barbershop-78650-beynes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-noir text-blanc antialiased">
        {children}
      </body>
    </html>
  );
}
