import { GiPlantSeed, GiPriceTag, GiDeliveryDrone } from "react-icons/gi";
import SectionReveal from "../ui/SectionReveal";
import GlassCard from "../ui/GlassCard";
import TiltCard from "../ui/TiltCard";
import { WHY_CHOOSE_US } from "../../lib/constants";

const icons = { leaf: GiPlantSeed, tag: GiPriceTag, truck: GiDeliveryDrone };

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary font-heading font-semibold text-sm tracking-widest uppercase">Why Mayuri</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 text-bark">Why Choose Us</h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <SectionReveal key={item.title} delay={i * 0.12} type="up">
                <TiltCard className="h-full">
                  <GlassCard className="h-full">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 grid place-items-center mb-6 group-hover:bg-primary transition-colors">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-bark mb-2">{item.title}</h3>
                    <p className="text-bark/65 text-sm leading-relaxed">{item.description}</p>
                  </GlassCard>
                </TiltCard>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
