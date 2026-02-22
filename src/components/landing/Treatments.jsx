import { useInView } from "../hooks/useInView";

const treatments = [
  { name: "Botoks", icon: "✦" },
  { name: "Kwas hialuronowy", icon: "◈" },
  { name: "Korekcja nosa", icon: "◇" },
  { name: "Lifting twarzy", icon: "❋" },
  { name: "Powiększanie ust", icon: "◉" },
  { name: "Modelowanie żuchwy", icon: "◆" },
  { name: "Redukcja zmarszczek", icon: "✧" },
  { name: "Mezoterapia", icon: "⊕" },
  { name: "Wypełniacze policzków", icon: "◑" },
  { name: "Korekcja podbródka", icon: "▲" },
];

export default function Treatments() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="treatments" style={{ padding: "8rem clamp(1.5rem,5vw,4rem)", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", color: "#C9A96E", marginBottom: "1rem", fontWeight: 500 }}>KATALOG ZABIEGÓW</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#fff" }}>
            Zabiegi w ofercie
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,0.45)", marginTop: "1rem", fontSize: "1rem" }}>
            Wizualizuj dowolny zabieg przed podjęciem decyzji
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "1rem", marginBottom: "2rem" }}>
          {treatments.map((t, i) => (
            <div key={i} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: `all 0.5s ease ${i * 0.05}s` }}>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "1.5rem 1rem", textAlign: "center", cursor: "default", transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,169,110,0.06)"; e.currentTarget.style.borderColor = "rgba(201,169,110,0.25)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ fontSize: "1.25rem", color: "#C9A96E", marginBottom: "0.75rem", lineHeight: 1 }}>{t.icon}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", fontWeight: 400, lineHeight: 1.4 }}>{t.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", opacity: inView ? 1 : 0, transition: "all 0.7s ease 0.5s" }}>
          <span style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(201,169,110,0.6)" }}>i wiele więcej...</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          #treatments [style*="grid-template-columns: repeat(5,1fr)"] { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 480px) {
          #treatments [style*="grid-template-columns: repeat(5,1fr)"] { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}