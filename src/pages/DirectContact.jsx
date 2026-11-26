import { motion } from "motion/react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const DirectContact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "ফোনে যোগাযোগ",
      description: "পণ্য সম্পর্কে জানতে সরাসরি কল করুন।",
      value: "01838041204",
      link: "tel:+8801838041204",
      button: "কল করুন",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "পণ্যের তথ্য ও অর্ডার সম্পর্কে জানতে মেসেজ করুন।",
      value: "01838041204",
      link: "https://wa.me/8801838041204",
      button: "মেসেজ পাঠান",
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
            <MessageCircle size={42} className="text-[#efc66f] mx-auto mb-5" />

            <h1 className="text-4xl md:text-5xl font-bold text-white">
              সরাসরি যোগাযোগ
            </h1>

            <p className="text-gray-200 mt-5 max-w-2xl mx-auto leading-8">
              আপনার প্রয়োজনীয় পণ্য সম্পর্কে জানতে আমাদের সঙ্গে সরাসরি যোগাযোগ
              করুন।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 lg:py-28 bg-[#f5f6ef]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#173f2b]">
              যেভাবে যোগাযোগ করবেন
            </h2>

            <p className="text-gray-600 mt-4 leading-8">
              আপনার সুবিধামতো যেকোনো একটি মাধ্যম বেছে নিন। আমরা আপনার প্রশ্ন ও
              প্রয়োজন সম্পর্কে জানতে আগ্রহী।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -7 }}
                  className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100"
                >
                  <div className="w-16 h-16 bg-[#173f2b] rounded-2xl flex items-center justify-center mb-7">
                    <Icon size={30} className="text-[#efc66f]" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#173f2b] mb-3">
                    {method.title}
                  </h3>

                  <p className="text-gray-600 leading-7 text-sm mb-5">
                    {method.description}
                  </p>

                  <p className="text-xl font-bold text-[#1d5638] mb-7">
                    {method.value}
                  </p>

                  <a
                    href={method.link}
                    target={
                      method.link.startsWith("https") ? "_blank" : undefined
                    }
                    rel={
                      method.link.startsWith("https")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#173f2b] hover:bg-[#1d5638] text-white py-3.5 rounded-xl font-semibold transition-colors"
                  >
                    {method.button}
                    <ArrowUpRight size={18} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 bg-[#f5f6ef] p-7 rounded-2xl">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-[#173f2b] flex items-center justify-center">
                <MapPin size={23} className="text-[#efc66f]" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#173f2b]">ঠিকানা</h3>

                <p className="text-gray-600 text-sm leading-7 mt-2">
                  ঠিকানা জানতে আমাদের সঙ্গে যোগাযোগ করুন।
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#f5f6ef] p-7 rounded-2xl">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-[#173f2b] flex items-center justify-center">
                <Clock size={23} className="text-[#efc66f]" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#173f2b]">
                  যোগাযোগের সময়
                </h3>

                <p className="text-gray-600 text-sm leading-7 mt-2">
                  প্রতিদিন সকাল ৮টা থেকে রাত ১২টা পর্যন্ত আমাদের সঙ্গে যোগাযোগ
                  করতে পারবেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DirectContact;
