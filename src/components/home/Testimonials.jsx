import { motion } from "motion/react";
import { MessageCircle, HeartHandshake, Star } from "lucide-react";

const Testimonials = () => {
  const feedbackMessage = "ট্রাস্ট মার্ট সম্পর্কে আমার মতামত জানাতে চাই।";

  const feedbackUrl = `https://wa.me/8801838041204?text=${encodeURIComponent(
    feedbackMessage,
  )}`;

  return (
    <section className="py-20 lg:py-28 bg-white" aria-label="গ্রাহকের মতামত">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden bg-[#173f2b] rounded-[32px] px-6 py-14 md:px-12 md:py-20 text-center"
        >
          {/* Decorative Elements */}
          <div
            className="absolute -top-20 -left-20 w-64 h-64 bg-[#efc66f]/10 rounded-full blur-3xl"
            aria-hidden="true"
          />

          <div
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Icon */}
            <div className="flex justify-center mb-7">
              <div
                className="w-20 h-20 rounded-2xl bg-[#efc66f] flex items-center justify-center"
                aria-hidden="true"
              >
                <HeartHandshake size={38} className="text-[#173f2b]" />
              </div>
            </div>

            {/* Heading */}
            <span className="inline-block text-sm font-semibold text-[#efc66f] bg-white/10 px-5 py-2 rounded-full mb-5">
              আপনার মতামত আমাদের কাছে গুরুত্বপূর্ণ
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              আপনার অভিজ্ঞতা
              <span className="block text-[#efc66f] mt-2">
                আমাদের অনুপ্রেরণা
              </span>
            </h2>

            <p className="text-gray-200 text-base md:text-lg leading-8 mt-6 max-w-2xl mx-auto">
              ট্রাস্ট মার্ট থেকে কেনাকাটার পর আপনার অভিজ্ঞতা ও মতামত আমাদের
              সঙ্গে শেয়ার করুন। আপনার পরামর্শ আমাদের সেবার মান উন্নত করতে
              সাহায্য করবে।
            </p>

            {/* Decorative Stars */}
            <div
              className="flex justify-center gap-2 mt-8 mb-8"
              aria-hidden="true"
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <Star
                  key={item}
                  size={23}
                  className="text-[#efc66f]"
                  fill="#efc66f"
                />
              ))}
            </div>

            {/* WhatsApp Feedback */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href={feedbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp-এ Trust Mart-কে আপনার মতামত জানান (নতুন ট্যাবে খুলবে)"
              className="inline-flex items-center justify-center gap-3 bg-[#efc66f] hover:bg-white text-[#173f2b] px-8 py-4 rounded-full font-bold transition-colors duration-300"
            >
              <MessageCircle size={21} aria-hidden="true" />
              আপনার মতামত জানান
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
