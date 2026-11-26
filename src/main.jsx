import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import DirectContact from "./pages/DirectContact";
import SourceInformation from "./pages/SourceInformation";
import QualityAssurance from "./pages/QualityAssurance";
import CarefulPackaging from "./pages/CarefulPackaging";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "contact",
        element: <DirectContact />,
      },
      {
        path: "source-information",
        element: <SourceInformation />,
      },
      {
        path: "quality-assurance",
        element: <QualityAssurance />,
      },
      {
        path: "careful-packaging",
        element: <CarefulPackaging />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
