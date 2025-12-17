import { useEffect, useState } from "react";
import CardGrid from "../CardGrid";

const ProductNew = ({ title }) => {
  const [productsNew, setProductsNew] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handleShowMore = () => {
    const newCount = displayCount + 4;
    if (newCount >= productsNew.length) {
      setDisplayCount(productsNew.length);
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
  if (productsNew.length === 0) {
    return null;
  }

  const displayedProducts = productsNew.slice(0, displayCount);

  return (
    <div className="bg-white px-3 pt-7 pb-4">
      {/* Tiêu đề căn giữa */}
      <div className="text-center mb-6">
        <h3 className="title text-2xl font-bold">{title}</h3>
      </div>

      {/* Hiển thị sản phẩm */}
      <CardGrid products={displayedProducts} />

      {/* Nút điều khiển - chỉ hiển thị khi có nhiều hơn 4 sản phẩm */}
      {productsNew.length > 4 && (
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

export default ProductNew;
