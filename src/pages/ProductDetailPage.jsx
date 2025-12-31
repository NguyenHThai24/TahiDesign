import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatPrice } from "../utils/formatPrice";
import ReactMarkdown from "react-markdown";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  // Ảnh hiện tại đang xem
  const [mainImage, setMainImage] = useState("");
  const [showZoom, setShowZoom] = useState(false);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const product = data.find((item) => item.id === Number(id));
        setProductDetail(product);

        if (product) {
          // set ảnh lớn mặc định
          setMainImage(product.image);
        }

        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-6">Đang tải...</div>;
  if (!productDetail) return <div className="p-6">Không tìm thấy sản phẩm</div>;

  return (
    <main className="max-w-6xl mx-auto">
      <section className="bg-white py-10">
        {/* HÀNG 1: ẢNH SẢN PHẨM - 2 cột */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Cột trái: Ảnh chính */}
          <div>
            <img
              src={mainImage}
              alt={productDetail.name}
              className="w-full h-full object-cover rounded cursor-pointer"
              onClick={() => setShowZoom(true)}
            />
          </div>

          {/* Cột phải: Các hình ảnh con xếp nghiêng */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productDetail.images?.map((img, idx) => {
              // Tạo góc xoay ngẫu nhiên từ -15 đến 15 độ
              const rotation = (idx % 5) * 7 - 15; // -15, -8, -1, 6, 13 độ
              return (
                <div
                  key={idx}
                  className="transform transition-transform duration-300 hover:scale-105 hover:z-10"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transformOrigin: "center",
                  }}
                >
                  <img
                    src={img}
                    className={`w-full h-40 object-cover rounded-lg cursor-pointer border-2 ${
                      mainImage === img
                        ? "border-red-500 shadow-lg"
                        : "border-gray-300"
                    }`}
                    onClick={() => setMainImage(img)}
                    style={{
                      transform: `rotate(${-rotation * 0.3}deg)`, // Bù lại một phần góc xoay để hình không bị nghiêng quá nhiều
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* HÀNG 2: THÔNG TIN SẢN PHẨM - 1 cột */}
        <div>
          <h1 className="text-2xl font-bold mb-4 text-(--text-color)">
            {productDetail.name}
          </h1>

          <div className="mb-4">
            <p className="text-lg font-semibold text-red-600">
              Giá:{" "}
              {productDetail.salePrice
                ? formatPrice(productDetail.salePrice)
                : formatPrice(productDetail.price)}
            </p>

            {productDetail.salePrice && (
              <p className="line-through text-gray-600">
                {formatPrice(productDetail.price)}
              </p>
            )}
          </div>

          <div className="mt-4 text-gray-800 leading-relaxed">
            <ReactMarkdown>{productDetail.description}</ReactMarkdown>
          </div>
        </div>
      </section>

      {/* ZOOM IMAGE MODAL */}
      {showZoom && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={() => setShowZoom(false)}
        >
          <img
            src={mainImage}
            className="max-w-[90%] max-h-[90%] rounded shadow-lg"
            alt="Zoomed product"
          />
        </div>
      )}
    </main>
  );
};

export default ProductDetail;
