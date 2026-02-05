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
    <section className="mx-auto flex h-100 w-full flex-col gap-17 lg:items-center">
      <div className="relative h-full w-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`absolute inset-0 h-full w-full rounded-xl object-fill transition-all duration-3000 ease-in-out ${
              index === current
                ? "scale-110 opacity-100"
                : "scale-100 opacity-0"
            } `}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
