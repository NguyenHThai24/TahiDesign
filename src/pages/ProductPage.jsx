import { useState } from "react";
import Gallery from "../components/Gallery";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [sortOption, setSortOption] = useState("");

  const categories = [
    { id: 1, label: "Thiệp sinh nhật" },
    { id: 2, label: "Thiệp cưới" },
    { id: 3, label: "Lịch" },
    { id: 4, label: "Bao lì xì" }
  ];

  return (
    <main>
      <section className="grid grid-cols-12 gap-4">
        
        {/* CỘT DANH MỤC */}
        <div className="col-span-3 bg-white p-4 shadow-sm rounded">
          <h3 className="font-bold mb-2">Danh mục</h3>
          <ul className="space-y-1">
            {categories.map((c) => (
              <li
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`cursor-pointer p-1 rounded ${
                  selectedCategory === c.id ? "bg-blue-100" : ""
                }`}
              >
                {c.label}
              </li>
            ))}
          </ul>

          {/* LỌC GIÁ */}
          <h3 className="font-bold mt-4 mb-2">Khoảng giá</h3>
          <select
            className="w-full border p-2 rounded"
            onChange={(e) => {
              const val = e.target.value;
              if (val === "1") setPriceRange([0, 20000]);
              if (val === "2") setPriceRange([20000, 30000]);
              if (val === "3") setPriceRange([30000, 50000]);
              if (val === "all") setPriceRange([0, 1000000]);
            }}
          >
            <option value="all">Tất cả</option>
            <option value="1">Dưới 20.000</option>
            <option value="2">20.000 - 30.000</option>
            <option value="3">30.000 - 50.000</option>
          </select>

          {/* SẮP XẾP */}
          <h3 className="font-bold mt-4 mb-2">Sắp xếp</h3>
          <select
            className="w-full border p-2 rounded"
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
