import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-rse-primary pb-20 pt-32 text-white sm:pt-36 lg:pb-24">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-96 w-96 rounded-full border border-rse-gold/15"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-96 w-96 rounded-full border border-rse-gold/10"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <HeroContent />

          <HeroImage />
        </div>
      </div>
    </section>
  );
}

export default Hero;
