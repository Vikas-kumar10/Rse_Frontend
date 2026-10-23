
import { motion, useReducedMotion } from "motion/react";
import {
  Droplets,
  Wrench,
  Settings,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const services = [
  { label: "RO Repair", icon: Wrench },
  { label: "Installation", icon: Settings },
  { label: "Filter Change", icon: Droplets },
  { label: "AMC Service", icon: ShieldCheck },
];

function BrandingMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Rajdhani Sony Enterprises RO services"
      className="relative overflow-hidden border-y border-rse-gold/25 bg-rse-primary px-4 py-8 sm:py-10"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64
        -translate-x-1/2 -translate-y-1/2 rounded-full
        bg-rse-gold/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-7 sm:flex-row sm:justify-between sm:gap-10">
        {/* Company branding */}
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-rse-gold/50 bg-rse-gold/10 shadow-lg shadow-black/10">
            <span className="text-lg font-black tracking-tight text-rse-gold">
              RSE
            </span>

            <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-rse-gold text-rse-primary">
              <Sparkles size={11} />
            </span>
          </div>

          <div>
            <h2 className="text-sm font-extrabold tracking-[0.12em] text-white sm:text-base">
              RAJDHANI SONY
              <span className="text-rse-gold"> ENTERPRISES</span>
            </h2>

            <p className="mt-1 text-xs tracking-[0.18em] text-white/60">
              RO SERVICE EXPERTS
            </p>
          </div>
        </div>

        {/* Circular rotating service orbit */}
        <div className="relative flex h-48 w-48 shrink-0 items-center justify-center sm:h-56 sm:w-56">
          {/* Decorative rings */}
          <div className="absolute inset-0 rounded-full border border-rse-gold/20" />

          <div className="absolute inset-3 rounded-full border border-dashed border-rse-gold/40" />

          {/* Anticlockwise infinite rotation */}
          <motion.div
            className="absolute inset-0"
            animate={
              reduceMotion
                ? undefined
                : { rotate: -360 }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 18,
                    ease: "linear",
                    repeat: Infinity,
                  }
            }
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const angle = index * 90;

              return (
                <div
                  key={service.label}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-88px)`,
                  }}
                >
                  <div
                    className="grid h-10 w-10 -translate-x-1/2
                    -translate-y-1/2 place-items-center rounded-full
                    border border-rse-gold/50 bg-rse-primary
                    text-rse-gold shadow-lg shadow-black/20
                    sm:h-11 sm:w-11"
                    title={service.label}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Fixed center logo */}
          <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-rse-gold bg-rse-primary shadow-[0_0_28px_rgba(255,200,80,0.15)] sm:h-28 sm:w-28">
            <Droplets
              size={25}
              className="mb-1 text-rse-gold"
              strokeWidth={1.8}
            />

            <span className="text-sm font-black tracking-wider text-white">
              RSE
            </span>

            <span className="mt-0.5 text-[8px] tracking-[0.16em] text-rse-gold">
              PURE WATER
            </span>
          </div>
        </div>

        {/* Service list */}
        <div className="grid w-full grid-cols-2 gap-3 sm:w-auto sm:min-w-48 sm:grid-cols-1">
          {services.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 transition-colors duration-300 hover:border-rse-gold/50 hover:bg-rse-gold/10"
            >
              <Icon
                size={16}
                className="shrink-0 text-rse-gold"
              />

              <span className="text-xs font-medium text-white/85">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gold accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-px w-1/3
        -translate-x-1/2 bg-gradient-to-r
        from-transparent via-rse-gold/70 to-transparent"
      />
    </section>
  );
}

export default BrandingMarquee;
