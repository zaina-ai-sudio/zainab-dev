import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  // scrolled state — navbar ka background scroll pe change hoga
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu open/close

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/80 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Zainab<span className="text-rose">.</span>
        </a>

        {/* Desktop links — har link pe hover underline animation */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="relative group text-sm text-muted hover:text-ivory transition-colors">
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-grad-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <MagneticButton
          href="#contact"
          className="hidden md:inline-block rounded-full bg-grad-primary px-5 py-2 text-sm font-medium text-ink shadow-glow"
        >
          Let's talk
        </MagneticButton>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ivory"
          aria-label="Toggle menu"
        >
          <motion.div whileTap={{ scale: 0.85, rotate: 90 }}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-ink/95 backdrop-blur-lg border-b border-white/5 px-6"
          >
            {links.map((link) => (
              <li key={link.href} className="py-3 border-t border-white/5 first:border-t-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-muted hover:text-ivory transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
