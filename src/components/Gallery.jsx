import { useEffect, useState } from "react";
import CardItem from "./CardItem";

const Gallery = ({ selectedCategory, priceRange, sortOption }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Lỗi fetch:", err));
  }, []);

  // ==== Lọc theo danh mục ====
  let filtered = [...products];

  if (selectedCategory) {
    filtered = filtered.filter((item) => item.categoryId === selectedCategory);
  }

  // ==== Lọc theo khoảng giá ====
  filtered = filtered.filter((item) => {
    const price = item.salePrice || item.price;
    return price >= priceRange[0] && price <= priceRange[1];
  });

  // ==== Sắp xếp ====
  if (sortOption === "price-asc") {
    filtered.sort(
      (a, b) => (a.salePrice || a.price) - (b.salePrice || b.price)
    );
  }

  if (sortOption === "price-desc") {
    filtered.sort(
      (a, b) => (b.salePrice || b.price) - (a.salePrice || a.price)
    );
  }

  if (sortOption === "newest") {
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  if (sortOption === "oldest") {
    filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div key={item.id} className="flex justify-center">
            <CardItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
