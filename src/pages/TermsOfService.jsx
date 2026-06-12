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

export default function TermsOfService() {
  const { lang } = useLang();
  const isPl = lang === "pl";

  return (
    <div style={{ background: "#FAFAF8", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "8rem clamp(1.5rem, 5vw, 3rem) 4rem", fontFamily: "'Inter', sans-serif" }}>
        <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.5rem" }}>
          {isPl ? "Warunki Korzystania z Usługi" : "Terms of Service"}
        </h1>
        <p style={{ fontSize: "0.8rem", color: "#aaa", marginBottom: "3rem" }}>
          {isPl ? "Ostatnia aktualizacja: czerwiec 2026" : "Last updated: June 2026"}
        </p>

        <Section title={isPl ? "1. Postanowienia ogólne" : "1. General Provisions"}>
          <P>{isPl
            ? "Niniejsze Warunki Korzystania (\"Warunki\") regulują zasady dostępu i korzystania z platformy Aisthetic (\"Platforma\", \"Usługa\"), świadczonej przez C&G Enterprises Spółka z ograniczoną odpowiedzialnością z siedzibą w Bydgoszczy, ul. Fordońska 2/T2A, 85-095 Bydgoszcz, wpisaną do rejestru przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS 0001246348, NIP 5543047770, REGON 544948670 (\"Usługodawca\"). Korzystanie z Usługi oznacza akceptację niniejszych Warunków."
            : "These Terms of Service (\"Terms\") govern access to and use of the Aisthetic platform (\"Platform\", \"Service\"), provided by C&G Enterprises Spółka z ograniczoną odpowiedzialnością, with its registered office in Bydgoszcz, ul. Fordońska 2/T2A, 85-095 Bydgoszcz, Poland, registered in the National Court Register under KRS 0001246348, NIP 5543047770, REGON 544948670 (\"Provider\"). Using the Service constitutes acceptance of these Terms."
          }</P>
        </Section>

        <Section title={isPl ? "2. Opis usługi" : "2. Service Description"}>
          <P>{isPl
            ? "Aisthetic to narzędzie AI umożliwiające wizualizację efektów zabiegów estetycznych na podstawie przesłanego zdjęcia. Usługa dostępna jest w dwóch wariantach:"
            : "Aisthetic is an AI tool that enables visualization of aesthetic treatment effects based on an uploaded photo. The service is available in two variants:"
          }</P>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
            <Li>{isPl ? "Wersja B2C — dla użytkowników indywidualnych (dostępna wkrótce)" : "B2C version — for individual users (coming soon)"}</Li>
            <Li>{isPl ? "Wersja B2B — dla gabinetów medycyny estetycznej i klinik" : "B2B version — for aesthetic medicine clinics"}</Li>
          </ul>
          <P>{isPl
            ? "Warunki korzystania, zasady płatności i rozliczeń dla wersji B2B mogą być dodatkowo regulowane odrębną umową zawartą z klientem B2B. W przypadku rozbieżności, postanowienia takiej umowy mają charakter szczególny względem niniejszych Warunków."
            : "The terms of use, payment and billing rules for the B2B version may be additionally governed by a separate agreement with the B2B client. In case of discrepancies, the provisions of such an agreement shall prevail over these Terms."
          }</P>
        </Section>

        <Section title={isPl ? "3. Warunki korzystania" : "3. Conditions of Use"}>
          <P>{isPl
            ? "Korzystając z Usługi, Użytkownik oświadcza, że ma co najmniej 18 lat i pełną zdolność do czynności prawnych, oraz zobowiązuje się do:"
            : "By using the Service, the User declares they are at least 18 years old and have full legal capacity, and agrees to:"
          }</P>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
            <Li>{isPl ? "Korzystania z Usługi zgodnie z obowiązującym prawem" : "Using the Service in accordance with applicable law"}</Li>
            <Li>{isPl
              ? "Nieprzesyłania zdjęć osób trzecich, w tym osób niepełnoletnich, bez ich zgody (a w przypadku osób niepełnoletnich — zgody ich opiekuna prawnego)"
              : "Not uploading photos of third parties, including minors, without their consent (and in the case of minors — without consent from their legal guardian)"
            }</Li>
            <Li>{isPl ? "Nieprzetwarzania wyników wizualizacji w celach sprzecznych z prawem" : "Not using visualization results for unlawful purposes"}</Li>
            <Li>{isPl ? "Niepodjęcia prób naruszenia bezpieczeństwa systemu" : "Not attempting to breach system security"}</Li>
            <Li>{isPl
              ? "Nieprezentowania wygenerowanych wizualizacji jako gwarantowanego lub pewnego efektu zabiegu, w tym w materiałach marketingowych, reklamowych lub informacyjnych przeznaczonych dla pacjentów lub klientów końcowych"
              : "Not presenting generated visualizations as a guaranteed or certain treatment outcome, including in marketing, advertising, or informational materials intended for patients or end clients"
            }</Li>
          </ul>
        </Section>

        <Section title={isPl ? "4. Charakter wizualizacji" : "4. Nature of Visualizations"}>
          <P>{isPl
            ? "Wizualizacje generowane przez Aisthetic mają wyłącznie charakter poglądowy i informacyjny. Nie stanowią porady medycznej, diagnozy ani gwarancji efektów rzeczywistego zabiegu. Ostateczny wygląd po zabiegu może różnić się od wygenerowanej wizualizacji i zależy od indywidualnych cech pacjenta oraz umiejętności lekarza."
            : "Visualizations generated by Aisthetic are purely illustrative and informational. They do not constitute medical advice, diagnosis, or a guarantee of actual treatment results. The final appearance after treatment may differ from the generated visualization and depends on individual patient characteristics and the physician's skills."
          }</P>
        </Section>

        <Section title={isPl ? "5. Własność intelektualna" : "5. Intellectual Property"}>
          <P>{isPl
            ? "Wszelkie prawa własności intelektualnej do Platformy Aisthetic, w tym algorytmy AI, interfejs, grafiki i treści, należą do Usługodawcy. Zabronione jest kopiowanie, modyfikowanie lub rozpowszechnianie elementów Platformy bez pisemnej zgody Usługodawcy."
            : "All intellectual property rights to the Aisthetic Platform, including AI algorithms, interface, graphics, and content, belong to the Provider. Copying, modifying, or distributing elements of the Platform without written consent from the Provider is prohibited."
          }</P>
        </Section>

        <Section title={isPl ? "6. Ograniczenie odpowiedzialności" : "6. Limitation of Liability"}>
          <P>{isPl
            ? "Aisthetic nie ponosi odpowiedzialności za decyzje medyczne podjęte na podstawie wygenerowanych wizualizacji. Platforma nie zastępuje konsultacji lekarskiej."
            : "Aisthetic is not responsible for medical decisions made based on generated visualizations. The Platform does not replace medical consultation."
          }</P>
          <P>{isPl
            ? "W relacjach z klientami B2B (przedsiębiorcami), w maksymalnym zakresie dopuszczalnym przez prawo, odpowiedzialność Usługodawcy ograniczona jest do wartości usługi wykupionej przez danego klienta w okresie 12 miesięcy przed zdarzeniem powodującym szkodę."
            : "In relations with B2B clients (businesses), to the maximum extent permitted by law, the Provider's liability is limited to the value of the service purchased by that client in the 12 months prior to the event causing the damage."
          }</P>
          <P>{isPl
            ? "W relacjach z konsumentami (Użytkownicy B2C), niniejsze ograniczenie nie wyłącza ani nie ogranicza odpowiedzialności Usługodawcy za szkodę wyrządzoną umyślnie, za szkodę na osobie, ani innej odpowiedzialności, której nie można wyłączyć lub ograniczyć na podstawie obowiązujących przepisów prawa, w szczególności Kodeksu cywilnego oraz przepisów o prawach konsumenta."
            : "In relations with consumers (B2C Users), this limitation does not exclude or restrict the Provider's liability for damage caused intentionally, for personal injury, or any other liability that cannot be excluded or limited under applicable law, in particular the Civil Code and consumer protection regulations."
          }</P>
        </Section>

        <Section title={isPl ? "7. Dostępność usługi" : "7. Service Availability"}>
          <P>{isPl
            ? "Dokładamy starań, aby Platforma była dostępna nieprzerwanie. Zastrzegamy sobie prawo do przerw technicznych, aktualizacji lub modyfikacji Usługi. O planowanych przerwach mogących mieć istotny wpływ na korzystanie z Usługi przez klientów B2B będziemy informować z wyprzedzeniem, gdy będzie to możliwe."
            : "We strive to keep the Platform continuously available. We reserve the right to technical interruptions, updates, or service modifications. We will provide advance notice of planned interruptions that may materially affect B2B clients' use of the Service, where possible."
          }</P>
        </Section>

        <Section title={isPl ? "8. Reklamacje" : "8. Complaints"}>
          <P>{isPl
            ? "Użytkownik może zgłaszać reklamacje dotyczące działania Usługi na adres e-mail: kontakt@aisthetic.pl, podając opis problemu oraz dane umożliwiające kontakt. Reklamacje są rozpatrywane w terminie 14 dni od dnia ich otrzymania. O wyniku rozpatrzenia reklamacji Użytkownik zostanie poinformowany na adres e-mail, z którego zgłoszono reklamację."
            : "Users may submit complaints regarding the Service to: kontakt@aisthetic.pl, providing a description of the issue and contact details. Complaints are handled within 14 days of receipt. The User will be informed of the outcome at the email address from which the complaint was submitted."
          }</P>
        </Section>

        <Section title={isPl ? "9. Ochrona danych osobowych" : "9. Personal Data Protection"}>
          <P>{isPl
            ? "Przetwarzanie danych osobowych odbywa się zgodnie z naszą Polityką Prywatności oraz przepisami RODO. Szczegółowe informacje znajdziesz na stronie Polityki Prywatności."
            : "Personal data processing is carried out in accordance with our Privacy Policy and GDPR regulations. Details can be found on the Privacy Policy page."
          }</P>
        </Section>

        <Section title={isPl ? "10. Zmiany warunków" : "10. Changes to Terms"}>
          <P>{isPl
            ? "Zastrzegamy sobie prawo do zmiany niniejszych Warunków. O istotnych zmianach będziemy informować z wyprzedzeniem za pośrednictwem strony lub e-mailem, wskazując datę ostatniej aktualizacji na początku dokumentu."
            : "We reserve the right to change these Terms. We will notify you of significant changes in advance via the website or email, indicating the date of the last update at the top of the document."
          }</P>
        </Section>

        <Section title={isPl ? "11. Prawo właściwe" : "11. Governing Law"}>
          <P>{isPl
            ? "Niniejsze Warunki podlegają prawu polskiemu. Wszelkie spory będą rozstrzygane przez właściwe sądy polskie."
            : "These Terms are governed by Polish law. Any disputes will be resolved by the competent Polish courts."
          }</P>
        </Section>

        <Section title={isPl ? "12. Kontakt" : "12. Contact"}>
          <P>{isPl
            ? "W sprawie Warunków Korzystania skontaktuj się z nami: kontakt@aisthetic.pl"
            : "For questions about these Terms, contact us at: kontakt@aisthetic.pl"
          }</P>
        </Section>
      </div>
      <Footer />
    </div>
  );
}