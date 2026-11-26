import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const About = () => {
  const commitments = [
    "গ্রাহকের প্রয়োজনকে গুরুত্ব দেওয়া",
    "পণ্যের সঠিক তথ্য তুলে ধরা",
    "প্যাকেজিংয়ে যত্নশীল থাকা",
    "গ্রাহকের সঙ্গে সরাসরি যোগাযোগ",
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-5 -left-5 w-32 h-32 bg-[#efc66f]/20 rounded-full blur-2xl" />

            <img
              src="/images/packaging.png"
              alt="ট্রাস্ট মার্টের পণ্য প্যাকেজিং"
              className="relative w-full h-[350px] md:h-[470px] object-cover rounded-3xl shadow-xl"
              loading="lazy"
            />

            <div className="absolute -bottom-6 -right-3 md:-right-6 bg-[#173f2b] text-white p-5 md:p-7 rounded-2xl shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold text-[#efc66f]">
                ট্রাস্ট মার্ট
              </h3>
              <p className="text-sm text-gray-200 mt-1">
                বিশুদ্ধতার বিশ্বস্ত ঠিকানা
              </p>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              subtitle="আমাদের সম্পর্কে"
              title="কেন ট্রাস্ট মার্ট?"
              description="ট্রাস্ট মার্ট একটি গ্রাহককেন্দ্রিক অনলাইন কেনাকাটার উদ্যোগ। আমাদের লক্ষ্য হলো প্রয়োজনীয় পণ্য কেনাকাটাকে সহজ, স্বাচ্ছন্দ্যময় ও তথ্যনির্ভর করে তোলা।"
              center={false}
            />

            <p className="text-gray-600 leading-8 mb-7">
              আমরা মনে করি, কেনাকাটার ক্ষেত্রে পণ্যের তথ্য, গ্রাহকের সঙ্গে
              যোগাযোগ এবং প্যাকেজিংয়ের যত্ন অত্যন্ত গুরুত্বপূর্ণ। তাই প্রতিটি
              ক্ষেত্রে দায়িত্বশীলভাবে কাজ করার চেষ্টা করি।
            </p>

            {/* Commitments */}
            <div className="space-y-4 mb-9">
              {commitments.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={21} className="text-[#1d5638] shrink-0" />

                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#173f2b] hover:bg-[#1d5638] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300"
            >
              আরও জানুন
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
