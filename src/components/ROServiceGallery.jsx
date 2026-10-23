import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import repairBanner from "../image/Purify.png";
import maintenanceBanner from "../image/RSE1 (2).png";
import purifierBanner from "../image/RSE1.png";
import aquaTrustBanner from "../image/Rse2.JPG";
import aquaServiceBanner from "../image/RSE1 (2).png";

const services = [
  {
    image: repairBanner,
    alt: "Technician repairing an RO water purifier",
    eyebrow: "Fast, dependable help",
    title: "RO repair, done right.",
    description:
      "Get expert troubleshooting for leaks, low water flow, unusual taste, and other purifier problems.",
    points: ["All major RO brands", "Clear repair recommendations"],
  },
  {
    image: maintenanceBanner,
    alt: "RO purifier maintenance service",
    eyebrow: "Protect your purifier",
    title: "Regular care. Reliable water.",
    description:
      "Routine servicing helps your purifier run smoothly and keeps small issues from becoming bigger repairs.",
    points: ["System performance check", "Convenient service visits"],
  },
  {
    image: purifierBanner,
    alt: "Home reverse osmosis water purification system",
    eyebrow: "Cleaner water at home",
    title: "Water purification solutions.",
    description:
      "Find practical RO support for your home, from system checks to filter and water quality care.",
    points: ["Filter condition inspection", "Water quality guidance"],
  },
  {
    image: aquaTrustBanner,
    alt: "RO water treatment equipment and professional service",
    eyebrow: "Professional installation",
    title: "Set up your RO with confidence.",
    description:
      "Get help installing or replacing a purifier, with careful setup and a walkthrough of your system.",
    points: ["Neat, careful installation", "Setup and usage guidance"],
  },
  {
    image: aquaServiceBanner,
    alt: "RO purifier installation and filter replacement service",
    eyebrow: "Filters and replacement",
    title: "Keep every drop flowing.",
    description:
      "Replace worn filters and get the essential service your purifier needs for dependable everyday use.",
    points: ["Filter replacement support", "Post-service performance check"],
  },
];

function ROServiceGallery() {
  const [activeService, setActiveService] = useState(0);
  const pointerStartX = useRef(null);
  const active = services[activeService];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveService((current) => (current + 1) % services.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  function showService(index) {
    setActiveService((index + services.length) % services.length);
  }

  function handlePointerUp(event) {
    if (pointerStartX.current === null) return;
    const distance = event.clientX - pointerStartX.current;
    if (Math.abs(distance) > 45) {
      setActiveService(
        (current) =>
          (current + (distance < 0 ? 1 : -1) + services.length) %
          services.length,
      );
    }
    pointerStartX.current = null;
  }

  return (
    <section
      aria-labelledby="featured-services-title"
      className="bg-rse-surface py-16 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rse-crimson">
              RO care made simple
            </span>
            <h2
              id="featured-services-title"
              className="mt-3 text-3xl font-bold tracking-tight text-rse-text sm:text-4xl"
            >
              Explore our <span className="text-rse-primary">services.</span>
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-600">
              Swipe through the services and find the right support for your
              water purifier.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex w-fit items-center gap-2 font-semibold text-rse-text transition hover:text-rse-crimson"
          >
            View all services <ArrowUpRight size={18} />
          </Link>
        </div>

        <div
          className="group relative touch-pan-y"
          onPointerDown={(event) => {
            pointerStartX.current = event.clientX;
          }}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            pointerStartX.current = null;
          }}
        >
          <div className="grid overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg shadow-rse-primary/10 md:min-h-96 md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden bg-rse-pale md:aspect-auto md:min-h-96">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.image}
                  src={active.image}
                  alt={active.alt}
                  draggable="false"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
              {/* <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-bold text-rse-primary shadow-sm backdrop-blur sm:left-6 sm:top-6">
                0{activeService + 1}{" "}
                <span className="px-1 text-rse-gold">/</span> 0
                {services.length}
              </span> */}
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-rse-crimson">
                    {active.eyebrow}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-rse-text sm:text-3xl">
                    {active.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                    {active.description}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {active.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 text-sm font-medium text-slate-700"
                      >
                        <ShieldCheck
                          size={18}
                          className="shrink-0 text-rse-gold"
                        />{" "}
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-rse-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-rse-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rse-gold"
                  >
                    Book this service <ArrowUpRight size={17} />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button
            type="button"
            onClick={() => showService(activeService - 1)}
            aria-label="Previous service"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-rse-primary text-white shadow-lg transition hover:bg-rse-crimson focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rse-gold sm:left-4 sm:h-11 sm:w-11"
          >
            <ArrowLeft size={19} />
          </button>
          <button
            type="button"
            onClick={() => showService(activeService + 1)}
            aria-label="Next service"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-rse-primary text-white shadow-lg transition hover:bg-rse-crimson focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rse-gold sm:right-4 sm:h-11 sm:w-11"
          >
            <ArrowRight size={19} />
          </button>
        </div>

        <div
          className="mt-6 flex items-center justify-center gap-2"
          aria-label="Choose a service"
        >
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              onClick={() => showService(index)}
              aria-label={`Show ${service.title}`}
              aria-current={activeService === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all ${activeService === index ? "w-8 bg-rse-gold" : "w-2.5 bg-rse-primary/25 hover:bg-rse-primary/60"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ROServiceGallery;
