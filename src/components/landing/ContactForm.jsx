import { useState } from "react";
import { useInView } from "../hooks/useInView";

const consultationOptions = [
  "Do 20 miesięcznie",
  "20–50 miesięcznie",
  "50–100 miesięcznie",
  "Ponad 100 miesięcznie",
];

export default function ContactForm() {
  const { ref, inView } = useInView(0.1);
  const [form, setForm] = useState({ name: "", clinic: "", email: "", phone: "", consultations: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 8,
    padding: "0.875rem 1rem",
    color: "#fff",
    fontFamily: "'Inter',sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    appearance: "none",
  };

  return (
    <section id="contact" style={{ padding: "8rem clamp(1.5rem,5vw,4rem)", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent, rgba(74,111,191,0.03) 50%, transparent)", pointerEvents: "none" }} />
      <div ref={ref} style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", color: "#8AA0E8", marginBottom: "1rem", fontWeight: 500 }}>DLA GABINETÓW</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600, color: "#fff", marginBottom: "1rem" }}>
            Zamów bezpłatne demo
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.7 }}>
            Skontaktujemy się z Tobą w ciągu 24 godzin i przeprowadzimy bezpłatną prezentację Aisthetic dostosowaną do Twojego gabinetu.
          </p>
        </div>
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)", transition: "all 0.7s ease 0.15s" }}>
          {sent ? (
            <div style={{ background: "rgba(74,111,191,0.08)", border: "1px solid rgba(100,130,220,0.2)", borderRadius: 16, padding: "4rem", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✓</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.75rem", color: "#fff", marginBottom: "0.75rem" }}>Dziękujemy!</h3>
              <p style={{ fontFamily: "'Inter',sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "0.95rem" }}>Skontaktujemy się z Tobą w ciągu 24 godzin.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "2.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", display: "block", marginBottom: "0.5rem" }}>IMIĘ I NAZWISKO *</label>
                  <input name="name" value={form.name} onChange={handleChange} required style={inputStyle} placeholder="Jan Kowalski"
                    onFocus={e => e.target.style.borderColor = "rgba(201,169,110,0.4)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                </div>
                <div>
                  <label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", display: "block", marginBottom: "0.5rem" }}>NAZWA GABINETU *</label>
                  <input name="clinic" value={form.clinic} onChange={handleChange} required style={inputStyle} placeholder="Klinika Piękności ABC"
                    onFocus={e => e.target.style.borderColor = "rgba(201,169,110,0.4)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", display: "block", marginBottom: "0.5rem" }}>E-MAIL *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required style={inputStyle} placeholder="kontakt@klinika.pl"
                    onFocus={e => e.target.style.borderColor = "rgba(201,169,110,0.4)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                </div>
                <div>
                  <label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", display: "block", marginBottom: "0.5rem" }}>TELEFON *</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} required style={inputStyle} placeholder="+48 500 000 000"
                    onFocus={e => e.target.style.borderColor = "rgba(201,169,110,0.4)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                </div>
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", display: "block", marginBottom: "0.5rem" }}>LICZBA KONSULTACJI MIESIĘCZNIE</label>
                <select name="consultations" value={form.consultations} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={e => e.target.style.borderColor = "rgba(201,169,110,0.4)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}>
                  <option value="">Wybierz przedział...</option>
                  {consultationOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <button type="submit" disabled={loading} style={{ background: "linear-gradient(135deg, #4A6FBF, #6B8FDF)", color: "#fff", padding: "1rem", borderRadius: 8, fontSize: "0.875rem", fontFamily: "'Inter',sans-serif", fontWeight: 700, letterSpacing: "0.06em", border: "none", cursor: loading ? "not-allowed" : "pointer", width: "100%", opacity: loading ? 0.8 : 1, transition: "all 0.2s", boxShadow: "0 8px 24px rgba(74,111,191,0.25)" }}>
                {loading ? "WYSYŁANIE..." : "ZAMÓW BEZPŁATNE DEMO →"}
              </button>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", textAlign: "center", marginTop: "1rem" }}>
                Twoje dane są chronione. Zgodność z RODO.
              </p>
            </form>
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          #contact form [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}