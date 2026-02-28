import { useEffect, useState } from "react";
import img1 from "../assets/banner.jpg";
import img2 from "../assets/banner1.jpg";
import img3 from "../assets/banner.png";

const images = [img1, img2, img3];
const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000); // 7 giây

    return () => clearInterval(interval);
  }, []);

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
            <button className="hover-gold relative cursor-pointer overflow-hidden rounded-full bg-linear-to-br from-[#7ed957] via-[#52c234] to-[#38b000] font-semibold text-white">
              {/* Soft shine */}
              <span className="absolute inset-0 rounded-full bg-linear-to-t from-white/10 via-white/20 to-transparent opacity-60"></span>

              {/* Hover glow effect */}
              <span className="absolute -inset-1 rounded-full bg-white/20 opacity-0 blur-xl transition-opacity duration-300 hover:opacity-40"></span>

              <span className="relative z-10">Xem sản phẩm</span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex items-center justify-center">
          <div className="relative flex h-60 w-60 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-white to-[#f0f7ec] shadow-[0_25px_50px_rgba(0,0,0,0.25)] md:h-80 md:w-80">
            {/* Inner Ring */}
            <div className="pointer-events-none absolute inset-4 rounded-full border-[6px] border-white shadow-inner"></div>

            {/* Light effect */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-tr from-white/70 via-transparent to-black/10"></div>

            {/* Image Slider */}
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className={`absolute h-full w-full object-contain transition-all duration-1000 ease-in-out ${
                  index === current
                    ? "scale-100 opacity-100"
                    : "scale-110 opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
