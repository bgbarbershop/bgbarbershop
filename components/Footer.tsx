import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Image
            src="/images/logo.png"
            alt="BG Barbershop"
            width={110}
            height={110}
            className="mb-4"
          />
          <p className="text-gris text-sm leading-relaxed max-w-xs">
            Un espace pensé pour l&apos;homme moderne. Coupe, barbe, rasage. Le tout avec soin.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/bgbarber_78/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gris hover:text-or transition-colors"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-or mb-5">Navigation</p>
          <ul className="space-y-3">
            {[
              { href: "/#services", label: "Services & Tarifs" },
              { href: "/#galerie", label: "Galerie" },
              { href: "/#localisation", label: "Localisation" },
              { href: "/reservation", label: "Prendre rendez-vous" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-gris text-sm hover:text-or transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-or mb-5">Contact</p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gris text-sm">
              <MapPin size={16} className="mt-0.5 shrink-0 text-or" />
              <span>
                Av. du Centre<br />
                Centre commercial du Val des 4 Pignons<br />
                78650 Beynes, France
              </span>
            </li>
            <li className="flex items-center gap-3 text-gris text-sm">
              <Phone size={16} className="shrink-0 text-or" />
              <a href="tel:+33615367617" className="hover:text-or transition-colors">
                06 15 36 76 17
              </a>
            </li>
            <li className="flex items-start gap-3 text-gris text-sm">
              <Clock size={16} className="mt-0.5 shrink-0 text-or" />
              <span>
                Mar–Ven : 10h–13h / 14h–20h<br />
                Sam : 10h–18h<br />
                Lun & Dim : Fermé
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center text-gris text-xs tracking-wider">
        © {new Date().getFullYear()} BG Barbershop. Tous droits réservés.
      </div>
    </footer>
  );
}
