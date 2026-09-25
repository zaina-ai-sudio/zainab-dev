import { motion } from "framer-motion";
import { skills, softSkills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-rose text-sm font-medium mb-3"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-semibold mb-14"
        >
          Tools I build with
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-14">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-ivory font-medium">{skill.name}</span>
                <span className="text-muted">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-grad-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills chips — har chip pe hover animation */}
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.08, backgroundColor: "rgba(255,107,157,0.15)", borderColor: "#FF6B9D" }}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-ivory cursor-default transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
