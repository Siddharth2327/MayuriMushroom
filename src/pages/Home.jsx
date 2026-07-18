import SEO from "../components/layout/SEO";
import Hero from "../components/home/Hero";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedProducts from "../components/home/FeaturedProducts";
import FarmingProcess from "../components/home/FarmingProcess";
import TrainingHighlight from "../components/home/TrainingHighlight";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Premium, chemical-free oyster mushrooms grown fresh in Chennai. Pre-order online, explore our farming process, and learn to grow your own."
      />
      <Hero />
      <WhyChooseUs />
      <FeaturedProducts />
      <FarmingProcess />
      <TrainingHighlight />
      <Testimonials />
      <CTASection />
    </>
  );
}
