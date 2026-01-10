const CartItem = ({ item }) => {
  const hasDiscount = item.promotion?.isActive;

  return (
    <div className="relative rounded bg-white p-2">
      {/* Discount badge */}
      {hasDiscount && (
        <span className="clip-path-[polygon(0_0,100%_0,100%_100%,0_100%,8px_50%)] absolute top-2 right-0 z-10 bg-[var(--color-green)] px-3 py-1 text-xs font-semibold text-white">
          -{item.promotion.discountPercent}%
        </span>
      )}

      {/* Image */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={item.image}
          alt={item.name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {!item.inStock && (
          <span className="absolute top-2 left-2 rounded-full bg-red-500 px-3 py-1 text-xs text-white">
            Hết hàng
          </span>
        )}
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
