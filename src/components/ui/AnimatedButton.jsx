import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AnimatedButton({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now();
    setRipples((r) => [...r, { id, x, y, size }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 650);
  };

  const base =
    "relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold text-sm tracking-wide px-8 py-3.5 transition-all duration-300 group";

  const styles = {
    primary:
      "bg-primary text-cream shadow-[0_8px_24px_-8px_rgba(79,119,45,0.6)] hover:shadow-[0_12px_32px_-6px_rgba(79,119,45,0.75)] hover:-translate-y-0.5",
    outline:
      "border-2 border-primary text-primary hover:text-cream bg-transparent hover:bg-primary",
    accent:
      "bg-accent text-bark shadow-[0_8px_24px_-8px_rgba(233,196,106,0.7)] hover:-translate-y-0.5",
    glass: "glass text-bark hover:text-primary",
  };

  const content = (
    <motion.span
      whileTap={{ scale: 0.96 }}
      onClick={(e) => {
        createRipple(e);
        onClick?.(e);
      }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/40 pointer-events-none animate-[ripple_0.65s_ease-out]"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}
      <style>{`@keyframes ripple { from { transform: scale(0); opacity: .6; } to { transform: scale(1); opacity: 0; } }`}</style>
    </motion.span>
  );

  if (to) return <Link to={to}>{content}</Link>;
  if (href) return <a href={href} target="_blank" rel="noreferrer">{content}</a>;
  return <button type={type}>{content}</button>;
}
