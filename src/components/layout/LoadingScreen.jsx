import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-cream"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-24 h-24">
              <motion.svg
                className="absolute inset-0"
                width="96"
                height="96"
                viewBox="0 0 96 96"
                fill="none"
              >
                <motion.circle
                  cx="48"
                  cy="48"
                  r="42"
                  stroke="#A7C957"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="264"
                  initial={{ strokeDashoffset: 264, rotate: -90 }}
                  animate={{ strokeDashoffset: 0 }}
                  style={{ transformOrigin: "48px 48px" }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                />
              </motion.svg>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute inset-3 rounded-full bg-white/70 grid place-items-center overflow-hidden shadow-inner"
              >
                <motion.img
                  src="/Logo.png"
                  alt="Mayuri Mushrooms"
                  className="w-3/4 h-3/4 object-contain"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="font-display italic text-primary text-lg tracking-wide"
            >
              growing something good...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
