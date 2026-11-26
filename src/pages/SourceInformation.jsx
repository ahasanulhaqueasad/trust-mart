import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Leaf,
  MapPin,
  SearchCheck,
  Info,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";

const SourceInformation = () => {
  const sourcePoints = [
    {
      icon: MapPin,
      title: "পণ্যের উৎস",
      description:
        "পণ্য কোথা থেকে সংগ্রহ করা হয়েছে, সে সম্পর্কে প্রাসঙ্গিক তথ্য জানার সুযোগ।",
    },
    {
      icon: SearchCheck,
      title: "পণ্যের পরিচিতি",
      description:
        "পণ্যের বৈশিষ্ট্য, ব্যবহার ও অন্যান্য প্রয়োজনীয় তথ্য তুলে ধরার চেষ্টা।",
    },
    {
      icon: Info,
      title: "তথ্যের স্বচ্ছতা",
      description:
        "পণ্য সম্পর্কে প্রাপ্ত তথ্য গ্রাহকদের কাছে পরিষ্কারভাবে উপস্থাপন করা।",
    },
    {
      icon: ShieldCheck,
      title: "সচেতন কেনাকাটা",
      description:
        "পণ্য সম্পর্কে জেনে ও বুঝে কেনাকাটার সিদ্ধান্ত নেওয়ার সুযোগ তৈরি করা।",
    },
  ];

  return (
    <main>
      {/* Page Banner */}
      <section className="relative bg-[#173f2b] py-20 md:py-28 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#efc66f]/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Leaf size={42} className="text-[#efc66f] mx-auto mb-5" />

            <h1 className="text-4xl md:text-5xl font-bold text-white">
              পণ্যের উৎস ও পরিচিতি
            </h1>

            <p className="text-gray-200 mt-5 max-w-2xl mx-auto leading-8">
              পণ্যের উৎস ও প্রয়োজনীয় তথ্য সম্পর্কে জানুন। সচেতনভাবে কেনাকাটার
              সিদ্ধান্ত নিন।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/images/honey.png"
                alt="ট্রাস্ট মার্টের পণ্য"
                loading="lazy"
                className="w-full h-[350px] md:h-[460px] object-cover rounded-3xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionTitle
                subtitle="পণ্যের তথ্য"
                title="কেন পণ্যের উৎস জানা গুরুত্বপূর্ণ?"
                description="পণ্য কেনার আগে তার উৎস, পরিচিতি ও বৈশিষ্ট্য সম্পর্কে জানা একটি সচেতন সিদ্ধান্ত গ্রহণে সহায়তা করে।"
                center={false}
              />

              <p className="text-gray-600 leading-8">
                আমরা মনে করি, গ্রাহকের কাছে পণ্যের সঠিক ও প্রাসঙ্গিক তথ্য তুলে
                ধরা গুরুত্বপূর্ণ। তাই পণ্য সম্পর্কে যে তথ্য পাওয়া যায়, তা
                পরিষ্কারভাবে জানাতে আমরা গুরুত্ব দিই।
              </p>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 mt-8 bg-[#173f2b] hover:bg-[#1d5638] text-white px-7 py-3.5 rounded-full font-semibold transition-colors"
              >
                পণ্য দেখুন
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Source Information Features */}
      <section className="py-20 lg:py-28 bg-[#f5f6ef]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            subtitle="আমাদের দৃষ্টিভঙ্গি"
            title="পণ্যের তথ্য উপস্থাপনায় আমাদের গুরুত্ব"
            description="পণ্যের উৎস ও পরিচিতি সম্পর্কে গ্রাহকদের প্রয়োজনীয় তথ্য জানাতে আমরা যেসব বিষয়কে গুরুত্ব দিই।"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sourcePoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -7 }}
                  className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#173f2b] flex items-center justify-center mb-6">
                    <Icon size={27} className="text-[#efc66f]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#173f2b] mb-3">
                    {point.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-7">
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto bg-[#173f2b] rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              পণ্যের উৎস সম্পর্কে জানতে চান?
            </h2>

            <p className="text-gray-200 leading-8 mt-5">
              নির্দিষ্ট কোনো পণ্যের উৎস বা পরিচিতি সম্পর্কে জানতে আমাদের সঙ্গে
              যোগাযোগ করুন।
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-[#efc66f] hover:bg-white text-[#173f2b] px-8 py-4 rounded-full font-bold transition-colors"
            >
              যোগাযোগ করুন
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SourceInformation;
