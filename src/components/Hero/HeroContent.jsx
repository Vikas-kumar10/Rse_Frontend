import {
  ArrowRight,
  Check,
  Droplets,
  PhoneCall,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const services = [
  "RO repair & servicing",
  "Installation & filter change",
  "AMC for home and office",
];

function HeroContent() {
  return (
    <div className="relative z-10 max-w-2xl">
      
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.55 }}
        className="mt-0 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl"
      >
        Authorised Ro service centre with{" "}
        <span className="relative inline-block max-w-full whitespace-normal text-rse-gold sm:whitespace-nowrap">
          expert RO Technician.
          <span
            aria-hidden="true"
            className="absolute -bottom-1 left-0 h-1 w-2/3 rounded-full bg-rse-gold"
          />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.55 }}
        className="mt-5 max-w-xl text-base leading-7 text-white/95 sm:mt-6 sm:text-lg sm:leading-8"
      >
        From RO repairs and filter changes to new installations and AMC, RSE
        helps keep your home or workplace purifier in good shape.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap"
      >
        <Link
          to="/contact"
          className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-rse-gold px-4 py-3 font-bold text-rse-text shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rse-gold sm:min-h-13 sm:w-auto sm:px-6 sm:py-3.5"
        >
          Book an RO Service
          <ArrowRight
            size={19}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
        <a
          href="tel:+917631996851"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-4 py-3 font-bold text-white transition hover:border-rse-gold hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rse-gold sm:min-h-13 sm:w-auto sm:px-6 sm:py-3.5"
        >
          <PhoneCall size={18} aria-hidden="true" />
          Call +91 7631996851
        </a>
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="mt-9 border-t border-white/15 pt-6"
      >
        <p className="mb-4 text-xs font-bold uppercase tracking-wider text-rse-gold">
          How we can help
        </p>
        <ul className="grid gap-x-5 gap-y-3 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.li
              key={service}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.08, duration: 0.35 }}
              className="flex items-center gap-2.5 text-sm font-semibold text-white"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rse-gold/20 text-rse-gold">
                {index === 0 ? (
                  <Wrench size={13} aria-hidden="true" />
                ) : index === 1 ? (
                  <Droplets size={13} aria-hidden="true" />
                ) : (
                  <Check size={14} aria-hidden="true" />
                )}
              </span>
              {service}
            </motion.li>
          ))}
        </ul>
      </motion.div> */}
    </div>
  );
}

export default HeroContent;
