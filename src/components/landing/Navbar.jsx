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
      background: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(201,169,110,0.15)" : "none",
      transition: "all 0.4s ease",
      padding: "0 clamp(1.5rem, 5vw, 4rem)",
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <div style={{ fontSize: "1.5rem", fontFamily: "'Playfair Display', serif", fontWeight: 600, letterSpacing: "0.05em", color: "#C9A96E", cursor: "pointer" }} onClick={() => scrollTo("hero")}>
          Aisthetic
        </div>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="nav-links-desktop">
          {[["Jak to działa", "how-it-works"], ["Rozwiązania", "solutions"], ["Opinie", "testimonials"], ["Zabiegi", "treatments"]].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontWeight: 400, letterSpacing: "0.03em", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#C9A96E"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.7)"}>
              {label}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <button onClick={() => scrollTo("solutions")} style={{ background: "none", border: "1px solid rgba(201,169,110,0.4)", color: "#C9A96E", padding: "0.5rem 1.25rem", borderRadius: 4, fontSize: "0.8rem", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: "0.05em", transition: "all 0.2s" }}
            onMouseEnter={e => { e.target.style.background = "rgba(201,169,110,0.08)"; e.target.style.borderColor = "#C9A96E"; }} onMouseLeave={e => { e.target.style.background = "none"; e.target.style.borderColor = "rgba(201,169,110,0.4)"; }}>
            DLA GABINETÓW
          </button>
          <button onClick={() => scrollTo("hero")} style={{ background: "linear-gradient(135deg, #C9A96E, #E8C98A)", color: "#080808", padding: "0.5rem 1.5rem", borderRadius: 4, fontSize: "0.8rem", cursor: "pointer", border: "none", fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.05em", transition: "all 0.2s" }}
            onMouseEnter={e => e.target.style.opacity = "0.9"} onMouseLeave={e => e.target.style.opacity = "1"}>
            WYPRÓBUJ
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", color: "#C9A96E", cursor: "pointer", padding: 4 }} className="hamburger">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="2" y1="6" x2="20" y2="6"/><line x1="2" y1="12" x2="20" y2="12"/><line x1="2" y1="18" x2="20" y2="18"/></svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div style={{ background: "rgba(8,8,8,0.98)", borderTop: "1px solid rgba(201,169,110,0.1)", padding: "1.5rem clamp(1.5rem,5vw,4rem)" }}>
          {[["Jak to działa", "how-it-works"], ["Rozwiązania", "solutions"], ["Opinie", "testimonials"], ["Zabiegi", "treatments"]].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", color: "rgba(255,255,255,0.8)", fontSize: "1rem", cursor: "pointer", fontFamily: "'Inter', sans-serif", padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              {label}
            </button>
          ))}
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}