import { motion } from "framer-motion";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
  HiOutlineGift,
  HiCheckCircle,
} from "react-icons/hi";
import SEO from "../components/layout/SEO";
import SectionReveal from "../components/ui/SectionReveal";
import GlassCard from "../components/ui/GlassCard";
import AnimatedButton from "../components/ui/AnimatedButton";
import OrganicBlob from "../components/ui/OrganicBlob";
import SporeField from "../components/ui/SporeField";
import { WORKSHOP } from "../lib/constants";
import ImageWithFallback from "../components/ui/ImageWithFallback";
import { IMAGES } from "../lib/images";

export default function Training() {
  return (
    <>
      <SEO
        title="Training — Easy Grow Workshop"
        description="Join the Easy Grow Workshop by Mayuri Mushrooms — a hands-on two-day course on oyster mushroom cultivation in Chennai."
      />

      <section className="relative pt-40 pb-20 px-6 lg:px-8 overflow-hidden text-center">
        <OrganicBlob className="w-96 h-96 -top-20 -left-24" color="#A7C957" opacity={0.16} />
        <OrganicBlob className="w-72 h-72 top-10 -right-16" color="#E9C46A" opacity={0.14} />
        <SporeField count={14} />
        <div className="relative max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full glass text-primary text-xs font-heading font-semibold tracking-widest uppercase mb-5"
          >
            Hands-on Workshop
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-bold text-4xl sm:text-5xl text-bark"
          >
            {WORKSHOP.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-5 text-bark/65 text-lg font-display italic"
          >
            {WORKSHOP.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 mt-8 bg-accent text-bark font-heading font-bold rounded-full px-6 py-3 shadow-lg"
          >
            {WORKSHOP.price} <span className="font-normal text-sm">/ {WORKSHOP.priceUnit}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-6 text-sm text-bark/60"
          >
            With <span className="font-semibold text-bark">{WORKSHOP.facilitators.join(" & ")}</span> — {WORKSHOP.facilitatorRole}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-9"
          >
            <AnimatedButton to="/contact" variant="primary">
              Register Now
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
      <section className="px-6 lg:px-8 pb-6">
        <SectionReveal type="scale" className="max-w-4xl mx-auto">
          <ImageWithFallback
            src={IMAGES.training}
            alt="Oyster mushroom cultivation, the subject of the Easy Grow Workshop"
            className="w-full h-64 sm:h-80 rounded-[2rem] shadow-xl shadow-bark/10 ring-1 ring-white/60"
          />
        </SectionReveal>
      </section>

      <section className="py-10 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: HiOutlineCalendar, label: "Dates", value: WORKSHOP.dates },
            { icon: HiOutlineClock, label: "Time", value: WORKSHOP.time },
            { icon: HiOutlineUserGroup, label: "Batch Size", value: WORKSHOP.batchSize },
            { icon: HiOutlineGift, label: "Includes", value: WORKSHOP.highlight },
          ].map((item, i) => (
            <SectionReveal key={item.label} delay={i * 0.1} type="up">
              <div className="glass rounded-2xl p-5 h-full text-center">
                <item.icon className="mx-auto text-primary mb-2" size={24} />
                <p className="text-[11px] uppercase tracking-widest text-bark/50 font-heading font-semibold">{item.label}</p>
                <p className="text-sm text-bark mt-1 leading-snug">{item.value}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-white/40">
        <div className="max-w-5xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <span className="text-primary font-heading font-semibold text-sm tracking-widest uppercase">Curriculum</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 text-bark">Workshop Schedule</h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {WORKSHOP.days.map((d, di) => (
              <SectionReveal key={d.day} type={di === 0 ? "left" : "right"} delay={di * 0.15}>
                <GlassCard className="h-full">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display font-bold text-xl text-bark">{d.day}</h3>
                    <span className="text-xs font-heading font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                      {d.time}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {d.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2.5 text-sm text-bark/70">
                        <HiCheckCircle className="text-secondary shrink-0 mt-0.5" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <SectionReveal type="scale" className="max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 grid place-items-center shrink-0">
              <HiOutlineLocationMarker className="text-primary" size={26} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg text-bark mb-1">Location</h3>
              <p className="text-bark/65 text-sm leading-relaxed">{WORKSHOP.location}</p>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal type="fade" delay={0.15} className="text-center mt-14">
          <h3 className="font-display font-bold text-2xl text-bark mb-5">Only 6 seats per batch — reserve yours.</h3>
          <AnimatedButton to="/contact" variant="primary">
            Register Now
          </AnimatedButton>
        </SectionReveal>
      </section>
    </>
  );
}
