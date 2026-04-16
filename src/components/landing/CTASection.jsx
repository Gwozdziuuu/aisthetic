import { useInView } from "../hooks/useInView";
import { useLang } from "@/lib/i18n";

export default function CTASection() {
  const { ref, inView } = useInView(0.1);
  const { t } = useLang();
  const c = t.cta;

  return (
    <section style={{ padding: "7rem clamp(1.5rem,5vw,4rem)", background: "#f5f5f0", borderTop: "1px solid rgba(139,110,71,0.1)" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="cta-grid">
        {/* B2C */}
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(-20px)", transition: "all 0.7s ease 0.1s" }}>
          <div style={{ background: "#fff", border: "1px solid rgba(139,110,71,0.15)", borderRadius: 12, padding: "3rem 2.5rem", textAlign: "center" }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#8B6E47", marginBottom: "1.25rem", fontWeight: 600, textTransform: "uppercase" }}>{c.b2cBadge}</p>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 400, color: "#2a2218", marginBottom: "1rem", lineHeight: 1.3 }}>
              {c.b2cTitle1}<br /><em style={{ color: "#8B6E47" }}>{c.b2cTitle2}</em>
            </h3>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#888", marginBottom: "2rem", lineHeight: 1.7 }}>{c.b2cDesc}</p>
            <button disabled style={{ background: "#ccc", color: "#fff", padding: "0.875rem 2.25rem", borderRadius: 6, fontSize: "0.875rem", fontFamily: "'Inter',sans-serif", fontWeight: 500, letterSpacing: "0.04em", border: "none", cursor: "default", transition: "all 0.2s" }}>
              {c.b2cCta}
            </button>
          </div>
        </div>
        {/* B2B */}
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateX(20px)", transition: "all 0.7s ease 0.2s" }}>
          <div style={{ background: "#fff", border: "1px solid rgba(139,110,71,0.15)", borderRadius: 12, padding: "3rem 2.5rem", textAlign: "center" }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#8B6E47", marginBottom: "1.25rem", fontWeight: 600, textTransform: "uppercase" }}>{c.b2bBadge}</p>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 400, color: "#2a2218", marginBottom: "1rem", lineHeight: 1.3 }}>
              {c.b2bTitle1}<br /><em style={{ color: "#8B6E47" }}>{c.b2bTitle2}</em>
            </h3>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#888", marginBottom: "2rem", lineHeight: 1.7 }}>{c.b2bDesc}</p>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "#5a4a3a", color: "#fff", padding: "0.875rem 2.25rem", borderRadius: 6, fontSize: "0.875rem", fontFamily: "'Inter',sans-serif", fontWeight: 500, letterSpacing: "0.04em", border: "none", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#8B6E47"}
              onMouseLeave={e => e.currentTarget.style.background = "#5a4a3a"}>
              {c.b2bCta}
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}