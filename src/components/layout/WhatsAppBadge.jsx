import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { BRAND } from "../../lib/constants";

export default function WhatsAppBadge() {
  const phoneDigits = BRAND.phone.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/91${phoneDigits}`;

  return (
    <motion.a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 grid place-items-center w-14 h-14 rounded-full shadow-lg shadow-bark/20"
      style={{ backgroundColor: "#25D366" }}
    >
      <span className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: "#25D366", opacity: 0.4 }} />
      <FaWhatsapp size={26} className="relative text-white" />
    </motion.a>
  );
}