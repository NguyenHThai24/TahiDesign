import { Link } from "react-router-dom";

const CardItem = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex max-h-74 max-w-62.5 cursor-pointer flex-col items-center justify-between rounded-2xl bg-(--color-primary)"
    >
      <div className="w-full p-2">
        <div className="shadow_black h-50 w-full rounded-2xl bg-white p-4">
          <img
            src={product?.image}
            alt={product?.name}
            className="h-full w-full object-contain group-hover:animate-[wobble_0.7s_ease-in-out]"
          />
        </div>

        <h3 className="truncate py-3 text-center text-base font-bold text-white">
          {product?.name}
        </h3>
      </div>

      <p className="h-7 max-w-50 rounded-t-xl bg-white px-2 py-1 text-center font-bold text-red-700">
        {product?.price?.toLocaleString("vi-VN")} đ/cái
      </p>
    </Link>
  );
};

export default CardItem;
