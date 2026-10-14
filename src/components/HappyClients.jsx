import { ClipboardCheck, Clock3, MapPinned, Wrench } from "lucide-react";

const benefits = [
  {
    icon: MapPinned,
    title: "Local Patna support",
    text: "A nearby team for home and workplace purifier needs.",
  },
  {
    icon: Wrench,
    title: "Practical repairs",
    text: "We inspect the issue and explain the recommended work.",
  },
  {
    icon: ClipboardCheck,
    title: "Careful servicing",
    text: "Routine checks help keep your purifier running smoothly.",
  },
  {
    icon: Clock3,
    title: "Easy to reach",
    text: "Call or request a visit when your purifier needs attention.",
  },
];

function HappyClients() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rse-crimson">
              Why choose RSE
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-rse-text sm:text-4xl">
              Good service should feel{" "}
              <span className="text-rse-gold">straightforward.</span>
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Get helpful guidance, dependable purifier care and a simple way to
              book service across Patna.
            </p>
            <a
              href="tel:+917979076001"
              className="mt-7 inline-flex rounded-lg bg-rse-primary px-5 py-3 font-semibold text-white transition hover:bg-rse-crimson"
            >
              Talk to our team
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-rse-surface p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rse-gold/20 text-rse-text">
                  <Icon size={21} />
                </div>
                <h3 className="mt-4 font-bold text-rse-text">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HappyClients;
