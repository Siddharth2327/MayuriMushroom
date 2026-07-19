import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", dark = false, hover = true, blur = true }) {
  const base = dark ? (blur ? "glass-dark" : "glass-dark-flat") : (blur ? "glass" : "glass-flat");

  return (
    <motion.div
      whileHover={hover ? { y: -8, boxShadow: "0 24px 48px -12px rgba(92,64,51,0.25)" } : {}}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`${base} rounded-3xl p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}