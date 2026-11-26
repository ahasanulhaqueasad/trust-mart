import { motion } from "motion/react";
import SectionTitle from "../ui/SectionTitle";
import FeatureCard from "../ui/FeatureCard";
import features from "../../data/features";

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <SectionTitle
          subtitle="আমাদের বিশেষত্ব"
          title="কেন ট্রাস্ট মার্ট বেছে নেবেন?"
          description="গ্রাহকের সন্তুষ্টি, পণ্যের সঠিক তথ্য এবং যত্নশীল সেবাকে গুরুত্ব দিয়ে আমরা কাজ করার চেষ্টা করি।"
        />

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
