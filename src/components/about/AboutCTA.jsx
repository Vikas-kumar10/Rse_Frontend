import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="bg-rse-surface px-6 pb-20 sm:pb-24 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-rse-primary px-7 py-10 text-white sm:px-12 sm:py-14">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-rse-gold/20"
        />
        <div
          aria-hidden="true"
          className="absolute -right-8 -top-20 h-56 w-56 rounded-full border border-rse-gold/15"
        />
        <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rse-gold">
              Need help with your purifier?
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Let’s get your RO service{" "}
              <span className="text-rse-gold">sorted.</span>
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-white/70">
              Talk to RSE about repair, installation or maintenance in Patna.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href="tel:+917979076001"
              className="inline-flex items-center gap-2 rounded-xl bg-rse-gold px-5 py-3 font-bold text-rse-text transition hover:bg-white"
            >
              <PhoneCall size={18} /> Call us
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold text-white transition hover:border-rse-gold hover:bg-white/10"
            >
              Contact page <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;
