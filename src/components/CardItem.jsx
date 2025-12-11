import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

const CardItem = ({ item }) => {
  const hasSale =
    item.salePrice !== undefined &&
    item.salePrice !== null &&
    item.salePrice > 0 &&
    item.salePrice < item.price;

  return (
    <Link
      to={`/product/${item.id}`}
      className="border border-(--background-color) rounded-sm p-3 shadow-sm h-[300px] flex flex-col justify-between bg-white"
    >
      {/* Hình + tên */}
      <div>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-[180px] object-cover rounded"
        />

        {/* Tên sản phẩm: tối đa 2 dòng, nếu dài thì ... */}
        <h3 className="text-sm font-medium mt-2 line-clamp-2 text-(--text-color)">
          {item.name}
        </h3>
      </div>

      {/* Giá */}
      <div className="flex items-center justify-between mt-3">
        <span className="text-red-600 font-bold">
          {formatPrice(hasSale ? item.salePrice : item.price)}
        </span>

        {hasSale && (
          <span className="text-gray-500 line-through text-sm ml-2">
            {formatPrice(item.price)}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CardItem;
