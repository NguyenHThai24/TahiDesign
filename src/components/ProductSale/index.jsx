import { useEffect, useState } from "react";
import CardGrid from "../CardGrid";

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

  return (
    <div>
      <h3 className="title">{title}</h3>
      <CardGrid products={productSale} />
    </div>
  );
};

export default ProductSale;
