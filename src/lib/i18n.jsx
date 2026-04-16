import { createContext, useContext, useState } from "react";

export const translations = {
  pl: {
    nav: {
      howItWorks: "Jak to działa",
      solutions: "Rozwiązania",
      testimonials: "Opinie",
      treatments: "Zabiegi",
      contact: "Kontakt",
      menu: "Menu",
    },
    hero: {
      badge: "AI · Medycyna Estetyczna",
      heading1: "Zwizualizuj swoją",
      heading2: "Transformację",
      desc1: "Zastanawiasz się jak będziesz wyglądać po zabiegu?",
      desc1bold: "Aisthetic",
      desc1rest: "to narzędzie AI, które pokazuje realistyczny efekt zabiegu estetycznego — zanim podejmiesz jakąkolwiek decyzję.",
      desc2: "Wgraj swoje zdjęcie, wybierz zabieg i w kilka sekund zobacz swoją transformację. Bezpiecznie, anonimowo, bez rejestracji.",
      ctaPrimary: "Zamów Bezpłatne Demo",
      ctaSecondary: "Przejdź do Założenia Gabinetu →",
      stat1: "wizualizacji",
      stat2: "gabinetów",
      stat3: "zabiegi",
      sliderHint: "↔ Przesuń aby porównać",
    },
    howItWorks: {
      badge: "Prosty Proces",
      title: "Jak to działa?",
      subtitle: "Trzy proste kroki dzielą Cię od zobaczenia swojej nowej wersji.",
      steps: [
        {
          title: "Wgraj swoje zdjęcie",
          desc: "Zrób selfie lub wgraj zdjęcie twarzy. Twoje dane są bezpieczne — zdjęcia nie są przechowywane na naszych serwerach.",
        },
        {
          title: "Wybierz zabieg",
          desc: "Botoks, kwas hialuronowy, lifting, powiększanie ust i ponad 20 innych zabiegów. Wybierz jeden lub kilka naraz.",
        },
        {
          title: "Zobacz efekt AI",
          desc: "W mniej niż 30 sekund otrzymujesz realistyczną wizualizację efektów zabiegu na Twoim własnym zdjęciu.",
        },
      ],
    },
    solutions: {
      badge: "Dwa Rozwiązania",
      title: "Dla każdego, na każdym etapie",
      b2cBadge: "Dla Ciebie",
      b2cTitle1: "Odkryj swój",
      b2cTitle2: "potencjał",
      b2cDesc: "Zastanawiasz się jak będziesz wyglądać po zabiegu? Nie musisz zgadywać. Wgraj swoje zdjęcie, wybierz zabieg i w kilka sekund zobaczysz realistyczną wizualizację efektów.",
      b2cFeatures: [
        "Bezpieczna i anonimowa — zdjęcia nie są przechowywane",
        "Ponad 20 dostępnych zabiegów estetycznych",
        "Wynik gotowy w mniej niż 30 sekund",
        "Bez rejestracji — zacznij od razu",
        "Porównanie before/after z suwakiem",
      ],
      b2cCta: "Wypróbuj Bezpłatnie",
      b2bBadge: "Dla Gabinetu",
      b2bTitle1: "Narzędzie, które",
      b2bTitle2: "zamienia konsultacje",
      b2bTitle3: "w decyzje",
      b2bDesc: "Twoi pacjenci boją się zmian, bo nie wiedzą jak będą wyglądać. Aisthetic eliminuje tę barierę. Podczas konsultacji pokaż pacjentowi realistyczny efekt zabiegu na jego własnej twarzy.",
      b2bFeatures: [
        "Wyższy wskaźnik konwersji konsultacji na zabiegi",
        "Integracja z systemem gabinetu",
        "Panel lekarza z historią wizualizacji pacjentów",
        "White-label — Twoje logo i kolory",
        "Zgodność z RODO i przepisami medycznymi",
        "Dedykowane wsparcie techniczne",
      ],
      b2bCta: "Zamów Demo dla Gabinetu",
    },
    stats: {
      labels: ["wizualizacji wykonanych", "użytkowników poleca", "gabinetów partnerskich", "rodzaje zabiegów"],
    },
    testimonials: {
      badge: "Opinie",
      title: "Co mówią nasi użytkownicy?",
      items: [
        {
          text: "Nareszcie mogłam zobaczyć jak będę wyglądać przed podjęciem decyzji. To dało mi pewność, że robię właściwy wybór.",
          name: "Anna K.",
          role: "Pacjentka",
          location: "Warszawa",
        },
        {
          text: "Aisthetic zrewolucjonizował moje konsultacje. Pacjenci przychodzą zdecydowani, bo już widzieli efekt. Liczba zabiegów wzrosła o 40%.",
          name: "Dr. Monika W.",
          role: "Specjalistka medycyny estetycznej",
        },
        {
          text: "Zwrot z inwestycji odczułam już w pierwszym miesiącu. To narzędzie sprzedaje zabiegi za nas.",
          name: "Aleksandra T.",
          role: "Właścicielka kliniki Beauty Med",
        },
      ],
    },
    treatments: {
      badge: "Katalog Zabiegów",
      title: "Zabiegi w ofercie",
      subtitle: "Wizualizuj dowolny zabieg przed podjęciem decyzji",
      more: "i wiele więcej...",
      names: ["Botoks", "Kwas hialuronowy", "Korekcja nosa", "Lifting twarzy", "Powiększanie ust", "Modelowanie żuchwy", "Redukcja zmarszczek", "Mezoterapia", "Wypełniacze policzków", "Korekcja podbródka"],
    },
    cta: {
      b2cBadge: "Dla Ciebie",
      b2cTitle1: "Gotowy zobaczyć swoją",
      b2cTitle2: "najlepszą wersję?",
      b2cDesc: "Bez rejestracji. Bez opłat. Wynik w kilka sekund.",
      b2cCta: "Wypróbuj Aisthetic za Darmo",
      b2bBadge: "Dla Gabinetów",
      b2bTitle1: "Chcesz zwiększyć",
      b2bTitle2: "konwersję konsultacji?",
      b2bDesc: "Bezpłatne demo. Bez zobowiązań. Skonfigurowane w 24h.",
      b2bCta: "Umów Bezpłatne Demo",
    },
    contact: {
      badge: "Dla Gabinetów",
      title: "Zamów bezpłatne demo",
      subtitle: "Skontaktujemy się z Tobą w ciągu 24 godzin i przeprowadzimy bezpłatną prezentację Aisthetic dostosowaną do Twojego gabinetu.",
      labelName: "Imię i Nazwisko *",
      labelClinic: "Nazwa Gabinetu *",
      labelEmail: "E-mail *",
      labelPhone: "Telefon *",
      labelConsultations: "Liczba Konsultacji Miesięcznie",
      placeholderName: "Jan Kowalski",
      placeholderClinic: "Klinika Piękności ABC",
      placeholderEmail: "kontakt@klinika.pl",
      placeholderPhone: "+48 500 000 000",
      placeholderConsultations: "Wybierz przedział...",
      consultationOptions: ["Do 20 miesięcznie", "20–50 miesięcznie", "50–100 miesięcznie", "Ponad 100 miesięcznie"],
      submit: "Zamów Bezpłatne Demo →",
      submitting: "Wysyłanie...",
      successTitle: "Dziękujemy!",
      successDesc: "Skontaktujemy się z Tobą w ciągu 24 godzin.",
      gdpr: "Twoje dane są chronione. Zgodność z RODO.",
    },
    footer: {
      tagline: "AI wizualizacja efektów zabiegów medycyny estetycznej. Twój wygląd. Twoja decyzja.",
      companyLabel: "Firma",
      companyLinks: ["O nas", "Kontakt"],
      legalLabel: "Prawne",
      legalLinks: ["RODO"],
      copy: "© 2025 Aisthetic. Wszelkie prawa zastrzeżone.",
      madeWith: "Stworzone z myślą o Twojej decyzji.",
    },
  },

  en: {
    nav: {
      howItWorks: "How It Works",
      solutions: "Solutions",
      testimonials: "Reviews",
      treatments: "Treatments",
      contact: "Contact",
      menu: "Menu",
    },
    hero: {
      badge: "AI · Aesthetic Medicine",
      heading1: "Visualize Your",
      heading2: "Transformation",
      desc1: "Wondering how you'll look after a treatment?",
      desc1bold: "Aisthetic",
      desc1rest: "is an AI tool that shows you a realistic result of an aesthetic procedure — before you make any decision.",
      desc2: "Upload your photo, choose a treatment, and see your transformation in seconds. Safe, anonymous, no registration required.",
      ctaPrimary: "Book a Free Demo",
      ctaSecondary: "Go to Clinic Portal →",
      stat1: "visualizations",
      stat2: "clinics",
      stat3: "treatments",
      sliderHint: "↔ Drag to compare",
    },
    howItWorks: {
      badge: "Simple Process",
      title: "How does it work?",
      subtitle: "Three simple steps stand between you and seeing your new look.",
      steps: [
        {
          title: "Upload your photo",
          desc: "Take a selfie or upload a face photo. Your data is safe — photos are not stored on our servers.",
        },
        {
          title: "Choose a treatment",
          desc: "Botox, hyaluronic acid, facelift, lip augmentation, and over 20 other treatments. Choose one or several at once.",
        },
        {
          title: "See the AI result",
          desc: "In less than 30 seconds, you receive a realistic visualization of the treatment effects on your own photo.",
        },
      ],
    },
    solutions: {
      badge: "Two Solutions",
      title: "For everyone, at every stage",
      b2cBadge: "For You",
      b2cTitle1: "Discover your",
      b2cTitle2: "potential",
      b2cDesc: "Wondering how you'll look after a treatment? No need to guess. Upload your photo, choose a treatment, and in seconds see a realistic visualization of the results.",
      b2cFeatures: [
        "Safe and anonymous — photos are not stored",
        "Over 20 aesthetic treatments available",
        "Result ready in less than 30 seconds",
        "No registration — start immediately",
        "Before/after comparison with slider",
      ],
      b2cCta: "Try for Free",
      b2bBadge: "For Clinics",
      b2bTitle1: "The tool that",
      b2bTitle2: "turns consultations",
      b2bTitle3: "into decisions",
      b2bDesc: "Your patients fear change because they don't know how they'll look. Aisthetic eliminates that barrier. During consultations, show the patient a realistic effect of the treatment on their own face.",
      b2bFeatures: [
        "Higher consultation-to-treatment conversion rate",
        "Integration with clinic management system",
        "Doctor's dashboard with patient visualization history",
        "White-label — your logo and colors",
        "GDPR and medical regulation compliant",
        "Dedicated technical support",
      ],
      b2bCta: "Book Clinic Demo",
    },
    stats: {
      labels: ["visualizations completed", "users recommend", "partner clinics", "types of treatments"],
    },
    testimonials: {
      badge: "Reviews",
      title: "What our users say?",
      items: [
        {
          text: "I could finally see how I would look before making a decision. It gave me the confidence that I was making the right choice.",
          name: "Anna K.",
          role: "Patient",
          location: "Warsaw",
        },
        {
          text: "Aisthetic revolutionized my consultations. Patients come in decided because they've already seen the result. The number of treatments increased by 40%.",
          name: "Dr. Monika W.",
          role: "Aesthetic Medicine Specialist",
        },
        {
          text: "I felt the return on investment in the first month. This tool sells treatments for us.",
          name: "Aleksandra T.",
          role: "Owner of Beauty Med Clinic",
        },
      ],
    },
    treatments: {
      badge: "Treatment Catalogue",
      title: "Available treatments",
      subtitle: "Visualize any treatment before making a decision",
      more: "and many more...",
      names: ["Botox", "Hyaluronic Acid", "Nose Correction", "Face Lift", "Lip Augmentation", "Jaw Contouring", "Wrinkle Reduction", "Mesotherapy", "Cheek Fillers", "Chin Correction"],
    },
    cta: {
      b2cBadge: "For You",
      b2cTitle1: "Ready to see your",
      b2cTitle2: "best self?",
      b2cDesc: "No registration. No fees. Result in seconds.",
      b2cCta: "Try Aisthetic for Free",
      b2bBadge: "For Clinics",
      b2bTitle1: "Want to increase",
      b2bTitle2: "consultation conversion?",
      b2bDesc: "Free demo. No commitment. Set up in 24h.",
      b2bCta: "Book a Free Demo",
    },
    contact: {
      badge: "For Clinics",
      title: "Book a free demo",
      subtitle: "We will contact you within 24 hours and conduct a free Aisthetic presentation tailored to your clinic.",
      labelName: "Full Name *",
      labelClinic: "Clinic Name *",
      labelEmail: "E-mail *",
      labelPhone: "Phone *",
      labelConsultations: "Monthly Consultations",
      placeholderName: "John Smith",
      placeholderClinic: "Beauty Clinic ABC",
      placeholderEmail: "contact@clinic.com",
      placeholderPhone: "+44 500 000 000",
      placeholderConsultations: "Select range...",
      consultationOptions: ["Up to 20 per month", "20–50 per month", "50–100 per month", "Over 100 per month"],
      submit: "Book a Free Demo →",
      submitting: "Sending...",
      successTitle: "Thank you!",
      successDesc: "We will contact you within 24 hours.",
      gdpr: "Your data is protected. GDPR compliant.",
    },
    footer: {
      tagline: "AI visualization of aesthetic medicine treatment results. Your look. Your decision.",
      companyLabel: "Company",
      companyLinks: ["About Us", "Contact"],
      legalLabel: "Legal",
      legalLinks: ["GDPR"],
      copy: "© 2025 Aisthetic. All rights reserved.",
      madeWith: "Made with your decision in mind.",
    },
  },
};

const LangContext = createContext(null);

function detectBrowserLang() {
  const lang = navigator.language || navigator.userLanguage || "pl";
  return lang.startsWith("pl") ? "pl" : "en";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => detectBrowserLang());
  const t = translations[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}