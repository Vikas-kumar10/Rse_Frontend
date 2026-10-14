import { ArrowRight, Droplets, MapPin, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import heroPhoto from "../../assets/images/maintanence.jpg";

function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-rse-primary pb-16 pt-28 text-white sm:pb-20 sm:pt-36">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-96 w-96 rounded-full border border-rse-gold/15"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-96 w-96 rounded-full border border-rse-gold/10"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            RO services for the care your purifier{" "}
            <span className="text-rse-gold">needs.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Browse repair, installation, filter replacement and maintenance.
            Choose a service to learn more or get in touch with our team.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#ro-services"
              className="inline-flex items-center gap-2 rounded-xl bg-rse-gold px-6 py-3.5 font-bold text-rse-text transition hover:-translate-y-0.5 hover:bg-white"
            >
              Browse services <ArrowRight size={18} />
            </a>
            <a
              href="tel:+917979076001"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-5 py-3.5 font-semibold text-white transition hover:border-rse-gold hover:bg-white/5"
            >
              <PhoneCall size={17} /> Call our team
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/75">
            <span className="inline-flex items-center gap-2">
              <Droplets size={16} className="text-rse-gold" /> Home & workplace
              purifier care
            </span>
            <span className="inline-flex items-center gap-2">
              <Droplets size={16} className="text-rse-gold" /> Repair, install &
              maintain
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-3 rotate-2 rounded-3xl border border-rse-gold/45"
          />
          <img
            src={heroPhoto}
            alt="Water purifier technician talking with a customer at home"
            className="relative aspect-video w-full rounded-3xl object-cover shadow-2xl shadow-black/30"
          />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/50 bg-white/95 p-4 text-rse-text shadow-xl backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm sm:p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rse-primary text-rse-gold">
              <Droplets size={22} />
            </span>
            <div>
              <p className="font-bold">Water purifier care</p>
              <p className="mt-0.5 text-xs text-slate-600">
                At home or at your workplace
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceHero;
