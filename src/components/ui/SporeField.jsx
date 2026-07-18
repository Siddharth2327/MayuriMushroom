import { useMemo } from "react";

export default function SporeField({ count = 18, className = "" }) {
  const spores = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: 3 + Math.random() * 7,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 12 + Math.random() * 14,
        delay: Math.random() * 10,
      })),
    [count]
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {spores.map((s) => (
        <span
          key={s.id}
          className="spore-dot absolute animate-drift"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.left}%`,
            top: `${s.top}%`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}
