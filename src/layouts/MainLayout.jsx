import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import AnalyticsTracker from "../components/common/AnalyticsTracker";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 font-bengali">
      <AnalyticsTracker />

      <ScrollToTop />

      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
