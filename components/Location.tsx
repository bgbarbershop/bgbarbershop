"use client";

import { MapPin, Clock, Phone } from "lucide-react";
import { useLead } from "./LeadContext";

const hours = [
  { day: "Lundi", time: "Fermé" },
  { day: "Mardi – Vendredi", time: "10h–13h / 14h–20h" },
  { day: "Samedi", time: "10h – 18h" },
  { day: "Dimanche", time: "Fermé" },
];

export default function Location() {
  const { openLead } = useLead();
  return (
    <section id="localisation" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-or text-xs tracking-[0.4em] uppercase mb-3">Nous trouver</p>
          <h2 className="text-5xl md:text-6xl text-blanc">Localisation</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Google Maps — BG Barbershop, Beynes */}
          <div className="relative h-80 lg:h-auto min-h-72 bg-surface-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.8!2d1.9030745!3d48.8558201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e69ba077352e6f%3A0x2ee52a2efc6ebba1!2sBG%20BARBERSHOP!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BG Barbershop — Beynes"
              className="absolute inset-0"
            />
          </div>

          {/* Info */}
          <div className="bg-surface-2 p-10 lg:p-14 flex flex-col justify-center gap-8">
            <div className="flex items-start gap-4">
              <MapPin size={18} className="text-or mt-1 shrink-0" />
              <div>
                <p className="text-xs tracking-widest uppercase text-gris mb-1">Adresse</p>
                <p className="text-blanc leading-relaxed">
                  Av. du Centre<br />
                  Centre commercial du Val des 4 Pignons<br />
                  78650 Beynes, France
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={18} className="text-or mt-1 shrink-0" />
              <div>
                <p className="text-xs tracking-widest uppercase text-gris mb-3">Horaires</p>
                <ul className="space-y-2">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-8 text-sm">
                      <span className="text-gris-clair">{h.day}</span>
                      <span className={h.time === "Fermé" ? "text-gris" : "text-blanc"}>
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone size={18} className="text-or shrink-0" />
              <div>
                <p className="text-xs tracking-widest uppercase text-gris mb-1">Téléphone</p>
                <a href="tel:+33615367617" className="text-blanc hover:text-or transition-colors">
                  06 15 36 76 17
                </a>
              </div>
            </div>

            <button
              onClick={openLead}
              className="mt-2 w-full text-center px-8 py-4 bg-or text-noir text-sm font-bold tracking-[0.2em] uppercase hover:bg-or-clair transition-colors"
            >
              Réserver en ligne
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
