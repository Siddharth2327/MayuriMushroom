import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaGoogle } from "react-icons/fa";
import SEO from "../components/layout/SEO";
import PageHero from "../components/ui/PageHero";
import SectionReveal from "../components/ui/SectionReveal";
import FloatingField from "../components/ui/FloatingField";
import AnimatedButton from "../components/ui/AnimatedButton";
import { BRAND, SOCIAL_LINKS } from "../lib/constants";

const iconMap = { whatsapp: FaWhatsapp, instagram: FaInstagram, facebook: FaFacebookF, google: FaGoogle };

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 900));
    console.log("Contact form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <SEO title="Contact" description="Get in touch with Mayuri Mushrooms in Pallikaranai, Chennai — call, email, or send us a message." />
      <PageHero eyebrow="Get In Touch" title="Let's Grow Together" />

      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
          <SectionReveal type="left" className="lg:col-span-2 space-y-6">
            <div className="glass rounded-3xl p-8">
              <h3 className="font-heading font-semibold text-lg text-bark mb-5">{BRAND.name}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-bark/70">
                  <HiOutlineLocationMarker className="text-primary shrink-0 mt-0.5" size={20} />
                  <span>
                    {BRAND.address.line1}<br />
                    {BRAND.address.line2}<br />
                    {BRAND.address.line3}<br />
                    {BRAND.address.city}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm text-bark/70">
                  <HiOutlinePhone className="text-primary shrink-0" size={20} />
                  {BRAND.phone}
                </li>
                <li className="flex items-center gap-3 text-sm text-bark/70">
                  <HiOutlineMail className="text-primary shrink-0" size={20} />
                  {BRAND.email}
                </li>
              </ul>
              <div className="flex gap-3 mt-6">
                {SOCIAL_LINKS.map((s) => {
                  const Icon = iconMap[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="grid place-items-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-cream transition-colors duration-300"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden glass h-64">
              <iframe
                title="Mayuri Mushrooms Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.589335465038!2d80.21406207515638!3d12.934095087377841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d006a763d1b%3A0x8cc279d66cc5796b!2sMayuri%20Mushrooms!5e0!3m2!1sen!2sin!4v1784443153571!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
                label="Message"
                name="message"
                textarea
                register={register}
                error={errors.message}
                {...register("message", { required: "Please enter a message" })}
              />
              <motion.div whileTap={{ scale: 0.98 }}>
                <AnimatedButton type="submit" variant="primary" className="w-full">
                  {isSubmitting ? "Sending..." : "Submit"}
                </AnimatedButton>
              </motion.div>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-primary text-sm text-center font-medium"
                >
                  Thanks for reaching out — we'll get back to you soon.
                </motion.p>
              )}
            </form>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
