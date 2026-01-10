const CartItem = ({ item }) => {
  return (
    <div className="rounded bg-white p-2">
      {/* Image */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={item.image}
          alt={item.name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {!item.inStock && (
          <span className="absolute top-3 left-3 rounded-full bg-red-500 px-3 py-1 text-xs text-white">
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

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-[#58901f]">
            {item.price.toLocaleString()}₫
          </span>

          <button disabled={!item.inStock} className="btn">
            Giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
