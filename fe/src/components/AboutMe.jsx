import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaPrint,
  FaMoneyBillWave,
  FaHeadset,
  FaLayerGroup,
  FaClock,
} from "react-icons/fa";

const AboutMe = () => {
  const { t } = useLanguage();

  const features = [
    { icon: FaBolt, label: t("fastPrinting") },
    { icon: FaPrint, label: t("clearImageQuality") },
    { icon: FaMoneyBillWave, label: t("reasonablePrices") },
    { icon: FaHeadset, label: t("dedicatedConsultation") },
    { icon: FaLayerGroup, label: t("diverseServices") },
    { icon: FaClock, label: t("onTimeAndReliable") },
  ];

  return (
    <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-between gap-17 px-4 py-12 text-(--color-primary)">
      <h1 className="title text-3xl font-bold uppercase italic">
        {t("about")}
      </h1>

      <div className="grid w-full grid-cols-2 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="relative mx-auto w-fit min-w-40 p-4 text-left transition"
            >
              {/* BRACKET TOP LEFT */}
              <div className="absolute -top-2 -left-2 h-10 w-10 rounded-tl-xl border-t-4 border-l-4 border-(--color-primary)" />

              {/* BRACKET BOTTOM RIGHT */}
              <div className="absolute -right-2 -bottom-2 h-10 w-10 rounded-br-xl border-r-4 border-b-4 border-(--color-primary)" />

              <div className="mb-4 flex justify-start">
                <Icon className="text-3xl text-(--color-primary)" />
              </div>

              <h3 className="mb-2 text-lg font-semibold italic">
                {item.label}
              </h3>
            </div>
          );
        })}
      </div>

      <Link to="/product" className="btn-primary">
        {t("exploreMore")}
      </Link>
    </div>
  );
};

export default AboutMe;
