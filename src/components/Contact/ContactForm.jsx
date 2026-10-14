import { useState } from "react";
import { ArrowUpRight, CheckCircle2, ClipboardList, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { motion } from "motion/react";

const contactItems = [
  { icon: PhoneCall, label: "Call", value: "+91 79790 76001", href: "tel:+917979076001" },
  { icon: Mail, label: "Email", value: "info@aquaprimeservices.com", href: "mailto:info@aquaprimeservices.com" },
  { icon: MapPin, label: "Service area", value: "Patna, Bihar", href: "https://maps.google.com/?q=Patna,Bihar" },
];

function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hello RSE, I would like to request an RO service.",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Service: ${formData.get("service")}`,
      `Details: ${formData.get("details") || "Not provided"}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/917979076001?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="service-request" className="scroll-mt-24 bg-rse-surface py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
          <span className="inline-flex items-center gap-2 rounded-full bg-rse-gold/20 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-rse-text"><ClipboardList size={15} /> Service request</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-rse-text">Tell us what you need.</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Fill in the details and continue to WhatsApp to send your request.</p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block"><span className="mb-2 block text-sm font-semibold text-rse-text">Your name <span className="text-rse-crimson">*</span></span><input name="name" type="text" autoComplete="name" required placeholder="e.g. Rahul Kumar" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-rse-text outline-none transition placeholder:text-slate-400 focus:border-rse-gold focus:ring-4 focus:ring-rse-gold/15" /></label>
              <label className="block"><span className="mb-2 block text-sm font-semibold text-rse-text">Phone number <span className="text-rse-crimson">*</span></span><input name="phone" type="tel" autoComplete="tel" required pattern="[0-9+() -]{8,16}" title="Enter a valid phone number" placeholder="Your contact number" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-rse-text outline-none transition placeholder:text-slate-400 focus:border-rse-gold focus:ring-4 focus:ring-rse-gold/15" /></label>
            </div>
            <label className="block"><span className="mb-2 block text-sm font-semibold text-rse-text">Service needed <span className="text-rse-crimson">*</span></span><select name="service" required defaultValue="" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-rse-text outline-none transition focus:border-rse-gold focus:ring-4 focus:ring-rse-gold/15"><option value="" disabled>Select a service</option><option>RO repair</option><option>RO installation</option><option>Filter replacement</option><option>RO maintenance</option><option>Water quality / TDS check</option><option>AMC plans</option><option>Not sure yet</option></select></label>
            <label className="block"><span className="mb-2 block text-sm font-semibold text-rse-text">A few details <span className="font-normal text-slate-400">(optional)</span></span><textarea name="details" rows={4} placeholder="Tell us what is happening with your purifier..." className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-rse-text outline-none transition placeholder:text-slate-400 focus:border-rse-gold focus:ring-4 focus:ring-rse-gold/15" /></label>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rse-crimson px-5 py-3.5 font-bold text-white shadow-lg shadow-rse-crimson/15 transition hover:-translate-y-0.5 hover:bg-rse-crimson focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rse-crimson sm:w-auto">Continue on WhatsApp <ArrowUpRight size={18} /></button>
            <p aria-live="polite" className="flex items-center gap-2 text-xs leading-5 text-slate-500"><MessageCircle size={14} className="shrink-0 text-rse-gold" /> {sent ? <><CheckCircle2 size={15} className="text-green-600" /> Your message draft is ready in WhatsApp.</> : "Your request opens as a WhatsApp message for you to review and send."}</p>
          </form>
        </motion.div>

        <motion.aside initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: .08 }} className="relative overflow-hidden rounded-3xl bg-rse-primary p-7 text-white shadow-xl sm:p-9">
          <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-rse-gold/20" />
          <div className="relative"><span className="text-xs font-bold uppercase tracking-wider text-rse-gold">Direct contact</span><h2 className="mt-4 text-3xl font-bold leading-tight">Prefer to talk to someone?</h2><p className="mt-3 max-w-md leading-7 text-white/65">Call or email us with your RO purifier question. We will help you find the right service option.</p>
            <div className="mt-8 space-y-3">{contactItems.map(({ icon: Icon, label, value, href }) => <a key={label} href={href} target={label === "Service area" ? "_blank" : undefined} rel={label === "Service area" ? "noreferrer" : undefined} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-rse-gold/50 hover:bg-white/10"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rse-gold/15 text-rse-gold"><Icon size={20} /></span><span className="min-w-0"><span className="block text-xs font-medium text-white/55">{label}</span><span className="mt-0.5 block break-words text-sm font-semibold text-white group-hover:text-rse-gold">{value}</span></span><ArrowUpRight size={17} className="ml-auto shrink-0 text-white/35 transition group-hover:text-rse-gold" /></a>)}</div>
            <div className="mt-7 border-t border-white/10 pt-6"><p className="text-xs font-bold uppercase tracking-wider text-rse-gold">Working hours</p><p className="mt-2 text-sm text-white/75">Every day | 8:00 AM - 8:00 PM</p><p className="mt-1 text-xs text-white/45">Service enquiries for Patna, Bihar</p></div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

export default ContactForm;
