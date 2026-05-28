"use client";

import { useLead } from "./LeadContext";

const categories = [
  {
    label: "Coupe",
    services: [
      { name: "Coupe Premium", description: "Coupe sur mesure avec finitions soignées et styling.", price: "30€", duration: "45 min" 
        <button 
  className={service.name.includes("Premium") ? "btn-premium" : "btn-padrao"}
  onClick={() => alert("Agendar: " + service.name)}
>
  Réserver
</button>
        
      { name: "Couronne", description: "Coupe dégradée précise, contours nets à la lame.", price: "20€", duration: "30 min" },
      { name: "Coupe Adolescent", description: "Coupe premium pour les moins de 18 ans.", price: "25€", duration: "45 min" },
      { name: "Coupe Enfant", description: "Coupe adaptée aux plus jeunes, avec soin et patience.", price: "20€", duration: "30 min" },
    ],
  },
  {
    label: "Barbe",
    services: [
      { name: "Barbe Express", description: "Mise en forme rapide et nette de la barbe.", price: "18€", duration: "15 min" },
      { name: "Barbe Premium", description: "Taille, mise en forme et finitions soignées de la barbe.", price: "25€", duration: "30 min" },
    ],
  },
  {
    label: "Combos",
    services: [
      { name: "Combo Express", description: "Couronne + Barbe Express. Le duo complet, rapide et net.", price: "40€", duration: "1h" },
      { name: "Combo Premium", description: "Coupe Premium + Barbe Premium. Le soin complet.", price: "50€", duration: "1h 15min" },
      { name: "Forfait BG Premium", description: "L'expérience complète : coupe, barbe et soin visage.", price: "70€", duration: "1h 30min" },
    ],
  },
];

export default function Services() {
  const { openLead } = useLead();
  return (
    <section id="services" className="py-24 px-6 bg-noir">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-or text-xs tracking-[0.4em] uppercase mb-3">Ce qu&apos;on fait</p>
          <h2 className="text-5xl md:text-6xl text-blanc">Services & Tarifs</h2>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-12">
          {categories.map((cat) => (
            <div key={cat.label}>
              {/* Category label */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs tracking-[0.4em] uppercase text-or">{cat.label}</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Services grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                {cat.services.map((s) => (
                  <div
                    key={s.name}
                    className="bg-noir p-8 group hover:bg-surface transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl text-blanc group-hover:text-or transition-colors">
                        {s.name}
                      </h3>
                      <span className="text-or text-xl font-bold ml-4 shrink-0">{s.price}</span>
                    </div>
                    <p className="text-gris text-sm leading-relaxed mb-4">{s.description}</p>
                    <p className="text-xs tracking-widest text-gris/60 uppercase">{s.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={openLead}
            className="inline-block px-8 py-4 bg-or text-noir text-sm font-bold tracking-[0.2em] uppercase hover:bg-or-clair transition-colors"
          >
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </section>
  );
}
