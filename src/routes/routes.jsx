import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";

// lazy load pages
const HomePage = lazy(() => import("../pages/HomePage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const AlbumPage = lazy(() => import("../pages/AlbumPage"));

const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "san-pham",
        element: <ProductPage />,
      },
      {
        path: "bo-suu-tap",
        element: <AlbumPage />,
      },

      {
        path: "lien-he",
        element: <ContactPage />,
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
