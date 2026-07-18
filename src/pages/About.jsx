import { GiCheckMark } from "react-icons/gi";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import SectionReveal from "../components/ui/SectionReveal";
import GlassCard from "../components/ui/GlassCard";
import { CORE_VALUES, JOURNEY } from "../lib/constants";
import ImageWithFallback from "../components/ui/ImageWithFallback";
import { IMAGES } from "../lib/images";

export default function About() {
  return (
    <>
      <SEO title="About" description="The story, mission and values behind Mayuri Mushrooms — Chennai's chemical-free oyster mushroom farm and training institute." />
      <PageHero eyebrow="Our Story" title="About Mayuri Mushrooms" />

      <section className="px-6 lg:px-8 pb-6">
        <SectionReveal className="max-w-3xl mx-auto text-center">
          <p className="text-bark/70 text-lg leading-relaxed">
            Mayuri Mushrooms is dedicated to producing premium-quality oyster mushrooms using
            sustainable and chemical-free cultivation practices. We focus on delivering healthy,
            affordable mushrooms while educating aspiring entrepreneurs through practical mushroom
            cultivation workshops.
          </p>
        </SectionReveal>
      </section>
      <section className="px-6 lg:px-8 pb-4">
        <SectionReveal type="scale" className="max-w-4xl mx-auto">
          <ImageWithFallback
            src={IMAGES.farming}
            alt="Oyster mushrooms grown at Mayuri Mushrooms"
            className="w-full h-64 sm:h-80 rounded-[2rem] shadow-xl shadow-bark/10 ring-1 ring-white/60"
          />
        </SectionReveal>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <SectionReveal type="left">
            <GlassCard className="h-full">
              <span className="text-primary font-heading font-semibold text-xs tracking-widest uppercase">Mission</span>
              <p className="mt-3 font-display text-xl text-bark leading-snug">
                Deliver healthy mushrooms while promoting sustainable farming.
              </p>
            </GlassCard>
          </SectionReveal>
          <SectionReveal type="right">
            <GlassCard className="h-full">
              <span className="text-primary font-heading font-semibold text-xs tracking-widest uppercase">Vision</span>
              <p className="mt-3 font-display text-xl text-bark leading-snug">
                Become a trusted mushroom cultivation brand and training institute.
              </p>
            </GlassCard>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <span className="text-primary font-heading font-semibold text-sm tracking-widest uppercase">What Drives Us</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 text-bark">Core Values</h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {CORE_VALUES.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 0.08} type="up">
                <div className="glass rounded-2xl p-5 h-full">
                  <div className="w-9 h-9 rounded-full bg-secondary/30 grid place-items-center mb-3">
                    <GiCheckMark className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-bark text-sm mb-1.5">{v.title}</h3>
                  <p className="text-bark/60 text-xs leading-relaxed">{v.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <span className="text-primary font-heading font-semibold text-sm tracking-widest uppercase">Company Journey</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 text-bark">How We Grew</h2>
          </SectionReveal>

          <div className="relative pl-8 border-l-2 border-secondary/40 space-y-12">
            {JOURNEY.map((j, i) => (
              <SectionReveal key={j.year} delay={i * 0.12} type="left" className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-cream" />
                <span className="text-accent font-heading font-bold text-xs tracking-widest uppercase">{j.year}</span>
                <h3 className="font-display font-bold text-xl text-bark mt-1 mb-2">{j.title}</h3>
                <p className="text-bark/65 text-sm leading-relaxed max-w-lg">{j.description}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
