import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import HomePage from "../pages/HomePage";
import Product from "../pages/ProductPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";
import CollectionPage from "../pages/CollectionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: "/product",
    element: (
      <MainLayout>
        <Product />
      </MainLayout>
    ),
  },

  {
    path: "/product/:id",
    element: (
      <MainLayout>
        <ProductDetailPage />
      </MainLayout>
    ),
  },

  {
    path: "/collection",
    element: (
      <MainLayout>
        <CollectionPage />
      </MainLayout>
    ),
  },

  {
    path: "/contact",
    element: (
      <MainLayout>
        <ContactPage />
      </MainLayout>
    ),
  },
  {
    path: "*",
    element: (
      <MainLayout>
        <NotFoundPage />
      </MainLayout>
    ),
  },
]);

export default router;
