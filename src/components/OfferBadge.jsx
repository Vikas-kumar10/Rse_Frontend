import { motion, useReducedMotion } from "motion/react";

function BrandMessage({ duplicate = false }) {
  return (
    <span className="flex min-w-[100vw] items-center justify-center gap-2 px-4 text-xs font-semibold sm:gap-3 sm:text-sm">
      <span className="grid h-7 w-7 place-items-center rounded-full bg-rse-gold text-[0.65rem] font-black tracking-wide text-rse-primary ring-1 ring-rse-gold/60">
        RSE
      </span>
      <span className="font-extrabold tracking-wide text-rse-gold">
        RAJDHANI SONY ENTERPRISES
      </span>
      <span aria-hidden="true" className="text-rse-gold/70">•</span>
      <span className="text-white/90">RO SERVICE EXPERTS</span>
      <span aria-hidden="true" className="text-rse-gold/70">•</span>
      <a
        href="tel:7631996850"
        tabIndex={duplicate ? -1 : undefined}
        className="font-bold text-rse-gold hover:text-white"
      >
        Call 7631996850
      </a>
    </span>
  );
}

function OfferBadge() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      role="region"
      aria-label="RSE brand information"
      className="fixed inset-x-0 top-0 z-50 h-10 overflow-hidden border-b border-rse-gold/50 bg-rse-primary shadow-md"
    >
      <motion.div
        className="flex h-full w-max items-center"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={reduceMotion ? undefined : { duration: 22, ease: "linear", repeat: Infinity }}
      >
        <BrandMessage />
        <span aria-hidden="true" className="flex min-w-[100vw]">
          <BrandMessage duplicate />
        </span>
      </motion.div>
    </div>
  );
}

export default OfferBadge;
