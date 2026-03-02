import { useEffect, useRef, useState } from "react";

const CASES = [
  {
    label: "LOWER EYELID BLEPHAROPLASTY",
    before: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697534f99ecf59eca26be2bc/e51368a7e_1g.png",
    after: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697534f99ecf59eca26be2bc/114888416_1gPrim.png",
  },
  {
    label: "UPPER EYELID BLEPHAROPLASTY",
    before: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697534f99ecf59eca26be2bc/92c32a516_2g.png",
    after: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697534f99ecf59eca26be2bc/22476c735_2gPrim.png",
  },
  {
    label: "UPPER AND LOWER EYELID BLEPHAROPLASTY",
    before: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697534f99ecf59eca26be2bc/84c55c68e_3g.png",
    after: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697534f99ecf59eca26be2bc/a77a871d1_3gPrim.png",
  },
];

function BeforeAfterSlider({ before, after, label }) {
  const [pos, setPos] = useState(50);
  const isDragging = useRef(false);
  const containerRef = useRef(null);

  const updatePos = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  };

  return (
    <div>
      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", letterSpacing: "0.18em", color: "#8B6E47", fontWeight: 600, marginBottom: "0.75rem", textTransform: "uppercase" }}>{label}</p>
      <div
        ref={containerRef}
        style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3", cursor: "ew-resize", userSelect: "none", borderRadius: 8, background: "#f0ede8" }}
        onMouseDown={e => { isDragging.current = true; updatePos(e.clientX); }}
        onMouseMove={e => { if (isDragging.current) updatePos(e.clientX); }}
        onMouseUp={() => isDragging.current = false}
        onMouseLeave={() => isDragging.current = false}
        onTouchStart={e => { isDragging.current = true; updatePos(e.touches[0].clientX); }}
        onTouchMove={e => { if (isDragging.current) { e.preventDefault(); updatePos(e.touches[0].clientX); } }}
        onTouchEnd={() => isDragging.current = false}
      >
        <img src={after} alt="after" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={before} alt="before" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", bottom: 14, left: 14, background: "rgba(255,255,255,0.92)", color: "#2a2218", fontSize: "0.6rem", fontFamily: "'Inter',sans-serif", letterSpacing: "0.14em", fontWeight: 700, padding: "5px 12px", borderRadius: 3 }}>BEFORE</div>
        <div style={{ position: "absolute", bottom: 14, right: 14, background: "rgba(255,255,255,0.92)", color: "#2a2218", fontSize: "0.6rem", fontFamily: "'Inter',sans-serif", letterSpacing: "0.14em", fontWeight: 700, padding: "5px 12px", borderRadius: 3 }}>AFTER</div>
        <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 1, background: "rgba(255,255,255,0.7)", transform: "translateX(-50%)", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.95)", border: "1px solid rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}>
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M5 8l-3-3m0 0l3-3M2 5h12M11 8l3 3m0 0l-3 3M14 11H2" stroke="#5a4a3a" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [caseIndex] = useState(() => Math.floor(Math.random() * CASES.length));
  const selectedCase = CASES[caseIndex];

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section id="hero" style={{ minHeight: "100vh", background: "#FAFAF8", paddingTop: 64, display: "flex", alignItems: "center" }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "4rem clamp(1.5rem,5vw,4rem)",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center", width: "100%"
      }} className="hero-grid">
        {/* LEFT — opis */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#8B6E47", marginBottom: "1.5rem", fontWeight: 600, textTransform: "uppercase" }}>
            AI · Medycyna Estetyczna
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: 1.2, color: "#2a2218", margin: "0 0 0.5rem" }}>
            Visualize Your
          </h1>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontStyle: "italic", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: 1.2, color: "#8B6E47", margin: "0 0 2rem" }}>
            Transformation
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1.05rem", color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", maxWidth: 440 }}>
            Zastanawiasz się jak będziesz wyglądać po zabiegu? <strong style={{ color: "#5a4a3a", fontWeight: 600 }}>Aisthetic</strong> to narzędzie AI, które pokazuje realistyczny efekt zabiegu estetycznego — zanim podejmiesz jakąkolwiek decyzję.
          </p>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", color: "#888", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: 420 }}>
            Wgraj swoje zdjęcie, wybierz zabieg i w kilka sekund zobacz swoją transformację. Bezpiecznie, anonimowo, bez rejestracji.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "#5a4a3a", color: "#fff", padding: "0.9rem 2rem", borderRadius: 6, fontSize: "0.875rem", fontFamily: "'Inter',sans-serif", fontWeight: 500, letterSpacing: "0.04em", border: "none", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#8B6E47"}
              onMouseLeave={e => e.currentTarget.style.background = "#5a4a3a"}>
              Zamów Bezpłatne Demo
            </button>
            <a href="https://pro.aisthetic.pl/" target="_blank" rel="noopener noreferrer" style={{ background: "none", color: "#5a4a3a", padding: "0.9rem 2rem", borderRadius: 6, fontSize: "0.875rem", fontFamily: "'Inter',sans-serif", fontWeight: 500, letterSpacing: "0.04em", border: "1px solid rgba(139,110,71,0.3)", cursor: "pointer", transition: "all 0.2s", display: "inline-block", textDecoration: "none" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#8B6E47"; e.currentTarget.style.color = "#8B6E47"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(139,110,71,0.3)"; e.currentTarget.style.color = "#5a4a3a"; }}>
              Przejdź do Założenia Gabinetu →
            </a>
          </div>
          <div style={{ marginTop: "2.5rem", display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
            {[["15 000+", "wizualizacji"], ["200+", "gabinetów"], ["22", "zabiegi"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.6rem", fontWeight: 600, color: "#8B6E47" }}>{num}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", color: "#aaa", letterSpacing: "0.04em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — transformacja */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s" }}>
          <BeforeAfterSlider before={selectedCase.before} after={selectedCase.after} label={selectedCase.label} />
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", color: "#bbb", textAlign: "center", marginTop: "0.875rem", letterSpacing: "0.08em" }}>↔ Przesuń aby porównać</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}