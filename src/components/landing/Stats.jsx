import { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";

function AnimatedNumber({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const { ref, inView } = useInView(0.3);
  const started = useRef(false);

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true;
      const num = parseInt(target.replace(/\D/g, ""));
      const duration = 1800;
      const steps = 60;
      const increment = num / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= num) { setVal(num); clearInterval(timer); }
        else setVal(Math.floor(current));
      }, duration / steps);
    }
  }, [inView, target]);

  const prefix = target.match(/^[^\d]*/)?.[0] || "";
  const numStr = val.toLocaleString("pl-PL");
  return <span ref={ref}>{prefix}{numStr}{suffix}</span>;
}

const stats = [
  { value: "15000", suffix: "+", label: "wizualizacji wykonanych" },
  { value: "98", suffix: "%", label: "użytkowników poleca" },
  { value: "200", suffix: "+", label: "gabinetów partnerskich" },
  { value: "22", suffix: "", label: "rodzaje zabiegów" },
];

export default function Stats() {
  const { ref, inView } = useInView(0.15);

  return (
    <section style={{ padding: "6rem clamp(1.5rem,5vw,4rem)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(201,169,110,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, borderTop: "1px solid rgba(201,169,110,0.1)", borderBottom: "1px solid rgba(201,169,110,0.1)" }} />
      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2rem" }}>
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: "center", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: `all 0.6s ease ${i * 0.1}s` }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, color: "#C9A96E", lineHeight: 1, marginBottom: "0.5rem" }}>
              <AnimatedNumber target={s.value} suffix={s.suffix} />
            </div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.03em" }}>{s.label}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          section [style*="grid-template-columns: repeat(4,1fr)"] { grid-template-columns: repeat(2,1fr) !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}