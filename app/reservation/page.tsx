import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlanityWidget from "@/components/PlanityWidget";
import { MapPin, Clock, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réservation",
  description: "Prenez rendez-vous en ligne chez BG Barbershop à Beynes. Choisissez votre service et votre créneau en quelques clics.",
};

export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-noir pt-20">
        <div className="max-w-6xl mx-auto px-6 py-14">
          {/* Header */}
          <div className="mb-10">
            <p className="text-or text-xs tracking-[0.4em] uppercase mb-3">En ligne, 24h/24</p>
            <h1 className="text-5xl md:text-6xl text-blanc mb-5">Réservation</h1>
            <div className="flex flex-wrap gap-6 text-gris text-sm">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-or" />
                Av. du Centre, 78650 Beynes
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-or" />
                Mar–Ven 10h–20h · Sam 10h–18h
              </span>
              <a href="tel:+33615367617" className="flex items-center gap-2 hover:text-or transition-colors">
                <Phone size={14} className="text-or" />
                06 15 36 76 17
              </a>
            </div>
          </div>

          {/* Widget Planity */}
          <div className="bg-white rounded-sm overflow-hidden">
            <PlanityWidget />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
