import { useEffect, useState } from "react";

import banner1 from "../../public/images/banner/banner1.jpg";
import banner2 from "../../public/images/banner/banner2.jpg";

const Banner = () => {
  const images = [banner1, banner2];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mx-auto w-full">
      <div className="relative h-105 w-full overflow-hidden">
        {/* IMAGES */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`absolute inset-0 h-full w-full object-fill transition-all duration-1500 ease-in-out ${
              index === current
                ? "blur-0 scale-105 opacity-100"
                : "scale-100 opacity-0 blur-sm"
            }`}
          />
        ))}

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-6 rounded-full transition-all ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
