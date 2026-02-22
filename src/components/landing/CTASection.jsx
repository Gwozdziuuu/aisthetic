import { useInView } from "../hooks/useInView";

export default function CTASection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section style={{ padding: "8rem clamp(1.5rem,5vw,4rem)" }}>
      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        {/* B2C */}
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(-20px)", transition: "all 0.7s ease 0.1s" }}>
          <div style={{ background: "linear-gradient(135deg, rgba(201,169,110,0.08) 0%, rgba(201,169,110,0.04) 100%)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: 20, padding: "3.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)", width: 200, height: 200, background: "radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: "#C9A96E", marginBottom: "1rem", fontWeight: 600 }}>DLA CIEBIE</p>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 600, color: "#fff", marginBottom: "1rem", lineHeight: 1.3 }}>
              Gotowy zobaczyć swoją<br /><em style={{ color: "#C9A96E" }}>najlepszą wersję?</em>
            </h3>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", marginBottom: "2rem", lineHeight: 1.7 }}>
              Bez rejestracji. Bez opłat. Wynik w kilka sekund.
            </p>
            <button style={{ background: "linear-gradient(135deg, #C9A96E, #E8C98A)", color: "#080808", padding: "1rem 2.5rem", borderRadius: 6, fontSize: "0.875rem", fontFamily: "'Inter',sans-serif", fontWeight: 700, letterSpacing: "0.05em", border: "none", cursor: "pointer", boxShadow: "0 8px 32px rgba(201,169,110,0.3)", transition: "all 0.2s" }}
              onMouseEnter={e => { e.target.style.boxShadow = "0 12px 40px rgba(201,169,110,0.45)"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.target.style.boxShadow = "0 8px 32px rgba(201,169,110,0.3)"; e.target.style.transform = "none"; }}>
              WYPRÓBUJ AISTHETIC ZA DARMO
            </button>
          </div>
        </div>
        {/* B2B */}
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(20px)", transition: "all 0.7s ease 0.2s" }}>
          <div style={{ background: "linear-gradient(135deg, rgba(74,111,191,0.08) 0%, rgba(74,111,191,0.03) 100%)", border: "1px solid rgba(100,130,220,0.2)", borderRadius: 20, padding: "3.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)", width: 200, height: 200, background: "radial-gradient(circle, rgba(74,111,191,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: "#8AA0E8", marginBottom: "1rem", fontWeight: 600 }}>DLA GABINETÓW</p>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 600, color: "#fff", marginBottom: "1rem", lineHeight: 1.3 }}>
              Chcesz zwiększyć<br /><em style={{ color: "#8AA0E8" }}>konwersję konsultacji?</em>
            </h3>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", marginBottom: "2rem", lineHeight: 1.7 }}>
              Bezpłatne demo. Bez zobowiązań. Skonfigurowane w 24h.
            </p>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "linear-gradient(135deg, #4A6FBF, #6B8FDF)", color: "#fff", padding: "1rem 2.5rem", borderRadius: 6, fontSize: "0.875rem", fontFamily: "'Inter',sans-serif", fontWeight: 700, letterSpacing: "0.05em", border: "none", cursor: "pointer", boxShadow: "0 8px 32px rgba(74,111,191,0.25)", transition: "all 0.2s" }}
              onMouseEnter={e => { e.target.style.boxShadow = "0 12px 40px rgba(74,111,191,0.4)"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.target.style.boxShadow = "0 8px 32px rgba(74,111,191,0.25)"; e.target.style.transform = "none"; }}>
              UMÓW BEZPŁATNE DEMO
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          section [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}