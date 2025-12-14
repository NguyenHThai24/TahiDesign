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
      })
  }, [id]);

  if (loading) return <div className="p-6">Đang tải...</div>;
  if (!productDetail) return <div className="p-6">Không tìm thấy sản phẩm</div>;

  return (
    <main className="">
      <section className="bg-white shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ẢNH SẢN PHẨM */}
        <div>
          {/* Ảnh lớn */}
          <img
            src={mainImage}
            alt={productDetail.name}
            className="w-full h-80 object-cover rounded cursor-pointer"
            onClick={() => setShowZoom(true)}
          />

          {/* List thumbnails */}
          <div className="flex gap-2 mt-3 overflow-x-auto">
            {productDetail.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                  mainImage === img
                    ? "border-(--text-color)"
                    : "border-gray-300"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* THÔNG TIN SẢN PHẨM */}
        <div>
          <h1 className="text-2xl font-bold mb-4 text-(--text-color)">
            {productDetail.name}
          </h1>

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
          />
        </div>
      )}
    </main>
  );
};

export default ProductDetail;
