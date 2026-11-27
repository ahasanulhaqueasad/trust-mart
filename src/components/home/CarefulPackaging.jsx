import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { PackageCheck, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const CarefulPackaging = () => {
  const packagingFeatures = [
    {
      icon: PackageCheck,
      title: "যত্নসহকারে প্যাকেজিং",
      description:
        "পণ্য প্যাকেজিংয়ের সময় যথাসম্ভব যত্ন ও সতর্কতা বজায় রাখার চেষ্টা করি।",
    },
    {
      icon: ShieldCheck,
      title: "পণ্যের সুরক্ষা",
      description:
        "পরিবহন ও হস্তান্তরের সময় পণ্যের সুরক্ষার বিষয়টি গুরুত্ব দিয়ে বিবেচনা করি।",
    },
    {
      icon: Sparkles,
      title: "পরিচ্ছন্নতা বজায় রাখা",
      description:
        "প্যাকেজিংয়ের ক্ষেত্রে পরিচ্ছন্ন ও পরিপাটি উপস্থাপনার প্রতি গুরুত্ব দিই।",
    },
  ];

  return (
    <section
      className="py-20 lg:py-28 bg-[#f5f6ef]"
      aria-labelledby="packaging-section-title"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              subtitle="যত্নশীল প্যাকেজিং"
              title="প্যাকেজিংয়েও যত্নের ছোঁয়া"
              description="পণ্য গ্রাহকের কাছে পৌঁছে দেওয়ার ক্ষেত্রে প্যাকেজিং একটি গুরুত্বপূর্ণ বিষয়। তাই পণ্য গুছিয়ে ও যত্নসহকারে প্যাকেজিং করার চেষ্টা করি।"
              center={false}
            />

            <ul className="space-y-6 mt-8">
              {packagingFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <li key={feature.title} className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 shrink-0 rounded-xl bg-[#173f2b] flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <Icon size={23} className="text-[#efc66f]" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#173f2b] mb-2">
                        {feature.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-7">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <Link
              to="/careful-packaging"
              className="inline-flex items-center gap-2 mt-9 bg-[#173f2b] hover:bg-[#1d5638] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300"
            >
              বিস্তারিত জানুন
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="absolute -top-5 -right-5 w-32 h-32 bg-[#efc66f]/30 rounded-full blur-2xl"
              aria-hidden="true"
            />

            <img
              src="/images/packaging.png"
              alt="Trust Mart-এর পণ্য যত্নসহকারে প্যাকেজিং করার দৃশ্য"
              title="Trust Mart-এর যত্নশীল প্যাকেজিং"
              width="600"
              height="480"
              loading="lazy"
              decoding="async"
              className="relative w-full h-[350px] md:h-[480px] object-cover rounded-3xl shadow-xl"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
              <h3 className="text-[#173f2b] font-bold text-lg">
                যত্নশীল প্যাকেজিং
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                পণ্যের উপস্থাপনায় পরিচ্ছন্নতা ও যত্ন।
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CarefulPackaging;
