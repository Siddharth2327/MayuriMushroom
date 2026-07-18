import { GiSprout, GiHeartPlus, GiChefToque, GiBriefcase } from "react-icons/gi";
import { motion } from "framer-motion";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import SectionReveal from "../components/ui/SectionReveal";
import { BLOG_CATEGORIES } from "../lib/constants";

const icons = { sprout: GiSprout, heart: GiHeartPlus, chef: GiChefToque, briefcase: GiBriefcase };

export default function Blog() {
  return (
    <>
      <SEO title="Blog" description="Cultivation tips, health benefits, recipes and business ideas from Mayuri Mushrooms — coming soon." />
      <PageHero eyebrow="The Mayuri Journal" title="Grow With Knowledge" />

      <section className="px-6 lg:px-8 pb-10">
        <SectionReveal type="scale" className="max-w-lg mx-auto text-center">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto w-40 h-40 rounded-full glass grid place-items-center mb-6"
          >
            <GiSprout size={64} className="text-primary" />
          </motion.div>
          <h2 className="font-display font-bold text-2xl text-bark mb-2">Blogs Coming Soon</h2>
          <p className="text-bark/60 text-sm">
            We're writing up everything we've learned on the farm. Check back soon.
          </p>
        </SectionReveal>
      </section>

      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_CATEGORIES.map((c, i) => {
            const Icon = icons[c.icon];
            return (
              <SectionReveal key={c.title} delay={i * 0.1} type="up">
                <div className="glass rounded-2xl p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-secondary/25 grid place-items-center mx-auto mb-4">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-sm text-bark">{c.title}</h3>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
