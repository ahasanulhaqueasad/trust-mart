import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  CheckCircle2,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const QualityAssurance = () => {
  const qualityPoints = [
    {
      icon: CheckCircle2,
      title: "পণ্যের তথ্য যাচাই",
      description:
        "পণ্যের পরিচিতি ও প্রাপ্ত তথ্য যথাসম্ভব যাচাই করে উপস্থাপনের চেষ্টা করি।",
    },
    {
      icon: ClipboardCheck,
      title: "সতর্কতার সঙ্গে নির্বাচন",
      description:
        "পণ্য নির্বাচনের ক্ষেত্রে প্রয়োজনীয় তথ্য ও বৈশিষ্ট্যকে গুরুত্ব দিই।",
    },
    {
      icon: ShieldCheck,
      title: "গ্রাহকের সন্তুষ্টি",
      description:
        "গ্রাহকের প্রশ্ন ও মতামতকে গুরুত্ব দিয়ে সেবার মান উন্নত করার চেষ্টা করি।",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-5 -left-5 w-32 h-32 bg-[#efc66f]/30 rounded-full blur-2xl" />

            <img
              src="/images/ghee.png"
              alt="পণ্যের মান ও পরিচিতি"
              loading="lazy"
              className="relative w-full h-[350px] md:h-[480px] object-cover rounded-3xl shadow-xl"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-[#173f2b]/95 text-white p-6 rounded-2xl">
              <div className="flex items-center gap-3">
                <ShieldCheck size={30} className="text-[#efc66f]" />

                <div>
                  <h3 className="font-bold text-lg">মানের প্রতি যত্ন</h3>

                  <p className="text-gray-200 text-sm">
                    দায়িত্বশীল সেবার প্রতিশ্রুতি
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              subtitle="গুণগত মান"
              title="মানের প্রতি আমাদের যত্ন"
              description="গ্রাহকের আস্থা অর্জনের জন্য পণ্যের পরিচিতি, প্রাপ্ত তথ্য এবং সেবার প্রতিটি ধাপে যত্নশীল থাকার চেষ্টা করি।"
              center={false}
            />

            <div className="space-y-6 mt-8">
              {qualityPoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[#1d5638]/10 flex items-center justify-center">
                      <Icon size={23} className="text-[#1d5638]" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#173f2b] mb-2">
                        {point.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-7">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/quality-assurance"
              className="inline-flex items-center gap-2 mt-9 bg-[#173f2b] hover:bg-[#1d5638] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300"
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

export default QualityAssurance;
