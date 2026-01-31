import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaBolt,
  FaPrint,
  FaMoneyBillWave,
  FaHeadset,
  FaLayerGroup,
  FaClock,
} from "react-icons/fa";

import videoBanner from "../../public/video/video-banner.png";

const Banner = () => {
  const images = [videoBanner, videoBanner, videoBanner];
  const loopImages = [...images, images[0]];

  const [current, setCurrent] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => prev + 1);
      setEnableTransition(true);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (current === images.length) {
      setEnableTransition(false);
      setCurrent(0);
    }
  };

  useEffect(() => {
    if (current === images.length) {
      setTimeout(() => {
        setEnableTransition(false);
        setCurrent(0);
      }, 1000); // bằng duration animation
    } else {
      setEnableTransition(true);
    }
  }, [current]);

  return (
    <section className="h-full rounded-2xl bg-(--color-secondary) p-4">
      <div className="mx-auto flex h-full w-full flex-col gap-7 lg:flex-row lg:items-center">
        <div className="shadow_black relative h-100 w-full overflow-hidden rounded-2xl bg-white p-3">
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex h-full w-full ${
              enableTransition
                ? "transition-transform duration-1000 ease-in-out"
                : ""
            }`}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {loopImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="h-full w-full shrink-0 rounded-xl object-cover"
              />
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex h-full w-full flex-col items-center justify-center gap-7 text-white">
          <h1 className="text-2xl font-bold uppercase italic">ABOUT US</h1>

          <div className="grid w-full grid-cols-3 gap-4 text-center text-lg">
            <div className="flex flex-col items-center gap-2">
              <FaBolt className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">In ấn nhanh</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaPrint className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">Chất lượng rõ nét</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaMoneyBillWave className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">Giá cả hợp lý</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaHeadset className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">Tư vấn tận tình</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaLayerGroup className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">Đa dạng dịch vụ</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaClock className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">Đúng hẹn – uy tín</span>
            </div>
          </div>

          <Link to="/product" className="btn-primary">
            Explore more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
