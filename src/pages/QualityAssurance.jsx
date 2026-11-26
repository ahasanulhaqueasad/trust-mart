import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  CheckCircle2,
  ClipboardCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";

const QualityAssurance = () => {
  const qualityPoints = [
    {
      icon: ClipboardCheck,
      title: "পণ্যের তথ্য যাচাই",
      description:
        "পণ্যের পরিচিতি ও প্রাপ্ত তথ্য যথাসম্ভব যাচাই করে গ্রাহকদের সামনে তুলে ধরার চেষ্টা করি।",
    },
    {
      icon: ShieldCheck,
      title: "সতর্কতার সঙ্গে নির্বাচন",
      description:
        "পণ্য নির্বাচনের ক্ষেত্রে প্রয়োজনীয় তথ্য ও বৈশিষ্ট্যকে গুরুত্ব দিয়ে বিবেচনা করি।",
    },
    {
      icon: CheckCircle2,
      title: "যত্নশীল উপস্থাপনা",
      description:
        "পণ্যের বিবরণ ও প্রয়োজনীয় তথ্য পরিষ্কারভাবে উপস্থাপনের চেষ্টা করি।",
    },
    {
      icon: HeartHandshake,
      title: "গ্রাহকের সন্তুষ্টি",
      description:
        "গ্রাহকের প্রশ্ন, মতামত ও অভিজ্ঞতাকে গুরুত্ব দিয়ে সেবার মান উন্নত করার চেষ্টা করি।",
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
            <ShieldCheck size={42} className="text-[#efc66f] mx-auto mb-5" />

            <h1 className="text-4xl md:text-5xl font-bold text-white">
              গুণগত মান ও যত্ন
            </h1>

            <p className="text-gray-200 mt-5 max-w-2xl mx-auto leading-8">
              পণ্যের তথ্য, নির্বাচন ও গ্রাহকসেবায় আমাদের দায়িত্বশীল দৃষ্টিভঙ্গি
              সম্পর্কে জানুন।
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
                src="/images/ghee.png"
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
                subtitle="গুণগত মান"
                title="মানের প্রতি আমাদের দায়িত্বশীলতা"
                description="গ্রাহকের আস্থা অর্জনের জন্য পণ্যের তথ্য, পরিচিতি ও সেবার প্রতিটি ধাপে যত্নশীল থাকার চেষ্টা করি।"
                center={false}
              />

              <p className="text-gray-600 leading-8">
                আমরা মনে করি, ভালো কেনাকাটার অভিজ্ঞতার জন্য পণ্যের সঠিক পরিচিতি
                ও প্রয়োজনীয় তথ্য জানা অত্যন্ত গুরুত্বপূর্ণ।
              </p>

              <p className="text-gray-600 leading-8 mt-4">
                তাই গ্রাহকের প্রশ্নের উত্তর দেওয়া, পণ্যের তথ্য পরিষ্কারভাবে তুলে
                ধরা এবং দায়িত্বশীলভাবে সেবা দেওয়াকে গুরুত্ব দিই।
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 bg-[#173f2b] hover:bg-[#1d5638] text-white px-7 py-3.5 rounded-full font-semibold transition-colors"
              >
                আমাদের সঙ্গে যোগাযোগ করুন
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Points */}
      <section className="py-20 lg:py-28 bg-[#f5f6ef]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            subtitle="আমাদের কার্যপদ্ধতি"
            title="যে বিষয়গুলোকে আমরা গুরুত্ব দিই"
            description="পণ্যের মান ও গ্রাহকসেবার ক্ষেত্রে আমাদের কাজের মূল বিষয়গুলো।"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityPoints.map((point, index) => {
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

      {/* Closing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-[#173f2b] rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              আপনার আস্থা আমাদের কাছে গুরুত্বপূর্ণ
            </h2>

            <p className="text-gray-200 leading-8 mt-5">
              পণ্য সম্পর্কে কোনো প্রশ্ন থাকলে নির্দ্বিধায় আমাদের সঙ্গে যোগাযোগ
              করুন।
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

export default QualityAssurance;
