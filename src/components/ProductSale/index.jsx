import { useEffect, useState } from "react";
import CardGrid from "../CardGrid";
import { Link } from "react-router-dom";

const ProductSale = ({ title }) => {
  const [productSale, setProductSale] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        // Lọc chỉ lấy sản phẩm có salePrice
        const filtered = data.filter(
          (item) => item.salePrice !== undefined && item.salePrice !== null
        );

        setProductSale(filtered);
      })
      .catch((err) => console.log("Lỗi fetch:", err));
  }, []);

  // 🔥 Nếu không có dữ liệu → ẩn tất cả
  if (productSale.length === 0) {
    return null;
  }

  const displayedProducts = productSale.slice(0);

  return (
    <div className="pt-7 pb-4">
      {/* Tiêu đề căn giữa */}
      <div className="text-center mb-6">
        <h3 className="title text-2xl font-bold">{title}</h3>
      </div>

      {/* Hiển thị sản phẩm */}
      <CardGrid products={displayedProducts} />
    </div>
  );
};

export default ProductSale;
