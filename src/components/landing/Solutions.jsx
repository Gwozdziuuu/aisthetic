import { useInView } from "../hooks/useInView";
import { useLang } from "@/lib/i18n";

const CheckIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 16 16" style={{ flexShrink: 0, marginTop: 2 }}>
    <circle cx="8" cy="8" r="7" stroke="#8B6E47" strokeWidth="1.2" opacity="0.4" />
    <path d="M5 8l2 2 4-4" stroke="#8B6E47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Solutions() {
  const { ref, inView } = useInView(0.1);
  const { t } = useLang();
  const s = t.solutions;

  return (
    <section id="solutions" style={{ padding: "7rem clamp(1.5rem,5vw,4rem)", background: "#f5f5f0", borderTop: "1px solid rgba(139,110,71,0.1)" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: "#8B6E47", marginBottom: "1rem", fontWeight: 600, textTransform: "uppercase" }}>{s.badge}</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, color: "#2a2218" }}>
            {s.title}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="solutions-grid">
          {/* B2C */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(-30px)", transition: "all 0.7s ease 0.1s" }}>
            <div style={{ background: "#fff", border: "1px solid rgba(139,110,71,0.15)", borderRadius: 12, padding: "2.5rem", height: "100%" }}>
              <div style={{ display: "inline-flex", background: "rgba(139,110,71,0.08)", borderRadius: 20, padding: "4px 14px", marginBottom: "1.5rem" }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", color: "#8B6E47", fontWeight: 600, textTransform: "uppercase" }}>{s.b2cBadge}</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 400, color: "#2a2218", marginBottom: "1rem", lineHeight: 1.3 }}>
                {s.b2cTitle1}<br /><em>{s.b2cTitle2}</em>
              </h3>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#888", lineHeight: 1.8, marginBottom: "2rem" }}>{s.b2cDesc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.25rem" }}>
                {s.b2cFeatures.map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <CheckIcon />
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.875rem", color: "#666" }}>{f}</span>
                  </div>
                ))}
              </div>
              <button style={{ background: "#5a4a3a", color: "#fff", padding: "0.875rem 2rem", borderRadius: 6, fontSize: "0.8rem", fontFamily: "'Inter',sans-serif", fontWeight: 500, letterSpacing: "0.05em", border: "none", cursor: "pointer", width: "100%", transition: "all 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#8B6E47"}
                onMouseLeave={e => e.currentTarget.style.background = "#5a4a3a"}>
                {s.b2cCta}
              </button>
            </div>
          </div>
          {/* B2B */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(30px)", transition: "all 0.7s ease 0.2s" }}>
            <div style={{ background: "#fff", border: "1px solid rgba(139,110,71,0.15)", borderRadius: 12, padding: "2.5rem", height: "100%" }}>
              <div style={{ display: "inline-flex", background: "rgba(139,110,71,0.08)", borderRadius: 20, padding: "4px 14px", marginBottom: "1.5rem" }}>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", color: "#8B6E47", fontWeight: 600, textTransform: "uppercase" }}>{s.b2bBadge}</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 400, color: "#2a2218", marginBottom: "1rem", lineHeight: 1.3 }}>
                {s.b2bTitle1}<br /><em>{s.b2bTitle2}</em><br />{s.b2bTitle3}
              </h3>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#888", lineHeight: 1.8, marginBottom: "2rem" }}>{s.b2bDesc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.25rem" }}>
                {s.b2bFeatures.map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <CheckIcon />
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.875rem", color: "#666" }}>{f}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "#5a4a3a", color: "#fff", padding: "0.875rem 2rem", borderRadius: 6, fontSize: "0.8rem", fontFamily: "'Inter',sans-serif", fontWeight: 500, letterSpacing: "0.05em", border: "none", cursor: "pointer", width: "100%", transition: "all 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#8B6E47"}
                onMouseLeave={e => e.currentTarget.style.background = "#5a4a3a"}>
                {s.b2bCta}
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .solutions-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}