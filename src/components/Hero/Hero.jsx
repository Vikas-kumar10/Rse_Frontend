import { useEffect, useState } from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import rseBackground from "../../assets/images/RSE.JPG";
import purifierBackground from "../../assets/images/Ro_purify.jpg";
import repairBackground from "../../assets/images/repair.jpg";
import maintenanceBackground from "../../assets/images/maintanence.jpg";
import installationBackground from "../../assets/images/Ro Install.png";

const backgroundImages = [
  rseBackground,
  purifierBackground,
  repairBackground,
  maintenanceBackground,
  installationBackground,
];

function Hero() {
  const [activeBackground, setActiveBackground] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveBackground((current) => (current + 1) % backgroundImages.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative overflow-hidden bg-rse-primary pb-20 pt-32 text-white sm:pt-36 lg:pb-24">
      <div aria-hidden="true" className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              index === activeBackground ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url("${image}")` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-rse-primary/35 to-rse-primary/40" />
      </div>

      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-96 w-96 rounded-full border border-rse-gold/15"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-96 w-96 rounded-full border border-rse-gold/10"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <HeroContent />
          {/* <HeroImage /> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
