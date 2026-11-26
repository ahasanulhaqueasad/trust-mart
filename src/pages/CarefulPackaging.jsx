import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Box,
  ArrowRight,
} from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";

const CarefulPackaging = () => {
  const packagingPoints = [
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
        "পণ্য পরিবহন ও হস্তান্তরের সময় সুরক্ষার বিষয়টি গুরুত্ব দিয়ে বিবেচনা করি।",
    },
    {
      icon: Sparkles,
      title: "পরিচ্ছন্নতা",
      description:
        "প্যাকেজিংয়ের ক্ষেত্রে পরিচ্ছন্ন ও পরিপাটি উপস্থাপনার প্রতি গুরুত্ব দিই।",
    },
    {
      icon: Box,
      title: "পরিপাটি উপস্থাপনা",
      description:
        "পণ্য গুছিয়ে প্যাকেজিং করে গ্রাহকের কাছে সুন্দরভাবে উপস্থাপনের চেষ্টা করি।",
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
            <PackageCheck size={42} className="text-[#efc66f] mx-auto mb-5" />

            <h1 className="text-4xl md:text-5xl font-bold text-white">
              যত্নশীল প্যাকেজিং
            </h1>

            <p className="text-gray-200 mt-5 max-w-2xl mx-auto leading-8">
              পণ্য প্যাকেজিংয়ের ক্ষেত্রে পরিচ্ছন্নতা, সতর্কতা ও যত্নশীলতার
              গুরুত্ব সম্পর্কে জানুন।
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
                src="/images/packaging.png"
                alt="ট্রাস্ট মার্টের পণ্য প্যাকেজিং"
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
                subtitle="প্যাকেজিংয়ের যত্ন"
                title="পণ্য প্যাকেজিংয়েও আমাদের গুরুত্ব"
                description="পণ্য গ্রাহকের কাছে পৌঁছে দেওয়ার ক্ষেত্রে প্যাকেজিং একটি গুরুত্বপূর্ণ বিষয়। তাই পণ্য গুছিয়ে ও যত্নসহকারে প্যাকেজিং করার চেষ্টা করি।"
                center={false}
              />

              <p className="text-gray-600 leading-8">
                একটি সুন্দর কেনাকাটার অভিজ্ঞতার অংশ হলো পণ্যের পরিপাটি
                উপস্থাপনা। আমরা প্যাকেজিংয়ের ক্ষেত্রে পরিচ্ছন্নতা ও সতর্কতা বজায়
                রাখার চেষ্টা করি।
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 bg-[#173f2b] hover:bg-[#1d5638] text-white px-7 py-3.5 rounded-full font-semibold transition-colors"
              >
                যোগাযোগ করুন
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packaging Features */}
      <section className="py-20 lg:py-28 bg-[#f5f6ef]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            subtitle="আমাদের পদ্ধতি"
            title="প্যাকেজিংয়ের ক্ষেত্রে চারটি গুরুত্বপূর্ণ বিষয়"
            description="পণ্য প্যাকেজিংয়ের সময় যেসব বিষয়কে আমরা গুরুত্ব দেওয়ার চেষ্টা করি।"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packagingPoints.map((point, index) => {
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
          <div className="max-w-3xl mx-auto text-center bg-[#173f2b] rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              প্যাকেজিং সম্পর্কে জানতে চান?
            </h2>

            <p className="text-gray-200 leading-8 mt-5">
              আমাদের পণ্য প্যাকেজিং ও অর্ডার সম্পর্কে বিস্তারিত জানতে সরাসরি
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

export default CarefulPackaging;
