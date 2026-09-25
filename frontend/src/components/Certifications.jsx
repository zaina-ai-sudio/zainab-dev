import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../data/portfolioData";
import { useTilt } from "../hooks/useTilt";

function CertCard({ cert, index }) {
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt(8);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        data-tilt
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.03, borderColor: "rgba(255,107,157,0.4)" }}
        className="rounded-2xl border border-white/10 bg-surface p-5 flex gap-3 items-start transition-colors h-full"
      >
        <motion.div
          whileHover={{ rotate: 12, scale: 1.1 }}
          className="w-9 h-9 rounded-full bg-grad-primary/90 flex items-center justify-center shrink-0"
        >
          <Award size={16} className="text-ink" />
        </motion.div>
        <p className="text-sm text-muted leading-relaxed">{cert}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-rose text-sm font-medium mb-3"
        >
          Certifications & activities
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-semibold mb-12"
        >
          Beyond the code
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <CertCard key={cert} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
