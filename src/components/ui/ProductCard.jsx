import { motion } from "motion/react";
import { MessageCircle, ArrowUpRight } from "lucide-react";

const ProductCard = ({ product }) => {
  const { name, image, description, price, unit } = product;

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
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
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

        {/* Order Button */}
        <a
          href={`https://wa.me/8801838041204?text=${encodeURIComponent(
            `${name} পণ্যটি সম্পর্কে জানতে চাই।`,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[#173f2b] hover:bg-[#1d5638] text-white py-3 rounded-xl font-semibold transition-colors"
        >
          <MessageCircle size={18} />
          অর্ডার করতে যোগাযোগ করুন
          <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
