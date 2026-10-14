import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../image/logo.jpeg";

function Footer() {
  return (
    <footer className="bg-rse-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-3"
            aria-label="RSE RO Service Experts home"
          >
            <img
              src={logo}
              alt=""
              className="h-14 w-14 rounded-xl object-contain"
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
          <h2 className="mt-4 text-lg font-semibold">
            RO Service Center, Patna
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
            Doorstep RO repair, installation and maintenance for homes and
            workplaces across Patna.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              aria-label="Facebook"
              href="#"
              className="rounded-full border border-white/15 p-2.5 text-white/75 hover:border-rse-gold hover:text-rse-gold"
            >
              <FaFacebookF />
            </a>
            <a
              aria-label="Instagram"
              href="#"
              className="rounded-full border border-white/15 p-2.5 text-white/75 hover:border-rse-gold hover:text-rse-gold"
            >
              <FaInstagram />
            </a>
            <a
              aria-label="WhatsApp"
              href="https://wa.me/917979076001"
              className="rounded-full border border-white/15 p-2.5 text-white/75 hover:border-rse-gold hover:text-rse-gold"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-rse-gold">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About RSE
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-rse-gold">Our services</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>RO repair & servicing</li>
            <li>Installation & replacement</li>
            <li>Filter changes</li>
            <li>Annual maintenance</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-rse-gold">Get in touch</h3>
          <ul className="mt-4 space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MdPhone className="mt-0.5 shrink-0 text-lg text-rse-gold" />
              <div className="flex flex-col gap-2">
                <a href="tel:7631996850">7631996850</a>
                <a href="tel:7631996851">7631996851</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MdEmail className="mt-0.5 shrink-0 text-lg text-rse-gold" />
              <a href="mailto:inforserocarepatna.com">rserocarepatna.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MdLocationOn className="mt-0.5 shrink-0 text-lg text-rse-gold" />
              <span>Ghurdaur Road No.-3, Patna-800011</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 font-semibold text-rse-gold">GSTIN</span>
              <span>10DESPD3516K1ZM</span>
            </li>
            <li className="flex items-start gap-3">
              <MdAccessTime className="mt-0.5 shrink-0 text-lg text-rse-gold" />
              Mon–Sun · 8:00 AM–8:00 PM
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} RSE RO Service Experts. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
