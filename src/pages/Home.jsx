import Hero from "../components/home/Hero";
import About from "../components/home/About";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProductSource from "../components/home/ProductSource";
import QualityAssurance from "../components/home/QualityAssurance";
import CarefulPackaging from "../components/home/CarefulPackaging";
import Testimonials from "../components/home/Testimonials";
import ContactCTA from "../components/home/ContactCTA";
import Newsletter from "../components/home/Newsletter";
import ProductBenefits from "../components/home/ProductBenefits";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
