import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaGoogle } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { BRAND, NAV_LINKS, SOCIAL_LINKS } from "../../lib/constants";

const iconMap = { whatsapp: FaWhatsapp, instagram: FaInstagram, facebook: FaFacebookF, google: FaGoogle };

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <footer className="relative mt-24 bg-bark text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grain" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.6" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grain)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-cream/10 overflow-hidden">
                <img src="/Logo.png" alt={`${BRAND.name} logo`} className="w-full h-full object-contain p-1" />
              </span>
              <span className="font-display font-bold text-lg">{BRAND.name}</span>
            </Link>
            <p className="text-cream/60 font-display italic text-sm">{BRAND.tagline}</p>
            <div className="flex gap-3 mt-5">
              {SOCIAL_LINKS.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid place-items-center w-9 h-9 rounded-full bg-cream/10 hover:bg-secondary hover:text-bark transition-colors duration-300"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-secondary tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-cream/70 hover:text-cream text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-secondary tracking-wide uppercase text-sm">Contact</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-2">
                <HiOutlinePhone className="mt-0.5 shrink-0" /> {BRAND.phone}
              </li>
              <li className="flex items-start gap-2">
                <HiOutlineMail className="mt-0.5 shrink-0" /> {BRAND.email}
              </li>
              <li className="flex items-start gap-2">
                <HiOutlineLocationMarker className="mt-0.5 shrink-0" />
                <span>
                  {BRAND.address.line1}, {BRAND.address.line2},<br />
                  {BRAND.address.line3}, {BRAND.address.city}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-secondary tracking-wide uppercase text-sm">Newsletter</h4>
            <p className="text-cream/60 text-sm mb-3">Get growing tips and harvest updates.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-full bg-cream/10 px-4 py-2.5 text-sm placeholder:text-cream/40 outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-secondary text-bark px-4 py-2.5 text-sm font-heading font-semibold hover:bg-accent transition-colors"
              >
                Join
              </button>
            </form>
            {subscribed && <p className="text-secondary text-xs mt-2">Subscribed! Welcome to the grow list.</p>}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/50 text-xs">© 2025 {BRAND.name}. All Rights Reserved.</p>
          <p className="text-cream/50 text-xs">Grown with care in Chennai.</p>
        </div>
      </div>
    </footer>
  );
}
