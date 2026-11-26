import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const FeatureCard = ({ feature }) => {
  const { icon: Icon, title, description } = feature;

  return (
    <motion.div
      whileHover={{ y: -7 }}
      transition={{ duration: 0.3 }}
      className="group bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-[#1d5638]/10 flex items-center justify-center mb-6 group-hover:bg-[#173f2b] transition-colors duration-300">
        {Icon && (
          <Icon
            size={30}
            className="text-[#173f2b] group-hover:text-[#efc66f] transition-colors duration-300"
          />
        )}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-[#173f2b] mb-3">{title}</h3>

      <p className="text-gray-600 text-sm leading-7">{description}</p>

      {/* Bottom Icon */}
      <div className="mt-6 flex justify-end">
        <ArrowUpRight
          size={22}
          className="text-[#1d5638] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
        />
      </div>
    </motion.div>
  );
};

export default FeatureCard;
