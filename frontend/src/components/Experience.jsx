import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-rose text-sm font-medium mb-3"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-semibold mb-14"
        >
          Where I've worked
        </motion.h2>

        {/* Timeline — left border line ke sath */}
        <div className="relative border-l border-white/10 pl-10 space-y-14">
          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.org}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <motion.span
                whileHover={{ scale: 1.3 }}
                className="absolute -left-[3.15rem] top-1 w-6 h-6 rounded-full bg-grad-primary flex items-center justify-center shadow-glow"
              >
                <Briefcase size={12} className="text-ink" />
              </motion.span>

              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <h3 className="font-display text-xl font-semibold text-ivory">{job.role}</h3>
                <p className="text-rose text-sm mb-1">{job.org}</p>
                <p className="text-muted text-xs italic mb-4">{job.period}</p>
                <ul className="space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="text-muted text-sm leading-relaxed flex gap-2">
                      <span className="text-violet mt-1.5">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
