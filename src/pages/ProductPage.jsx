import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Gallery from "../components/Gallery";

const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [sortOption, setSortOption] = useState("");

  const categories = [
    { id: null, label: "Danh mục" },
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

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(parseInt(value));
    }
  };

  return (
    <main className="min-h-screen">
      <section className="flex flex-col gap-4 h-full">
        {/* CỘT DANH MỤC */}
        <div className="flex gap-4 my-4">
          {/* DANH MỤC - DẠNG DROPDOWN */}
          <div className="border px-2 py-1">
            <select
              className="outline-none"
              value={selectedCategory || ""}
              onChange={handleCategoryChange}
            >
              {categories.map((c) => (
                <option key={c.id || "all"} value={c.id || ""}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          {/* LỌC GIÁ */}
          <div className="border px-2 py-1">
            <select
              className=""
              onChange={(e) => {
                const val = e.target.value;
                if (val === "1") setPriceRange([0, 50000]);
                if (val === "2") setPriceRange([50000, 100000]);
                if (val === "3") setPriceRange([100000, 200000]);
                if (val === "4") setPriceRange([200000, 200000000]);
                if (val === "all") setPriceRange([0, 1000000]);
              }}
            >
              <option value="all">Khoảng giá</option>
              <option value="1">Dưới 50.000</option>
              <option value="2">50.000 - 100.000</option>
              <option value="3">100.000 - 200.000</option>
              <option value="4">Trên 200.000</option>
            </select>
          </div>
          {/* SẮP XẾP */}
          <div className="border px-2 py-1">
            <select
              className=""
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sắp xếp</option>
              <option value="price-asc">Giá tăng dần</option>
              <option value="price-desc">Giá giảm dần</option>
              <option value="newest">Mới nhất</option>
              <option value="oldest">Cũ nhất</option>
            </select>
          </div>
        </div>

        {/* DANH SÁCH SẢN PHẨM */}
        <div className="">
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
