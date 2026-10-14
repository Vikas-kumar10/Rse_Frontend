import { Clock3, MapPin, ShieldCheck, Wrench } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: MapPin,
    title: "Local service",
    description: "RO purifier support for homes and workplaces across Patna.",
  },
  {
    icon: Wrench,
    title: "Practical solutions",
    description:
      "Repair, installation and maintenance for everyday purifier needs.",
  },
  {
    icon: ShieldCheck,
    title: "Clear recommendations",
    description:
      "Understand the issue and the suggested service before work begins.",
  },
  {
    icon: Clock3,
    title: "Convenient booking",
    description:
      "Reach our team and request a service visit at a time that works for you.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-rse-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-rse-crimson">
            The RSE approach
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-rse-text sm:text-4xl">
            Purifier service that puts{" "}
            <span className="text-rse-gold">you first.</span>
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Helpful communication and dependable care make it easier to look
            after the water purifier you rely on every day.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-rse-gold/60 hover:shadow-lg sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rse-gold/20 text-rse-text">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-rse-text">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

