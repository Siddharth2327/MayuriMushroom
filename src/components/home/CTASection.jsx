import SectionReveal from "../ui/SectionReveal";
import AnimatedButton from "../ui/AnimatedButton";
import OrganicBlob from "../ui/OrganicBlob";

export default function CTASection() {
  return (
    <section className="relative py-20 px-6 lg:px-8">
      <div className="relative max-w-5xl mx-auto rounded-[2.5rem] bg-primary overflow-hidden px-8 py-16 text-center">
        <OrganicBlob className="w-96 h-96 -top-20 -left-20" color="#FAF8F3" opacity={0.08} />
        <OrganicBlob className="w-80 h-80 -bottom-24 -right-16" color="#E9C46A" opacity={0.15} />
        <SectionReveal type="scale">
          <h2 className="relative font-display font-bold text-3xl sm:text-4xl text-cream mb-6 max-w-2xl mx-auto">
            Ready to Enjoy Fresh Oyster Mushrooms?
          </h2>
          <AnimatedButton to="/pre-order" variant="accent" className="relative">
            Order Now
          </AnimatedButton>
        </SectionReveal>
      </div>
    </section>
  );
}
