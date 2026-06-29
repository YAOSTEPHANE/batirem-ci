const testimonials = [
  {
    text: "Nous avons confié la construction de notre villa à BATIREM GROUP et le résultat dépasse largement nos attentes. Du premier contact jusqu'à la livraison, tout a été irréprochable.",
    initials: "KA",
    name: "M. Koné Aboubacar",
    role: "Entrepreneur, Abidjan",
    delay: "",
  },
  {
    text: "La qualité des matériaux fournis par BATIREM est incomparable. En tant qu'architecte, je suis exigeante — ils n'ont jamais failli.",
    initials: "AC",
    name: "Mme. Adjovi Carine",
    role: "Architecte D.P.L.G.",
    delay: "d1",
  },
  {
    text: "Un accompagnement personnalisé de A à Z pour notre projet immobilier. BATIREM a su nous trouver la villa parfaite à Cocody.",
    initials: "YF",
    name: "Dr. Yapo Frédéric",
    role: "Médecin, Cocody",
    delay: "d2",
  },
] as const;

function QuoteIcon() {
  return (
    <svg className="test-quote-ico" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section className="testimonials" id="temoignages">
      <div className="container">
        <div className="test-header">
          <span className="lbl reveal">Témoignages</span>
          <h2 className="sec-title reveal d1">
            Ce que disent <em>nos clients</em>
          </h2>
        </div>
        <div className="test-grid">
          {testimonials.map((t) => (
            <div key={t.name} className={`test-card reveal ${t.delay}`}>
              <QuoteIcon />
              <p className="test-text">{t.text}</p>
              <div className="test-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="test-star">
                    ★
                  </span>
                ))}
              </div>
              <div className="test-author">
                <div className="test-av">{t.initials}</div>
                <div>
                  <div className="test-name">{t.name}</div>
                  <div className="test-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
