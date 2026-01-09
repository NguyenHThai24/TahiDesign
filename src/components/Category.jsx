const Category = () => {
  return (
    <div className="flex justify-center gap-10">
      <div className="group relative flex h-[180px] w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-(--primary-color) bg-white">
        {/* Hình ảnh */}
        <img
          src="https://via.placeholder.com/120"
          alt=""
          className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay chữ */}
        <div className="absolute bottom-0 left-0 flex h-full w-full translate-y-full items-end justify-center bg-white/80 transition-transform duration-300 ease-out group-hover:translate-y-0">
          <h3 className="mb-6 text-lg font-semibold text-(--primary-color)">
            Thiệp cưới
          </h3>
        </div>
      </div>

      <div className="group relative flex h-[180px] w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-(--primary-color) bg-white">
        {/* Hình ảnh */}
        <img
          src="https://via.placeholder.com/120"
          alt=""
          className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay chữ */}
        <div className="absolute bottom-0 left-0 flex h-full w-full translate-y-full items-end justify-center bg-white/80 transition-transform duration-300 ease-out group-hover:translate-y-0">
          <h3 className="mb-6 text-lg font-semibold text-(--primary-color)">
            Thiệp cưới
          </h3>
        </div>
      </div>
      <div className="group relative flex h-[180px] w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-(--primary-color) bg-white">
        {/* Hình ảnh */}
        <img
          src="https://via.placeholder.com/120"
          alt=""
          className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay chữ */}
        <div className="absolute bottom-0 left-0 flex h-full w-full translate-y-full items-end justify-center bg-white/80 transition-transform duration-300 ease-out group-hover:translate-y-0">
          <h3 className="mb-6 text-lg font-semibold text-(--primary-color)">
            Thiệp cưới
          </h3>
        </div>
      </div>
      <div className="group relative flex h-[180px] w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-(--primary-color) bg-white">
        {/* Hình ảnh */}
        <img
          src="https://via.placeholder.com/120"
          alt=""
          className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay chữ */}
        <div className="absolute bottom-0 left-0 flex h-full w-full translate-y-full items-end justify-center bg-white/80 transition-transform duration-300 ease-out group-hover:translate-y-0">
          <h3 className="mb-6 text-lg font-semibold text-(--primary-color)">
            Thiệp cưới
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Category;
