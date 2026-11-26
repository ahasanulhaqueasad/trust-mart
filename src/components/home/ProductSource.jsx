import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Leaf, MapPin, SearchCheck, ArrowRight } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const ProductSource = () => {
  const sourceFeatures = [
    {
      icon: MapPin,
      title: "উৎস সম্পর্কে তথ্য",
      description:
        "পণ্য কোথা থেকে সংগ্রহ করা হয়েছে, সে সম্পর্কে প্রাসঙ্গিক তথ্য জানার সুযোগ।",
    },
    {
      icon: SearchCheck,
      title: "তথ্যের স্বচ্ছতা",
      description:
        "পণ্যের পরিচিতি ও প্রাপ্ত তথ্য গ্রাহকদের কাছে পরিষ্কারভাবে তুলে ধরার চেষ্টা।",
    },
    {
      icon: Leaf,
      title: "সচেতন নির্বাচন",
      description:
        "পণ্য কেনার আগে তার উৎস ও বৈশিষ্ট্য সম্পর্কে জেনে সিদ্ধান্ত নেওয়ার সুযোগ।",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f5f6ef]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              subtitle="পণ্যের উৎস"
              title="পণ্যের উৎস সম্পর্কে জানুন"
              description="কেনাকাটার ক্ষেত্রে পণ্যের উৎস ও পরিচিতি সম্পর্কে জানা গুরুত্বপূর্ণ। তাই আমরা প্রাসঙ্গিক তথ্য গ্রাহকদের সামনে তুলে ধরতে গুরুত্ব দিই।"
              center={false}
            />

            <div className="space-y-6 mt-8">
              {sourceFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[#173f2b] flex items-center justify-center">
                      <Icon size={23} className="text-[#efc66f]" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#173f2b] mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-7 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/source-information"
              className="inline-flex items-center gap-2 mt-9 bg-[#173f2b] hover:bg-[#1d5638] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300"
            >
              বিস্তারিত জানুন
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-5 -right-5 w-32 h-32 bg-[#efc66f]/30 rounded-full blur-2xl" />

            <img
              src="/images/honey.png"
              alt="পণ্যের উৎস ও পরিচিতি"
              loading="lazy"
              className="relative w-full h-[350px] md:h-[480px] object-cover rounded-3xl shadow-xl"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
              <p className="text-[#173f2b] font-bold text-lg">
                সঠিক তথ্য, সচেতন কেনাকাটা
              </p>

              <p className="text-gray-600 text-sm mt-1">
                পণ্য সম্পর্কে জেনে বুঝে কেনাকাটা করুন।
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSource;
