import { useEffect, useState } from "react";
import CardGrid from "../CardGrid";
import { Link } from "react-router-dom";

const ProductSale = ({ title }) => {
  const [productSale, setProductSale] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handleShowMore = () => {
    const newCount = displayCount + 4;
    if (newCount >= productSale.length) {
      setDisplayCount(productSale.length);
      setIsExpanded(true);
    } else {
      setDisplayCount(newCount);
    }
  };

  const handleShowLess = () => {
    const newCount = displayCount - 4;
    if (newCount <= 4) {
      setDisplayCount(4);
      setIsExpanded(false);
    } else {
      setDisplayCount(newCount);
    }
  };

  // 🔥 Nếu không có dữ liệu → ẩn tất cả
  if (productSale.length === 0) {
    return null;
  }

  const displayedProducts = productSale.slice(0, displayCount);

  return (
    <div className="bg-white px-3 pt-7 pb-4">
      {/* Tiêu đề căn giữa */}
      <div className="text-center mb-6">
        <h3 className="title text-2xl font-bold">{title}</h3>
      </div>

      {/* Hiển thị sản phẩm */}
      <CardGrid products={displayedProducts} />

      {/* Nút điều khiển - chỉ hiển thị khi có nhiều hơn 4 sản phẩm */}
      {productSale.length > 4 && (
        <div className="text-center mt-8">
          {isExpanded ? (
            <button
              onClick={handleShowLess}
              className="underline text-sm italic text-gray-600 hover:text-(--primary-color) transition-colors"
            >
              Ẩn bớt
            </button>
          ) : (
            <button
              onClick={handleShowMore}
              className="underline text-sm italic text-gray-600 hover:text-(--primary-color) transition-colors"
            >
              Xem thêm
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductSale;
