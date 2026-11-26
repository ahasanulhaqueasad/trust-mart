import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Heart,
  Leaf,
  ShieldCheck,
  Info,
  Sparkles,
  Droplets,
  Utensils,
} from "lucide-react";

const ProductBenefits = () => {
  const [activeTab, setActiveTab] = useState("honey");

  const tabs = [
    {
      id: "honey",
      label: "মধু ও কালোজিরা",
      icon: "🍯",
    },
    {
      id: "ghee",
      label: "দেশি ঘি",
      icon: "🧈",
    },
  ];

  const honeyBenefits = [
    {
      icon: Sparkles,
      title: "আল্লাহর বিশেষ নেয়ামত",
      description:
        "মধু ও কালোজিরা মহান আল্লাহর দেওয়া মূল্যবান নেয়ামত। পবিত্র কুরআন ও সহিহ হাদিসে এগুলোর উল্লেখ রয়েছে।",
    },
    {
      icon: Heart,
      title: "প্রাকৃতিক শক্তির উৎস",
      description:
        "মধুতে প্রাকৃতিক শর্করা রয়েছে, যা শরীরে শক্তি জোগাতে সাহায্য করে।",
    },
    {
      icon: Leaf,
      title: "অ্যান্টিঅক্সিডেন্ট উপাদান",
      description:
        "মধুতে কিছু অ্যান্টিঅক্সিডেন্ট উপাদান রয়েছে, যা শরীরের জন্য উপকারী হতে পারে।",
    },
    {
      icon: ShieldCheck,
      title: "কাশির উপশমে সহায়ক",
      description: "কিছু ক্ষেত্রে কাশির উপশমে মধু সহায়ক হতে পারে।",
    },
    {
      icon: Droplets,
      title: "কালোজিরার প্রাকৃতিক উপাদান",
      description:
        "কালোজিরায় বিভিন্ন উপকারী প্রাকৃতিক উপাদান রয়েছে। এটি পুষ্টিকর খাদ্য হিসেবে গ্রহণ করা যায়।",
    },
    {
      icon: Utensils,
      title: "দৈনন্দিন খাদ্যতালিকায়",
      description:
        "মধু ও কালোজিরা পরিমিত পরিমাণে দৈনন্দিন খাদ্যতালিকার অংশ হতে পারে।",
    },
  ];

  const gheeBenefits = [
    {
      icon: Sparkles,
      title: "শক্তির উৎস",
      description: "ঘিতে থাকা ফ্যাট শরীরকে শক্তি জোগাতে সাহায্য করে।",
    },
    {
      icon: Heart,
      title: "ফ্যাট-দ্রবণীয় ভিটামিন",
      description:
        "ঘিতে ভিটামিন A, E ও K থাকতে পারে, যা শরীরের বিভিন্ন কাজে ভূমিকা রাখে।",
    },
    {
      icon: Utensils,
      title: "খাবারের স্বাদ ও সুগন্ধ",
      description: "ঘি খাবারের স্বাদ ও সুগন্ধ বাড়াতে ব্যবহার করা হয়।",
    },
    {
      icon: Leaf,
      title: "পুষ্টি উপাদান শোষণে সহায়ক",
      description:
        "ঘিতে থাকা ফ্যাট কিছু ফ্যাট-দ্রবণীয় পুষ্টি উপাদান শোষণে সহায়তা করে।",
    },
    {
      icon: ShieldCheck,
      title: "ঐতিহ্যবাহী দুগ্ধজাত খাবার",
      description:
        "দুধ থেকে তৈরি ঘি বহু বছর ধরে আমাদের খাদ্যাভ্যাস ও ঐতিহ্যের অংশ।",
    },
    {
      icon: Droplets,
      title: "সুষম খাদ্যতালিকার অংশ",
      description: "পরিমিত পরিমাণে ঘি সুষম খাদ্যতালিকার অংশ হতে পারে।",
    },
  ];

  const isHoney = activeTab === "honey";

  const benefits = isHoney ? honeyBenefits : gheeBenefits;

  return (
    <section className="py-20 lg:py-28 bg-[#f5f6ef]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-[#1d5638] font-semibold text-sm mb-3">
            ইসলাম ও পুষ্টির আলোকে
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#173f2b]">
            আমাদের পণ্য সম্পর্কে জানুন
          </h2>

          <p className="text-gray-600 mt-4 leading-8">
            পবিত্র কুরআন, সহিহ হাদিস ও পুষ্টিবিষয়ক তথ্যের আলোকে মধু, কালোজিরা ও
            ঘি সম্পর্কে বিস্তারিত জানুন।
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#173f2b] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-[#efc66f] hover:text-[#173f2b]"
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#e7e9e3]">
              {/* Content Header */}
              <div className="bg-[#173f2b] px-6 py-10 md:px-12 md:py-12 text-center relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#efc66f]/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#efc66f] flex items-center justify-center mx-auto mb-5 text-3xl">
                    {isHoney ? "🍯" : "🧈"}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {isHoney
                      ? "মধু ও কালোজিরা আমাদের কেন খাওয়া উচিত?"
                      : "ঘি আমাদের কেন খাওয়া উচিত?"}
                  </h3>

                  <p className="text-gray-200 mt-4 max-w-2xl mx-auto leading-8">
                    {isHoney
                      ? "পবিত্র আল-কুরআন ও সহিহ হাদিসের আলোকে মধু ও কালোজিরার মর্যাদা ও উপকারিতা জানুন।"
                      : "পবিত্র আল-কুরআন ও ইসলামের আলোকে ঘির গুরুত্ব এবং পুষ্টিগুণ সম্পর্কে জানুন।"}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-12">
                {/* Religious Reference */}
                <div className="bg-[#f5f6ef] rounded-2xl p-6 md:p-9 border-l-4 border-[#efc66f]">
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen size={25} className="text-[#173f2b]" />

                    <h4 className="text-xl font-bold text-[#173f2b]">
                      {isHoney
                        ? "পবিত্র কুরআন ও সহিহ হাদিসের বাণী"
                        : "পবিত্র আল-কুরআনে দুধ সম্পর্কে"}
                    </h4>
                  </div>

                  {isHoney ? (
                    <div className="space-y-8">
                      {/* Honey Quran */}
                      <div>
                        <h5 className="font-bold text-[#1d5638] mb-3">
                          ১. মধু সম্পর্কে পবিত্র আল-কুরআনের বাণী
                        </h5>

                        <p className="text-gray-600 text-sm mb-4">
                          সূরা আন-নাহল, আয়াত ৬৮-৬৯
                        </p>

                        <div className="space-y-5">
                          <div>
                            <span className="inline-block bg-[#173f2b] text-white text-xs px-3 py-1 rounded-full mb-3">
                              আয়াত ৬৮
                            </span>

                            <p className="text-gray-700 leading-8">
                              তোমার রব মৌমাছিকে নির্দেশ দিয়েছেন, তোমরা পাহাড়ে,
                              গাছে এবং মানুষ যেসব মাচা তৈরি করে, সেসব স্থানে ঘর
                              তৈরি করো।
                            </p>
                          </div>

                          <div>
                            <span className="inline-block bg-[#173f2b] text-white text-xs px-3 py-1 rounded-full mb-3">
                              আয়াত ৬৯
                            </span>

                            <p className="text-gray-700 leading-8">
                              অতঃপর প্রত্যেক ফল থেকে আহার করো এবং তোমার রবের সহজ
                              করে দেওয়া পথে চল। তার পেট থেকে বিভিন্ন রঙের পানীয়
                              নির্গত হয়, যাতে মানুষের জন্য রয়েছে আরোগ্য। নিশ্চয়ই
                              এতে চিন্তাশীল সম্প্রদায়ের জন্য নিদর্শন রয়েছে।
                            </p>
                          </div>
                        </div>

                        <p className="text-sm text-gray-500 mt-4 text-right">
                          — সূরা আন-নাহল: ৬৮-৬৯ (অর্থানুবাদ)
                        </p>
                      </div>

                      <div className="border-t border-gray-200" />

                      {/* Black Seed Hadith */}
                      <div>
                        <h5 className="font-bold text-[#1d5638] mb-4">
                          ২. কালোজিরা সম্পর্কে রাসূলুল্লাহ (সা.)-এর বাণী
                        </h5>

                        <p className="text-gray-600 text-sm mb-4">
                          হযরত আবু হুরায়রা (রা.) থেকে বর্ণিত।
                        </p>

                        <div className="bg-white rounded-xl p-5 text-center">
                          <p
                            dir="rtl"
                            className="text-2xl md:text-3xl leading-[2.2] text-[#173f2b] font-semibold"
                          >
                            فِي الْحَبَّةِ السَّوْدَاءِ شِفَاءٌ مِنْ كُلِّ دَاءٍ
                            إِلَّا السَّامَ
                          </p>
                        </div>

                        <h6 className="font-semibold text-[#173f2b] mt-5 mb-2">
                          বাংলা অর্থ:
                        </h6>

                        <p className="text-gray-700 leading-8">
                          “কালোজিরায় মৃত্যু ছাড়া সকল রোগের আরোগ্য রয়েছে।”
                        </p>

                        <p className="text-sm text-gray-500 mt-4 text-right">
                          — সহিহ বুখারি: ৫৬৮৮
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h5 className="font-bold text-[#1d5638] mb-4">
                        সূরা আন-নাহল, আয়াত ৬৬
                      </h5>

                      <div className="bg-white rounded-xl p-5 mb-5">
                        <p
                          dir="rtl"
                          className="text-2xl md:text-3xl text-[#173f2b] leading-[2.2] text-center"
                        >
                          وَإِنَّ لَكُمْ فِي الْأَنْعَامِ لَعِبْرَةً ۖ
                          نُّسْقِيكُم مِّمَّا فِي بُطُونِهِ مِن بَيْنِ فَرْثٍ
                          وَدَمٍ لَّبَنًا خَالِصًا سَآئِغًا لِّلشَّارِبِينَ
                        </p>
                      </div>

                      <h6 className="font-semibold text-[#173f2b] mb-2">
                        বাংলা অর্থ:
                      </h6>

                      <p className="text-gray-700 leading-8">
                        “আর নিশ্চয়ই তোমাদের জন্য গবাদিপশুর মধ্যে রয়েছে শিক্ষা।
                        তাদের পেটের গোবর ও রক্তের মধ্য থেকে আমি তোমাদের পান করাই
                        বিশুদ্ধ দুধ, যা পানকারীদের জন্য সুস্বাদু।”
                      </p>

                      <p className="text-sm text-gray-500 mt-5 text-right">
                        — সূরা আন-নাহল: ৬৬ (অর্থানুবাদ)
                      </p>

                      <div className="mt-6 bg-white rounded-xl p-5">
                        <p className="text-gray-600 leading-8 text-sm">
                          পবিত্র কুরআনে সরাসরি ঘি খাওয়ার বিষয়ে নির্দিষ্ট কোনো
                          আয়াত নেই। তবে এই আয়াতে দুধের নেয়ামতের কথা উল্লেখ করা
                          হয়েছে। ঘি দুধ থেকে তৈরি একটি দুগ্ধজাত খাবার।
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Benefits */}
                <div className="mt-12">
                  <div className="text-center mb-8">
                    <p className="text-[#1d5638] font-semibold mb-2">
                      {isHoney ? "মধু ও কালোজিরার উপকারিতা" : "ঘির পুষ্টিগুণ"}
                    </p>

                    <h4 className="text-2xl md:text-3xl font-bold text-[#173f2b]">
                      {isHoney ? "মধু ও কালোজিরা কেন খাবেন?" : "ঘি কেন খাবেন?"}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {benefits.map((benefit, index) => {
                      const Icon = benefit.icon;

                      return (
                        <motion.div
                          key={benefit.title}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.07,
                          }}
                          className="flex gap-4 p-5 rounded-2xl bg-[#f5f6ef] hover:bg-[#efc66f]/15 transition-colors"
                        >
                          <div className="w-12 h-12 shrink-0 rounded-xl bg-[#173f2b] flex items-center justify-center">
                            <Icon size={23} className="text-[#efc66f]" />
                          </div>

                          <div>
                            <h5 className="font-bold text-[#173f2b] mb-2">
                              {benefit.title}
                            </h5>

                            <p className="text-gray-600 text-sm leading-7">
                              {benefit.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Ghee Selection Tips */}
                {!isHoney && (
                  <div className="mt-10 bg-[#f5f6ef] rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-[#173f2b] mb-5">
                      খাঁটি ঘি কেন বেছে নেবেন?
                    </h4>

                    <ul className="space-y-3 text-gray-700 text-sm leading-7">
                      <li>
                        ✓ ভেজালমুক্ত ও বিশুদ্ধ খাবার বেছে নেওয়ার চেষ্টা করুন।
                      </li>
                      <li>✓ ঘির উৎস ও উৎপাদন প্রক্রিয়া সম্পর্কে জানুন।</li>
                      <li>✓ পণ্যের মান ও সংরক্ষণের বিষয়ে সচেতন থাকুন।</li>
                      <li>✓ প্রয়োজন অনুযায়ী পরিমিত পরিমাণে গ্রহণ করুন।</li>
                    </ul>
                  </div>
                )}

                {/* Trust Mart Message */}
                <div className="mt-12 text-center">
                  <h4 className="text-2xl font-bold text-[#173f2b] mb-4">
                    Trust Mart-এর পক্ষ থেকে
                  </h4>

                  <p className="text-gray-600 leading-8 max-w-2xl mx-auto">
                    আল্লাহর দেওয়া নেয়ামত গ্রহণ করুন। বিশুদ্ধ খাবার বেছে নিন এবং
                    নিজের ও পরিবারের খাদ্যাভ্যাসের প্রতি যত্নশীল হোন। খাবার
                    কেনার আগে পণ্যের মান ও উৎস সম্পর্কে সচেতন থাকুন।
                  </p>

                  <div className="mt-7 inline-block bg-[#173f2b] px-8 py-5 rounded-2xl">
                    <p className="text-[#efc66f] text-xl md:text-2xl font-bold">
                      Trust Mart
                    </p>

                    <p className="text-white text-sm mt-2">
                      Pure Trust, Better Life.
                    </p>

                    <p className="text-gray-300 text-sm mt-2">
                      বিশুদ্ধতার বিশ্বস্ত ঠিকানা
                    </p>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-10 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <Info size={22} className="text-amber-600 shrink-0 mt-1" />

                  <p className="text-sm text-gray-700 leading-7">
                    <strong>বিশেষ সতর্কতা:</strong>{" "}
                    {isHoney
                      ? "কুরআনে মধুর মধ্যে আরোগ্যের কথা বলা হয়েছে এবং কালোজিরা সম্পর্কে সহিহ হাদিস রয়েছে। তবে এগুলোকে সব রোগের নিশ্চিত চিকিৎসা বা চিকিৎসার বিকল্প মনে করা উচিত নয়। এক বছরের কম বয়সী শিশুকে কখনো মধু খাওয়াবেন না।"
                      : "ঘিতে স্যাচুরেটেড ফ্যাট বেশি থাকে। তাই অতিরিক্ত ঘি খাওয়া উচিত নয়। হৃদ্‌রোগ বা উচ্চ কোলেস্টেরলের সমস্যা থাকলে চিকিৎসক বা পুষ্টিবিদের পরামর্শ অনুযায়ী গ্রহণ করুন।"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductBenefits;
