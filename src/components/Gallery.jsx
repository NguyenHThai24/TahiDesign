import { useEffect, useState } from "react";
import CardItem from "./CardItem";

const Gallery = ({ title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Lỗi fetch:", err));
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.id} className="flex justify-center">
            <CardItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
