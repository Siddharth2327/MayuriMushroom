import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { NAV_LINKS, BRAND } from "../../lib/constants";
import AnimatedButton from "../ui/AnimatedButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleOutsideClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [open]);

  return (
    // IMPORTANT: this element is `position: fixed` and must never also carry
    // a CSS transform (e.g. a Framer Motion `y`/`x` animation). Combining
    // `position: fixed` with an active transform on the same element causes
    // mobile Safari/Chrome to miscalculate its containing block on first
    // paint (it desyncs the layout viewport from the visual viewport), which
    // is what produced the misaligned/overflowing hamburger until a scroll
    // event forced a recompute. The entrance animation lives on the inner
    // wrapper below instead, which is safe because that div is not fixed.
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between gap-2 rounded-full pl-3 pr-2 sm:px-5 transition-all duration-500 ${
              scrolled ? "glass py-2 shadow-lg shadow-bark/5" : "py-2.5 sm:py-3"
            }`}
          >
            <Link to="/" className="flex items-center gap-2 min-w-0 group shrink-0">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-primary/10 shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img src="/Logo.png" alt={`${BRAND.name} logo`} className="w-full h-full object-contain p-1" />
              </span>
              <span className="hidden sm:block truncate font-display font-bold text-lg md:text-xl text-bark">
                {BRAND.name}
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-heading font-medium rounded-full transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-bark/70 hover:text-primary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-primary rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:block shrink-0">
              <AnimatedButton to="/pre-order" variant="primary">
                Pre Order
              </AnimatedButton>
            </div>

            <button
              className="lg:hidden grid place-items-center w-10 h-10 rounded-full glass text-bark shrink-0"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <HiX size={20} /> : <HiMenu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mx-3 sm:mx-4 mt-2 overflow-hidden rounded-3xl glass"
            >
              <div className="flex flex-col p-4 gap-1">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-2xl font-heading font-medium text-sm ${
                        isActive ? "bg-primary text-cream" : "text-bark hover:bg-primary/10"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="mt-2">
                  <AnimatedButton to="/pre-order" variant="primary" className="w-full">
                    Pre Order
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}