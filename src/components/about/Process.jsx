import {
  ClipboardList,
  MessageCircle,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";

const processData = [
  {
    id: "01",
    title: "Tell us what you need",
    desc: "Call or message our team about your purifier or service concern.",
    icon: MessageCircle,
  },
  {
    id: "02",
    title: "We understand the issue",
    desc: "Share the purifier details and the symptoms you have noticed.",
    icon: ClipboardList,
  },
  {
    id: "03",
    title: "Get the right service",
    desc: "Request a repair, installation or maintenance visit in Patna.",
    icon: Wrench,
  },
  {
    id: "04",
    title: "Keep it maintained",
    desc: "Ask our team for guidance on ongoing purifier care.",
    icon: CheckCircle2,
  },
];

function Process() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rse-crimson">
              How it works
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-rse-text sm:text-4xl">
              A clear path to{" "}
              <span className="text-rse-gold">better RO care.</span>
            </h2>
          </div>
          <p className="max-w-md leading-7 text-slate-600">
            From the first conversation to ongoing care, we keep the service
            journey simple.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {processData.map(({ id, title, desc, icon: Icon }, index) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
            >
              <span className="absolute right-5 top-3 text-5xl font-bold tracking-tight text-rse-text/5">
                {id}
              </span>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-rse-gold/20 text-rse-text">
                <Icon size={22} />
              </div>
              <h3 className="relative mt-6 text-lg font-bold text-rse-text">
                {title}
              </h3>
              <p className="relative mt-2 text-sm leading-6 text-slate-600">
                {desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
