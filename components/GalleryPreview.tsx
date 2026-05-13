import Image from "next/image";
import Link from "next/link";

// 6 meilleures photos pour la preview — voir /galerie pour toutes
const photos = [
  { src: "/images/gallery-1.jpg", alt: "Salon BG Barbershop — vue d'ensemble", col: "col-span-2", aspect: "aspect-video" },
  { src: "/images/gallery-9.jpg", alt: "L'équipe BG Barbershop", col: "", aspect: "aspect-square" },
  { src: "/images/gallery-3.jpg", alt: "Barbier au travail", col: "", aspect: "aspect-square" },
  { src: "/images/gallery-7.jpg", alt: "Salle d'attente", col: "", aspect: "aspect-square" },
  { src: "/images/gallery-6.jpg", alt: "Produits et miroirs", col: "", aspect: "aspect-square" },
  { src: "/images/gallery-4.jpg", alt: "Façade BG Barbershop", col: "", aspect: "aspect-square" },
];

export default function GalleryPreview() {
  return (
    <section id="galerie" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-or text-xs tracking-[0.4em] uppercase mb-3">Le cadre, l&apos;ambiance</p>
            <h2 className="text-5xl md:text-6xl text-blanc">Galerie</h2>
          </div>
          <Link
            href="/galerie"
            className="text-sm tracking-widest uppercase text-gris hover:text-or transition-colors border-b border-border pb-1 hover:border-or self-start sm:self-end"
          >
            Voir tout →
          </Link>
        </div>

        {/* Grid */}
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
                sizes="(max-width: 768px) 100vw, 66vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
