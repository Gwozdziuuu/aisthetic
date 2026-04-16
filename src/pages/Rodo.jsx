import Navbar from "../components/landing/Navbar.jsx";
import Footer from "../components/landing/Footer.jsx";

const Section = ({ title, children }) => (
  <div style={{ marginBottom: "2.5rem" }}>
    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 500, color: "#2a2218", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(139,110,71,0.15)" }}>{title}</h2>
    {children}
  </div>
);

const P = ({ children }) => (
  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.85, marginBottom: "0.75rem" }}>{children}</p>
);

const Li = ({ children }) => (
  <li style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.85, marginBottom: "0.25rem" }}>{children}</li>
);

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "0.85rem",
  fontFamily: "'Inter',sans-serif",
  marginBottom: "1rem",
};
const thStyle = {
  background: "rgba(139,110,71,0.07)",
  color: "#5a4a3a",
  fontWeight: 600,
  padding: "0.65rem 1rem",
  textAlign: "left",
  border: "1px solid rgba(139,110,71,0.15)",
};
const tdStyle = {
  padding: "0.65rem 1rem",
  border: "1px solid rgba(139,110,71,0.12)",
  color: "#555",
  verticalAlign: "top",
};

export default function Rodo() {
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAF8", color: "#2a2218" }}>
      <Navbar />
      <section style={{ padding: "9rem clamp(1.5rem,5vw,4rem) 7rem" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: "#8B6E47", marginBottom: "1rem", fontWeight: 600, textTransform: "uppercase" }}>Ochrona Danych</p>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 400, color: "#2a2218", marginBottom: "0.75rem" }}>
              Polityka Prywatności i Ochrony Danych Osobowych
            </h1>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#999" }}>Serwisu AIsthetic – www.aisthetic.pl &nbsp;·&nbsp; Data wejścia w życie: 17 lutego 2026 r.</p>
          </div>

          <Section title="1. Administrator Danych Osobowych">
            <P>Administratorem Państwa danych osobowych jest:</P>
            <P><strong style={{ color: "#2a2218" }}>Etherna Sp. z o.o.</strong><br />ul. Pestalozziego 4/37<br />85-095 Bydgoszcz</P>
            <P>Kontakt w sprawach dotyczących ochrony danych osobowych:<br />📧 E-mail: <a href="mailto:rodo@aisthetic.pl" style={{ color: "#8B6E47", textDecoration: "none" }}>rodo@aisthetic.pl</a></P>
          </Section>

          <Section title="2. Definicje">
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "0.75rem" }}>
              <Li><strong>Aplikacja / Serwis</strong> – aplikacja internetowa dostępna pod adresem www.aisthetic.pl, prowadzona pod nazwą AIsthetic.</Li>
              <Li><strong>Użytkownik</strong> – osoba korzystająca z Serwisu, w szczególności profesjonalista z branży medycyny estetycznej lub chirurgii plastycznej.</Li>
              <Li><strong>Pacjent</strong> – osoba, której wizerunek (zdjęcie) jest przesyłany przez Użytkownika za pośrednictwem Serwisu w celu edycji graficznej.</Li>
              <Li><strong>Dane osobowe</strong> – wszelkie informacje dotyczące zidentyfikowanej lub możliwej do zidentyfikowania osoby fizycznej, w rozumieniu art. 4 pkt 1 Rozporządzenia RODO.</Li>
              <Li><strong>RODO</strong> – Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r.</Li>
            </ul>
          </Section>

          <Section title="3. Jakie dane osobowe przetwarzamy?">
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.875rem", color: "#5a4a3a", fontWeight: 600, marginBottom: "0.5rem" }}>3.1. Dane Użytkownika</p>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem" }}>
              {["imię i nazwisko", "adres e-mail", "numer telefonu (opcjonalnie)", "nazwa firmy / gabinetu / kliniki", "NIP (w przypadku fakturowania)", "dane logowania (login, hasło w formie zaszyfrowanej)", "adres IP i dane dotyczące urządzenia oraz przeglądarki", "dane rozliczeniowe i historia transakcji"].map(i => <Li key={i}>{i}</Li>)}
            </ul>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.875rem", color: "#5a4a3a", fontWeight: 600, marginBottom: "0.5rem" }}>3.2. Dane Pacjenta</p>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem" }}>
              <Li>wizerunek – zdjęcia twarzy lub innych części ciała przesyłane przez Użytkownika w celu edycji graficznej</Li>
              <Li>metadane zdjęć (jeśli nie zostały usunięte przed przesłaniem)</Li>
            </ul>
            <div style={{ background: "rgba(139,110,71,0.06)", border: "1px solid rgba(139,110,71,0.2)", borderRadius: 6, padding: "1rem 1.25rem" }}>
              <P>⚠️ <strong>Ważne:</strong> Wizerunek stanowi daną osobową, a w kontekście medycyny estetycznej może być również traktowany jako dana dotycząca zdrowia (art. 9 RODO – szczególna kategoria danych osobowych). Administrator podejmuje szczególne środki ochrony tych danych.</P>
            </div>
          </Section>

          <Section title="4. Cele i podstawy prawne przetwarzania danych">
            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Cel przetwarzania</th>
                    <th style={thStyle}>Podstawa prawna</th>
                    <th style={thStyle}>Okres przechowywania</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Rejestracja konta i świadczenie usług Serwisu", "Art. 6 ust. 1 lit. b) RODO – wykonanie umowy", "Przez czas trwania umowy + okres przedawnienia roszczeń"],
                    ["Przesyłanie zdjęć Pacjenta do edycji za pośrednictwem API Google Gemini", "Art. 6 ust. 1 lit. a) RODO – zgoda; Art. 9 ust. 2 lit. a) RODO – zgoda na dane szczególnej kategorii", "Do zakończenia edycji i pobrania wyniku lub do cofnięcia zgody"],
                    ["Rozliczenia i fakturowanie", "Art. 6 ust. 1 lit. c) RODO – obowiązek prawny", "5 lat od końca roku podatkowego"],
                    ["Marketing bezpośredni", "Art. 6 ust. 1 lit. a) RODO – zgoda", "Do momentu cofnięcia zgody"],
                    ["Analityka i poprawa jakości Serwisu", "Art. 6 ust. 1 lit. f) RODO – prawnie uzasadniony interes", "Do czasu wniesienia skutecznego sprzeciwu"],
                    ["Dochodzenie lub obrona przed roszczeniami", "Art. 6 ust. 1 lit. f) RODO – prawnie uzasadniony interes", "Przez okres przedawnienia roszczeń (max. 6 lat)"],
                  ].map(([cel, podstawa, okres]) => (
                    <tr key={cel}>
                      <td style={tdStyle}>{cel}</td>
                      <td style={tdStyle}>{podstawa}</td>
                      <td style={tdStyle}>{okres}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="5. Przekazywanie danych do podmiotów trzecich i państw trzecich">
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.875rem", color: "#5a4a3a", fontWeight: 600, marginBottom: "0.5rem" }}>5.1. Podmiot przetwarzający – Google (Gemini API)</p>
            <P>W celu realizacji usługi edycji zdjęć, przesłane przez Użytkownika zdjęcia Pacjenta są przekazywane do Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) za pośrednictwem interfejsu Gemini API.</P>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem" }}>
              <Li>Google działa jako podmiot przetwarzający (procesor) w rozumieniu art. 28 RODO.</Li>
              <Li>Przekazywanie danych do USA odbywa się na podstawie EU-U.S. Data Privacy Framework lub standardowych klauzul umownych (SCC).</Li>
              <Li>Administrator zawarł z Google odpowiednią umowę powierzenia przetwarzania danych (DPA).</Li>
              <Li>Dane przesłane za pośrednictwem API nie są wykorzystywane przez Google do trenowania modeli AI, chyba że Użytkownik wyraźnie wyrazi na to zgodę.</Li>
            </ul>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.875rem", color: "#5a4a3a", fontWeight: 600, marginBottom: "0.5rem" }}>5.2. Inni odbiorcy danych</p>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "0.75rem" }}>
              {["dostawcy usług hostingowych i serwerowych", "dostawcy usług płatniczych", "dostawcy narzędzi analitycznych (np. Google Analytics – z anonimizacją IP)", "dostawcy usług e-mail i komunikacji", "kancelarie prawne i doradcy – w razie konieczności", "organy państwowe – na podstawie obowiązujących przepisów prawa"].map(i => <Li key={i}>{i}</Li>)}
            </ul>
          </Section>

          <Section title="6. Obowiązki Użytkownika wobec Pacjenta">
            <P>Użytkownik, przesyłając zdjęcie Pacjenta do Serwisu, oświadcza i gwarantuje, że:</P>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem" }}>
              <Li>Uzyskał wyraźną, dobrowolną i świadomą zgodę Pacjenta na przetwarzanie jego wizerunku w celu edycji graficznej za pośrednictwem Serwisu AIsthetic, w tym na przekazanie danych do Google LLC (USA).</Li>
              <Li>Poinformował Pacjenta o celach przetwarzania, odbiorcach danych, przekazywaniu danych do państw trzecich oraz przysługujących mu prawach zgodnie z RODO.</Li>
              <Li>Posiada udokumentowaną zgodę Pacjenta (pisemną lub elektroniczną) i jest w stanie ją okazać na żądanie Administratora lub organu nadzorczego.</Li>
              <Li>W przypadku, gdy zdjęcie stanowi daną dotyczącą zdrowia, Użytkownik uzyskał zgodę spełniającą wymogi art. 9 ust. 2 lit. a) RODO.</Li>
            </ul>
            <P>Administrator nie ponosi odpowiedzialności za brak uzyskania przez Użytkownika wymaganej zgody Pacjenta.</P>
          </Section>

          <Section title="7. Prawa osób, których dane dotyczą">
            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Prawo</th>
                    <th style={thStyle}>Opis</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["🔍 Prawo dostępu (art. 15 RODO)", "Prawo do uzyskania informacji, czy przetwarzamy Państwa dane, oraz do uzyskania ich kopii."],
                    ["✏️ Prawo do sprostowania (art. 16 RODO)", "Prawo do żądania poprawienia nieprawidłowych lub uzupełnienia niekompletnych danych."],
                    ["🗑️ Prawo do usunięcia (art. 17 RODO)", "Prawo do żądania usunięcia danych („prawo do bycia zapomnianym")."],
                    ["⏸️ Prawo do ograniczenia przetwarzania (art. 18 RODO)", "Prawo do żądania ograniczenia przetwarzania w określonych przypadkach."],
                    ["📦 Prawo do przenoszenia danych (art. 20 RODO)", "Prawo do otrzymania danych w ustrukturyzowanym formacie i przekazania ich innemu administratorowi."],
                    ["✋ Prawo do sprzeciwu (art. 21 RODO)", "Prawo do wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie."],
                    ["↩️ Prawo do cofnięcia zgody (art. 7 ust. 3 RODO)", "Prawo do cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed cofnięciem."],
                    ["📢 Prawo do skargi", "Prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa, www.uodo.gov.pl)."],
                  ].map(([prawo, opis]) => (
                    <tr key={prawo}>
                      <td style={tdStyle}>{prawo}</td>
                      <td style={tdStyle}>{opis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <P>Aby skorzystać z powyższych praw, prosimy o kontakt: <a href="mailto:rodo@aisthetic.pl" style={{ color: "#8B6E47", textDecoration: "none" }}>rodo@aisthetic.pl</a></P>
          </Section>

          <Section title="8. Bezpieczeństwo danych">
            <P>Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych osobowych, w szczególności:</P>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "0.75rem" }}>
              {[
                "🔐 szyfrowanie transmisji danych – protokół SSL/TLS (HTTPS)",
                "🔐 szyfrowanie danych w spoczynku – zdjęcia i dane wrażliwe przechowywane w formie zaszyfrowanej",
                "🛡️ kontrola dostępu – dostęp do danych wyłącznie dla upoważnionych osób",
                "🔄 regularne kopie zapasowe z zachowaniem zasad bezpieczeństwa",
                "📋 polityki i procedury wewnętrzne dotyczące ochrony danych osobowych",
                "🧪 regularne testy bezpieczeństwa infrastruktury IT",
                "⏱️ minimalizacja czasu przechowywania zdjęć – usuwane po zakończeniu edycji i pobraniu wyniku",
                "📝 rejestr czynności przetwarzania prowadzony zgodnie z art. 30 RODO",
              ].map(i => <Li key={i}>{i}</Li>)}
            </ul>
          </Section>

          <Section title="9. Pliki cookies i technologie śledzące">
            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Rodzaj cookies</th>
                    <th style={thStyle}>Cel</th>
                    <th style={thStyle}>Wymagana zgoda?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Niezbędne", "Prawidłowe działanie Serwisu, utrzymanie sesji, bezpieczeństwo", "Nie"],
                    ["Analityczne", "Analiza ruchu, poprawa jakości Serwisu (np. Google Analytics)", "Tak"],
                    ["Marketingowe", "Personalizacja reklam, remarketing", "Tak"],
                    ["Funkcjonalne", "Zapamiętywanie preferencji Użytkownika", "Tak"],
                  ].map(([rodzaj, cel, zgoda]) => (
                    <tr key={rodzaj}>
                      <td style={tdStyle}>{rodzaj}</td>
                      <td style={tdStyle}>{cel}</td>
                      <td style={tdStyle}>{zgoda}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="10. Zautomatyzowane podejmowanie decyzji i profilowanie">
            <P>Serwis AIsthetic nie podejmuje decyzji w sposób w pełni zautomatyzowany w rozumieniu art. 22 RODO, które wywoływałyby skutki prawne lub w podobny sposób istotnie wpływały na osoby, których dane dotyczą.</P>
            <P>Edycja zdjęć za pośrednictwem Gemini API stanowi przetwarzanie z wykorzystaniem sztucznej inteligencji, jednak:</P>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "0.75rem" }}>
              <Li>ma charakter wyłącznie narzędzia wspomagającego wizualizację</Li>
              <Li>nie stanowi diagnozy medycznej ani rekomendacji leczenia</Li>
              <Li>ostateczna decyzja dotycząca ewentualnych zabiegów zawsze należy do Użytkownika (lekarza/specjalisty) i Pacjenta</Li>
            </ul>
          </Section>

          <Section title="11. Zmiany Polityki Prywatności">
            <P>Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. O wszelkich istotnych zmianach Użytkownicy zostaną poinformowani za pośrednictwem:</P>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "0.75rem" }}>
              <Li>komunikatu w Serwisie</Li>
              <Li>wiadomości e-mail (w przypadku zarejestrowanych Użytkowników)</Li>
            </ul>
            <P>Aktualna wersja Polityki Prywatności jest zawsze dostępna pod adresem: www.aisthetic.pl/rodo</P>
          </Section>

          <Section title="12. Kontakt">
            <P><strong style={{ color: "#2a2218" }}>Etherna Sp. z o.o.</strong><br />ul. Pestalozziego 4/37, Bydgoszcz<br />📧 <a href="mailto:rodo@aisthetic.pl" style={{ color: "#8B6E47", textDecoration: "none" }}>rodo@aisthetic.pl</a></P>
          </Section>
        </div>
      </section>
      <Footer />
    </div>
  );
}