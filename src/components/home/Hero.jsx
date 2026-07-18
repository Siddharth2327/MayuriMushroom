import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { HiArrowRight, HiSparkles } from "react-icons/hi";
import { GiFruitBowl } from "react-icons/gi";
import SporeField from "../ui/SporeField";
import OrganicBlob from "../ui/OrganicBlob";
import AnimatedButton from "../ui/AnimatedButton";
import StatCounter from "../ui/StatCounter";
import ImageWithFallback from "../ui/ImageWithFallback";
import { STATS } from "../../lib/constants";
import { IMAGES } from "../../lib/images";

const HEADLINE = "Healthy, Rich & Delicious Oyster Mushrooms";

export default function Hero() {
  const words = HEADLINE.split(" ");
  const sectionRef = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 15 });
  const sy = useSpring(my, { stiffness: 60, damping: 15 });

  const layer1X = useTransform(sx, [-1, 1], [-14, 14]);
  const layer1Y = useTransform(sy, [-1, 1], [-14, 14]);
  const layer2X = useTransform(sx, [-1, 1], [10, -10]);
  const layer2Y = useTransform(sy, [-1, 1], [10, -10]);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      <OrganicBlob className="w-[500px] h-[500px] -top-32 -left-40" color="#A7C957" opacity={0.18} />
      <OrganicBlob className="w-[400px] h-[400px] top-1/3 -right-32" color="#E9C46A" opacity={0.16} />
      <SporeField count={22} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-14 items-center">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full glass text-primary text-xs font-heading font-semibold tracking-widest uppercase mb-6"
          >
            <HiSparkles size={13} /> 100% Chemical-Free Cultivation
          </motion.span>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-bark">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-3 align-top">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block ${
                    word === "Oyster" || word === "Mushrooms" ? "text-gradient" : ""
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-6 text-base sm:text-lg text-bark/70 max-w-xl mx-auto lg:mx-0"
          >
            Premium quality oyster mushrooms grown naturally using chemical-free cultivation methods — harvested fresh and delivered to your door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <AnimatedButton to="/pre-order" variant="primary">
              Pre-Order Now <HiArrowRight />
            </AnimatedButton>
            <AnimatedButton to="/training" variant="outline">
              Explore Training
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Image collage replaces the old 3D scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[380px] sm:h-[460px] lg:h-[540px]"
        >
          {/* main hero image */}
          <motion.div
            style={{ x: layer1X, y: layer1Y }}
            className="absolute inset-x-6 inset-y-4 sm:inset-x-10 rounded-[2.5rem] shadow-2xl shadow-bark/20 ring-1 ring-white/60"
          >
            <ImageWithFallback
              src={IMAGES.heroMain}
              alt="Fresh oyster mushrooms grown at Mayuri Mushrooms"
              className="w-full h-full rounded-[2.5rem]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-bark/25 via-transparent to-transparent" />
          </motion.div>

          {/* small floating accent photo */}
          <motion.div
            style={{ x: layer2X, y: layer2Y }}
            animate={{ y: [0, -14, 0] }}
            transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute -bottom-4 -left-2 sm:left-0 w-28 h-28 sm:w-36 sm:h-36 rounded-3xl shadow-xl shadow-bark/25 ring-4 ring-cream overflow-hidden"
          >
            <ImageWithFallback
              src={IMAGES.heroAccent}
              alt="Close-up of oyster mushroom cluster"
              className="w-full h-full"
            />
          </motion.div>

          {/* floating glass badge card */}
          <motion.div
            style={{ x: layer2X, y: layer2Y }}
            animate={{ y: [0, 12, 0] }}
            transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
            className="absolute top-2 -right-2 sm:top-6 sm:right-0 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg"
          >
            <span className="grid place-items-center w-9 h-9 rounded-full bg-primary/15 text-primary shrink-0">
              <GiFruitBowl size={18} />
            </span>
            <div className="text-left leading-tight">
              <p className="font-heading font-semibold text-bark text-sm">Fresh Today</p>
              <p className="text-bark/55 text-[11px]">Harvested this morning</p>
            </div>
          </motion.div>

          {/* decorative floating spore ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute -inset-6 hidden sm:block"
          >
            <div className="absolute top-0 left-1/2 w-2.5 h-2.5 rounded-full bg-secondary/70" />
            <div className="absolute bottom-4 right-2 w-2 h-2 rounded-full bg-accent/70" />
            <div className="absolute left-0 top-1/3 w-1.5 h-1.5 rounded-full bg-primary/60" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="relative max-w-5xl mx-auto mt-8 lg:mt-4 px-6"
      >
        <div className="glass rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-6">
          {STATS.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}