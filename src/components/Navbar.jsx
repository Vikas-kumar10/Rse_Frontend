import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, NavLink } from "react-router-dom";
import { Menu, PhoneCall, X } from "lucide-react";
import logo from "../image/logo.jpeg";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
];

const linkStyle = ({ isActive }) =>
  `rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
    isActive
      ? "bg-rse-gold text-rse-text"
      : "text-white/85 hover:bg-white/10 hover:text-rse-gold"
  }`;

function Navbar({ topOffset = false }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className={`fixed inset-x-0 z-40 px-2.5 pt-2.5 sm:px-5 sm:pt-3 ${topOffset ? "top-10" : "top-0"}`}
      >
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-rse-gold/40 bg-rse-primary/95 px-3 shadow-xl shadow-rse-primary/20 backdrop-blur-md sm:h-[4.5rem] sm:px-5 lg:px-6">
          <span
            aria-hidden="true"
            className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-rse-gold/70 to-transparent"
          />
          <Link
            to="/"
            className="relative flex min-w-0 shrink-0 items-center gap-1 sm:gap-2.5"
            aria-label="RSE RO Service Experts home"
          >
            <img
              src={logo}
              alt=""
              className="h-8 w-8 rounded-lg object-contain sm:h-12 sm:w-12"
            />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-base font-extrabold tracking-wider text-white sm:text-lg">
                RSE
              </span>
              <span className="mt-1 whitespace-nowrap text-[0.625rem] font-bold tracking-wider text-rse-gold sm:text-xs">
                Rajdhani Sony Enterprises
              </span>
            </span>
          </Link>

          <div
            className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-rse-gold/60 bg-rse-gold/15 px-2 py-1 text-[0.625rem] font-semibold leading-none text-white shadow-[0_0_10px_rgba(245,190,70,0.18)] sm:right-14 sm:text-xs xl:hidden"
            aria-label="GSTIN 10DESPD3516K1ZM"
          >
            <span className="text-rse-gold">GSTIN:</span> 10DESPD3516K1ZM
          </div>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 xl:flex"
          >
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                end={item.link === "/"}
                className={linkStyle}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <div className="flex items-center gap-1">
              <PhoneCall size={17} aria-hidden="true" />
              <a
                href="tel:7631996851"
                className="rounded-full px-2 py-2 text-sm font-semibold text-white/90 transition hover:bg-red/10 hover:text-rse-gold"
                aria-label="Call 7631996851"
              >
                7631996851
              </a>
              <span className="text-white/50">|</span>
              <span className="cursor-default rounded-full px-2 py-2 text-xs font-semibold text-white/90 transition-colors duration-200 hover:bg-white/10 hover:text-rse-gold" aria-label="GSTIN 10DESPD3516K1ZM">
                GSTIN: 10DESPD3516K1ZM
              </span>
            </div>
            <Link
              to="/contact"
              className="rounded-full border border-rse-crimson bg-rse-crimson px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-rse-crimson/20 transition hover:border-rse-gold hover:bg-rse-gold hover:text-rse-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rse-gold"
            >
              Book a Service
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="rounded-lg p-2 text-white transition hover:bg-white/10 hover:text-rse-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-rse-gold xl:hidden"
          >
            <Menu size={25} aria-hidden="true" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-rse-primary/65 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-rse-gold/40 bg-rse-primary p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  aria-label="RSE RO Service Experts home"
                  className="flex items-center gap-2.5"
                >
                  <img
                    src={logo}
                    alt=""
                    className="h-12 w-12 rounded-lg object-contain"
                  />
                  <span className="flex flex-col leading-tight">
                    <span className="text-lg font-extrabold tracking-wider text-white">
                      RSE
                    </span>
                    <span className="mt-1 text-xs font-bold tracking-wider text-rse-gold">
                      RO SERVICE EXPERTS
                    </span>
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="rounded-lg p-2 text-white hover:bg-white/10 hover:text-rse-gold"
                >
                  <X size={23} aria-hidden="true" />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.link}
                    end={item.link === "/"}
                    onClick={() => setOpen(false)}
                    className={linkStyle}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="mt-auto grid gap-3 border-t border-white pt-5">
                <div className="grid gap-2">
                  <a
                    href="tel:7631996851"
                    className="flex items-center justify-center gap-2 rounded-xl border border-rse-gold/60 px-4 py-3 font-semibold text-white transition hover:bg-white/10 hover:text-rse-gold"
                    aria-label="Call 7631996851"
                  >
                    <PhoneCall size={18} className="text-white" aria-hidden="true" /> 7631996851
                  </a>
                  <div className="cursor-default rounded-xl border border-rse-gold/60 px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:border-rse-gold hover:bg-rse-gold/10 hover:text-rse-gold" aria-label="GSTIN 10DESPD3516K1ZM">
                    GSTIN: 10DESPD3516K1ZM
                  </div>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-rse-crimson px-4 py-3 text-center font-bold text-white transition hover:bg-rse-gold hover:text-rse-text"
                >
                  Book a Service
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
