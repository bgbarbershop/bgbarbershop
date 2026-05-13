import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image placeholder — remplacer par une vraie photo dans /public/images/hero.jpg */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat hero-bg"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir/90 via-noir/50 to-noir" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/logo.png"
            alt="BG Barbershop"
            width={240}
            height={240}
            priority
            className="drop-shadow-2xl"
          />
        </div>

        {/* Eyebrow */}
        <p className="text-or text-xs tracking-[0.4em] uppercase mb-4">
          Coiffeur & Barbier
        </p>

        {/* Tagline */}
        <p className="text-gris text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed">
          Un résultat net. Une expérience soignée.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.planity.com/bg-barbershop-78650-beynes"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-or text-noir text-sm font-bold tracking-[0.2em] uppercase hover:bg-or-clair transition-colors"
          >
            Réserver
          </a>
          <Link
            href="/#services"
            className="px-8 py-4 border border-blanc/30 text-blanc text-sm tracking-[0.2em] uppercase hover:border-or hover:text-or transition-colors"
          >
            Nos services
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="/#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gris hover:text-or transition-colors animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
