import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import ROServiceGallery from "../components/ROServiceGallery";
import ServiceCards from "../components/ServicesDetails/ServiceCards";
import Services from "../components/Services";
import ServiceProcess from "../components/ServiceProcess";
import HappyClients from "../components/HappyClients";
import Faq from "../components/Faq";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ROServiceGallery />
      <ServiceCards />
      <Services />
      <ServiceProcess />
      <HappyClients />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
