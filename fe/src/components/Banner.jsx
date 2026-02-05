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

import banner1 from "../../public/images/banner/banner1.jpg";
import banner2 from "../../public/images/banner/banner2.jpg";
import { useLanguage } from "../context/LanguageContext";

const Banner = () => {
  const images = [banner1, banner2];

  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="h-full">
      <div className="mx-auto flex h-full w-full flex-col gap-7 lg:flex-row lg:items-center">
        <div className="relative h-100 w-full overflow-hidden bg-white p-6">
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

        {/* CONTENT  */}
        <div className="flex h-full w-full flex-col items-center justify-evenly gap-7 text-(--color-primary)">
          <h1 className="title text-3xl font-bold uppercase italic">
            {t("about")}
          </h1>

          <div className="grid w-full grid-cols-3 gap-4 text-center text-lg">
            <div className="flex flex-col items-center gap-2">
              <FaBolt className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">{t("fastPrinting")}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaPrint className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">
                {t("clearImageQuality")}
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaMoneyBillWave className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">
                {t("reasonablePrices")}
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaHeadset className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">
                {t("dedicatedConsultation")}
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaLayerGroup className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">
                {t("diverseServices")}
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaClock className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">
                {t("onTimeAndReliable")}
              </span>
            </div>
          </div>

          <Link to="/product" className="btn-primary">
            {t("exploreMore")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
