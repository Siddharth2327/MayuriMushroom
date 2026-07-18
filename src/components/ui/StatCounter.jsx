import { useCountUp } from "react-countup";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function StatCounter({ value, prefix = "", suffix = "", label }) {
  const ref = useRef(null);
  const countRef = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const { start } = useCountUp({
    ref: countRef,
    end: value,
    duration: 2,
    prefix,
    suffix,
    startOnMount: false,
  });

  useEffect(() => {
    if (inView) start();
  }, [inView, start]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-gradient">
        <span ref={countRef}>{prefix}0{suffix}</span>
      </div>
      <p className="mt-2 text-sm md:text-base font-medium text-bark/70 tracking-wide uppercase">{label}</p>
    </div>
  );
}
