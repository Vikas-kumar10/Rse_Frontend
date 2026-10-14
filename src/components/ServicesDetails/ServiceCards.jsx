import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Droplets,
  Filter,
  Gauge,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import repairPhoto from "../../assets/images/repair.jpg";
import homeVisitPhoto from "../../assets/images/maintanence.jpg";
import purifierPhoto from "../../assets/images/Ro_purify.jpg";

const services = [
  {
    title: "RO repair",
    category: "REPAIR",
    icon: Wrench,
    image: repairPhoto,
    alt: "Technician repairing a water purifier",
    description:
      "Get help with purifier issues such as low water flow, leakage, unusual taste or a system that is not working properly.",
    details: ["Issue inspection", "Repair recommendations"],
  },
  {
    title: "RO installation",
    category: "INSTALLATION",
    icon: Settings,
    image: purifierPhoto,
    alt: "Reverse osmosis purifier installed under a kitchen sink",
    description:
      "Set up a new water purifier or replace an existing unit with a clean, considered installation for your space.",
    details: ["New purifier setup", "Replacement installation"],
  },
  {
    title: "Filter replacement",
    category: "FILTER CARE",
    icon: Filter,
    image: repairPhoto,
    alt: "Water purifier components being serviced",
    description:
      "Replace purifier filters when required and get guidance on keeping up with routine filter care.",
    details: ["Filter condition check", "Replacement guidance"],
  },
  {
    title: "RO maintenance",
    category: "REGULAR CARE",
    icon: ShieldCheck,
    image: homeVisitPhoto,
    alt: "Technician discussing water purifier maintenance with a customer",
    description:
      "Keep your purifier in good working order with periodic inspection and maintenance support.",
    details: ["System inspection", "Routine care"],
  },
  {
    title: "Water quality & TDS check",
    category: "WATER CHECK",
    icon: Gauge,
    image: purifierPhoto,
    alt: "Reverse osmosis water filtration system",
    description:
      "Have your water purifier checked when water taste or output changes, or when you have a concern about TDS.",
    details: ["TDS check", "Water output review"],
  },
  {
    title: "AMC plans",
    category: "ANNUAL CARE",
    icon: Droplets,
    image: homeVisitPhoto,
    alt: "Home water purifier service visit",
    description:
      "Ask about annual maintenance options for planned servicing and ongoing purifier care.",
    details: ["Scheduled service options", "Ask us about coverage"],
  },
];

function ServiceCards() {
  return (
    <section id="ro-services" className="scroll-mt-24 bg-rse-surface py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-rse-crimson/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-rse-crimson shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-rse-gold" /> Explore our services
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-rse-text sm:text-4xl">
            Find the right care for your <span className="text-rse-gold">RO purifier.</span>
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Each service is explained below. Choose a card to get in touch and discuss what your purifier needs.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map(
            ({ title, category, icon: Icon, image, alt, description, details }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (index % 3) * 0.07, duration: 0.45 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:border-rse-gold/60 hover:shadow-xl"
              >
                <div className="relative overflow-hidden bg-rse-primary">
                  <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/30" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-rse-text/75 px-3 py-1.5 text-xs font-bold tracking-wider text-white backdrop-blur-md">
                    {category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-rse-primary transition-colors group-hover:bg-rse-primary group-hover:text-rse-gold">
                      <Icon size={21} />
                    </span>
                    <h3 className="pt-1 text-lg font-bold leading-snug text-rse-text">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-5 text-slate-600">{description}</p>
                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-3">
                    {details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check size={15} className="shrink-0 text-rse-gold" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-auto inline-flex items-center gap-2 pt-5 font-bold text-rse-crimson transition-all duration-200 hover:text-rse-primary group-hover:gap-3"
                  >
                    Ask about this service <ArrowRight size={17} />
                  </Link>
                </div>
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;
