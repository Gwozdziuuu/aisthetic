import { useInView } from "../hooks/useInView";
import { useLang } from "@/lib/i18n";

export default function Treatments() {
  const { ref, inView } = useInView(0.1);
  const { t } = useLang();

  return (
    <section id="treatments" style={{ padding: "7rem clamp(1.5rem,5vw,4rem)", background: "#FAFAF8", borderTop: "1px solid rgba(139,110,71,0.1)" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: "#8B6E47", marginBottom: "1rem", fontWeight: 600, textTransform: "uppercase" }}>{t.treatments.badge}</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, color: "#2a2218" }}>
            {t.treatments.title}
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", color: "#999", marginTop: "1rem", fontSize: "0.95rem" }}>
            {t.treatments.subtitle}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "0.875rem" }} className="treatments-grid">
          {t.treatments.names.map((name, i) => (
            <div key={i} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: `all 0.5s ease ${i * 0.05}s` }}>
              <div style={{ background: "#fff", border: "1px solid rgba(139,110,71,0.12)", borderRadius: 8, padding: "1.25rem 1rem", textAlign: "center", cursor: "default", transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(139,110,71,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(139,110,71,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(139,110,71,0.12)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: "#5a4a3a", fontWeight: 500, lineHeight: 1.4 }}>{name}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem", opacity: inView ? 1 : 0, transition: "all 0.7s ease 0.5s" }}>
          <span style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic", fontSize: "1rem", color: "rgba(139,110,71,0.6)" }}>{t.treatments.more}</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .treatments-grid { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 480px) {
          .treatments-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}