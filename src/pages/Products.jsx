import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import ProductCard from "../components/ui/ProductCard";
import products from "../data/products.js";

const Products = () => {
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
            <ShoppingBag size={42} className="text-[#efc66f] mx-auto mb-5" />

            <h1 className="text-4xl md:text-5xl font-bold text-white">
              আমাদের পণ্যসমূহ
            </h1>

            <p className="text-gray-200 mt-5 max-w-2xl mx-auto leading-8">
              আপনার প্রয়োজনীয় পণ্যগুলো দেখুন। বিস্তারিত জানতে আমাদের সঙ্গে
              যোগাযোগ করুন।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-28 bg-[#f5f6ef]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            subtitle="আমাদের সংগ্রহ"
            title="পছন্দের পণ্য বেছে নিন"
            description="আমাদের তালিকায় থাকা পণ্যগুলো দেখুন এবং পছন্দের পণ্য সম্পর্কে বিস্তারিত জানতে যোগাযোগ করুন।"
          />

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl">
              <ShoppingBag size={45} className="text-[#1d5638] mx-auto mb-4" />

              <h3 className="text-xl font-bold text-[#173f2b]">
                বর্তমানে কোনো পণ্য পাওয়া যাচ্ছে না
              </h3>

              <p className="text-gray-500 mt-2">অনুগ্রহ করে পরে আবার দেখুন।</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Products;
