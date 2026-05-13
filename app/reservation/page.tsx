import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Scissors, MapPin, Clock } from "lucide-react";

const services = [
  { name: "Coupe Premium", price: "30€", duration: "45 min" },
  { name: "Couronne", price: "20€", duration: "30 min" },
  { name: "Barbe Express", price: "18€", duration: "15 min" },
  { name: "Barbe Premium", price: "25€", duration: "30 min" },
  { name: "Combo Express", price: "40€", duration: "1h" },
  { name: "Combo Premium", price: "50€", duration: "1h 15min" },
  { name: "Coupe Adolescent (-18 ans)", price: "25€", duration: "45 min" },
  { name: "Coupe Enfant (-9 ans)", price: "20€", duration: "30 min" },
  { name: "Forfait BG Premium", price: "70€", duration: "1h 30min" },
];

export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-noir pt-20">
        <div className="max-w-5xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="mb-14">
            <p className="text-or text-xs tracking-[0.4em] uppercase mb-3">Simple et rapide</p>
            <h1 className="text-6xl md:text-7xl text-blanc mb-4">Réservation</h1>
            <p className="text-gris text-base max-w-lg">
              Prenez rendez-vous directement en ligne via Planity. Choisissez votre service, votre créneau, c&apos;est confirmé instantanément.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Sidebar */}
            <div className="lg:col-span-2 bg-surface-2 p-8 lg:p-10 flex flex-col gap-8">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 border border-or rounded-full mb-6">
                  <Scissors size={18} className="text-or" />
                </div>
                <h2 className="text-2xl text-blanc mb-1">BG Barbershop</h2>
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-or text-sm font-bold">5.0</span>
                  <span className="text-gris text-xs">(104 avis)</span>
                </div>
                <div className="flex items-start gap-2 text-gris text-sm mb-2">
                  <MapPin size={14} className="text-or mt-0.5 shrink-0" />
                  <span>Av. du Centre, 78650 Beynes</span>
                </div>
                <div className="flex items-start gap-2 text-gris text-sm">
                  <Clock size={14} className="text-or mt-0.5 shrink-0" />
                  <span>Mar–Ven : 10h–13h / 14h–20h<br />Sam : 10h–18h</span>
                </div>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-or mb-4">Services</p>
                <ul className="space-y-2">
                  {services.map((s) => (
                    <li key={s.name} className="flex items-center justify-between text-sm gap-3">
                      <span className="text-gris-clair">{s.name}</span>
                      <span className="text-or font-medium shrink-0">{s.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Planity */}
            <div className="lg:col-span-3 bg-surface p-8 lg:p-10 flex flex-col items-center justify-center text-center gap-8">
              <div>
                <h3 className="text-3xl text-blanc mb-4">Réservez en ligne</h3>
                <p className="text-gris text-sm max-w-sm leading-relaxed">
                  La réservation se fait via Planity. Choisissez votre prestation, votre créneau et recevez une confirmation immédiate.
                </p>
              </div>

              <a
                href="https://www.planity.com/bg-barbershop-78650-beynes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-or text-noir text-sm font-bold tracking-[0.2em] uppercase hover:bg-or-clair transition-colors"
              >
                Prendre rendez-vous
                <ExternalLink size={16} />
              </a>

              <p className="text-gris/50 text-xs">
                Vous serez redirigé vers Planity pour finaliser votre réservation.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
