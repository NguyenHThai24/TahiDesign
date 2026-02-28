const CardItem = ({ item }) => {
  return (
    <div className="group cursor-pointer">
      {/* IMAGE */}
      <div className="flex justify-center py-4">
        <div className="group relative h-48 w-48">
          {/* Vòng nền (tạo chiều sâu) */}
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-green-100 to-white shadow-inner"></div>

          {/* Hình tròn */}
          <div className="relative h-full w-full overflow-hidden rounded-full bg-white shadow-lg">
            <img
              src={item.images[0]}
              alt={item.name}
              className="h-full w-full scale-90 object-contain transition duration-500 group-hover:scale-100"
            />
          </div>

          {/* Glow nhẹ */}
          <div className="absolute inset-0 rounded-full bg-green-200 opacity-0 blur-xl transition group-hover:opacity-40"></div>
        </div>
      </div>

      {/* INFO */}
      <div className="p-4 text-center">
        <p className="truncate text-sm font-semibold text-black transition group-hover:text-(--color-primary) md:text-base">
          {item.name}
        </p>
      </div>
    </div>
  );
};

export default CardItem;
