import { useState } from "react";
import { base44 } from "@/api/base44Client";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const consultationOptions = [
  "Do 20 miesięcznie",
  "20–50 miesięcznie",
  "50–100 miesięcznie",
  "Ponad 100 miesięcznie",
];

const inputStyle = {
  width: "100%",
  background: "#fff",
  border: "1px solid rgba(139,110,71,0.2)",
  borderRadius: 6,
  padding: "0.875rem 1rem",
  color: "#2a2218",
  fontFamily: "'Inter',sans-serif",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
  appearance: "none",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", clinic: "", email: "", phone: "", consultations: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.functions.invoke("sendContactForm", form);
    setLoading(false);
    setSent(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#FAFAF8", color: "#2a2218" }}>
      <Navbar />
      <section style={{ padding: "9rem clamp(1.5rem,5vw,4rem) 7rem", background: "#FAFAF8" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: "#8B6E47", marginBottom: "1rem", fontWeight: 600, textTransform: "uppercase" }}>Dla Gabinetów</p>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, color: "#2a2218", marginBottom: "1rem" }}>
              Zamów bezpłatne demo
            </h1>
            <p style={{ fontFamily: "'Inter',sans-serif", color: "#888", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Skontaktujemy się z Tobą w ciągu 24 godzin i przeprowadzimy bezpłatną prezentację Aisthetic dostosowaną do Twojego gabinetu.
            </p>
          </div>

          {sent ? (
            <div style={{ background: "#fff", border: "1px solid rgba(139,110,71,0.2)", borderRadius: 12, padding: "4rem", textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", color: "#8B6E47", marginBottom: "1rem" }}>✓</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.75rem", fontWeight: 400, color: "#2a2218", marginBottom: "0.75rem" }}>Dziękujemy!</h3>
              <p style={{ fontFamily: "'Inter',sans-serif", color: "#888", fontSize: "0.95rem" }}>Skontaktujemy się z Tobą w ciągu 24 godzin.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: "#fff", border: "1px solid rgba(139,110,71,0.15)", borderRadius: 12, padding: "2.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }} className="contact-form-grid">
                <div>
                  <label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", color: "#999", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem", textTransform: "uppercase" }}>Imię i Nazwisko *</label>
                  <input name="name" value={form.name} onChange={handleChange} required style={inputStyle} placeholder="Jan Kowalski"
                    onFocus={e => e.target.style.borderColor = "rgba(139,110,71,0.5)"}
                    onBlur={e => e.target.style.borderColor = "rgba(139,110,71,0.2)"} />
                </div>
                <div>
                  <label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", color: "#999", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem", textTransform: "uppercase" }}>Nazwa Gabinetu *</label>
                  <input name="clinic" value={form.clinic} onChange={handleChange} required style={inputStyle} placeholder="Klinika Piękności ABC"
                    onFocus={e => e.target.style.borderColor = "rgba(139,110,71,0.5)"}
                    onBlur={e => e.target.style.borderColor = "rgba(139,110,71,0.2)"} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }} className="contact-form-grid">
                <div>
                  <label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", color: "#999", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem", textTransform: "uppercase" }}>E-mail *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required style={inputStyle} placeholder="kontakt@klinika.pl"
                    onFocus={e => e.target.style.borderColor = "rgba(139,110,71,0.5)"}
                    onBlur={e => e.target.style.borderColor = "rgba(139,110,71,0.2)"} />
                </div>
                <div>
                  <label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", color: "#999", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem", textTransform: "uppercase" }}>Telefon *</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} required style={inputStyle} placeholder="+48 500 000 000"
                    onFocus={e => e.target.style.borderColor = "rgba(139,110,71,0.5)"}
                    onBlur={e => e.target.style.borderColor = "rgba(139,110,71,0.2)"} />
                </div>
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <label style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", color: "#999", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem", textTransform: "uppercase" }}>Liczba Konsultacji Miesięcznie</label>
                <select name="consultations" value={form.consultations} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={e => e.target.style.borderColor = "rgba(139,110,71,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(139,110,71,0.2)"}>
                  <option value="">Wybierz przedział...</option>
                  {consultationOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <button type="submit" disabled={loading} style={{ background: "#5a4a3a", color: "#fff", padding: "1rem", borderRadius: 6, fontSize: "0.875rem", fontFamily: "'Inter',sans-serif", fontWeight: 500, letterSpacing: "0.05em", border: "none", cursor: loading ? "not-allowed" : "pointer", width: "100%", opacity: loading ? 0.8 : 1, transition: "all 0.2s" }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.background = "#8B6E47"; }}
                onMouseLeave={e => e.currentTarget.style.background = "#5a4a3a"}>
                {loading ? "Wysyłanie..." : "Zamów Bezpłatne Demo →"}
              </button>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", color: "#bbb", textAlign: "center", marginTop: "1rem" }}>
                Twoje dane są chronione. Zgodność z RODO.
              </p>
            </form>
          )}
        </div>
      </section>
      <Footer />
      <style>{`
        @media (max-width: 600px) {
          .contact-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}