"use client";

import { Scissors } from "lucide-react";
import { useLead } from "./LeadContext";

export default function BookingCTA() {
  const { openLead } = useLead();
  return (
    <section className="py-24 px-6 bg-noir relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-border" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-noir border border-or rounded-full mb-8">
          <Scissors size={22} className="text-or" />
        </div>

        <h2 className="text-5xl md:text-6xl text-blanc mb-5">
          Prêt pour un nouveau look ?
        </h2>

        <p className="text-gris text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Réservez votre séance en quelques secondes. On s&apos;occupe du reste.
        </p>

        <button
          onClick={openLead}
          className="inline-block px-10 py-5 bg-or text-noir text-sm font-bold tracking-[0.2em] uppercase hover:bg-or-clair transition-colors"
        >
          Réserver maintenant
        </button>
      </div>
    </section>
  );
}
