import Navbar from "../components/landing/Navbar.jsx";
import Hero from "../components/landing/Hero.jsx";
import HowItWorks from "../components/landing/HowItWorks.jsx";
import Solutions from "../components/landing/Solutions.jsx";
import Stats from "../components/landing/Stats.jsx";
import Testimonials from "../components/landing/Testimonials.jsx";
import Treatments from "../components/landing/Treatments.jsx";
import CTASection from "../components/landing/CTASection.jsx";
import ContactForm from "../components/landing/ContactForm.jsx";
import Footer from "../components/landing/Footer.jsx";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAF8", color: "#2a2218" }}>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Solutions />
      <Stats />
      <Testimonials />
      <Treatments />
      <CTASection />
      <ContactForm />
      <Footer />
    </div>
  );
}