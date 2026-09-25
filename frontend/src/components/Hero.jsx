import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";
import MagneticButton from "./MagneticButton";
import Typewriter from "./Typewriter";

// Staggered container — hero ke bachon (children) ko ek ke baad ek reveal karta hai
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Hero mein cycle hone wale roles — typewriter effect ke liye
const roles = ["Full-Stack Developer", "React.js Specialist", "Node.js & MySQL Developer", "UI Craftsperson"];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background floating gradient blobs — sirf visual depth ke liye */}
      <div className="absolute inset-0 bg-grad-soft pointer-events-none" />
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-violet/20 blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-rose/10 blur-3xl animate-float-slower pointer-events-none" />

      {/* Sparkle particles — chhote animated dots background mein */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-rose/60 pointer-events-none"
          style={{ top: `${(i * 37) % 90}%`, left: `${(i * 53) % 95}%` }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.6, 1] }}
          transition={{ duration: 2.5 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.3fr_0.7fr] gap-12 items-center"
      >
        <div>
          <motion.p variants={item} className="text-rose font-medium mb-4 text-sm tracking-wide">
            {profile.tagline}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] mb-6"
          >
            Hi, I'm {profile.name.split(" ")[0]} —<br />
            <span className="bg-grad-primary bg-clip-text text-transparent">
              <Typewriter words={roles} />
            </span>
          </motion.h1>

          <motion.p variants={item} className="text-muted text-lg max-w-xl mb-10 leading-relaxed">
            {profile.about.split(".").slice(0, 2).join(".") + "."}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#projects"
              className="relative overflow-hidden rounded-full bg-grad-primary px-7 py-3 font-medium text-ink shadow-glow inline-block group"
            >
              <span className="relative z-10">View my work</span>
              {/* Shine sweep effect on hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-3 font-medium text-ivory inline-block hover:bg-white/5 transition-colors"
            >
              Get in touch
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-5 mt-10">
            {[
              { icon: Github, href: profile.socials.github, label: "GitHub" },
              { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -4, rotate: -8, color: "#FF6B9D" }}
                whileTap={{ scale: 0.9 }}
                className="text-muted transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right side — animated avatar frame with rotating gradient ring + pulsing glow */}
        <motion.div variants={item} className="relative mx-auto md:mx-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 rounded-full bg-grad-primary opacity-60 blur-md"
          />
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-6 rounded-full bg-violet/20 blur-2xl"
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-surface border-4 border-ink flex items-center justify-center"
          >
            <span className="font-display text-6xl font-semibold bg-grad-primary bg-clip-text text-transparent">
              ZG
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.3, color: "#FF6B9D" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
