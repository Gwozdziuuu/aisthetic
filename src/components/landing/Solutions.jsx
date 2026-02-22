import { useInView } from "../hooks/useInView";

const CheckIcon = ({ color = "#C9A96E" }) => (
  <svg width="16" height="16" fill="none" viewBox="0 0 16 16" style={{ flexShrink: 0, marginTop: 2 }}>
    <circle cx="8" cy="8" r="7" stroke={color} strokeWidth="1.2" opacity="0.3" />
    <path d="M5 8l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const b2cFeatures = [
  "Bezpieczna i anonimowa — zdjęcia nie są przechowywane",
  "Ponad 20 dostępnych zabiegów estetycznych",
  "Wynik gotowy w mniej niż 10 sekund",
  "Bez rejestracji — zacznij od razu",
  "Porównanie before/after z suwakiem",
];

const b2bFeatures = [
  "Wyższy wskaźnik konwersji konsultacji na zabiegi",
  "Integracja z systemem gabinetu",
  "Panel lekarza z historią wizualizacji pacjentów",
  "White-label — Twoje logo i kolory",
  "Zgodność z RODO i przepisami medycznymi",
  "Dedykowane wsparcie techniczne",
];

export default function Solutions() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="solutions" style={{ padding: "8rem clamp(1.5rem,5vw,4rem)" }}>
      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", color: "#C9A96E", marginBottom: "1rem", fontWeight: 500 }}>DWA ROZWIĄZANIA</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#fff" }}>
            Dla każdego, na każdym etapie
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          {/* B2C */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(-30px)", transition: "all 0.7s ease 0.1s" }}>
            <div style={{ background: "rgba(201,169,110,0.04)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: 20, padding: "3rem", height: "100%", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, background: "radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ display: "inline-flex", background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.25)", borderRadius: 20, padding: "4px 14px", marginBottom: "1.5rem" }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", color: "#C9A96E", fontWeight: 600 }}>DLA CIEBIE</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600, color: "#fff", marginBottom: "1rem" }}>
                Odkryj swój<br /><em>potencjał</em>
              </h3>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Zastanawiasz się jak będziesz wyglądać po zabiegu? Nie musisz zgadywać. Wgraj swoje zdjęcie, wybierz interesujący Cię zabieg i w kilka sekund zobaczysz realistyczną wizualizację efektów — zanim podejmiesz jakąkolwiek decyzję.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.5rem" }}>
                {b2cFeatures.map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <CheckIcon color="#C9A96E" />
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <button style={{ background: "linear-gradient(135deg, #C9A96E, #E8C98A)", color: "#080808", padding: "0.875rem 2rem", borderRadius: 6, fontSize: "0.8rem", fontFamily: "'Inter',sans-serif", fontWeight: 700, letterSpacing: "0.06em", border: "none", cursor: "pointer", width: "100%", transition: "all 0.2s", boxShadow: "0 8px 24px rgba(201,169,110,0.2)" }}
                onMouseEnter={e => e.target.style.boxShadow = "0 12px 32px rgba(201,169,110,0.35)"}
                onMouseLeave={e => e.target.style.boxShadow = "0 8px 24px rgba(201,169,110,0.2)"}>
                WYPRÓBUJ BEZPŁATNIE
              </button>
            </div>
          </div>
          {/* B2B */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(30px)", transition: "all 0.7s ease 0.2s" }}>
            <div style={{ background: "rgba(30,50,100,0.12)", border: "1px solid rgba(100,130,220,0.2)", borderRadius: 20, padding: "3rem", height: "100%", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, background: "radial-gradient(circle, rgba(100,130,220,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ display: "inline-flex", background: "rgba(100,130,220,0.1)", border: "1px solid rgba(100,130,220,0.25)", borderRadius: 20, padding: "4px 14px", marginBottom: "1.5rem" }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", color: "#8AA0E8", fontWeight: 600 }}>DLA GABINETU</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600, color: "#fff", marginBottom: "1rem" }}>
                Narzędzie, które<br /><em>zamienia konsultacje</em><br />w decyzje
              </h3>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Twoi pacjenci boją się zmian, bo nie wiedzą jak będą wyglądać. Aisthetic eliminuje tę barierę. Podczas konsultacji pokaż pacjentowi realistyczny efekt zabiegu na jego własnej twarzy — i obserwuj jak niepewność zamienia się w zaufanie.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.5rem" }}>
                {b2bFeatures.map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <CheckIcon color="#8AA0E8" />
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "linear-gradient(135deg, #4A6FBF, #6B8FDF)", color: "#fff", padding: "0.875rem 2rem", borderRadius: 6, fontSize: "0.8rem", fontFamily: "'Inter',sans-serif", fontWeight: 700, letterSpacing: "0.06em", border: "none", cursor: "pointer", width: "100%", transition: "all 0.2s", boxShadow: "0 8px 24px rgba(74,111,191,0.2)" }}
                onMouseEnter={e => e.target.style.boxShadow = "0 12px 32px rgba(74,111,191,0.35)"}
                onMouseLeave={e => e.target.style.boxShadow = "0 8px 24px rgba(74,111,191,0.2)"}>
                ZAMÓW DEMO DLA GABINETU
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          #solutions [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}