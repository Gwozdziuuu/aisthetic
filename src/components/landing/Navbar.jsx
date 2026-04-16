import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const isSubpage = window.location.pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    [t.nav.howItWorks, "how-it-works"],
    [t.nav.solutions, "solutions"],
    [t.nav.testimonials, "testimonials"],
    [t.nav.treatments, "treatments"],
    [t.nav.contact, "contact"],
  ];

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
        {/* Left: hamburger or back button */}
        {isSubpage ? (
          <a href="/" style={{ background: "none", border: "none", color: "#5a4a3a", cursor: "pointer", padding: 4, display: "flex", alignItems: "center", gap: 8, textDecoration: "none", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.02em" }}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M11 3L5 9l6 6" />
            </svg>
            Strona główna
          </a>
        ) : (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#5a4a3a", cursor: "pointer", padding: 4, display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="2" y1="5" x2="18" y2="5" />
              <line x1="2" y1="10" x2="18" y2="10" />
              <line x1="2" y1="15" x2="18" y2="15" />
            </svg>
            <span style={{ fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.02em" }}>{t.nav.menu}</span>
          </button>
        )}

        {/* Logo center */}
        <div onClick={() => scrollTo("hero")} style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", cursor: "pointer" }}>
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699b669890489dbd9dbdfc53/36ec17096_logo_aisthetic.png" alt="AIsthetic" style={{ height: 92, objectFit: "contain" }} />
        </div>

        {/* Right: language switcher */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, border: "1px solid rgba(139,110,71,0.25)", borderRadius: 4, overflow: "hidden" }}>
          {["pl", "en"].map((l) => (
            <button key={l} onClick={() => setLang(l)} style={{
              background: lang === l ? "#5a4a3a" : "transparent",
              color: lang === l ? "#fff" : "#8B6E47",
              border: "none",
              padding: "3px 10px",
              fontSize: "0.7rem",
              fontFamily: "'Inter',sans-serif",
              fontWeight: 600,
              letterSpacing: "0.08em",
              cursor: "pointer",
              textTransform: "uppercase",
              transition: "all 0.2s",
            }}>
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Dropdown menu – only on main page */}
      {!isSubpage && menuOpen && (
        <div style={{ background: "rgba(250,250,248,0.98)", borderTop: "1px solid rgba(139,110,71,0.1)", padding: "1rem clamp(1.5rem,5vw,4rem)" }}>
          {navLinks.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", color: "#5a4a3a", fontSize: "0.95rem", cursor: "pointer", fontFamily: "'Inter', sans-serif", padding: "0.6rem 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}