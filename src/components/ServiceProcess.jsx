import { ArrowRight, ClipboardList, PhoneCall, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import servicePhoto from "../assets/images/repair.jpg";

const steps = [
  {
    icon: PhoneCall,
    number: "01",
    title: "Get in touch",
    text: "Call our team and tell us what your purifier needs.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Choose a visit",
    text: "Share your location and find a convenient service time.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "We take care of it",
    text: "A technician checks the purifier and explains the next steps.",
  },
];

function ServiceProcess() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-xl">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 h-32 w-32 rounded-bl-3xl border-b-2 border-l-2 border-rse-gold"
            />
            <img
              src={servicePhoto}
              alt="Technician servicing a water purifier"
              loading="lazy"
              className="relative aspect-video w-full rounded-3xl object-cover shadow-2xl shadow-rse-primary/15"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/50 bg-white/95 p-4 shadow-xl backdrop-blur sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-xs sm:p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-rse-gold">
                RO care in Patna
              </p>
              <p className="mt-1 font-semibold text-rse-text">
                Repair · Installation · Maintenance
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rse-crimson">
              Simple from the first call
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-rse-text sm:text-4xl">
              A smoother way to get your RO{" "}
              <span className="text-rse-gold">back on track.</span>
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Tell us what is going on and our team will help you plan the next
              step for your water purifier.
            </p>

            <div className="mt-8 space-y-5">
              {steps.map(({ icon: Icon, number, title, text }) => (
                <article key={number} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rse-gold/20 text-rse-text">
                    <Icon size={21} />
                  </div>
                  <div className="pt-0.5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold tracking-widest text-rse-gold">
                        {number}
                      </span>
                      <h3 className="font-bold text-rse-text">{title}</h3>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-rse-crimson px-5 py-3 font-semibold text-white shadow-lg shadow-rse-crimson/15 transition hover:-translate-y-0.5 hover:bg-rse-crimson"
            >
              Request a service <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceProcess;

