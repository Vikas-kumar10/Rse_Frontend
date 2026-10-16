import { ArrowRight, Check, Clock3, Droplets, Filter, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Visit Charge",
    price: "199",
    description: "Book a technician visit to inspect your water purifier.",
    detail: "A technician visits and checks the issue with your purifier.",
    icon: Clock3,
  },
  {
    name: "On Service",
    price: "299",
    description: "Get service support for your water purifier.",
    detail: "Service charge for purifier support.",
    icon: Wrench,
  },
  {
    name: "Filter Cleaning",
    price: "299",
    description: "Get your purifier filters cleaned as part of routine care.",
    detail: "Cleaning service for your purifier filters.",
    icon: Filter,
  },
  {
    name: "1 Year Service AMC",
    price: "999",
    description: "Annual maintenance coverage for service support.",
    detail: "One year of service AMC coverage for your purifier.",
    icon: Wrench,
  },
  {
    name: "1 Year Filter AMC",
    price: "2999",
    description: "Annual filter AMC coverage for filter care.",
    detail: "One year of filter AMC coverage for your purifier.",
    icon: ShieldCheck,
  },
];

function ServicePricing() {
  return (
    <section className="bg-white py-20 sm:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rse-crimson">
            <Droplets size={15} className="text-rse-gold" /> Service plans
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-rse-text sm:text-4xl">
            Clear pricing for purifier care
          </h2>
         
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map(({ name, price, description, detail, icon: Icon }) => (
            <article key={name} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:border-rse-gold/60 hover:shadow-xl">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rse-gold/20 text-rse-text">
                <Icon size={23} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-rse-text">{name}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{description}</p>
              <p className="mt-5 flex items-baseline gap-1 text-rse-text">
                <span className="text-sm font-semibold">₹</span>
                <span className="text-4xl font-extrabold tracking-tight">{price}</span>
              </p>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                  <Check size={17} className="mt-0.5 shrink-0 text-rse-gold" />
                  {detail}
                </p>
              </div>
              <Link to="/contact" className="mt-auto inline-flex items-center gap-2 pt-6 font-bold text-rse-primary transition hover:gap-3 hover:text-rse-crimson">
                Enquire now <ArrowRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicePricing;
