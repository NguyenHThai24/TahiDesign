import { useRef, useState } from "react";

import flagVN from "../assets/flag-vn.png";
import flagUK from "../assets/flag-uk.png";
import { useLanguage } from "../context/LanguageContext";
import { FaCalendarDays } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

import { SiZalo } from "react-icons/si";
import { getLunarDate } from "../utils/lunar";
import CalendarModal from "./CalendarModal";
const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const currentLang = lang?.toLowerCase() || "vi";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const selectRef = useRef(null);

  const [open, setOpen] = useState(false);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const lunar = getLunarDate(today);
  const lunarText = `${String(lunar.day).padStart(2, "0")}/${String(
    lunar.month,
  ).padStart(2, "0")} ÂL${lunar.isLeap ? " (Nhuận)" : ""}`;

  const languageConfig = {
    vi: {
      label: "Vietnamese",
      flag: flagVN,
    },
    en: {
      label: "English",
      flag: flagUK,
    },
  };

  return (
    <header className="relative w-full">
      {/* TOP BAR */}
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="hidden text-lg md:block">{t("hello")}</div>

        {/* Desktop Right */}
        <div className="hidden items-center gap-7 md:flex">
          {/* Social */}
          <div className="flex items-center gap-3">
            <a className="social-btn">
              <SiZalo size={18} />
            </a>
            <a className="social-btn">
              <FaFacebookF size={16} />
            </a>
            <a className="social-btn">
              <FaInstagram size={18} />
            </a>
          </div>

          {/* Date */}
          <div
            className="flex h-9 cursor-pointer items-center gap-2 rounded-full bg-white px-6 font-bold text-(--color-primary) italic"
            onClick={() => setCalendarOpen(true)}
          >
            <span className="pt-1 text-[0.9rem]">
              {formattedDate}
              <span className="mx-1 text-sm font-normal text-gray-500">
                ({lunarText})
              </span>
            </span>
            <FaCalendarDays />
          </div>

          {/* Language */}
          <div
            className="relative flex h-9 w-40 cursor-pointer items-center gap-2"
            onClick={() => selectRef.current?.click()}
          >
            <div className="relative h-full w-full">
              <button
                onClick={() => setOpen(!open)}
                className="flex h-full w-full items-center gap-2 rounded-full border bg-white px-4 py-1 text-(--color-primary)"
              >
                <img
                  src={languageConfig[currentLang].flag}
                  className="h-4 w-5"
                />
                <span>{languageConfig[currentLang].label}</span>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-full rounded-xl border bg-white shadow-lg">
                  {Object.entries(languageConfig).map(([key, value]) => (
                    <div
                      key={key}
                      onClick={() => {
                        setLang(key);
                        setOpen(false);
                      }}
                      className="flex cursor-pointer items-center gap-2 px-4 py-2 text-(--color-primary) hover:rounded-xl hover:bg-(--color-secondary) hover:text-white"
                    >
                      <img src={value.flag} className="h-4 w-5" />
                      <span>{value.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileOpen && (
        <div className="absolute top-full right-0 z-50 mt-3 w-full rounded-2xl bg-white p-4 shadow-xl md:hidden">
          {/* Hello */}
          <div className="mb-4 text-center text-lg font-semibold text-(--color-primary)">
            {t.hello}
          </div>

          {/* Divider (optional) */}
          <div className="mb-4 h-px bg-gray-200" />

          {/* Social */}
          <div className="mb-4 flex justify-center gap-4">
            <a className="social-btn border">
              <SiZalo size={18} />
            </a>
            <a className="social-btn border">
              <FaFacebookF size={16} />
            </a>
            <a className="social-btn border">
              <FaInstagram size={18} />
            </a>
          </div>

          {/* Date */}
          <div
            className="mb-4 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-(--color-secondary) px-4 py-2 font-bold text-white"
            onClick={() => setCalendarOpen(true)}
          >
            <FaCalendarDays />
            <span className="text-sm">
              {formattedDate} ({lunarText})
            </span>
          </div>

          {/* Language */}
          <div
            className="relative mx-auto flex h-9 w-40 cursor-pointer items-center justify-center gap-2"
            onClick={() => selectRef.current?.click()}
          >
            <div className="relative h-full w-full">
              <button
                onClick={() => setOpen(!open)}
                className="flex h-full w-full items-center gap-2 rounded-full border bg-white px-4 py-1 text-(--color-primary)"
              >
                <img
                  src={languageConfig[currentLang].flag}
                  className="h-4 w-5"
                />
                <span>{languageConfig[currentLang].label}</span>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-full rounded-xl border bg-white shadow-lg">
                  {Object.entries(languageConfig).map(([key, value]) => (
                    <div
                      key={key}
                      onClick={() => {
                        setLang(key);
                        setOpen(false);
                      }}
                      className="flex cursor-pointer items-center gap-2 px-4 py-2 text-(--color-primary) hover:rounded-xl hover:bg-(--color-secondary) hover:text-white"
                    >
                      <img src={value.flag} className="h-4 w-5" />
                      <span>{value.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {calendarOpen && <CalendarModal onClose={() => setCalendarOpen(false)} />}
    </header>
  );
};

export default Header;
