import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const info = [
  {
    icon: Phone,
    title: "Call RSE",
    value: "7631996850 / 7631996851",
    detail: "Speak with our service team",
    href: "tel:7631996850",
  },
  {
    icon: Mail,
    title: "Email us",
    value: "rajdhanisonyenterprises@gmail.com",
    detail: "Send us your service question",
    href: "mailto:rajdhanisonyenterprises@gmail.com",
  },
  {
    icon: MapPin,
    title: "Service location",
    value: "Ghurdaur Road No.-3, Patna-800011",
    detail: "Home and workplace visits",
    href: "https://maps.google.com/?q=Ghurdaur+Road+No.-3,+Patna-800011",
    external: true,
  },
  {
    icon: Clock3,
    title: "Working hours",
    value: "8:00 AM – 8:00 PM",
    detail: "Monday to Sunday",
    href: null,
  },
];

function ContactInfo() {
  return (
    <section
      id="contact-options"
      className="scroll-mt-24 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-rse-crimson">
            Get in touch
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-rse-text sm:text-4xl">
            We’re easy to reach.
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Choose the way that works best for you. We’re here for RO service
            enquiries in Patna.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {info.map(({ icon: Icon, title, value, detail, href, external }) => {
            const content = (
              <>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rse-gold/20 text-rse-text">
                  <Icon size={21} />
                </span>
                <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-rse-gold">
                  {title}
                </span>
                <span className="mt-2 block break-words font-bold text-rse-text">
                  {value}
                </span>
                <span className="mt-1 block text-sm text-slate-500">
                  {detail}
                </span>
              </>
            );
            return href ? (
              <a
                key={title}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="rounded-2xl border border-slate-200 bg-rse-surface p-5 transition hover:-translate-y-1 hover:border-rse-gold/70 hover:bg-white hover:shadow-lg"
              >
                {content}
              </a>
            ) : (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-rse-surface p-5"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;

