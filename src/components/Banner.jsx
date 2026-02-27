const Banner = () => {
  return (
    <section className="w-full bg-[radial-gradient(circle_at_center,#dff1d8_0%,#ffffff_70%)] py-12">
      <div className="container-limit grid items-center gap-8 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="space-y-5">
          <h1 className="text-4xl leading-tight font-bold md:text-5xl">
            Thiết kế &{" "}
            <span className="text-(--color-primary)">In ấn chuyên nghiệp</span>
          </h1>

          <p className="max-w-md text-gray-600">
            Chuyên thiết kế Photoshop, in ấn thiệp cưới, banner, poster,
            catalogue và các sản phẩm truyền thông sáng tạo, hiện đại.
          </p>

          <div className="flex items-center gap-4">
            <button className="hover-gold rounded-full bg-[rgba(198,225,2,0.08)] px-6 py-3 font-semibold text-(--color-primary) shadow-md">
              Xem sản phẩm
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE (FAKE) */}
        <div className="relative flex items-center justify-center">
          <div className="flex h-75 w-75 items-center justify-center rounded-full border-2 border-dashed border-(--color-primary)">
            <span className="text-gray-400">Ảnh thiết kế / sản phẩm</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
