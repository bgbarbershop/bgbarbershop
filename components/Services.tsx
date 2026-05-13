const services = [
  {
    name: "Coupe Premium",
    description: "Coupe sur mesure avec finitions soignées et styling.",
    price: "30€",
    duration: "45 min",
  },
  {
    name: "Couronne",
    description: "Coupe dégradée précise, contours nets à la lame.",
    price: "20€",
    duration: "30 min",
  },
  {
    name: "Barbe Express",
    description: "Mise en forme rapide et nette de la barbe.",
    price: "18€",
    duration: "15 min",
  },
  {
    name: "Barbe Premium",
    description: "Taille, mise en forme et finitions soignées de la barbe.",
    price: "25€",
    duration: "30 min",
  },
  {
    name: "Combo Express",
    description: "Couronne + Barbe Express. Le duo complet, rapide et net.",
    price: "40€",
    duration: "1h",
  },
  {
    name: "Combo Premium",
    description: "Coupe Premium + Barbe Premium. Le soin complet.",
    price: "50€",
    duration: "1h 15min",
  },
  {
    name: "Coupe Adolescent (-18 ans)",
    description: "Coupe premium pour les moins de 18 ans.",
    price: "25€",
    duration: "45 min",
  },
  {
    name: "Coupe Enfant (-9 ans)",
    description: "Coupe adaptée aux plus jeunes, avec soin et patience.",
    price: "20€",
    duration: "30 min",
  },
  {
    name: "Forfait BG Premium",
    description: "L'expérience complète : coupe, barbe et soin visage.",
    price: "70€",
    duration: "1h 30min",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-noir">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-or text-xs tracking-[0.4em] uppercase mb-3">Ce qu&apos;on fait</p>
          <h2 className="text-5xl md:text-6xl text-blanc">Services & Tarifs</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div
              key={s.name}
              className="bg-noir p-8 group hover:bg-surface transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl md:text-2xl text-blanc group-hover:text-or transition-colors">
                  {s.name}
                </h3>
                <span className="text-or text-xl font-bold ml-4 shrink-0">{s.price}</span>
              </div>
              <p className="text-gris text-sm leading-relaxed mb-4">{s.description}</p>
              <p className="text-xs tracking-widest text-gris/60 uppercase">{s.duration}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.planity.com/bg-barbershop-78650-beynes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-or text-noir text-sm font-bold tracking-[0.2em] uppercase hover:bg-or-clair transition-colors"
          >
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
}
