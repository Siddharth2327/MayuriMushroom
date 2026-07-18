import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { HiOutlineTruck, HiCheckCircle } from "react-icons/hi";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import SectionReveal from "../components/ui/SectionReveal";
import FloatingField from "../components/ui/FloatingField";
import AnimatedButton from "../components/ui/AnimatedButton";
import { PRODUCT, DELIVERY_PARTNERS } from "../lib/constants";

export default function PreOrder() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    // Wire up EmailJS / Formspree endpoint here.
    await new Promise((r) => setTimeout(r, 900));
    console.log("Pre-order submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <SEO title="Pre-Order" description="Pre-order fresh, chemical-free oyster mushrooms from Mayuri Mushrooms in Chennai. ₹75 per 200g pack." />
      <PageHero eyebrow="Fresh Harvest" title="Fresh Oyster Mushrooms" subtitle="Premium quality oyster mushrooms — now ready for harvest!" />

      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
          <SectionReveal type="left" className="lg:col-span-2">
            <div className="glass rounded-3xl p-8 h-full flex flex-col">
              <h3 className="font-display font-bold text-2xl text-bark mb-1">{PRODUCT.name}</h3>
              <div className="flex items-baseline gap-2 mt-3 mb-6">
                <span className="font-display font-bold text-4xl text-primary">{PRODUCT.price}</span>
                <span className="text-bark/60">/ {PRODUCT.unit}</span>
              </div>
              <ul className="space-y-2.5 mb-8">
                {PRODUCT.tags.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-bark/70">
                    <HiCheckCircle className="text-primary shrink-0" /> {t}
                  </li>
                ))}
              </ul>
              <div className="mt-auto rounded-2xl bg-primary/10 p-4 flex gap-3">
                <HiOutlineTruck className="text-primary shrink-0 mt-0.5" size={20} />
                <p className="text-xs text-bark/70 leading-relaxed">
                  Delivery charges extra, based on {DELIVERY_PARTNERS.slice(0, 3).join(", ")} or a
                  private delivery partner.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal type="right" delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-3xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <FloatingField
                  label="Name"
                  name="name"
                  register={register}
                  error={errors.name}
                  {...register("name", { required: "Please enter your name" })}
                />
                <FloatingField
                  label="Phone"
                  name="phone"
                  type="tel"
                  register={register}
                  error={errors.phone}
                  {...register("phone", { required: "Please enter your phone number" })}
                />
              </div>

              <FloatingField
                label="Email"
                name="email"
                type="email"
                register={register}
                error={errors.email}
                {...register("email", { required: "Please enter your email" })}
              />

              <FloatingField
                label="Address / Location"
                name="address"
                textarea
                register={register}
                error={errors.address}
                {...register("address", { required: "Please enter your address" })}
              />

              <FloatingField label="Landmark" name="landmark" register={register} />

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                  <select
                    {...register("unit", { required: true })}
                    defaultValue=""
                    className="w-full rounded-2xl bg-white/60 border border-white/70 px-4 py-3.5 text-sm text-bark outline-none focus:ring-2 focus:ring-primary/50 appearance-none"
                  >
                    <option value="" disabled>Ordering Units</option>
                    <option value="kg">Kilograms</option>
                    <option value="200g">200g Packs</option>
                  </select>
                </div>
                <FloatingField
                  label="Quantity"
                  name="quantity"
                  type="number"
                  register={register}
                  error={errors.quantity}
                  {...register("quantity", { required: "Enter quantity", min: 1 })}
                />
              </div>

              <FloatingField
                label="Required Date"
                name="requiredDate"
                type="date"
                register={register}
              />

              <motion.div whileTap={{ scale: 0.98 }}>
                <AnimatedButton type="submit" variant="primary" className="w-full">
                  {isSubmitting ? "Submitting..." : "Submit Pre-Order"}
                </AnimatedButton>
              </motion.div>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-primary text-sm text-center font-medium"
                >
                  Thank you! Your pre-order has been received — we'll confirm shortly.
                </motion.p>
              )}
            </form>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
