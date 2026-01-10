const CartItem = ({ item }) => {
  const hasDiscount = item.promotion?.isActive;

  return (
    <div className="relative rounded bg-white p-2">
      {/* Discount badge */}
      {hasDiscount && (
        <span className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-(--color-green) text-xs font-semibold text-white">
          -{item.promotion.discountPercent}%
        </span>
      )}

      {/* Vùng tròn */}
      <div className="group perspective-1000 m-4 mx-auto h-50 w-50">
        {/* Flip container */}
        <div className="preserve-3d relative h-full w-full rounded-full transition-transform duration-700 group-hover:rotate-y-180">
          {/* Mặt trước */}
          <div className="absolute inset-0 flex items-center justify-center rounded-full border-4 border-(--secondary-color) bg-white backface-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="h-36 w-36 object-contain"
            />
          </div>

          {/* Mặt sau */}
          <div className="absolute inset-0 flex rotate-y-180 items-center justify-center rounded-full border-4 border-(--secondary-color) bg-white backface-hidden">
            <img
              src={item.image}
              alt={`${item.name}-back`}
              className="h-36 w-36 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="line-clamp-1 text-lg font-semibold">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{item.origin}</p>

        <div className="mt-2 flex flex-wrap gap-2">
          {item.flavor.slice(0, 2).map((f, i) => (
            <span
              key={i}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2">
          <div className="flex w-full items-center justify-end gap-4">
            {hasDiscount ? (
              <>
                <span className="text-sm text-gray-400 line-through">
                  {item.price.toLocaleString()}₫
                </span>
                <span className="text-lg font-bold text-(--color-green)">
                  {item.promotion.discountPrice.toLocaleString()}₫
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-(--color-green)">
                {item.price.toLocaleString()}₫
              </span>
            )}
          </div>
          <button disabled={!item.inStock} className="btn w-full">
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
