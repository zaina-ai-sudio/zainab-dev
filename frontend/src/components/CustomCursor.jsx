import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Custom glowing cursor — desktop pe default cursor ke sath ek soft
// gradient glow follow karta hai. Touch devices pe ye khud disable ho jata hai.
export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    // Sirf mouse-capable, wide-enough screens pe hi ye cursor dikhayenge
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setIsDesktop(hasFinePointer && window.innerWidth > 768);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const move = (e) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
    };

    // Buttons/links/cards pe cursor bada ho jayega — interactive hint
    const handleOver = (e) => {
      if (e.target.closest("a, button, [data-tilt]")) setHovering(true);
    };
    const handleOut = (e) => {
      if (e.target.closest("a, button, [data-tilt]")) setHovering(false);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [isDesktop, x, y]);

  if (!isDesktop) return null;

  return (
    <motion.div
      style={{ translateX: springX, translateY: springY }}
      animate={{ scale: hovering ? 2.2 : 1, opacity: hovering ? 0.5 : 0.9 }}
      transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-grad-primary pointer-events-none z-[100] mix-blend-screen blur-[1px]"
    />
  );
}
