import { useEffect, useState } from "react";
import CardItem from "./CardItem";

const Gallery = ({ selectedCategory, priceRange, sortOption }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // 9 sản phẩm mỗi trang

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Lỗi fetch:", err));
  }, []);

  // Reset về trang 1 khi có filter thay đổi
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, priceRange, sortOption]);

  // ==== Lọc theo danh mục ====
  let filtered = [...products];

  if (selectedCategory) {
    filtered = filtered.filter((item) => item.categoryId === selectedCategory);
  }

  // ==== Lọc theo khoảng giá ====
  filtered = filtered.filter((item) => {
    const price = item.salePrice || item.price;
    return price >= priceRange[0] && price <= priceRange[1];
  });

  // ==== Sắp xếp ====
  if (sortOption === "price-asc") {
    filtered.sort(
      (a, b) => (a.salePrice || a.price) - (b.salePrice || b.price)
    );
  }

  if (sortOption === "price-desc") {
    filtered.sort(
      (a, b) => (b.salePrice || b.price) - (a.salePrice || a.price)
    );
  }

  if (sortOption === "newest") {
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  if (sortOption === "oldest") {
    filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }

  // Tính toán phân trang
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filtered.slice(startIndex, endIndex);

  // Hàm chuyển trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Cuộn lên đầu trang để xem sản phẩm
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Tạo danh sách số trang
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Nếu tổng số trang ít, hiển thị tất cả
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Hiển thị trang đầu, cuối và các trang xung quanh trang hiện tại
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <div className="w-full mx-auto">
      {filtered.length === 0 ? (
        <div className="text-center text-gray-500 py-10 text-lg">
          🔍 Chưa có sản phẩm nào phù hợp
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center">
            {/* Thông tin số lượng */}
            <div className="text-(--text-color) text-sm">
              Hiển thị{" "}
              <span className="font-medium">
                ({startIndex + 1}-{Math.min(endIndex, filtered.length)})
              </span>{" "}
              trong {filtered.length} sản phẩm
            </div>

            {/* Phân trang */}
            {totalPages > 1 && (
              <div className="flex justify-end items-center space-x-1 my-2">
                {/* Nút Previous */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg flex items-center text-sm ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Trước
                </button>

                {/* Các số trang */}
                {getPageNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      typeof page === "number" && handlePageChange(page)
                    }
                    className={`w-6 h-6 flex items-center justify-center rounded-full ${
                      page === currentPage
                        ? "bg-(--text-color) text-white shadow-md font-medium"
                        : page === "..."
                        ? "text-gray-400 cursor-pointer"
                        : "text-gray-700 hover:bg-white"
                    }`}
                    disabled={page === "..."}
                  >
                    {page}
                  </button>
                ))}

                {/* Nút Next */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg flex items-center text-sm ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Sau
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Grid sản phẩm */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((item) => (
              <div key={item.id} className="flex justify-center">
                <CardItem item={item} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
