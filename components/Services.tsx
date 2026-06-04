"use client";

import { useLead } from "./LeadContext";

const categories = [
  {
    label: "Coupe",
    services: [
      { name: "Coupe Premium", description: "Coupe sur mesure avec finitions soignées et styling.", price: "30€", duration: "45 min" },
      { name: "Couronne", description: "Coupe dégradée précise, contours nets à la lame.", price: "20€", duration: "30 min" },
      { name: "Coupe Adolescent", description: "Coupe premium pour les moins de 18 ans.", price: "25€", duration: "45 min" },
      { name: "Coupe Enfant", description: "Coupe adaptée aos plus jeunes, avec soin et patience.", price: "20€", duration: "30 min" },
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

  const handleReservation = () => {
    window.location.href = "https://www.planity.com/bg-barbershop-78650-beynes/reservation";
  };

  return (
    <section id="services" className="py-32 px-6 bg-noir">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-or text-xs tracking-[0.4em] uppercase mb-4 font-light">Excellence & Prestige</p>
          <h2 className="text-6xl md:text-7xl text-blanc font-light mb-4">Services & Tarifs</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-or via-or to-transparent mx-auto"></div>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {categories.map((cat) => (
            <div key={cat.label}>
              {/* Category Header */}
              <div className="flex items-center gap-6 mb-12">
                <h3 className="text-2xl tracking-[0.3em] uppercase text-blanc font-light">{cat.label}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-or/50 to-transparent" />
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.services.map((service) => (
                  <div key={service.name} className="group relative">
                    {/* Service Card */}
                    <div className="relative bg-gradient-to-br from-surface to-noir border border-or/20 hover:border-or/60 transition-all duration-500 overflow-hidden h-full flex flex-col">
                      
                      {/* Animated Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-or/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Content */}
                      <div className="relative p-8 flex flex-col h-full">
                        
                        {/* Title */}
                        <div className="mb-4">
                          <h4 className="text-xl text-blanc font-light mb-2 group-hover:text-or transition-colors duration-300">
                            {service.name}
                          </h4>
                          <p className="text-or text-lg font-semibold">{service.price}</p>
                        </div>

                        {/* Description */}
                        <p className="text-gris text-sm leading-relaxed mb-6 flex-grow">
                          {service.description}
                        </p>

                        {/* Duration & Button */}
                        <div className="space-y-4 mt-auto">
                          <p className="text-xs tracking-widest text-gris/60 uppercase flex items-center">
                            <span className="inline-block w-1 h-1 bg-or rounded-full mr-2"></span>
                            {service.duration}
                          </p>

                          {/* Reservation Button */}
                          <button
                            onClick={handleReservation}
                            className="w-full group/btn relative py-3 px-6 overflow-hidden transition-all duration-500"
                          >
                            {/* Button Background */}
                            <div className="absolute inset-0 bg-or transform group-hover/btn:scale-110 transition-transform duration-500 origin-center"></div>
                            
                            {/* Button Border Animation */}
                            <div className="absolute inset-0 border border-or opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300"></div>

                            {/* Button Text */}
                            <span className="relative text-noir text-xs font-bold tracking-[0.15em] uppercase">
                              Choisir
                            </span>

                            {/* Hover Effect Line */}
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blanc group-hover/btn:w-full transition-all duration-500"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 pt-16 border-t border-or/20 text-center">
          <p className="text-gris text-sm mb-6 tracking-wide">Besoin de conseil avant de réserver?</p>
          <button
            onClick={openLead}
            className="group relative inline-block px-10 py-4 border-2 border-or hover:border-transparent transition-all duration-500"
          >
            {/* Background Fill on Hover */}
            <div className="absolute inset-0 bg-or scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            {/* Text */}
            <span className="relative text-or group-hover:text-noir text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-300">
              Nous Contacter
            </span>
          </button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="fixed -top-40 -right-40 w-80 h-80 bg-or/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed -bottom-40 -left-40 w-80 h-80 bg-or/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
