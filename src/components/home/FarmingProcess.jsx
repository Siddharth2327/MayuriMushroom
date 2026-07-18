import { motion } from "framer-motion";
import { GiMushroomsCluster, GiWateringCan, GiScythe, GiCardboardBox, GiTruck } from "react-icons/gi";
import SectionReveal from "../ui/SectionReveal";
import { PROCESS_STEPS } from "../../lib/constants";

const icons = [GiMushroomsCluster, GiWateringCan, GiScythe, GiCardboardBox, GiTruck];

export default function FarmingProcess() {
  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-heading font-semibold text-sm tracking-widest uppercase">
            From Spore to Doorstep
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 text-bark">Our Farming Process</h2>
        </SectionReveal>

        <div className="relative">
          <svg
            className="hidden lg:block absolute top-9 left-0 w-full h-2"
            viewBox="0 0 1000 10"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,5 L1000,5"
              stroke="var(--color-secondary)"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = icons[i];
              return (
                <SectionReveal key={step.step} delay={i * 0.15} type="scale" className="text-center">
                  <div className="relative mx-auto w-20 h-20 rounded-full bg-primary text-cream grid place-items-center shadow-lg shadow-primary/30 mb-5">
                    <Icon size={30} />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-bark text-xs font-bold grid place-items-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-bark mb-1">{step.step}</h3>
                  <p className="text-bark/60 text-xs leading-relaxed px-2">{step.description}</p>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
