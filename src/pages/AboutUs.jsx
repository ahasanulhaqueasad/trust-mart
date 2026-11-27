import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Target,
  HeartHandshake,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import SEO from "../components/common/SEO";
import SectionTitle from "../components/ui/SectionTitle";

const AboutUs = () => {
  const commitments = [
    "গ্রাহকের প্রয়োজন ও মতামতকে গুরুত্ব দেওয়া",
    "পণ্যের সঠিক তথ্য তুলে ধরার চেষ্টা করা",
    "প্যাকেজিংয়ের ক্ষেত্রে যত্নশীল থাকা",
    "গ্রাহকের সঙ্গে সরাসরি যোগাযোগের সুযোগ রাখা",
  ];

  return (
    <>
      <SEO
        title="আমাদের সম্পর্কে | Trust Mart"
        description="Trust Mart-এর লক্ষ্য, উদ্দেশ্য ও কার্যক্রম সম্পর্কে জানুন। আমরা গ্রাহকদের কাছে মানসম্মত ও বিশ্বস্ত পণ্য পৌঁছে দিতে প্রতিশ্রুতিবদ্ধ।"
        path="/about"
      />

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
              <p className="text-[#efc66f] font-semibold mb-4">
                আমাদের পরিচিতি
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-white">
                আমাদের সম্পর্কে
              </h1>

              <p className="text-gray-200 mt-5 max-w-2xl mx-auto leading-8">
                Trust Mart এর লক্ষ্য, উদ্দেশ্য ও কাজের ধরন সম্পর্কে বিস্তারিত
                জানুন।
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
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
                  src="/images/hero-bg.png"
                  alt="ট্রাস্ট মার্ট"
                  loading="lazy"
                  className="w-full h-[350px] md:h-[470px] object-cover rounded-3xl shadow-xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <SectionTitle
                  subtitle="Trust Mart"
                  title="বিশুদ্ধতার বিশ্বস্ত ঠিকানা"
                  description="Trust Mart একটি গ্রাহককেন্দ্রিক অনলাইন কেনাকাটার উদ্যোগ। আমরা দৈনন্দিন প্রয়োজনীয় পণ্য কেনাকাটাকে সহজ ও স্বাচ্ছন্দ্যময় করে তুলতে কাজ করছি।"
                  center={false}
                />

                <p className="text-gray-600 leading-8">
                  আমাদের কাছে ভালো কেনাকাটার অভিজ্ঞতা মানে শুধু পণ্য কেনা নয়;
                  বরং পণ্যের তথ্য জানা, প্রয়োজন অনুযায়ী যোগাযোগ করা এবং
                  যত্নসহকারে পণ্য গ্রহণের সুযোগ পাওয়া।
                </p>

                <p className="text-gray-600 leading-8 mt-4">
                  এই বিষয়গুলোকে গুরুত্ব দিয়েই আমরা গ্রাহকদের সঙ্গে দীর্ঘমেয়াদি
                  আস্থার সম্পর্ক গড়ে তুলতে আগ্রহী।
                </p>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 mt-8 bg-[#173f2b] hover:bg-[#1d5638] text-white px-7 py-3.5 rounded-full font-semibold transition-colors"
                >
                  আমাদের পণ্য দেখুন
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="py-20 lg:py-24 bg-[#f5f6ef]">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionTitle
              subtitle="আমাদের লক্ষ্য ও মূল্যবোধ"
              title="যে বিষয়গুলোকে আমরা গুরুত্ব দিই"
              description="গ্রাহকের আস্থা অর্জন এবং ভালো কেনাকাটার অভিজ্ঞতা দেওয়ার লক্ষ্যে আমাদের কাজের মূল ভিত্তি।"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              <motion.div
                whileHover={{ y: -7 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#173f2b] rounded-xl flex items-center justify-center mb-6">
                  <Target size={27} className="text-[#efc66f]" />
                </div>

                <h3 className="text-xl font-bold text-[#173f2b] mb-3">
                  আমাদের লক্ষ্য
                </h3>

                <p className="text-gray-600 leading-7 text-sm">
                  গ্রাহকদের প্রয়োজনীয় পণ্য কেনাকাটায় সহজ ও স্বাচ্ছন্দ্যময়
                  অভিজ্ঞতা দিতে কাজ করা।
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -7 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#173f2b] rounded-xl flex items-center justify-center mb-6">
                  <HeartHandshake size={27} className="text-[#efc66f]" />
                </div>

                <h3 className="text-xl font-bold text-[#173f2b] mb-3">
                  আমাদের অঙ্গীকার
                </h3>

                <p className="text-gray-600 leading-7 text-sm">
                  গ্রাহকের প্রয়োজন, প্রশ্ন ও মতামতকে গুরুত্ব দিয়ে দায়িত্বশীলভাবে
                  সেবা দেওয়া।
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -7 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#173f2b] rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck size={27} className="text-[#efc66f]" />
                </div>

                <h3 className="text-xl font-bold text-[#173f2b] mb-3">
                  আমাদের মূল্যবোধ
                </h3>

                <p className="text-gray-600 leading-7 text-sm">
                  পণ্যের তথ্য, যোগাযোগ এবং প্যাকেজিংয়ে স্বচ্ছতা ও যত্নকে গুরুত্ব
                  দেওয়া।
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Commitments */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <SectionTitle
                subtitle="আমাদের অঙ্গীকার"
                title="গ্রাহকের আস্থাই আমাদের গুরুত্ব"
                description="প্রতিটি গ্রাহকের সঙ্গে ভালো সম্পর্ক গড়ে তুলতে আমরা যেসব বিষয় অনুসরণ করার চেষ্টা করি।"
              />

              <div className="bg-[#f5f6ef] rounded-3xl p-7 md:p-10 text-left space-y-5">
                {commitments.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={22}
                      className="text-[#1d5638] shrink-0"
                    />

                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
