import { useEffect, useRef, useState } from "react";

const BEFORE_AFTER_CASES = [
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

function BeforeAfterSlider({ before, after }) {
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
    <div
      ref={containerRef}
      style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3", cursor: "ew-resize", userSelect: "none", borderRadius: 4, background: "#f5f5f0" }}
      onMouseDown={e => { isDragging.current = true; updatePos(e.clientX); }}
      onMouseMove={e => { if (isDragging.current) updatePos(e.clientX); }}
      onMouseUp={() => isDragging.current = false}
      onMouseLeave={() => isDragging.current = false}
      onTouchStart={e => { isDragging.current = true; updatePos(e.touches[0].clientX); }}
      onTouchMove={e => { if (isDragging.current) { e.preventDefault(); updatePos(e.touches[0].clientX); } }}
      onTouchEnd={() => isDragging.current = false}
    >
      {/* AFTER image */}
      <img src={after} alt="after" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      {/* BEFORE image clipped */}
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt="before" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      {/* Labels */}
      <div style={{ position: "absolute", bottom: 14, left: 14, background: "rgba(255,255,255,0.9)", color: "#1a1a1a", fontSize: "0.65rem", fontFamily: "'Inter',sans-serif", letterSpacing: "0.12em", fontWeight: 600, padding: "5px 12px", borderRadius: 3 }}>BEFORE</div>
      <div style={{ position: "absolute", bottom: 14, right: 14, background: "rgba(255,255,255,0.9)", color: "#1a1a1a", fontSize: "0.65rem", fontFamily: "'Inter',sans-serif", letterSpacing: "0.12em", fontWeight: 600, padding: "5px 12px", borderRadius: 3 }}>AFTER</div>
      {/* Divider */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 1, background: "rgba(255,255,255,0.8)", transform: "translateX(-50%)", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,0.95)", border: "1px solid rgba(0,0,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M5 8l-3-3m0 0l3-3M2 5h12M11 8l3 3m0 0l-3 3M14 11H2" stroke="#5a4a3a" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section id="hero" style={{ minHeight: "100vh", background: "#FAFAF8", paddingTop: 64, fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div style={{ textAlign: "center", padding: "4rem clamp(1.5rem,5vw,4rem) 2rem", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.8s ease" }}>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: "#8B6E47", marginBottom: "1.25rem", fontWeight: 600, textTransform: "uppercase" }}>
          Aesthetic Surgery Visualization
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.15, color: "#2a2218", margin: 0 }}>
          Visualize Your
        </h1>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontStyle: "italic", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.15, color: "#8B6E47", margin: 0, marginBottom: "1.5rem" }}>
          Transformation
        </h1>
        <p style={{ fontSize: "1rem", color: "#6b6b6b", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
          Experience the art of subtle enhancement. Our AI-powered simulation helps you visualize potential results.
        </p>
      </div>

      {/* Before/After Cases */}
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "0 clamp(1.5rem,5vw,4rem) 4rem" }}>
        {BEFORE_AFTER_CASES.map((c, i) => (
          <div key={i} style={{ marginBottom: "3rem", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: `all 0.7s ease ${0.2 + i * 0.15}s` }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", letterSpacing: "0.18em", color: "#8B6E47", fontWeight: 600, marginBottom: "0.75rem", textTransform: "uppercase" }}>{c.label}</p>
            <BeforeAfterSlider before={c.before} after={c.after} />
          </div>
        ))}
      </div>

      {/* Try It CTA */}
      <div id="try-cta" style={{ background: "#f5f5f0", padding: "5rem clamp(1.5rem,5vw,4rem)", textAlign: "center" }}>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#8B6E47", fontWeight: 600, marginBottom: "1.5rem", textTransform: "uppercase" }}>Try It Yourself</p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 400, color: "#2a2218", marginBottom: "1.5rem", lineHeight: 1.3 }}>
          Curious About Your Results?
        </h2>
        <p style={{ fontSize: "1rem", color: "#6b6b6b", maxWidth: 440, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          Upload your photo and see a personalized simulation of your potential transformation.
        </p>
        <button style={{ background: "#5a4a3a", color: "#fff", padding: "0.875rem 2.25rem", borderRadius: 6, fontSize: "0.875rem", fontFamily: "'Inter',sans-serif", fontWeight: 500, letterSpacing: "0.03em", border: "none", cursor: "pointer", transition: "all 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.background = "#8B6E47"}
          onMouseLeave={e => e.currentTarget.style.background = "#5a4a3a"}>
          Start Your Simulation
        </button>
      </div>
    </section>
  );
}