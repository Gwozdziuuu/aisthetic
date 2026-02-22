import { useInView } from "../hooks/useInView";

const steps = [
  {
    num: "01",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round">
        <rect x="6" y="3" width="20" height="26" rx="3"/>
        <circle cx="16" cy="12" r="4"/>
        <path d="M10 22c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
      </svg>
    ),
    title: "Wgraj swoje zdjęcie",
    desc: "Zrób selfie lub wgraj zdjęcie twarzy. Twoje dane są bezpieczne — zdjęcia nie są przechowywane na naszych serwerach.",
  },
  {
    num: "02",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="16" cy="16" r="13"/>
        <path d="M16 10v6l4 2"/>
        <circle cx="16" cy="16" r="2" fill="#C9A96E"/>
      </svg>
    ),
    title: "Wybierz zabieg",
    desc: "Botoks, kwas hialuronowy, lifting, powiększanie ust i ponad 20 innych zabiegów. Wybierz jeden lub kilka naraz.",
  },
  {
    num: "03",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 16l6 6L28 8"/>
        <circle cx="16" cy="16" r="13" strokeDasharray="3 3"/>
      </svg>
    ),
    title: "Zobacz efekt AI",
    desc: "W mniej niż 10 sekund otrzymujesz realistyczną wizualizację efektów zabiegu na Twoim własnym zdjęciu.",
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="how-it-works" style={{ padding: "8rem clamp(1.5rem,5vw,4rem)", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 0%, rgba(201,169,110,0.03) 50%, transparent 100%)", pointerEvents: "none" }} />
      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", color: "#C9A96E", marginBottom: "1rem", fontWeight: 500 }}>PROSTY PROCES</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#fff" }}>
            Jak to działa?
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,0.5)", marginTop: "1rem", fontSize: "1.05rem", maxWidth: 500, margin: "1rem auto 0" }}>
            Trzy proste kroki dzielą Cię od zobaczenia swojej nowej wersji.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem", position: "relative" }}>
          {/* Connector line */}
          <div style={{ position: "absolute", top: 56, left: "16.5%", right: "16.5%", height: 1, background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.3), rgba(201,169,110,0.3), transparent)", pointerEvents: "none" }} className="connector-line" />
          {steps.map((step, i) => (
            <div key={i} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)", transition: `all 0.7s ease ${0.1 + i * 0.15}s` }}>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "2.5rem 2rem", height: "100%", position: "relative", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,169,110,0.04)"; e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {step.icon}
                  </div>
                  <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "3.5rem", fontWeight: 700, color: "rgba(201,169,110,0.1)", lineHeight: 1 }}>{step.num}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>{step.title}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #how-it-works [style*="grid-template-columns: repeat(3,1fr)"] { grid-template-columns: 1fr !important; }
          .connector-line { display: none; }
        }
      `}</style>
    </section>
  );
}