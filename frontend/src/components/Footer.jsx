import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} {profile.name}. Built with React & lots of coffee.
        </p>

        <div className="flex items-center gap-5">
          {[
            { icon: Github, href: profile.socials.github },
            { icon: Linkedin, href: profile.socials.linkedin },
            { icon: Mail, href: `mailto:${profile.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: "#FF6B9D" }}
              className="text-muted transition-colors"
            >
              <Icon size={18} />
            </motion.a>
          ))}

          <motion.a
            href="#top"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-full bg-grad-primary flex items-center justify-center text-ink"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
