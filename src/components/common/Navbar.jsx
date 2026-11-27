import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle, ShoppingCart } from "lucide-react";

import { useCart } from "../../context/useCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { cartCount } = useCart();

  const navLinks = [
    { name: "হোম", path: "/" },
    { name: "আমাদের সম্পর্কে", path: "/about" },
    { name: "পণ্যসমূহ", path: "/products" },
    { name: "পণ্যের উৎস", path: "/source-information" },
    { name: "যোগাযোগ", path: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    `text-[15px] font-medium transition-colors duration-300 ${
      isActive
        ? "text-orange-500 font-bold underline"
        : "text-gray-600 hover:text-primary"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `px-4 py-3 rounded-lg font-medium transition-colors ${
      isActive
        ? "bg-primary/10 text-orange-500 font-bold"
        : "text-gray-700 hover:bg-base-200"
    }`;

  return (
    <nav
      className="bg-white border-b border-base-300"
      aria-label="প্রধান নেভিগেশন"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center"
            aria-label="Trust Mart হোমপেজে যান"
          >
            <img
              src="/images/logo.png"
              alt="Trust Mart - বিশ্বস্ত অনলাইন শপিং"
              title="Trust Mart"
              width="288"
              height="48"
              decoding="async"
              className="w-64 sm:w-72 h-12 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={navLinkClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Shopping Cart */}
            <Link
              to="/cart"
              aria-label={`শপিং কার্ট, ${cartCount}টি পণ্য`}
              className="relative flex items-center justify-center w-11 h-11 rounded-full bg-base-200 hover:bg-primary/10 text-primary transition-colors"
            >
              <ShoppingCart size={21} aria-hidden="true" />

              {cartCount > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -top-1 -right-1 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold"
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* WhatsApp */}
            <a
              href="https://wa.me/8801838041204"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trust Mart-এর সঙ্গে WhatsApp-এ যোগাযোগ করুন (নতুন ট্যাবে খুলবে)"
              className="btn bg-primary hover:bg-accent text-white border-none rounded-full px-6"
            >
              <MessageCircle size={18} aria-hidden="true" />
              যোগাযোগ করুন
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Shopping Cart */}
            <Link
              to="/cart"
              onClick={closeMenu}
              aria-label={`শপিং কার্ট, ${cartCount}টি পণ্য`}
              className="relative flex items-center justify-center btn btn-ghost btn-circle text-primary"
            >
              <ShoppingCart size={23} aria-hidden="true" />

              {cartCount > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute top-0 right-0 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold"
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen((previous) => !previous)}
              className="btn btn-ghost btn-circle text-primary"
              aria-label={isOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? (
                <X size={26} aria-hidden="true" />
              ) : (
                <Menu size={26} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
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
                    className={mobileNavLinkClass}
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* Mobile WhatsApp Button */}
                <a
                  href="https://wa.me/8801838041204"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp-এ Trust Mart-এর সঙ্গে যোগাযোগ করুন (নতুন ট্যাবে খুলবে)"
                  className="btn bg-primary hover:bg-accent text-white border-none rounded-lg mt-3"
                >
                  <MessageCircle size={18} aria-hidden="true" />
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
