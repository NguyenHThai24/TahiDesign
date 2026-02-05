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
  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-17 bg-(--color-primary) px-4 py-12 text-white">
      <h1 className="title text-3xl font-bold uppercase italic">
        {t("about")}
      </h1>

      <div className="grid w-full grid-cols-3 gap-17 text-center text-lg">
        <div className="flex flex-col items-center gap-2">
          <FaBolt className="text-2xl text-yellow-400" />
          <span className="font-semibold italic">{t("fastPrinting")}</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <FaPrint className="text-2xl text-yellow-400" />
          <span className="font-semibold italic">{t("clearImageQuality")}</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <FaMoneyBillWave className="text-2xl text-yellow-400" />
          <span className="font-semibold italic">{t("reasonablePrices")}</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <FaHeadset className="text-2xl text-yellow-400" />
          <span className="font-semibold italic">
            {t("dedicatedConsultation")}
          </span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <FaLayerGroup className="text-2xl text-yellow-400" />
          <span className="font-semibold italic">{t("diverseServices")}</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <FaClock className="text-2xl text-yellow-400" />
          <span className="font-semibold italic">{t("onTimeAndReliable")}</span>
        </div>
      </div>

      <Link to="/product" className="btn-primary">
        {t("exploreMore")}
      </Link>
    </div>
  );
};

export default AboutMe;
