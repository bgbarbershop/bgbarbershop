import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Toutes les photos — placer dans /public/images/
const photos = [
  // Intérieur salon
  { src: "/images/gallery-1.jpg", alt: "Salon BG Barbershop — vue d'ensemble", col: "col-span-2 md:col-span-2", aspect: "aspect-video" },
  { src: "/images/gallery-9.jpg", alt: "L'équipe — deux barbiers", col: "", aspect: "aspect-square" },
  { src: "/images/gallery-2.jpg", alt: "Coupe en cours", col: "", aspect: "aspect-square" },
  { src: "/images/gallery-3.jpg", alt: "Barbier au travail", col: "", aspect: "aspect-square" },
  { src: "/images/gallery-6.jpg", alt: "Miroirs et produits Reuzel", col: "", aspect: "aspect-square" },
  // Salle d'attente
  { src: "/images/gallery-7.jpg", alt: "Salle d'attente — canapé Chesterfield", col: "", aspect: "aspect-square" },
  { src: "/images/gallery-8.jpg", alt: "Salle d'attente — vue large", col: "col-span-2 md:col-span-1", aspect: "aspect-square" },
  // Comptoir & boutique
  { src: "/images/gallery-10.jpg", alt: "Réception et boutique", col: "", aspect: "aspect-square" },
  { src: "/images/gallery-11.jpg", alt: "Espace lavage et merch BG", col: "", aspect: "aspect-square" },
  // Extérieur
  { src: "/images/gallery-4.jpg", alt: "Façade BG Barbershop — jour", col: "", aspect: "aspect-square" },
  { src: "/images/gallery-5.jpg", alt: "Façade BG Barbershop — soir", col: "", aspect: "aspect-square" },
  { src: "/images/gallery-12.jpg", alt: "Salon — autre ambiance", col: "", aspect: "aspect-square" },
  { src: "/images/gallery-13.jpg", alt: "Barbier et client", col: "", aspect: "aspect-square" },
  { src: "/images/gallery-14.jpg", alt: "Enseigne BG Barbershop", col: "col-span-2 md:col-span-1", aspect: "aspect-square" },
];

export default function GaleriePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-noir pt-20">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-or text-xs tracking-[0.4em] uppercase mb-3">Le cadre, l&apos;ambiance</p>
          <h1 className="text-6xl md:text-7xl text-blanc mb-4">Galerie</h1>
          <p className="text-gris text-base max-w-md">
            Un salon pensé dans les moindres détails. Venez comme vous êtes, repartez comme vous voulez.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`relative overflow-hidden bg-surface-2 group ${photo.col} ${photo.aspect}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
