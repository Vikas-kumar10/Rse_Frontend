import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import AboutHero from "../components/about/AboutHero.jsx";
import CompanyInfo from "../components/about/CompanyInfo.jsx";
import WhyChooseUs from "../components/about/WhyChooseUs.jsx";

import Process from "../components/about/Process.jsx";
import AboutCTA from "../components/about/AboutCTA.jsx";

function About() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <AboutHero />

        <CompanyInfo />

        <WhyChooseUs />

        <Process />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}

export default About;
