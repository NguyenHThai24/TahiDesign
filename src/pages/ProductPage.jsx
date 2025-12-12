import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Gallery from "../components/Gallery";

const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [sortOption, setSortOption] = useState("");

  const categories = [
    { id: 1, label: "Thiệp sinh nhật" },
    { id: 2, label: "Thiệp cưới" },
    { id: 3, label: "Lịch" },
    { id: 4, label: "Bao lì xì" },
  ];

  // Lấy tham số category từ URL khi component mount
  useEffect(() => {
    const categoryId = searchParams.get("category");
    if (categoryId) {
      setSelectedCategory(parseInt(categoryId));
    }
  }, [searchParams]);

  // Cập nhật URL khi selectedCategory thay đổi
  useEffect(() => {
    if (selectedCategory) {
      searchParams.set("category", selectedCategory);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("category");
      setSearchParams(searchParams);
    }
  }, [selectedCategory, searchParams, setSearchParams]);

  const handleCategoryClick = (categoryId) => {
    if (selectedCategory === categoryId) {
      // Nếu đang chọn cùng danh mục thì bỏ chọn
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  return (
    <main className="min-h-screen">
      <section className="grid grid-cols-12 gap-4 h-full">
        {/* CỘT DANH MỤC */}
        <div className="col-span-3 bg-white p-4 shadow-sm rounded h-full min-h-screen">
          <h3 className="font-bold mb-3">Danh mục</h3>
          <ul className="space-y-1 ml-2">
            {categories.map((c) => (
              <li
                key={c.id}
                onClick={() => handleCategoryClick(c.id)}
                className={`cursor-pointer p-1 rounded ${
                  selectedCategory === c.id
                    ? "bg-(--background-color) text-(--text-color) font-medium"
                    : ""
                }`}
              >
                {c.label}
              </li>
            ))}
          </ul>

          {/* LỌC GIÁ */}
          <h3 className="font-bold mt-6 mb-3">Khoảng giá</h3>
          <select
            className="w-full border-b p-2 outline-none"
            onChange={(e) => {
              const val = e.target.value;
              if (val === "1") setPriceRange([0, 50000]);
              if (val === "2") setPriceRange([50000, 100000]);
              if (val === "3") setPriceRange([100000, 200000]);
              if (val === "4") setPriceRange([200000, 200000000]);
              if (val === "all") setPriceRange([0, 1000000]);
            }}
          >
            <option value="all">Tất cả</option>
            <option value="1">Dưới 50.000</option>
            <option value="2">50.000 - 100.000</option>
            <option value="3">100.000 - 200.000</option>
            <option value="4">Trên 200.000</option>
          </select>

          {/* SẮP XẾP */}
          <h3 className="font-bold mt-6 mb-3">Sắp xếp</h3>
          <select
            className="w-full border-b p-2 outline-none"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Mặc định</option>
            <option value="price-asc">Giá tăng dần</option>
            <option value="price-desc">Giá giảm dần</option>
            <option value="newest">Mới nhất</option>
            <option value="oldest">Cũ nhất</option>
          </select>
        </div>

        {/* DANH SÁCH SẢN PHẨM */}
        <div className="col-span-9">
          <Gallery
            selectedCategory={selectedCategory}
            priceRange={priceRange}
            sortOption={sortOption}
          />
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
