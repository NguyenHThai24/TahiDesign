import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ title }) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log("Lỗi fetch:", err));
  }, []);

  const handleCategoryClick = (categoryId) => {
    // Chuyển đến trang sản phẩm với tham số category
    navigate(`/product?category=${categoryId}`);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center p-4 bg-white hover:shadow-lg 
                       transition-all duration-300 cursor-pointer"
          onClick={() => handleCategoryClick(item.id)} // Thêm sự kiện click
        >
          <div className="w-full h-40 mb-3 relative group">
            {/* IMG1 */}
            <img
              src={item.img1}
              alt={item.label}
              className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 group-hover:opacity-0"
            />

            {/* IMG2 (xuất hiện khi hover) */}
            <img
              src={item.img2}
              alt={item.label}
              className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>

          <span className="text-base font-medium text-(--text-color) text-center">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Category;
