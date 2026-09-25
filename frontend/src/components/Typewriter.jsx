import { useEffect, useState } from "react";

// Text ko letter-by-letter type karta hai, thora ruk kar delete karta hai,
// phir agla word type karta hai — infinite loop mein
export default function Typewriter({ words, typingSpeed = 80, deletingSpeed = 40, pause = 1600 }) {
  const [index, setIndex] = useState(0); // konsa word chal raha hai
  const [subIndex, setSubIndex] = useState(0); // kitne letters type ho chuke
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!deleting && subIndex === words[index].length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => setSubIndex(subIndex + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span className="inline-block w-[3px] h-[0.9em] bg-rose ml-1 align-middle animate-pulse" />
    </span>
  );
}
