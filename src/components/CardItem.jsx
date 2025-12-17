import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";

const CardItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hasSale =
    item.salePrice !== undefined &&
    item.salePrice !== null &&
    item.salePrice > 0 &&
    item.salePrice < item.price;

  const discountPercent = hasSale
    ? Math.round(((item.price - item.salePrice) / item.price) * 100)
    : 0;

  return (
    <div
      className="group w-full relative border border-gray-200 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-[340px] flex flex-col justify-between bg-white transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "perspective(1000px) rotateX(2deg)" : "none",
      }}
    >
      {/* Badge giảm giá */}
      {hasSale && (
        <div
          className="
                    absolute top-2 right-2 
                    bg-(--text-color)
                    text-white h-9 w-9 rounded-full text-xs font-bold
                    z-10 shadow-lg
                    flex items-center justify-center
                  "
        >
          -{discountPercent}%
        </div>
      )}

      {/* Overlay khi hover */}
      <div
        className={`absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none`}
      >
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <Link
            to={`/product/${item.id}`}
            className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors pointer-events-auto"
          >
            <Eye size={18} />
          </Link>
          <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors pointer-events-auto">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      {/* Hình ảnh với hiệu ứng 3D */}
      <div className="relative overflow-hidden h-[200px] bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          style={{
            transform: isHovered
              ? "scale(1.1) translateZ(20px)"
              : "scale(1) translateZ(0)",
            transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>

      {/* Nội dung */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Tên sản phẩm */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 group-hover:text-red-600 transition-colors duration-300 leading-relaxed">
          {item.name}
        </h3>

        {/* Rating (optional - có thể thêm nếu có data) */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-3 h-3 ${
                i < 4 ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-gray-500 ml-1">(4.0)</span>
        </div>

        {/* Giá */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-red-600">
              {formatPrice(hasSale ? item.salePrice : item.price)}
            </span>
            {hasSale && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(item.price)}
              </span>
            )}
          </div>

          {hasSale && (
            <p className="text-xs text-green-600 font-medium mt-1">
              Tiết kiệm {formatPrice(item.price - item.salePrice)}
            </p>
          )}
        </div>
      </div>

      {/* Border gradient khi hover */}
      <div
        className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, #e9ece9 0%, #084023 100%)",
          padding: "2px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      ></div>
    </div>
  );
};

export default CardItem;
