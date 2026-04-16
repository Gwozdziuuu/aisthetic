import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer style={{ borderTop: "1px solid rgba(139,110,71,0.12)", padding: "4rem clamp(1.5rem,5vw,4rem) 2rem", fontFamily: "'Inter',sans-serif", background: "#FAFAF8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem", alignItems: "start" }} className="footer-grid">
          <div>
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699b669890489dbd9dbdfc53/36ec17096_logo_aisthetic.png" alt="AIsthetic" style={{ height: 52, objectFit: "contain", marginBottom: "1rem" }} />
            <p style={{ fontSize: "0.875rem", color: "#999", lineHeight: 1.7, maxWidth: 260 }}>{f.tagline}</p>

          </div>
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "#bbb", marginBottom: "1.25rem", fontWeight: 600, textTransform: "uppercase" }}>{f.companyLabel}</p>
            {f.companyLinks.map((link) => (
              <div key={link} style={{ marginBottom: "0.75rem" }}>
                <a href="#" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#8B6E47"}
                  onMouseLeave={e => e.target.style.color = "#888"}>{link}</a>
              </div>
            ))}
          </div>
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "#bbb", marginBottom: "1.25rem", fontWeight: 600, textTransform: "uppercase" }}>{f.legalLabel}</p>
            {f.legalLinks.map((link) => {
              const href = (link === "RODO" || link === "GDPR") ? "/rodo" : "#";
              return (
                <div key={link} style={{ marginBottom: "0.75rem" }}>
                  <a href={href} style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "#8B6E47"}
                    onMouseLeave={e => e.target.style.color = "#888"}>{link}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(139,110,71,0.1)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "0.8rem", color: "#ccc" }}>{f.copy}</p>
          <p style={{ fontSize: "0.8rem", color: "#ccc" }}>{f.madeWith}</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}