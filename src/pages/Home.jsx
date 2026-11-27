import SEO from "../components/common/SEO";

import Hero from "../components/home/Hero";
import ProductBenefits from "../components/home/ProductBenefits";
import About from "../components/home/About";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProductSource from "../components/home/ProductSource";
import QualityAssurance from "../components/home/QualityAssurance";
import CarefulPackaging from "../components/home/CarefulPackaging";
import Testimonials from "../components/home/Testimonials";
import ContactCTA from "../components/home/ContactCTA";
import Newsletter from "../components/home/Newsletter";

const Home = () => {
  return (
    <>
      <SEO
        title="Trust Mart | বিশুদ্ধ মধু ও মানসম্মত পণ্যের বিশ্বস্ত ঠিকানা"
        description="Trust Mart থেকে সংগ্রহ করুন মানসম্মত ও বিশ্বস্ত পণ্য। বিশুদ্ধ মধু, কালোজিরা এবং অন্যান্য পণ্যের নির্ভরযোগ্য অনলাইন শপিং ঠিকানা।"
        path="/"
      />

      <main>
        <Hero />
        <ProductBenefits />
        <About />
        <FeaturedProducts />
        <WhyChooseUs />
        <ProductSource />
        <QualityAssurance />
        <CarefulPackaging />
        <Testimonials />
        <ContactCTA />
        <Newsletter />
      </main>
    </>
  );
};

export default Home;
