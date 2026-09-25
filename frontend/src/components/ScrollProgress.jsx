import { motion, useScroll, useSpring } from "framer-motion";

// Page scroll ke sath top pe ek gradient bar fill hoti jaati hai —
// user ko pata chalta hai woh page mein kahan hai
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-grad-primary origin-left z-[60]"
    />
  );
}
