import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import SectionReveal from "../ui/SectionReveal";
import GlassCard from "../ui/GlassCard";
import { TESTIMONIALS } from "../../lib/constants";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary font-heading font-semibold text-sm tracking-widest uppercase">
            Loved by Customers
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 text-bark">Testimonials</h2>
        </SectionReveal>

        <SectionReveal type="fade">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            centeredSlides
            rewind
            autoplay={{ delay: 4200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            className="!pb-14"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name}>
                <GlassCard className="h-full" hover={false}>
                  <FaQuoteLeft className="text-secondary mb-4" size={22} />
                  <p className="text-bark/75 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                  <div>
                    <p className="font-heading font-semibold text-bark text-sm">{t.name}</p>
                    <p className="text-bark/50 text-xs">{t.role}</p>
                  </div>
                </GlassCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </SectionReveal>
      </div>
    </section>
  );
}
