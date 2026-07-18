import { HiCheckCircle } from "react-icons/hi";
import SectionReveal from "../ui/SectionReveal";
import AnimatedButton from "../ui/AnimatedButton";
import ImageWithFallback from "../ui/ImageWithFallback";
import { PRODUCT } from "../../lib/constants";
import { IMAGES } from "../../lib/images";

export default function FeaturedProducts() {
  return (
    <section className="relative py-24 px-6 lg:px-8 bg-white/40">
      <div className="max-w-6xl mx-auto">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary font-heading font-semibold text-sm tracking-widest uppercase">Our Harvest</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 text-bark">Featured Products</h2>
        </SectionReveal>

        <SectionReveal type="scale">
          <div className="grid md:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden glass">
            <div className="relative h-72 md:h-full overflow-hidden">
              <ImageWithFallback
                src={IMAGES.product}
                alt={PRODUCT.name}
                className="w-full h-full"
                imgClassName="transition-transform duration-700 hover:scale-110"
              />
            </div>

            <div className="p-8 md:p-10">
              <h3 className="font-display font-bold text-2xl text-bark mb-3">{PRODUCT.name}</h3>
              <div className="flex flex-wrap gap-2 mb-5">
                {PRODUCT.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1.5"
                  >
                    <HiCheckCircle /> {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-display font-bold text-4xl text-bark">{PRODUCT.price}</span>
                <span className="text-bark/60">/ {PRODUCT.unit}</span>
              </div>
              <p className="text-bark/65 text-sm leading-relaxed mb-8">
                Hand-picked at peak freshness and hygienically packed within hours of harvest —
                grown without a trace of chemicals.
              </p>
              <AnimatedButton to="/pre-order" variant="primary">
                Pre Order
              </AnimatedButton>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}