import { motion } from "framer-motion";
import OrganicBlob from "./OrganicBlob";
import SporeField from "./SporeField";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative pt-40 pb-20 px-6 lg:px-8 overflow-hidden text-center">
      <OrganicBlob className="w-96 h-96 -top-20 -left-24" color="#A7C957" opacity={0.16} />
      <OrganicBlob className="w-72 h-72 top-10 -right-16" color="#E9C46A" opacity={0.14} />
      <SporeField count={12} />
      <div className="relative max-w-3xl mx-auto">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full glass text-primary text-xs font-heading font-semibold tracking-widest uppercase mb-5"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-4xl sm:text-5xl text-bark"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-5 text-bark/65 text-base sm:text-lg max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
