import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const AnalyticsTracker = () => {
  const location = useLocation();
  const lastTrackedKey = useRef(null);

  useEffect(() => {
    if (lastTrackedKey.current === location.key) return;

    lastTrackedKey.current = location.key;

    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        page_location:
          window.location.origin + location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

export default AnalyticsTracker;
