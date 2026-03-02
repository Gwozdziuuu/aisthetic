import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(250,250,248,0.96)" : "rgba(250,250,248,0.85)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(139,110,71,0.12)",
      transition: "all 0.4s ease",
      padding: "0 clamp(1.5rem, 5vw, 4rem)",
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        {/* Hamburger left */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#5a4a3a", cursor: "pointer", padding: 4, display: "flex", alignItems: "center", gap: 8 }} className="hamburger-btn">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="2" y1="5" x2="18" y2="5" />
            <line x1="2" y1="10" x2="18" y2="10" />
            <line x1="2" y1="15" x2="18" y2="15" />
          </svg>
          <span style={{ fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.02em" }}>Menu</span>
        </button>

        {/* Logo center */}
        <div onClick={() => scrollTo("hero")} style={{
          position: "absolute", left: "50%", transform: "translateX(-50%)",
          cursor: "pointer"
        }}>
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699b669890489dbd9dbdfc53/36ec17096_logo_aisthetic.png" alt="AIsthetic" style={{ height: 36, objectFit: "contain" }} />
        </div>

        {/* CTA right */}
        














      </div>

      {/* Dropdown menu */}
      {menuOpen &&
      <div style={{ background: "rgba(250,250,248,0.98)", borderTop: "1px solid rgba(139,110,71,0.1)", padding: "1rem clamp(1.5rem,5vw,4rem)" }}>
          {[["Jak to działa", "how-it-works"], ["Rozwiązania", "solutions"], ["Opinie", "testimonials"], ["Zabiegi", "treatments"], ["Kontakt", "contact"]].map(([label, id]) =>
        <button key={id} onClick={() => scrollTo(id)} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", color: "#5a4a3a", fontSize: "0.95rem", cursor: "pointer", fontFamily: "'Inter', sans-serif", padding: "0.6rem 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              {label}
            </button>
        )}
        </div>
      }
    </nav>);

}