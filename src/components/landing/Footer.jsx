export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(139,110,71,0.12)", padding: "4rem clamp(1.5rem,5vw,4rem) 2rem", fontFamily: "'Inter',sans-serif", background: "#FAFAF8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem", alignItems: "start" }} className="footer-grid">
          {/* Brand */}
          <div>
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699b669890489dbd9dbdfc53/36ec17096_logo_aisthetic.png" alt="AIsthetic" style={{ height: 52, objectFit: "contain", marginBottom: "1rem" }} />
            <p style={{ fontSize: "0.875rem", color: "#999", lineHeight: 1.7, maxWidth: 260 }}>
              AI wizualizacja efektów zabiegów medycyny estetycznej. Twój wygląd. Twoja decyzja.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
              {[
                { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              ].map(({ label, path }) => (
                <button key={label} style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(139,110,71,0.06)", border: "1px solid rgba(139,110,71,0.15)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s", color: "#8B6E47" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(139,110,71,0.12)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(139,110,71,0.06)"; }}
                  aria-label={label}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d={path} /></svg>
                </button>
              ))}
            </div>
          </div>
          {/* Links 1 */}
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "#bbb", marginBottom: "1.25rem", fontWeight: 600, textTransform: "uppercase" }}>Firma</p>
            {["O nas", "Cennik", "Blog", "Kontakt"].map((link) => (
              <div key={link} style={{ marginBottom: "0.75rem" }}>
                <a href="#" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#8B6E47"}
                  onMouseLeave={e => e.target.style.color = "#888"}>{link}</a>
              </div>
            ))}
          </div>
          {/* Links 2 */}
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "#bbb", marginBottom: "1.25rem", fontWeight: 600, textTransform: "uppercase" }}>Prawne</p>
            {["Polityka prywatności", "RODO", "Regulamin", "Warunki użytkowania"].map((link) => (
              <div key={link} style={{ marginBottom: "0.75rem" }}>
                <a href="#" style={{ fontSize: "0.875rem", color: "#888", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#8B6E47"}
                  onMouseLeave={e => e.target.style.color = "#888"}>{link}</a>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(139,110,71,0.1)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "0.8rem", color: "#ccc" }}>© 2025 Aisthetic. Wszelkie prawa zastrzeżone.</p>
          <p style={{ fontSize: "0.8rem", color: "#ccc" }}>Stworzone z myślą o Twojej decyzji.</p>
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