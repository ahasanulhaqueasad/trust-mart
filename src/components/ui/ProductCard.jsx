import { motion } from "motion/react";
import { MessageCircle, ArrowUpRight, ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "../../context/useCart";

const ProductCard = ({ product }) => {
  const { name, image, description, price, unit } = product;

  const { addToCart } = useCart();

  const [added, setAdded] = useState(false);

  const orderMessage = `${name} পণ্যটি সম্পর্কে জানতে চাই।`;

  const orderUrl = `https://wa.me/8801838041204?text=${encodeURIComponent(
    orderMessage,
  )}`;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden bg-[#f5f6ef]">
        <img
          src={image}
          alt={`${name} - Trust Mart-এর পণ্য`}
          title={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Product Information */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#173f2b] mb-2">{name}</h3>

        <p className="text-gray-600 text-sm leading-7 min-h-14">
          {description}
        </p>

        {/* Price */}
        {price && (
          <div className="mt-4 mb-5">
            <span className="text-2xl font-bold text-[#1d5638]">৳{price}</span>

            {unit && (
              <span className="text-gray-500 text-sm ml-1">/ {unit}</span>
            )}
          </div>
        )}

        {/* Add to Cart Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex items-center justify-center gap-2 w-full bg-[#1d5638] hover:bg-[#173f2b] text-white py-3 rounded-xl font-semibold transition-colors mb-3"
          aria-label={`${name} কার্টে যোগ করুন`}
        >
          {added ? (
            <>
              <Check size={18} aria-hidden="true" />
              <span>কার্টে যোগ হয়েছে</span>
            </>
          ) : (
            <>
              <ShoppingCart size={18} aria-hidden="true" />
              <span>কার্টে যোগ করুন</span>
            </>
          )}
        </button>

        {/* WhatsApp Order Button */}
        <a
          href={orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} অর্ডার করতে WhatsApp-এ যোগাযোগ করুন (নতুন ট্যাবে খুলবে)`}
          className="flex items-center justify-center gap-2 w-full bg-[#173f2b] hover:bg-[#1d5638] text-white py-3 rounded-xl font-semibold transition-colors"
        >
          <MessageCircle size={18} aria-hidden="true" />

          <span>WhatsApp-এ যোগাযোগ করুন</span>

          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
