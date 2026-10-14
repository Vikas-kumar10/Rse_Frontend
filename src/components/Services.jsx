import { motion } from "motion/react";
import {
  ArrowUpRight,
  Droplets,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Wrench,
    title: "RO repair & maintenance",
    description:
      "Fast diagnosis and dependable repairs to get your purifier working at its best.",
    points: ["All major brands", "Clear recommendations"],
  },
  {
    icon: Settings,
    title: "Installation & replacement",
    description:
      "Professional setup for new purifiers, replacements and upgrades at your home or workplace.",
    points: ["Neat installation", "Setup guidance"],
  },
  {
    icon: Droplets,
    title: "Filter & water care",
    description:
      "Filter changes and routine servicing to help maintain great tasting, clean water.",
    points: ["Filter inspection", "Performance checks"],
  },
];

function Services() {
  return (
    <section className="bg-rse-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rse-crimson">
              Reliable care, right at your door
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-rse-text sm:text-4xl">
              Water purifier services,{" "}
              <span className="text-rse-gold">made simple.</span>
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              From a quick repair to regular maintenance, get practical help
              from a local RO service team in Patna.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-semibold text-rse-text hover:text-rse-crimson"
          >
            Explore all services <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map(({ icon: Icon, title, description, points }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-rse-gold/70 hover:shadow-xl hover:shadow-rse-primary/10 sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rse-gold/20 text-rse-text">
                <Icon size={23} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-rse-text">{title}</h3>
              <p className="mt-3 min-h-14 text-sm leading-6 text-slate-600">
                {description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <ShieldCheck size={16} className="text-rse-gold" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rse-crimson"
              >
                Book this service <ArrowUpRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

