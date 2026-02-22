import { useInView } from "../hooks/useInView";

const testimonials = [
  {
    text: "Nareszcie mogłam zobaczyć jak będę wyglądać przed podjęciem decyzji. To dało mi pewność, że robię właściwy wybór.",
    name: "Anna K.",
    role: "Pacjentka",
    location: "Warszawa",
    type: "b2c",
    avatar: "AK",
    stars: 5,
  },
  {
    text: "Aisthetic zrewolucjonizował moje konsultacje. Pacjenci przychodzą zdecydowani, bo już widzieli efekt. Liczba zabiegów wzrosła o 40%.",
    name: "Dr. Monika W.",
    role: "Specjalistka medycyny estetycznej",
    location: "",
    type: "b2b",
    avatar: "MW",
    stars: 5,
  },
  {
    text: "Zwrot z inwestycji odczułam już w pierwszym miesiącu. To narzędzie sprzedaje zabiegi za nas.",
    name: "Aleksandra T.",
    role: "Właścicielka kliniki Beauty Med",
    location: "",
    type: "b2b",
    avatar: "AT",
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: "1.25rem" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C9A96E">
          <path d="M7 1l1.5 4H13L9.5 8l1.5 4L7 10 3 12l1.5-4L1 5h4.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="testimonials" style={{ padding: "8rem clamp(1.5rem,5vw,4rem)" }}>
      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", color: "#C9A96E", marginBottom: "1rem", fontWeight: 500 }}>OPINIE</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#fff" }}>
            Co mówią nasi użytkownicy?
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)", transition: `all 0.7s ease ${0.1 + i * 0.15}s` }}>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "2rem", height: "100%", transition: "all 0.3s", position: "relative", overflow: "hidden" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ position: "absolute", top: -20, right: -10, fontFamily: "'Playfair Display',serif", fontSize: "8rem", color: "rgba(201,169,110,0.05)", lineHeight: 1, pointerEvents: "none" }}>"</div>
                <Stars count={t.stars} />
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: "1.75rem", fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.25rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: t.type === "b2c" ? "linear-gradient(135deg,#C9A96E,#E8C98A)" : "linear-gradient(135deg,#4A6FBF,#6B8FDF)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "#080808" }}>{t.avatar}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: "0.875rem", color: "#fff" }}>{t.name}{t.location && `, ${t.location}`}</div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          #testimonials [style*="grid-template-columns: repeat(3,1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}