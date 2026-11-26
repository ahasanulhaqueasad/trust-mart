import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[650px] flex items-center overflow-hidden bg-[#f5f6ef]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5f6ef] via-[#f5f6ef]/95 to-[#f5f6ef]/60" />

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <ShieldCheck size={18} className="text-[#1d5638]" />
              <span className="text-sm font-semibold text-[#173f2b]">
                আপনার বিশ্বস্ত কেনাকাটার ঠিকানা
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#173f2b] leading-[1.3]">
              আপনার পছন্দের পণ্য,
              <span className="block text-[#b58a35] mt-2">
                বিশ্বস্ততার সাথে
              </span>
            </h1>

            <p className="text-gray-600 text-base md:text-lg leading-8 mt-6 max-w-xl">
              দৈনন্দিন প্রয়োজনীয় পণ্য কেনাকাটায় সহজ ও স্বাচ্ছন্দ্যময় অভিজ্ঞতার
              জন্য পাশে আছে ট্রাস্ট মার্ট। পণ্য সম্পর্কে জানতে ও অর্ডার করতে
              আমাদের সঙ্গে যোগাযোগ করুন।
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-9">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-[#173f2b] hover:bg-[#1d5638] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
              >
                পণ্য দেখুন
                <ArrowRight size={19} />
              </Link>

              <a
                href="https://wa.me/8801838041204"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#173f2b] text-[#173f2b] hover:bg-[#173f2b] hover:text-white px-7 py-4 rounded-full font-semibold transition-all duration-300"
              >
                <MessageCircle size={19} />
                যোগাযোগ করুন
              </a>
            </div>

            <p className="mt-7 text-sm font-medium text-[#1d5638]">
              Trust Mart — বিশুদ্ধতার বিশ্বস্ত ঠিকানা
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto">
              <div className="absolute -top-5 -right-5 w-32 h-32 bg-[#efc66f]/30 rounded-full blur-2xl" />

              <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-[#1d5638]/20 rounded-full blur-2xl" />

              <img
                src="/images/hero-bg.png"
                alt="ট্রাস্ট মার্টের পণ্য"
                className="relative z-10 w-full h-[350px] sm:h-[450px] object-cover rounded-[35px] shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
