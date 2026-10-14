import { ArrowDown, PhoneCall, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import heroPhoto from "../../assets/images/Ro_purify.jpg";

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-rse-primary pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-44 h-96 w-96 rounded-full border border-rse-gold/15"
      />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <img
          src={heroPhoto}
          alt=""
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rse-primary via-rse-primary/70 to-rse-primary/30" />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Let’s get your RO{" "}
            <span className="text-rse-gold">back on track.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Need a repair, installation or routine maintenance? Contact RSE and
            tell us what your water purifier needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+917979076001"
              className="inline-flex items-center gap-2 rounded-xl bg-rse-gold px-5 py-3.5 font-bold text-rse-text transition hover:-translate-y-0.5 hover:bg-white"
            >
              <PhoneCall size={18} /> Call +91 79790 76001
            </a>
            <a
              href="https://wa.me/917979076001"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-5 py-3.5 font-semibold text-white transition hover:border-rse-gold hover:bg-white/5"
            >
              <MessageCircle size={18} /> WhatsApp us
            </a>
          </div>
          <a
            href="#contact-options"
            className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-rse-gold"
          >
            See all contact options <ArrowDown size={15} />
          </a>
        </motion.div>
        <div className="relative z-10 hidden lg:block">
          <div className="rounded-2xl border border-white/15 bg-rse-primary/70 p-7 shadow-2xl backdrop-blur-md">
            <p className="text-xs font-bold uppercase tracking-wider text-rse-gold">
              How can we help?
            </p>
            <p className="mt-3 text-2xl font-semibold leading-snug">
              RO repair, installation & purifier care for your home or
              workplace.
            </p>
            <div className="mt-6 h-px bg-white/15" />
            <p className="mt-5 text-sm leading-6 text-white/65">
              Call our team or send a service request. We’ll help you figure out
              the next step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
