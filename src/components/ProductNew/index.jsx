import { useEffect, useState } from "react";
import CardGrid from "../CardGrid";

const ProductNew = ({ title }) => {
  const [productsNew, setProductsNew] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const today = new Date();

        const filtered = data.filter((item) => {
          const createdAt = new Date(item.createdAt);
          const diffDays = (today - createdAt) / (1000 * 60 * 60 * 24);

          return !item.salePrice && diffDays <= 10;
        });

        setProductsNew(filtered);
      })
      .catch((err) => console.log("Lỗi fetch:", err));
  }, []);

  // 🔥 Nếu không có dữ liệu → ẩn tất cả
  if (productsNew.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="title">{title}</h3>
      <CardGrid products={productsNew} />
    </div>
  );
};

export default ProductNew;
