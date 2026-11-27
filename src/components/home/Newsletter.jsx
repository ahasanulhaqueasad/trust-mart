import { motion } from "motion/react";
import { MessageCircle, BellRing, ArrowRight } from "lucide-react";

const Newsletter = () => {
  const whatsappMessage =
    "ট্রাস্ট মার্টের নতুন পণ্য ও আপডেট সম্পর্কে জানতে চাই।";

  const whatsappUrl = `https://wa.me/8801838041204?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#f5f6ef] rounded-3xl p-8 md:p-12 lg:p-14"
        >
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon */}
            <div
              className="w-16 h-16 mx-auto rounded-2xl bg-[#173f2b] flex items-center justify-center mb-6"
              aria-hidden="true"
            >
              <BellRing size={29} className="text-[#efc66f]" />
            </div>

            {/* Heading */}
            <span className="inline-block text-sm font-semibold text-[#1d5638] bg-[#1d5638]/10 px-4 py-2 rounded-full mb-5">
              নতুন আপডেট
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#173f2b] leading-tight">
              নতুন পণ্যের খবর
              <span className="block text-[#b58a35] mt-2">
                সবার আগে জানতে চান?
              </span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-8 mt-5">
              Trust Mart-এর নতুন পণ্য, পণ্যের তথ্য এবং অন্যান্য আপডেট জানতে
              আমাদের সঙ্গে যোগাযোগ রাখুন।
            </p>

            {/* WhatsApp Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="নতুন পণ্য ও আপডেট সম্পর্কে জানতে Trust Mart-কে WhatsApp বার্তা পাঠান"
              className="inline-flex items-center justify-center gap-3 mt-8 bg-[#173f2b] hover:bg-[#1d5638] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-colors duration-300"
            >
              <MessageCircle size={20} aria-hidden="true" />
              WhatsApp-এ যোগাযোগ করুন
              <ArrowRight size={18} aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
