import { motion } from "framer-motion";
import { GraduationCap, MapPin, Languages } from "lucide-react";
import { profile, education, languages } from "../data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_0.8fr] gap-14 items-start">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <p className="text-rose text-sm font-medium mb-3">About me</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
            Building interfaces that feel as good as they work
          </h2>
          <p className="text-muted leading-relaxed text-base">{profile.about}</p>

          <div className="flex items-center gap-2 text-muted mt-6 text-sm">
            <MapPin size={16} className="text-rose" />
            {profile.location}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="space-y-5"
        >
          {/* Education card */}
          <motion.div
            whileHover={{ y: -6, borderColor: "rgba(255,107,157,0.4)" }}
            className="rounded-2xl border border-white/10 bg-surface p-6 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-grad-primary flex items-center justify-center">
                <GraduationCap size={18} className="text-ink" />
              </div>
              <p className="font-medium">Education</p>
            </div>
            <p className="text-ivory font-medium">{education.degree}</p>
            <p className="text-muted text-sm">{education.school}</p>
            <p className="text-muted text-sm">{education.period}</p>
          </motion.div>

          {/* Languages card */}
          <motion.div
            whileHover={{ y: -6, borderColor: "rgba(124,92,252,0.4)" }}
            className="rounded-2xl border border-white/10 bg-surface p-6 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-violet/20 flex items-center justify-center">
                <Languages size={18} className="text-violet" />
              </div>
              <p className="font-medium">Languages</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <div key={lang.name} className="text-sm">
                  <p className="text-ivory">{lang.name}</p>
                  <p className="text-muted text-xs">{lang.level}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
