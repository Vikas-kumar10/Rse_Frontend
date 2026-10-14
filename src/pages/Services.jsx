import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import ServiceHero from "../components/ServicesDetails/ServiceHero.jsx";
import ServiceCards from "../components/ServicesDetails/ServiceCards.jsx";
import ServiceDetail from "../components/ServicesDetails/ServiceDetail.jsx";

import ServiceCTA from "../components/ServicesDetails/ServiceCTA.jsx";

function Services() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <main>
        <ServiceHero />

        <ServiceCards />

        <ServiceDetail />

        <ServiceCTA />
      </main>

      <Footer />
    </div>
  );
}

export default Services;


