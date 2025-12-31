import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
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
    <Link
      to={`/product/${item.id}`}
      className="group p-2 w-full relative overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "perspective(1000px) rotateX(2deg)" : "none",
      }}
    >
      {/* Hình ảnh với hiệu ứng 3D */}
      <div className="relative overflow-hidden h-[250px] bg-(--background-color)">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />

        {/* Shine effect */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>

      {/* Nội dung */}
      <div className="py-2 flex flex-col justify-end grow text-left">
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
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
