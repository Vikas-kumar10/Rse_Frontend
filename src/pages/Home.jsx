import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import BrandingMarquee from "../components/BrandingMarquee";
import ROServiceGallery from "../components/ROServiceGallery";
import ServiceCards from "../components/ServicesDetails/ServiceCards";
import Services from "../components/Services";
import ServiceProcess from "../components/ServiceProcess";
import HappyClients from "../components/HappyClients";
import Faq from "../components/Faq";
import Footer from "../components/Footer.jsx";
import { FaWhatsapp } from "react-icons/fa";
import { PhoneCall } from "lucide-react";

import ServicePricing from "../components/ServicesDetails/ServicePricing.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <ROServiceGallery />
      <BrandingMarquee />
      <ServiceCards />
      <ServicePricing />
      <Services />
      <ServiceProcess />
      <HappyClients />
      <Faq />
      <Footer />

      
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 sm:bottom-7 sm:right-7">
        <a
          href="tel:7631996850"
          aria-label="Call RSE"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-rse-primary text-rse-gold shadow-xl shadow-black/25 transition duration-200 hover:scale-110 hover:bg-rse-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rse-gold sm:h-16 sm:w-16"
        >
          <PhoneCall size={25} aria-hidden="true" />
        </a>
        <a
          href="https://wa.me/7631996850"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with RSE on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 transition duration-200 hover:scale-110 hover:bg-[#1fbd5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:h-16 sm:w-16"
        >
          <FaWhatsapp size={30} aria-hidden="true" />
        </a>
      </div>
    </>
  );
}

export default Home;
