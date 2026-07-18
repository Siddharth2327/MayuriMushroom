import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4 }}
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass grid place-items-center text-bark shadow-lg hover:scale-110 transition-transform"
    >
      {dark ? <HiSun size={20} className="text-accent" /> : <HiMoon size={20} className="text-primary" />}
    </motion.button>
  );
}
