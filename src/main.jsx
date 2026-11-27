import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import DirectContact from "./pages/DirectContact";
import SourceInformation from "./pages/SourceInformation";
import QualityAssurance from "./pages/QualityAssurance";
import CarefulPackaging from "./pages/CarefulPackaging";

import CartProvider from "./context/CartProvider";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

// Admin Components
import AdminLogin from "./admin/AdminLogin";
import AdminRoute from "./admin/AdminRoute";
import AdminDashboard from "./admin/AdminDashboard";

const router = createBrowserRouter([
  // Customer Website
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "products", element: <Products /> },
      { path: "contact", element: <DirectContact /> },
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
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },

  // Admin Login
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },

  // Protected Admin Dashboard
  {
    path: "/admin",
    element: <AdminRoute />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </HelmetProvider>
  </StrictMode>,
);
