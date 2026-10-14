import { useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";

const questions = [
  { question: "How do I request an RO service?", answer: "Call or WhatsApp RSE, or use the service request form above. Tell us which service you need and what you have noticed about your purifier." },
  { question: "Which RO services can I ask about?", answer: "You can contact us about RO repair, installation, filter replacement, maintenance, water quality or TDS checks, and AMC plans." },
  { question: "Which areas do you serve?", answer: "RSE provides water purifier service in Patna, Bihar. Contact us with your locality to discuss a visit." },
  { question: "What information should I share?", answer: "Your name, phone number, locality, purifier brand or model if known, and a short description of the issue will help us understand your request." },
];

function ContactFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center"><span className="inline-flex items-center gap-2 rounded-full border border-rse-gold/50 bg-rse-surface px-4 py-2 text-sm font-semibold text-rse-text"><CircleHelp size={17} className="text-rse-crimson" /> Quick answers</span><h2 className="mt-5 text-3xl font-bold tracking-tight text-rse-text sm:text-4xl">Before you contact us</h2><p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">A few details to help you plan your RO service request.</p></div>
        <div className="space-y-3">{questions.map(({ question, answer }, index) => <article key={question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-rse-gold/60"><button type="button" aria-expanded={active === index} onClick={() => setActive(active === index ? null : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left sm:px-6"><span className="font-semibold text-rse-text">{question}</span><ChevronDown size={19} className={`shrink-0 text-rse-gold transition-transform ${active === index ? "rotate-180" : ""}`} /></button>{active === index && <div className="px-5 pb-5 sm:px-6"><p className="border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">{answer}</p></div>}</article>)}</div>
      </div>
    </section>
  );
}

export default ContactFAQ;
