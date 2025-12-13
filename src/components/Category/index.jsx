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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {categories.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-6 p-3 rounded
                   bg-white/30 backdrop-blur-md
                   border border-white/40
                   shadow-lg hover:shadow-xl
                   transition-all duration-300"
        >
          {/* TEXT */}
          <div className="w-1/2 text-white">
            <p className="text-lg font-semibold ">{item.label}</p>

            <p className="mt-2 text-sm  leading-relaxed text-gray-50">
              {item.label}
            </p>

            <button
              onClick={() => handleCategoryClick(item.id)}
              className="mt-4 px-5 py-2 rounded-full
                       bg-white/70 hover:bg-white
                       text-sm font-medium
                       shadow cursor-pointer transition text-(--text-color)"
            >
              Xem sản phẩm
            </button>
          </div>

          {/* IMAGE CARD */}
          <div className="w-1/2">
            <div className="relative h-40 rounded bg-white shadow-md overflow-hidden group">
              <img
                src={item.img1}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover
                         transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={item.img2}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover
                         opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
