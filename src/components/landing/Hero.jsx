import { useEffect, useRef, useState } from "react";

function BeforeAfterSlider() {
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
    <div ref={containerRef} style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/5", cursor: "ew-resize", userSelect: "none", boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,169,110,0.15)" }}
      onMouseDown={e => { isDragging.current = true; updatePos(e.clientX); }}
      onMouseMove={e => { if (isDragging.current) updatePos(e.clientX); }}
      onMouseUp={() => isDragging.current = false}
      onMouseLeave={() => isDragging.current = false}
      onTouchStart={e => { isDragging.current = true; updatePos(e.touches[0].clientX); }}
      onTouchMove={e => { if (isDragging.current) { e.preventDefault(); updatePos(e.touches[0].clientX); } }}
      onTouchEnd={() => isDragging.current = false}>
      {/* AFTER image */}
      <img src="https://images.unsplash.com/photo-1614284086595-6e8a65ba3a34?w=600&q=90" alt="after" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      {/* BEFORE image clipped */}
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=90" alt="before" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      {/* Labels */}
      <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", color: "#fff", fontSize: "0.7rem", fontFamily: "'Inter',sans-serif", letterSpacing: "0.1em", padding: "4px 10px", borderRadius: 20 }}>PRZED</div>
      <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(201,169,110,0.85)", color: "#080808", fontSize: "0.7rem", fontFamily: "'Inter',sans-serif", letterSpacing: "0.1em", fontWeight: 600, padding: "4px 10px", borderRadius: 20 }}>PO</div>
      {/* Divider */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 2, background: "#C9A96E", transform: "translateX(-50%)" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 40, height: 40, borderRadius: "50%", background: "#C9A96E", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 8l-3-3m0 0l3-3M2 5h12M11 8l3 3m0 0l-3 3M14 11H2" stroke="#080808" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", fontFamily: "'Inter',sans-serif", letterSpacing: "0.12em", whiteSpace: "nowrap" }}>↔ PRZESUŃ ABY PORÓWNAĆ</div>
    </div>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 72 }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,169,110,0.06) 0%, transparent 70%)" }} />
      <div style={{ position: "absolute", top: "20%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem clamp(1.5rem,5vw,4rem)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", width: "100%" }}>
        {/* Left */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: 20, padding: "6px 14px", marginBottom: "2rem" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9A96E", animation: "pulse 2s infinite" }} />
            <span style={{ color: "#C9A96E", fontSize: "0.75rem", fontFamily: "'Inter',sans-serif", letterSpacing: "0.1em", fontWeight: 500 }}>AI WIZUALIZACJA MEDYCYNY ESTETYCZNEJ</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, lineHeight: 1.1, marginBottom: "0.5rem", color: "#fff" }}>
            Twój wygląd.<br />
            <span style={{ color: "#C9A96E", fontStyle: "italic" }}>Twoja decyzja.</span>
          </h1>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.3, marginBottom: "2rem", color: "rgba(255,255,255,0.5)" }}>
            Zanim to zrobisz.
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.1rem)", lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: "2.5rem", maxWidth: 520 }}>
            Zobaczyć efekt zabiegu zanim wyjdziesz z gabinetu? Z Aisthetic to możliwe. Sztuczna inteligencja pokazuje realistyczną wizualizację efektów medycyny estetycznej na Twoim własnym zdjęciu.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button style={{ background: "linear-gradient(135deg, #C9A96E, #E8C98A)", color: "#080808", padding: "1rem 2rem", borderRadius: 6, fontSize: "0.875rem", fontFamily: "'Inter',sans-serif", fontWeight: 700, letterSpacing: "0.05em", border: "none", cursor: "pointer", transition: "all 0.2s", boxShadow: "0 8px 32px rgba(201,169,110,0.3)" }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 40px rgba(201,169,110,0.4)"; }}
              onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "0 8px 32px rgba(201,169,110,0.3)"; }}>
              WYPRÓBUJ ZA DARMO
            </button>
            <button onClick={() => scrollTo("solutions")} style={{ background: "none", color: "#fff", padding: "1rem 2rem", borderRadius: 6, fontSize: "0.875rem", fontFamily: "'Inter',sans-serif", fontWeight: 500, letterSpacing: "0.05em", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => { e.target.style.borderColor = "rgba(201,169,110,0.5)"; e.target.style.color = "#C9A96E"; }}
              onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.15)"; e.target.style.color = "#fff"; }}>
              DLA GABINETÓW →
            </button>
          </div>
          <div style={{ marginTop: "2.5rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {[["15 000+", "wizualizacji"], ["200+", "gabinetów"], ["22", "zabiegi"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 600, color: "#C9A96E" }}>{num}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s" }}>
          <BeforeAfterSlider />
        </div>
      </div>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media (max-width: 768px) {
          #hero > div > div { grid-template-columns: 1fr !important; }
          #hero > div > div > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}