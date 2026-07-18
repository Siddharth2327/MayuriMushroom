import { HiOutlineCalendar, HiOutlineUserGroup, HiOutlineGift } from "react-icons/hi";
import SectionReveal from "../ui/SectionReveal";
import GlassCard from "../ui/GlassCard";
import AnimatedButton from "../ui/AnimatedButton";
import { WORKSHOP } from "../../lib/constants";

export default function TrainingHighlight() {
  return (
    <section className="relative py-24 px-6 lg:px-8 bg-white/40">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <SectionReveal type="left">
          <span className="text-primary font-heading font-semibold text-sm tracking-widest uppercase">
            Learn to Grow
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 mb-5 text-bark">
            {WORKSHOP.title}
          </h2>
          <p className="text-bark/65 leading-relaxed mb-8 max-w-md">
            {WORKSHOP.subtitle} — a hands-on, two-day workshop covering biology, cultivation and the
            business of mushroom farming.
          </p>
          <AnimatedButton to="/training" variant="primary">
            View Training
          </AnimatedButton>
        </SectionReveal>

        <SectionReveal type="right" delay={0.15}>
          <GlassCard dark className="relative">
            <div className="absolute -top-4 -right-4 bg-accent text-bark font-heading font-bold text-sm rounded-full px-5 py-2 shadow-lg">
              {WORKSHOP.price} / {WORKSHOP.priceUnit}
            </div>
            <div className="space-y-5 mt-2">
              <div className="flex items-center gap-3">
                <HiOutlineCalendar className="text-secondary shrink-0" size={22} />
                <span className="text-sm text-cream/85">{WORKSHOP.dates}</span>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineUserGroup className="text-secondary shrink-0" size={22} />
                <span className="text-sm text-cream/85">{WORKSHOP.batchSize}</span>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineGift className="text-secondary shrink-0" size={22} />
                <span className="text-sm text-cream/85">{WORKSHOP.highlight}</span>
              </div>
            </div>
            <p className="text-cream/60 text-xs mt-6 pt-6 border-t border-cream/10">
              With {WORKSHOP.facilitators.join(" & ")} — {WORKSHOP.facilitatorRole}
            </p>
          </GlassCard>
        </SectionReveal>
      </div>
    </section>
  );
}
