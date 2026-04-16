import { useInView } from "../hooks/useInView";
import { useLang } from "@/lib/i18n";

export default function HowItWorks() {
  const { ref, inView } = useInView(0.1);
  const { t } = useLang();

  return (
    <section id="how-it-works" style={{ padding: "7rem clamp(1.5rem,5vw,4rem)", background: "#FAFAF8", position: "relative", borderTop: "1px solid rgba(139,110,71,0.1)" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: "#8B6E47", marginBottom: "1rem", fontWeight: 600, textTransform: "uppercase" }}>{t.howItWorks.badge}</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, color: "#2a2218" }}>
            {t.howItWorks.title}
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", color: "#888", marginTop: "1rem", fontSize: "1rem", maxWidth: 460, margin: "1rem auto 0", lineHeight: 1.7 }}>
            {t.howItWorks.subtitle}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem" }} className="steps-grid">
          {t.howItWorks.steps.map((step, i) => (
            <div key={i} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)", transition: `all 0.7s ease ${0.1 + i * 0.15}s` }}>
              <div style={{ background: "#fff", border: "1px solid rgba(139,110,71,0.12)", borderRadius: 12, padding: "2.25rem 2rem", height: "100%", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(139,110,71,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(139,110,71,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(139,110,71,0.12)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "3rem", fontWeight: 700, color: "rgba(139,110,71,0.15)", lineHeight: 1, marginBottom: "1.25rem" }}>0{i + 1}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 600, color: "#2a2218", marginBottom: "0.75rem" }}>{step.title}</h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.875rem", color: "#888", lineHeight: 1.75 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}