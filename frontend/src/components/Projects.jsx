import { motion } from "framer-motion";
import { CheckCircle2, Layers } from "lucide-react";
import { projects } from "../data/portfolioData";
import { useTilt } from "../hooks/useTilt";

function ProjectCard({ project, index }) {
  // Har card ko apna independent 3D tilt milta hai
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt(6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        data-tilt
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.015, boxShadow: "0 25px 70px rgba(124,92,252,0.25)" }}
        className="rounded-3xl border border-white/10 bg-surface p-8 sm:p-10 transition-shadow"
      >
        <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Layers size={16} className="text-rose" />
              <p className="text-rose text-xs font-medium uppercase tracking-wide">
                {project.subtitle}
              </p>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold">{project.title}</h3>
          </div>
          <div className="flex gap-2 flex-wrap">
            {project.stack.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.08, y: -2 }}
                className="rounded-full bg-violet/15 border border-violet/30 px-3 py-1 text-xs text-violet"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <p className="text-muted leading-relaxed mb-6">{project.description}</p>

        <div className="grid sm:grid-cols-3 gap-4">
          {project.highlights.map((highlight) => (
            <motion.div
              key={highlight}
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.04)" }}
              className="rounded-xl border border-white/5 p-4 flex gap-2 items-start transition-colors"
            >
              <CheckCircle2 size={16} className="text-mint mt-0.5 shrink-0" />
              <span className="text-sm text-muted">{highlight}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-rose text-sm font-medium mb-3"
        >
          Featured work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-semibold mb-14"
        >
          A project I'm proud of
        </motion.h2>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
