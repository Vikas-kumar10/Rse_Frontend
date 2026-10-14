import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="bg-rse-surface px-6 pb-20 sm:pb-24 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-rse-primary px-7 py-10 text-white sm:px-12 sm:py-14">
        <div aria-hidden="true" className="absolute -right-16 -top-32 h-80 w-80 rounded-full border border-rse-gold/20" />
        <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between"><div className="max-w-2xl"><span className="text-xs font-bold uppercase tracking-wider text-rse-gold">RSE RO Service Experts</span><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Let’s talk about your RO service.</h2><p className="mt-3 leading-7 text-white/65">We’re available every day from 8:00 AM to 8:00 PM.</p></div><div className="flex flex-wrap gap-3"><a href="tel:7631996850" className="inline-flex items-center gap-2 rounded-xl bg-rse-gold px-5 py-3 font-bold text-rse-text transition hover:bg-white"><PhoneCall size={18} /> 7631996850</a><a href="tel:7631996851" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold text-white transition hover:border-rse-gold hover:bg-white/10"><PhoneCall size={18} /> 7631996851</a><Link to="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold text-white transition hover:border-rse-gold hover:bg-white/10">View services <ArrowRight size={17} /></Link></div></div>
      </div>
    </section>
  );
}

export default ContactCTA;
