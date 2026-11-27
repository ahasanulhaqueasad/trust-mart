import { Link, NavLink } from "react-router-dom";
import { MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "হোম", path: "/" },
    { name: "আমাদের সম্পর্কে", path: "/about" },
    { name: "পণ্যসমূহ", path: "/products" },
    { name: "যোগাযোগ", path: "/contact" },
  ];

  const supportLinks = [
    { name: "মান সম্পর্কে তথ্য", path: "/quality-assurance" },
    { name: "পণ্য প্যাকেজিং", path: "/careful-packaging" },
    { name: "পণ্যের উৎস", path: "/source-information" },
    { name: "সরাসরি যোগাযোগ", path: "/contact" },
  ];

  const activeLinkClass = "text-orange-500 font-bold underline";
  const inactiveLinkClass = "text-gray-300 hover:text-[#efc66f]";

  return (
    <footer className="bg-[#123522] text-white">
      <div className="container mx-auto px-4 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Information */}
          <div>
            <Link
              to="/"
              className="flex items-center mb-5"
              aria-label="Trust Mart হোমপেজে যান"
            >
              <img
                src="/images/logo.png"
                alt="Trust Mart - বিশ্বস্ত অনলাইন শপিং ব্র্যান্ডের লোগো"
                title="Trust Mart Logo"
                width="288"
                height="48"
                decoding="async"
                className="w-64 sm:w-72 h-12 object-contain object-left"
              />
            </Link>

            <p className="text-gray-300 leading-7 text-sm">
              আপনার দৈনন্দিন প্রয়োজনীয় পণ্য কেনাকাটায় সহজ ও স্বাচ্ছন্দ্যময়
              অভিজ্ঞতা দিতে আমরা প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#efc66f]">
              গুরুত্বপূর্ণ লিংক
            </h3>

            <nav aria-label="গুরুত্বপূর্ণ পেজসমূহ">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      className={({ isActive }) =>
                        `flex items-center gap-2 transition-colors text-sm ${
                          isActive ? activeLinkClass : inactiveLinkClass
                        }`
                      }
                    >
                      <ArrowUpRight size={15} aria-hidden="true" />
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#efc66f]">
              গ্রাহক সেবা
            </h3>

            <nav aria-label="গ্রাহক সেবা সম্পর্কিত পেজসমূহ">
              <ul className="space-y-4 text-sm">
                {supportLinks.map((link, index) => (
                  <li key={`${link.path}-${index}`}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `transition-colors ${
                          isActive ? activeLinkClass : inactiveLinkClass
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#efc66f]">
              যোগাযোগ করুন
            </h3>

            <address className="not-italic space-y-5 text-sm text-gray-300">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone
                  size={19}
                  className="text-[#efc66f] shrink-0"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-white font-medium mb-1">ফোন / WhatsApp</p>

                  <a
                    href="tel:+8801838041204"
                    aria-label="Trust Mart-এ ফোন করুন"
                    className="hover:text-[#efc66f] transition-colors"
                  >
                    01838041204
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="text-[#efc66f] shrink-0"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-white font-medium mb-1">আমাদের ঠিকানা</p>

                  <p>ঠিকানা জানতে যোগাযোগ করুন।</p>
                </div>
              </div>
            </address>

            {/* WhatsApp Button */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/8801838041204"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trust Mart-এর সঙ্গে WhatsApp-এ যোগাযোগ করুন"
              className="inline-flex items-center gap-2 mt-6 bg-[#efc66f] text-[#173f2b] font-semibold px-5 py-3 rounded-full text-sm hover:bg-white transition-colors"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp-এ যোগাযোগ করুন
            </motion.a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/15 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} ট্রাস্ট মার্ট। সর্বস্বত্ব সংরক্ষিত।
          </p>

          <p className="text-gray-400 text-sm">
            <span className="text-[#efc66f]">বিশুদ্ধতার বিশ্বস্ত ঠিকানা</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
