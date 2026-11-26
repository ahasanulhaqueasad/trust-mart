import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "হোম", path: "/" },
    { name: "আমাদের সম্পর্কে", path: "/about" },
    { name: "পণ্যসমূহ", path: "/products" },
    { name: "পণ্যের উৎস", path: "/source-information" },
    { name: "যোগাযোগ", path: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white border-b border-base-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Trust Mart Logo"
              className="w-64 h-12 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `text-[15px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-orange-500 font-bold underline"
                      : "text-gray-600 hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* WhatsApp Button */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/8801838041204"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-primary hover:bg-accent text-white border-none rounded-full px-6"
            >
              <MessageCircle size={18} />
              যোগাযোগ করুন
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden btn btn-ghost btn-circle text-primary"
            aria-label={isOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-1 pb-5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg font-medium transition-colors ${
                        isActive
                          ? "bg-primary/10 text-orange-500 font-bold"
                          : "text-gray-700 hover:bg-base-200"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* Mobile WhatsApp Button */}
                <a
                  href="https://wa.me/8801838041204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-primary hover:bg-accent text-white border-none rounded-lg mt-3"
                >
                  <MessageCircle size={18} />
                  WhatsApp-এ যোগাযোগ করুন
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
