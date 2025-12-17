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
      className="group bg-white w-full relative overflow-hidden hover:shadow-2xl transition-all duration-500 h-[320px] flex flex-col justify-between transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "perspective(1000px) rotateX(2deg)" : "none",
      }}
    >
      {/* Overlay khi hover */}
      <div
        className={`absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none`}
      >
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <Link
            to={`/product/${item.id}`}
            className="bg-white text-gray-800 p-2 rounded-full  transition-colors pointer-events-auto"
          >
            <Eye size={18} />
          </Link>
          <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors pointer-events-auto">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      {/* Hình ảnh với hiệu ứng 3D */}
      <div className="relative overflow-hidden h-[200px]">
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
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>

      {/* Nội dung */}
      <div className="p-4 flex flex-col justify-end grow text-left">
        {/* Tên sản phẩm */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 group-hover:text-red-600 transition-colors duration-300 leading-relaxed">
          {item.name}
        </h3>

        {/* Giá */}
        <div className="">
          <div className="flex justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-base font-bold text-(--text-color)">
                {formatPrice(hasSale ? item.salePrice : item.price)}
              </span>
              {hasSale && (
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(item.price)}
                </span>
              )}
            </div>
            {/* Badge giảm giá */}
            {hasSale && (
              <div
                className="bg-(--text-color) text-white h-5 w-12 text-xs font-bold shadow-lg flex items-center justify-center"
                style={{
                  clipPath:
                    "polygon(10px 0, 100% 0, 100% 100%, 10px 100%, 0 50%)",
                }}
              >
                -{discountPercent}%
              </div>
            )}
          </div>

          {hasSale && (
            <p className="text-xs text-green-600 font-medium">
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
