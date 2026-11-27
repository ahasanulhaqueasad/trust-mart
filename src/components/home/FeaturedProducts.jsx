import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import ProductCard from "../ui/ProductCard";
import products from "../../data/products";

const FeaturedProducts = () => {
  return (
    <section
      className="py-20 lg:py-28 bg-[#f5f6ef]"
      aria-label="Trust Mart-এর নির্বাচিত পণ্যসমূহ"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <SectionTitle
          subtitle="আমাদের পণ্য"
          title="আমাদের নির্বাচিত পণ্যসমূহ"
          description="আপনার প্রয়োজন অনুযায়ী বিভিন্ন পণ্য সম্পর্কে জানুন এবং পছন্দের পণ্য অর্ডার করতে আমাদের সঙ্গে যোগাযোগ করুন।"
        />

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* View All Products */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#173f2b] hover:bg-[#1d5638] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            সব পণ্য দেখুন
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
