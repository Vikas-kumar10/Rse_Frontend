import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactHero from "../components/Contact/ContactHero.jsx";
import ContactInfo from "../components/Contact/ContactInfo.jsx";
import ContactForm from "../components/Contact/ContactForm.jsx";

import ContactFAQ from "../components/Contact/ContactFAQ.jsx";
import ContactCTA from "../components/Contact/ContactCTA.jsx";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <ContactHero />

        <ContactInfo />

        <ContactForm />

        <ContactFAQ />

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}

export default Contact;
