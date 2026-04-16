import Navbar from "../components/landing/Navbar.jsx";
import Footer from "../components/landing/Footer.jsx";

export default function About() {
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAF8", color: "#2a2218" }}>
      <Navbar />
      <section style={{ padding: "9rem clamp(1.5rem,5vw,4rem) 7rem" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ marginBottom: "4rem" }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: "#8B6E47", marginBottom: "1rem", fontWeight: 600, textTransform: "uppercase" }}>O nas</p>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 400, color: "#2a2218", marginBottom: "0.75rem" }}>
              Kim jesteśmy?
            </h1>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#999" }}>AIsthetic – nowoczesne narzędzie AI dla medycyny estetycznej</p>
          </div>

          {/* Mission */}
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 500, color: "#2a2218", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(139,110,71,0.15)" }}>Nasza misja</h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.85, marginBottom: "0.75rem" }}>
              AIsthetic to platforma AI, która umożliwia realistyczną wizualizację efektów zabiegów medycyny estetycznej — zanim pacjent podejmie jakąkolwiek decyzję. Wierzymy, że każdy zasługuje na pewność i spokój przed wyborem zabiegu.
            </p>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.85 }}>
              Naszym celem jest eliminacja bariery niepewności między pacjentem a lekarzem, zwiększenie konwersji konsultacji oraz budowanie zaufania w branży estetycznej dzięki nowoczesnej technologii.
            </p>
          </div>

          {/* Company info */}
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 500, color: "#2a2218", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(139,110,71,0.15)" }}>Dane firmy</h2>
            <div style={{ background: "#fff", border: "1px solid rgba(139,110,71,0.15)", borderRadius: 10, padding: "2rem 2.25rem" }}>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.85, marginBottom: "0.5rem" }}>
                <strong style={{ color: "#2a2218" }}>Etherna Sp. z o.o.</strong>
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.85, marginBottom: "0" }}>
                ul. Pestalozziego 4/37<br />
                85-095 Bydgoszcz<br />
                Polska
              </p>
            </div>
          </div>

          {/* Contact */}
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 500, color: "#2a2218", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(139,110,71,0.15)" }}>Kontakt</h2>
            <div style={{ background: "#fff", border: "1px solid rgba(139,110,71,0.15)", borderRadius: 10, padding: "2rem 2.25rem" }}>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.85, marginBottom: "0.5rem" }}>
                W sprawach ogólnych oraz dotyczących ochrony danych osobowych prosimy o kontakt:
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.95rem", color: "#2a2218", marginBottom: 0 }}>
                📧{" "}
                <a href="mailto:kontakt@aisthetic.pl" style={{ color: "#8B6E47", textDecoration: "none", fontWeight: 500 }}>
                  kontakt@aisthetic.pl
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}