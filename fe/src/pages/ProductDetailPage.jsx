import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiX } from "react-icons/fi";
import productsData from "../../public/data/productsData.json";

const ProductDetailPage = () => {
  const { id } = useParams();

  const product = productsData.find((item) => String(item.id) === String(id));

  const [selectedImage, setSelectedImage] = useState(product?.image || "");

  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // ESC để đóng
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsZoomOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!product) {
    return (
      <div className="flex h-full items-center justify-center rounded-2xl bg-(--color-secondary)">
        Không tìm thấy sản phẩm
      </div>
    );
  }

  return (
    <>
      <div className="flex h-full flex-1 flex-col gap-4 overflow-hidden rounded-2xl bg-(--color-secondary) p-4 md:p-6 lg:flex-row">
        <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-hidden overflow-y-auto lg:flex-row">
          {/* IMAGE SECTION */}
          <div className="shadow_black flex h-full flex-1 flex-col gap-4 rounded-2xl bg-white p-6">
            {/* Main Image */}
            <div
              onClick={() => setIsZoomOpen(true)}
              className="flex max-h-70 flex-1 cursor-zoom-in items-center justify-center overflow-hidden rounded-2xl md:max-h-none"
            >
              <img
                src={selectedImage}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition duration-300 hover:scale-105"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto">
              {[product.image, product.image1, product.image2, product.image3]
                .filter(Boolean)
                .map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`cursor-pointer rounded-xl border-2 p-2 ${
                      selectedImage === img
                        ? "border-(--color-primary)"
                        : "border-transparent"
                    } bg-(--color-secondary)`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="h-16 w-16 object-contain md:h-20 md:w-20"
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* INFO SECTION */}
          <div className="shadow_black flex h-full flex-1 flex-col gap-6 rounded-2xl bg-white p-8">
            <h1 className="text-xl font-bold italic md:text-3xl">
              {product.name}
            </h1>

            <div className="space-y-2 text-base md:text-lg">
              <p>
                <b>Chất liệu:</b> {product.material}
              </p>
              <p>
                <b>Kích thước:</b> {product.size}
              </p>
              <p>
                <b>Số lượng:</b> {product.quantity}
              </p>
            </div>

            <p className="text-xl font-bold text-red-600 md:text-2xl">
              {product.price.toLocaleString("vi-VN")} đ
            </p>

            <div className="mt-auto flex flex-col gap-3 md:flex-row md:gap-6">
              <button className="btn-primary">Thêm yêu thích</button>

              <button className="btn-primary">Thêm vào giỏ hàng</button>
            </div>
          </div>
        </div>
      </div>

      {/* ZOOM MODAL */}
      {isZoomOpen && (
        <div
          onClick={() => setIsZoomOpen(false)}
          className="fixed inset-0 z-999 flex items-center justify-center bg-white md:m-10 md:rounded-2xl"
        >
          <button
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-6 right-6 text-3xl text-(--color-primary) hover:opacity-70"
          >
            <FiX />
          </button>

          <img
            src={selectedImage}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="animate-zoomIn max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;
