import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useLang } from "@/lib/i18n";

const Section = ({ title, children }) => (
  <div style={{ marginBottom: "2rem" }}>
    <h2 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#3a2e24", marginBottom: "0.75rem", fontFamily: "'Inter', sans-serif" }}>{title}</h2>
    {children}
  </div>
);

const P = ({ children }) => (
  <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.8, marginBottom: "0.75rem", fontFamily: "'Inter', sans-serif" }}>{children}</p>
);

const Li = ({ children }) => (
  <li style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.8, marginBottom: "0.4rem", fontFamily: "'Inter', sans-serif" }}>{children}</li>
);

export default function PrivacyPolicy() {
  const { lang } = useLang();
  const isPl = lang === "pl";

  return (
    <div style={{ background: "#FAFAF8", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "8rem clamp(1.5rem, 5vw, 3rem) 4rem", fontFamily: "'Inter', sans-serif" }}>
        <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.5rem" }}>
          {isPl ? "Polityka Prywatności" : "Privacy Policy"}
        </h1>
        <p style={{ fontSize: "0.8rem", color: "#aaa", marginBottom: "3rem" }}>
          {isPl ? "Ostatnia aktualizacja: czerwiec 2025" : "Last updated: June 2025"}
        </p>

        <Section title={isPl ? "1. Administrator danych" : "1. Data Controller"}>
          <P>{isPl
            ? "Administratorem Twoich danych osobowych jest Etherna Sp. z o.o., zarejestrowana w Polsce. W sprawach dotyczących danych osobowych skontaktuj się z nami pod adresem: kontakt@aisthetic.ai"
            : "The data controller for your personal data is Etherna Sp. z o.o., registered in Poland. For data-related matters, contact us at: kontakt@aisthetic.ai"
          }</P>
        </Section>

        <Section title={isPl ? "2. Jakie dane zbieramy" : "2. What Data We Collect"}>
          <P>{isPl ? "Możemy zbierać następujące dane:" : "We may collect the following data:"}</P>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
            <Li>{isPl ? "Dane podane w formularzu kontaktowym (imię, adres e-mail, numer telefonu, nazwa gabinetu)" : "Data provided in the contact form (name, email, phone number, clinic name)"}</Li>
            <Li>{isPl ? "Dane techniczne: adres IP, typ przeglądarki, czas wizyty" : "Technical data: IP address, browser type, visit time"}</Li>
            <Li>{isPl ? "Zdjęcia przesłane do wizualizacji AI — nie są przechowywane na naszych serwerach" : "Photos submitted for AI visualization — not stored on our servers"}</Li>
          </ul>
        </Section>

        <Section title={isPl ? "3. Cel przetwarzania danych" : "3. Purpose of Data Processing"}>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
            <Li>{isPl ? "Obsługa zapytań i umawianie demonstracji produktu" : "Handling inquiries and scheduling product demos"}</Li>
            <Li>{isPl ? "Świadczenie usługi wizualizacji AI" : "Providing the AI visualization service"}</Li>
            <Li>{isPl ? "Analiza ruchu i poprawa jakości serwisu" : "Traffic analysis and service quality improvement"}</Li>
            <Li>{isPl ? "Wypełnienie obowiązków prawnych" : "Fulfilling legal obligations"}</Li>
          </ul>
        </Section>

        <Section title={isPl ? "4. Podstawa prawna" : "4. Legal Basis"}>
          <P>{isPl
            ? "Dane przetwarzamy na podstawie: Twojej zgody (art. 6 ust. 1 lit. a RODO), realizacji umowy lub działań przedumownych (art. 6 ust. 1 lit. b RODO) oraz naszego uzasadnionego interesu (art. 6 ust. 1 lit. f RODO)."
            : "We process data on the basis of: your consent (Art. 6(1)(a) GDPR), performance of a contract or pre-contractual steps (Art. 6(1)(b) GDPR), and our legitimate interests (Art. 6(1)(f) GDPR)."
          }</P>
        </Section>

        <Section title={isPl ? "5. Udostępnianie danych" : "5. Data Sharing"}>
          <P>{isPl
            ? "Twoje dane mogą być przekazywane podmiotom świadczącym usługi na naszą rzecz (hosting, e-mail, analityka). Nie sprzedajemy danych osobowych. W celu generowania wizualizacji korzystamy z API Google Gemini — przesyłane zdjęcia nie są przechowywane przez Google po zakończeniu przetwarzania."
            : "Your data may be shared with service providers acting on our behalf (hosting, email, analytics). We do not sell personal data. For generating visualizations we use the Google Gemini API — submitted photos are not retained by Google after processing."
          }</P>
        </Section>

        <Section title={isPl ? "6. Okres przechowywania danych" : "6. Data Retention"}>
          <P>{isPl
            ? "Dane z formularza kontaktowego przechowujemy przez okres niezbędny do obsługi zapytania i przez czas wymagany przepisami prawa. Zdjęcia przesyłane do wizualizacji nie są przechowywane."
            : "Contact form data is retained for as long as necessary to handle the inquiry and as required by law. Photos submitted for visualization are not stored."
          }</P>
        </Section>

        <Section title={isPl ? "7. Twoje prawa" : "7. Your Rights"}>
          <P>{isPl ? "Przysługuje Ci prawo do:" : "You have the right to:"}</P>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
            <Li>{isPl ? "Dostępu do swoich danych" : "Access your data"}</Li>
            <Li>{isPl ? "Sprostowania nieprawidłowych danych" : "Rectify inaccurate data"}</Li>
            <Li>{isPl ? "Usunięcia danych (prawo do bycia zapomnianym)" : "Erasure of data (right to be forgotten)"}</Li>
            <Li>{isPl ? "Ograniczenia przetwarzania" : "Restriction of processing"}</Li>
            <Li>{isPl ? "Przenoszenia danych" : "Data portability"}</Li>
            <Li>{isPl ? "Wniesienia sprzeciwu wobec przetwarzania" : "Object to processing"}</Li>
            <Li>{isPl ? "Cofnięcia zgody w dowolnym momencie" : "Withdraw consent at any time"}</Li>
          </ul>
          <P>{isPl
            ? "Aby skorzystać z powyższych praw, skontaktuj się z nami: kontakt@aisthetic.ai. Przysługuje Ci również prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych."
            : "To exercise these rights, contact us at: kontakt@aisthetic.ai. You also have the right to lodge a complaint with the relevant supervisory authority."
          }</P>
        </Section>

        <Section title={isPl ? "8. Pliki cookies" : "8. Cookies"}>
          <P>{isPl
            ? "Serwis może używać plików cookies w celach analitycznych i technicznych. Możesz zarządzać ustawieniami cookies w swojej przeglądarce."
            : "The website may use cookies for analytical and technical purposes. You can manage cookie settings in your browser."
          }</P>
        </Section>

        <Section title={isPl ? "9. Zmiany polityki" : "9. Policy Changes"}>
          <P>{isPl
            ? "Zastrzegamy sobie prawo do aktualizacji niniejszej polityki. O istotnych zmianach będziemy informować za pośrednictwem strony."
            : "We reserve the right to update this policy. We will notify you of significant changes via the website."
          }</P>
        </Section>

        <Section title={isPl ? "10. Kontakt" : "10. Contact"}>
          <P>{isPl
            ? "W sprawach dotyczących ochrony danych osobowych skontaktuj się z nami: kontakt@aisthetic.ai"
            : "For data protection matters, contact us at: kontakt@aisthetic.ai"
          }</P>
        </Section>
      </div>
      <Footer />
    </div>
  );
}