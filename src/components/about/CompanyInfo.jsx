import { ArrowRight, Check, Droplets, Wrench, Settings } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import servicePhoto from "../../assets/images/repair.jpg";

const focusAreas = [
  { icon: Wrench, text: "RO repair and troubleshooting" },
  { icon: Settings, text: "Installation and replacement" },
  { icon: Droplets, text: "Filter care and maintenance" },
];

function CompanyInfo() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-3xl border-l-2 border-t-2 border-rse-gold"
          />
          <img
            src={servicePhoto}
            alt="Technician checking a water purifier system"
            loading="lazy"
            className="relative aspect-video w-full rounded-3xl object-cover shadow-xl shadow-rse-primary/10"
          />
          <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl bg-rse-primary px-5 py-4 text-white shadow-xl sm:right-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rse-gold/15 text-rse-gold">
              <Droplets size={21} />
            </span>
            <div>
              <p className="text-sm font-bold">Water purifier care</p>
              <p className="mt-0.5 text-xs text-white/60">
                For home and workplace
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-rse-crimson">
            Who we are
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-rse-text sm:text-4xl">
            Local RO care, with a{" "}
            <span className="text-rse-gold">personal touch.</span>
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            RSE RO Service Experts supports customers in Patna with everyday
            water purifier needs. From a repair visit to a new installation, we
            aim to make it easy to understand what your system needs and how to
            take care of it.
          </p>
          <div className="mt-7 space-y-3">
            {focusAreas.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-rse-gold/20 text-rse-text">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-medium text-slate-700">
                  {text}
                </span>
                <Check size={16} className="ml-auto text-rse-gold" />
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 font-bold text-rse-crimson transition hover:gap-3"
          >
            Get in touch <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default CompanyInfo;
