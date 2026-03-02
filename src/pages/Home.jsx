import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import HowItWorks from "../components/landing/HowItWorks";
import Solutions from "../components/landing/Solutions";
import Stats from "../components/landing/Stats";
import Testimonials from "../components/landing/Testimonials";
import Treatments from "../components/landing/Treatments";
import CTASection from "../components/landing/CTASection";
import ContactForm from "../components/landing/ContactForm";
import Footer from "../components/landing/Footer";

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