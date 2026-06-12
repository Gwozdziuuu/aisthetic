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
            ? "Administratorem Twoich danych osobowych jest C&G Enterprises Spółka z ograniczoną odpowiedzialnością z siedzibą w Bydgoszczy, ul. Fordońska 2/T2A, 85-095 Bydgoszcz, wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS 0001246348, NIP 5543047770, REGON 544948670 (\"Administrator\")."
            : "The controller of your personal data is C&G Enterprises Spółka z ograniczoną odpowiedzialnością, with its registered office in Bydgoszcz, ul. Fordońska 2/T2A, 85-095 Bydgoszcz, Poland, registered in the National Court Register under KRS 0001246348, NIP 5543047770, REGON 544948670 (\"Controller\")."
          }</P>
          <P>{isPl
            ? "W sprawach dotyczących ochrony danych osobowych możesz skontaktować się z nami pod adresem e-mail: kontakt@aisthetic.pl lub pisemnie na adres siedziby wskazany powyżej."
            : "For matters concerning personal data protection, you can contact us at: kontakt@aisthetic.pl or in writing at the registered address above."
          }</P>
        </Section>

        <Section title={isPl ? "2. Jakie dane zbieramy" : "2. Data We Collect"}>
          <P>{isPl ? "Możemy zbierać następujące dane:" : "We may collect the following data:"}</P>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
            <Li>{isPl
              ? "Dane podane w formularzu kontaktowym (imię, adres e-mail, numer telefonu, nazwa gabinetu)"
              : "Data provided in the contact form (name, email address, phone number, clinic name)"
            }</Li>
            <Li>{isPl
              ? "Dane techniczne: adres IP, typ przeglądarki, system operacyjny, czas i częstotliwość wizyt, dane o aktywności w serwisie"
              : "Technical data: IP address, browser type, operating system, visit time and frequency, site activity data"
            }</Li>
            <Li>{isPl
              ? "Zdjęcia przesłane do wizualizacji AI — przetwarzane wyłącznie tymczasowo w celu wygenerowania wizualizacji i niezwłocznie usuwane po zakończeniu przetwarzania (nie są zapisywane na naszych serwerach na stałe)"
              : "Photos uploaded for AI visualization — processed temporarily solely to generate the visualization and immediately deleted after processing (not permanently stored on our servers)"
            }</Li>
          </ul>
          <P>{isPl
            ? "Zwracamy uwagę, że zdjęcia przesyłane w celu wizualizacji efektów zabiegów medycyny estetycznej mogą stanowić dane osobowe szczególnej kategorii w rozumieniu art. 9 RODO (dane dotyczące zdrowia). Przesyłając takie zdjęcie, wyrażasz wyraźną zgodę na ich przetworzenie w celu wygenerowania wizualizacji (art. 9 ust. 2 lit. a RODO). Zgoda jest dobrowolna, ale niezbędna do skorzystania z funkcji wizualizacji AI."
            : "Please note that photos uploaded for the purpose of visualizing aesthetic treatment results may constitute special category personal data under Article 9 GDPR (health data). By uploading such a photo, you give your explicit consent to processing it for the purpose of generating the visualization (Art. 9(2)(a) GDPR). Consent is voluntary but necessary to use the AI visualization feature."
          }</P>
        </Section>

        <Section title={isPl ? "3. Cel przetwarzania danych" : "3. Purpose of Processing"}>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
            <Li>{isPl ? "Obsługa zapytań i umawianie demonstracji produktu" : "Handling inquiries and scheduling product demonstrations"}</Li>
            <Li>{isPl ? "Świadczenie usługi wizualizacji AI, w tym tymczasowe przetwarzanie przesłanych zdjęć" : "Providing the AI visualization service, including temporary processing of uploaded photos"}</Li>
            <Li>{isPl ? "Analiza ruchu i poprawa jakości serwisu" : "Traffic analysis and service quality improvement"}</Li>
            <Li>{isPl ? "Wypełnienie obowiązków prawnych (np. księgowych, podatkowych)" : "Fulfilling legal obligations (e.g. accounting, tax)"}</Li>
          </ul>
        </Section>

        <Section title={isPl ? "4. Podstawa prawna" : "4. Legal Basis"}>
          <P>{isPl ? "Dane przetwarzamy na podstawie:" : "We process data on the basis of:"}</P>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
            <Li>{isPl
              ? "Twojej zgody (art. 6 ust. 1 lit. a RODO) — w odniesieniu do danych zwykłych przekazywanych dobrowolnie"
              : "Your consent (Art. 6(1)(a) GDPR) — for ordinary data provided voluntarily"
            }</Li>
            <Li>{isPl
              ? "Twojej wyraźnej zgody na przetwarzanie danych szczególnej kategorii (art. 9 ust. 2 lit. a RODO) — w odniesieniu do zdjęć przesyłanych do wizualizacji AI"
              : "Your explicit consent for special category data processing (Art. 9(2)(a) GDPR) — for photos uploaded for AI visualization"
            }</Li>
            <Li>{isPl
              ? "Realizacji umowy lub działań przedumownych (art. 6 ust. 1 lit. b RODO) — w odniesieniu do obsługi zapytań"
              : "Performance of a contract or pre-contractual actions (Art. 6(1)(b) GDPR) — for handling inquiries"
            }</Li>
            <Li>{isPl
              ? "Naszego uzasadnionego interesu (art. 6 ust. 1 lit. f RODO) — w odniesieniu do analizy ruchu, bezpieczeństwa serwisu i marketingu własnych usług"
              : "Our legitimate interest (Art. 6(1)(f) GDPR) — for traffic analysis, site security and own services marketing"
            }</Li>
            <Li>{isPl
              ? "Obowiązku prawnego (art. 6 ust. 1 lit. c RODO) — w zakresie wymaganym przez przepisy podatkowe i księgowe"
              : "Legal obligation (Art. 6(1)(c) GDPR) — to the extent required by tax and accounting regulations"
            }</Li>
          </ul>
        </Section>

        <Section title={isPl ? "5. Udostępnianie danych" : "5. Data Sharing"}>
          <P>{isPl
            ? "Twoje dane mogą być przekazywane podmiotom świadczącym usługi na naszą rzecz, w tym dostawcom hostingu, usług e-mail oraz narzędzi analitycznych. Nie sprzedajemy danych osobowych."
            : "Your data may be shared with service providers acting on our behalf, including hosting, email, and analytics providers. We do not sell personal data."
          }</P>
          <P style={{ fontWeight: 600, color: "#3a2e24", fontSize: "0.9rem", fontFamily: "'Inter', sans-serif" }}>
            {isPl ? "Przekazywanie danych poza Europejski Obszar Gospodarczy (EOG):" : "Data transfers outside the European Economic Area (EEA):"}
          </P>
          <P>{isPl
            ? "W celu generowania wizualizacji korzystamy z API Google Gemini, dostarczanego przez Google LLC (USA). Wiąże się to z przekazaniem przesyłanego zdjęcia poza EOG. Przekazanie odbywa się na podstawie standardowych klauzul umownych (Standard Contractual Clauses) zawartych w umowie powierzenia przetwarzania danych (Data Processing Addendum) Google, a także w oparciu o certyfikację Google LLC w ramach programu EU-U.S. Data Privacy Framework (DPF). Zgodnie z polityką Google, przesłane zdjęcia nie są wykorzystywane do trenowania modeli i nie są przechowywane przez Google po zakończeniu przetwarzania zapytania."
            : "To generate visualizations, we use the Google Gemini API provided by Google LLC (USA). This involves transferring uploaded photos outside the EEA. The transfer is based on Standard Contractual Clauses included in Google's Data Processing Addendum, as well as Google LLC's certification under the EU-U.S. Data Privacy Framework (DPF). In accordance with Google's policy, uploaded photos are not used for model training and are not retained by Google after the query is processed."
          }</P>
        </Section>

        <Section title={isPl ? "6. Okres przechowywania danych" : "6. Data Retention"}>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
            <Li>{isPl
              ? "Dane z formularza kontaktowego przechowujemy przez okres niezbędny do obsługi zapytania, a następnie maksymalnie przez 12 miesięcy w celach archiwalnych, chyba że przepisy prawa wymagają dłuższego okresu przechowywania (np. dokumentacja księgowa — 5 lat)."
              : "Contact form data is retained for the period necessary to handle the inquiry, and then for a maximum of 12 months for archival purposes, unless the law requires a longer retention period (e.g. accounting records — 5 years)."
            }</Li>
            <Li>{isPl
              ? "Zdjęcia przesyłane do wizualizacji AI są przetwarzane tymczasowo, w czasie niezbędnym do wygenerowania wyniku (zwykle kilka–kilkadziesiąt sekund), i usuwane automatycznie po zakończeniu tego procesu — nie są przechowywane na naszych serwerach ani po stronie dostawcy API."
              : "Photos uploaded for AI visualization are processed temporarily, for the time needed to generate the result (usually a few to several dozen seconds), and automatically deleted after the process ends — they are not stored on our servers or by the API provider."
            }</Li>
          </ul>
        </Section>

        <Section title={isPl ? "7. Twoje prawa" : "7. Your Rights"}>
          <P>{isPl ? "Przysługuje Ci prawo do:" : "You have the right to:"}</P>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
            <Li>{isPl ? "Dostępu do swoich danych" : "Access your data"}</Li>
            <Li>{isPl ? "Sprostowania nieprawidłowych danych" : "Rectification of inaccurate data"}</Li>
            <Li>{isPl ? "Usunięcia danych (prawo do bycia zapomnianym)" : "Erasure of data (right to be forgotten)"}</Li>
            <Li>{isPl ? "Ograniczenia przetwarzania" : "Restriction of processing"}</Li>
            <Li>{isPl ? "Przenoszenia danych" : "Data portability"}</Li>
            <Li>{isPl ? "Wniesienia sprzeciwu wobec przetwarzania" : "Objecting to processing"}</Li>
            <Li>{isPl
              ? "Cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem"
              : "Withdrawing consent at any time, without affecting the lawfulness of processing carried out before withdrawal"
            }</Li>
          </ul>
          <P>{isPl
            ? "Aby skorzystać z powyższych praw, skontaktuj się z nami: kontakt@aisthetic.pl. Przysługuje Ci również prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa)."
            : "To exercise the above rights, contact us at: kontakt@aisthetic.pl. You also have the right to lodge a complaint with the President of the Personal Data Protection Office (ul. Stawki 2, 00-193 Warsaw, Poland)."
          }</P>
        </Section>

        <Section title={isPl ? "8. Pliki cookies" : "8. Cookies"}>
          <P>{isPl
            ? "Serwis nie wykorzystuje plików cookies analitycznych, marketingowych ani innych technologii śledzących. Mogą być stosowane jedynie cookies techniczne, niezbędne do prawidłowego funkcjonowania serwisu, które nie wymagają uzyskania zgody (art. 6 ust. 1 lit. f RODO oraz art. 173 ustawy Prawo telekomunikacyjne)."
            : "The website does not use analytical, marketing, or other tracking cookies. Only technical cookies necessary for the proper functioning of the service may be used, which do not require consent (Art. 6(1)(f) GDPR and Art. 173 of the Telecommunications Act)."
          }</P>
        </Section>

        <Section title={isPl ? "9. Zautomatyzowane podejmowanie decyzji" : "9. Automated Decision-Making"}>
          <P>{isPl
            ? "Wynik wizualizacji generowany przez AI ma charakter wyłącznie poglądowy/informacyjny i nie stanowi zautomatyzowanej decyzji wywołującej skutki prawne wobec użytkownika w rozumieniu art. 22 RODO. Wizualizacja nie zastępuje konsultacji z lekarzem lub specjalistą medycyny estetycznej."
            : "The AI-generated visualization result is purely illustrative/informational and does not constitute an automated decision producing legal effects concerning the user within the meaning of Art. 22 GDPR. The visualization does not replace consultation with a physician or aesthetic medicine specialist."
          }</P>
        </Section>

        <Section title={isPl ? "10. Bezpieczeństwo danych" : "10. Data Security"}>
          <P>{isPl
            ? "Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony Twoich danych przed nieuprawnionym dostępem, utratą lub zniszczeniem, w tym szyfrowanie połączeń (HTTPS) oraz ograniczony dostęp do danych dla upoważnionych osób."
            : "We apply appropriate technical and organizational measures to protect your data against unauthorized access, loss, or destruction, including connection encryption (HTTPS) and restricted access to data for authorized personnel."
          }</P>
        </Section>

        <Section title={isPl ? "11. Zmiany polityki" : "11. Policy Changes"}>
          <P>{isPl
            ? "Zastrzegamy sobie prawo do aktualizacji niniejszej polityki. O istotnych zmianach będziemy informować za pośrednictwem strony, wskazując datę ostatniej aktualizacji na początku dokumentu."
            : "We reserve the right to update this policy. We will notify you of significant changes via the website, indicating the date of the last update at the top of the document."
          }</P>
        </Section>

        <Section title={isPl ? "12. Kontakt" : "12. Contact"}>
          <P>{isPl
            ? "W sprawach dotyczących ochrony danych osobowych skontaktuj się z nami: kontakt@aisthetic.pl"
            : "For matters concerning personal data protection, contact us at: kontakt@aisthetic.pl"
          }</P>
        </Section>
      </div>
      <Footer />
    </div>
  );
}