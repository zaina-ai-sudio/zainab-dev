import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Ek dafa site load hote hi ye splash animation dikhti hai — naam letter-by-letter
// reveal hota hai, phir puri screen slide-up ho kar hat jaati hai
export default function Loader({ onDone }) {
  const [show, setShow] = useState(true);
  const name = "Zainab Gul";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onDone, 700); // exit animation complete hone ka wait
    }, 1400);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-ink flex items-center justify-center"
        >
          <div className="flex gap-1 overflow-hidden">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-3xl sm:text-4xl font-semibold bg-grad-primary bg-clip-text text-transparent"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
