import { useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

// Ye hook kisi bhi card ko 3D tilt effect deta hai — mouse jahan hoga,
// card usi taraf halka sa jhukega (tilt), aur mouse hatane pe wapas seedha ho jayega
export function useTilt(strength = 12) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring se smooth motion milta hai — jerky nahi lagta
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [strength, -strength]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-strength, strength]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    // Card ke center se mouse ka relative position (-0.5 se 0.5 ke beech) nikaal rahe hain
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave };
}
