import { useEffect, useState } from "react";
import CardItem from "../components/CardItem";

const ProductPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCate, setActiveCate] = useState(null);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = activeCate
    ? products.filter((p) => p.categoryId === activeCate)
    : products;

  return (
    <main className="container mx-auto px-4 py-6">
      {/* CATEGORY */}
      <section className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveCate(item.id)}
            className={`rounded-full bg-[radial-gradient(circle_at_center,#dff1d8_0%,#ffffff_70%)] px-5 py-2 text-sm font-semibold uppercase transition-all duration-300 ${
              activeCate === item.id
                ? "text-(--color-primary) shadow-lg shadow-green-300"
                : ""
            }`}
          >
            {item.name}
          </button>
        ))}
      </section>

      {/* PRODUCT GRID */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-7 lg:grid-cols-4">
        {filteredProducts.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
};

export default ProductPage;
