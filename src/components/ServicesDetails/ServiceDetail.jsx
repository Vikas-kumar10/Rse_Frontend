import { CheckCircle2, Droplets, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import purifierPhoto from "../../assets/images/Ro_purify.jpg";

const symptoms = [
  "Water flow has slowed",
  "You notice a leak",
  "Water taste or smell has changed",
  "The purifier makes unusual noise",
  "A filter may be due for replacement",
  "You want a routine check-up",
];

function ServiceDetail() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-rse-primary">
          <img
            src={purifierPhoto}
            alt="Reverse osmosis purifier and filtration stages"
            loading="lazy"
            className="aspect-video w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/30" />
          <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white sm:bottom-7 sm:left-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rse-gold text-rse-text">
              <Droplets size={22} />
            </span>
            <div>
              <p className="font-bold">Not sure which service?</p>
              <p className="mt-0.5 text-sm text-white/75">
                Tell us what you are noticing.
              </p>
            </div>
          </div>
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rse-crimson">
            Know when to book
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-rse-text sm:text-4xl">
            Noticing a change in your purifier?
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            A change in flow, taste or sound can be a good reason to have your
            RO system checked. Share what you have noticed and we can help you
            choose the right service.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {symptoms.map((symptom) => (
              <li
                key={symptom}
                className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-rse-gold"
                />
                {symptom}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-rse-primary px-5 py-3 font-semibold text-white transition hover:bg-rse-crimson"
          >
            Talk to our team <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetail;
