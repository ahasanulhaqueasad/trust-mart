import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, ArrowRight, Headset } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#f5f6ef]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden bg-white rounded-[32px] shadow-xl border border-gray-100"
        >
          {/* Decorative Background */}
          <div className="absolute -top-24 -right-20 w-72 h-72 bg-[#efc66f]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-[#1d5638]/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-7 md:p-12 lg:p-16">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d5638] bg-[#1d5638]/10 px-4 py-2 rounded-full mb-6">
                <Headset size={17} />
                আমরা আছি আপনার পাশে
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#173f2b] leading-tight">
                আপনার প্রয়োজনের
                <span className="block text-[#b58a35] mt-2">
                  সমাধানে যোগাযোগ করুন
                </span>
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-8 mt-6">
                পণ্য সম্পর্কে জানতে, মূল্য জিজ্ঞাসা করতে অথবা অর্ডার দিতে আমাদের
                সঙ্গে সরাসরি যোগাযোগ করুন। আপনার প্রশ্নের উত্তর দিতে আমরা
                আগ্রহী।
              </p>

              <div className="flex flex-wrap gap-4 mt-9">
                <a
                  href="https://wa.me/8801838041204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#173f2b] hover:bg-[#1d5638] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
                >
                  <MessageCircle size={19} />
                  WhatsApp-এ যোগাযোগ
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-[#173f2b] text-[#173f2b] hover:bg-[#173f2b] hover:text-white px-7 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  বিস্তারিত জানুন
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#173f2b] rounded-3xl p-8 md:p-10 text-white"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#efc66f] flex items-center justify-center mb-7">
                <Phone size={30} className="text-[#173f2b]" />
              </div>

              <p className="text-[#efc66f] font-semibold mb-3">
                সরাসরি যোগাযোগ
              </p>

              <h3 className="text-2xl md:text-3xl font-bold mb-5">
                ট্রাস্ট মার্ট
              </h3>

              <p className="text-gray-300 leading-7 mb-7">
                আপনার প্রয়োজনীয় পণ্য সম্পর্কে বিস্তারিত জানতে আমাদের সঙ্গে কথা
                বলুন।
              </p>

              <a
                href="tel:+8801838041204"
                className="flex items-center gap-3 text-xl md:text-2xl font-bold text-[#efc66f] hover:text-white transition-colors"
              >
                <Phone size={22} />
                01838041204
              </a>

              <div className="border-t border-white/20 mt-8 pt-6">
                <p className="text-gray-300 text-sm">
                  বিশুদ্ধতার বিশ্বস্ত ঠিকানা
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
