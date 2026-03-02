import { useInView } from "../hooks/useInView";

const testimonials = [
  {
    text: "Nareszcie mogłam zobaczyć jak będę wyglądać przed podjęciem decyzji. To dało mi pewność, że robię właściwy wybór.",
    name: "Anna K.",
    role: "Pacjentka",
    location: "Warszawa",
    avatar: "AK",
    stars: 5,
  },
  {
    text: "Aisthetic zrewolucjonizował moje konsultacje. Pacjenci przychodzą zdecydowani, bo już widzieli efekt. Liczba zabiegów wzrosła o 40%.",
    name: "Dr. Monika W.",
    role: "Specjalistka medycyny estetycznej",
    avatar: "MW",
    stars: 5,
  },
  {
    text: "Zwrot z inwestycji odczułam już w pierwszym miesiącu. To narzędzie sprzedaje zabiegi za nas.",
    name: "Aleksandra T.",
    role: "Właścicielka kliniki Beauty Med",
    avatar: "AT",
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: "1rem" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="#8B6E47">
          <path d="M7 1l1.5 4H13L9.5 8l1.5 4L7 10 3 12l1.5-4L1 5h4.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="testimonials" style={{ padding: "7rem clamp(1.5rem,5vw,4rem)", background: "#f5f5f0", borderTop: "1px solid rgba(139,110,71,0.1)" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: "#8B6E47", marginBottom: "1rem", fontWeight: 600, textTransform: "uppercase" }}>Opinie</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, color: "#2a2218" }}>
            Co mówią nasi użytkownicy?
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)", transition: `all 0.7s ease ${0.1 + i * 0.15}s` }}>
              <div style={{ background: "#fff", border: "1px solid rgba(139,110,71,0.12)", borderRadius: 12, padding: "2rem", height: "100%", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(139,110,71,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(139,110,71,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(139,110,71,0.12)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <Stars count={t.stars} />
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.8, marginBottom: "1.5rem", fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", borderTop: "1px solid rgba(139,110,71,0.1)", paddingTop: "1.25rem" }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(139,110,71,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: "0.7rem", color: "#8B6E47" }}>{t.avatar}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: "0.875rem", color: "#2a2218" }}>{t.name}{t.location && `, ${t.location}`}</div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", color: "#999" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}