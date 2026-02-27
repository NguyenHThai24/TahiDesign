import bannerIMG from "../assets/banner.png";

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
            <button className="hover-gold relative rounded-full bg-linear-to-b from-[#7ed957] to-[#38b000] px-8 py-3 font-semibold text-white shadow-[0_8px_0_#2d8f00,0_15px_25px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_0_#2d8f00,0_20px_30px_rgba(0,0,0,0.3)] active:translate-y-2 active:shadow-[0_3px_0_#2d8f00]">
              <span className="relative z-10">Xem sản phẩm</span>

              {/* Light effect */}
              <span className="absolute inset-0 rounded-full bg-linear-to-t from-white/10 to-white/40 opacity-40"></span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE (FAKE) */}
        <div className="relative flex items-center justify-center">
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-br from-white to-[#f0f7ec] shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_35px_70px_rgba(0,0,0,0.35)]">
            {/* Inner Ring */}
            <div className="absolute inset-4 rounded-full border-[6px] border-white shadow-inner"></div>

            {/* Light effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/70 via-transparent to-black/10"></div>

            <span className="relative z-10 text-gray-400">
              <img src={bannerIMG} alt="" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
