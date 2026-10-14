import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import banner from "../../assets/images/maintanence.jpg";

function AboutHero() {
  return (
    <section className="relative flex min-h-96 items-center overflow-hidden bg-rse-primary pt-24 sm:min-h-screen">
      <img
        src={banner}
        alt="Water purifier technician assisting a customer at home"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
      />
      <div className="absolute inset-0  from-rse-primary via-rse-primary/90 to-rse-primary/35" />
      <div
        aria-hidden="true"
        className="absolute inset-0  from-amber-100/10 to-transparent"
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl text-white"
        >
          
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            About RSE <span className="text-rse-gold">RO Service Experts</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            We help homes and workplaces keep their water purifiers in good
            shape with repair, installation and regular service.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-rse-gold px-6 py-3.5 font-bold text-rse-text transition hover:-translate-y-0.5 hover:bg-white"
            >
              Explore our services <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-xl border border-white/35 px-6 py-3.5 font-semibold text-white transition hover:border-rse-gold hover:bg-white/10"
            >
              Talk to our team
            </Link>
          </div>
        </motion.div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px  from-transparent via-rse-gold/70 to-transparent"
      />
    </section>
  );
}

export default AboutHero;
