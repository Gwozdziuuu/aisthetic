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

  const numStr = val.toLocaleString("pl-PL");
  return <span ref={ref}>{numStr}{suffix}</span>;
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
    <section style={{ padding: "5rem clamp(1.5rem,5vw,4rem)", background: "#FAFAF8", borderTop: "1px solid rgba(139,110,71,0.1)", borderBottom: "1px solid rgba(139,110,71,0.1)" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2rem" }} className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: "center", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: `all 0.6s ease ${i * 0.1}s` }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#8B6E47", lineHeight: 1, marginBottom: "0.5rem" }}>
              <AnimatedNumber target={s.value} suffix={s.suffix} />
            </div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#999", letterSpacing: "0.02em" }}>{s.label}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}