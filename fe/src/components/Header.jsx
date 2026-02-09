import { useRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import flagVN from "../assets/flag-vn.png";
import flagUK from "../assets/flag-uk.png";
import { useLanguage } from "../context/LanguageContext";
import { FaCalendarDays } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { getLunarDate } from "../utils/lunar";
import CalendarModal from "./CalendarModal";
import { TiHome, TiThList } from "react-icons/ti";
import { MdPermPhoneMsg, MdHomeRepairService } from "react-icons/md";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const currentLang = lang?.toLowerCase() || "vi";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const desktopLangRef = useRef(null);
  const mobileLangRef = useRef(null);

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

  const menuItems = [
    { path: "/", label: t("home"), icon: TiHome },
    { path: "/product", label: t("product"), icon: TiThList },
    { path: "/service", label: t("service"), icon: MdHomeRepairService },
    { path: "/contact", label: t("contact"), icon: MdPermPhoneMsg },
  ];

  const navLinkClasses = (isActive) =>
    `flex items-center gap-2 px-4 py-1.5 rounded-full transition-all duration-300 ${
      isActive
        ? "bg-white text-(--color-primary) font-bold shadow-md"
        : "text-white hover:bg-white/20"
    }`;

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        desktopLangRef.current &&
        !desktopLangRef.current.contains(event.target) &&
        mobileLangRef.current &&
        !mobileLangRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const handleMobileLinkClick = () => {
    // Navigation links will not close the menu - only the X button will
    // We're intentionally NOT calling setMobileOpen(false) here
  };

  const handleLanguageChange = (key) => {
    setLang(key);
    setOpen(false);
    // Don't close mobile menu when changing language
  };

  return (
    <header className="relative w-full">
      {/* Desktop Header */}
      <div className="hidden lg:block">
        {/* Top Row - Logo and Right Section */}
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="title text-4xl font-bold tracking-wider text-white hover:text-white/90"
            >
              TAHI DESIGN
            </Link>
          </div>

          {/* Right Section - Social, Date, Language */}
          <div className="flex items-center gap-4">
            {/* Social */}
            <div className="flex items-center gap-3">
              <a className="social-btn group hover:bg-(--color-primary)">
                <SiZalo
                  size={18}
                  className="text-(--color-primary) group-hover:text-white"
                />
              </a>

              <a className="social-btn group hover:bg-(--color-primary)">
                <FaFacebookF
                  size={16}
                  className="text-(--color-primary) group-hover:text-white"
                />
              </a>

              <a className="social-btn group hover:bg-(--color-primary)">
                <FaInstagram
                  size={18}
                  className="text-(--color-primary) group-hover:text-white"
                />
              </a>
            </div>

            {/* Date */}
            <div
              className="flex h-9 min-w-45 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-4 font-bold text-(--color-primary) italic"
              onClick={() => setCalendarOpen(true)}
            >
              <span className="pt-1 text-sm">
                {formattedDate}
                <span className="mx-1 text-xs font-normal text-gray-500">
                  ({lunarText})
                </span>
              </span>
              <FaCalendarDays />
            </div>

            {/* Language */}
            <div className="relative" ref={desktopLangRef}>
              <button
                onClick={() => setOpen(!open)}
                className="flex h-9 w-40 items-center gap-3 rounded-full border border-white bg-white px-4 text-(--color-primary)"
              >
                <img
                  src={languageConfig[currentLang].flag}
                  className="h-5 w-6"
                  alt="flag"
                />
                <span className="flex-1 text-left">
                  {languageConfig[currentLang].label}
                </span>
              </button>

              {open && (
                <div className="absolute top-full mt-2 w-full rounded-xl border border-white/20 bg-(--color-primary) shadow-lg backdrop-blur-md">
                  {Object.entries(languageConfig).map(([key, value]) => (
                    <div
                      key={key}
                      onClick={() => handleLanguageChange(key)}
                      className="flex cursor-pointer items-center gap-3 px-4 py-3 text-white first:rounded-t-xl last:rounded-b-xl hover:bg-white/20"
                    >
                      <img src={value.flag} className="h-5 w-6" alt="flag" />
                      <span>{value.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Row - Navigation */}
        <div className="flex h-16 items-center justify-center border-t border-white/20">
          <nav className="flex items-center gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => navLinkClasses(isActive)}
                >
                  <Icon size={20} />
                  <span className="pt-0.5 text-base">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Mobile Logo */}
          <Link to="/" className="title text-2xl font-bold text-white">
            TAHI DESIGN
          </Link>

          {/* Mobile Menu Button */}
          <button className="p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <FaTimes size={24} className="text-white" />
            ) : (
              <FaBars size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 top-0 z-50 lg:hidden ${
            mobileOpen
              ? "visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black transition-all duration-300 ${
              mobileOpen ? "opacity-50" : "opacity-0"
            }`}
            onClick={() => setMobileOpen(false)}
          />

          {/* Mobile Menu Content - Slides from bottom */}
          <div
            ref={mobileLangRef}
            className={`absolute top-19 right-0 bottom-0 h-full w-fit transform overflow-y-auto bg-(--color-primary) shadow-xl transition-all duration-300 ${
              mobileOpen ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {/* Navigation Links */}
            <div className="flex flex-col border-b border-white/20 p-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={handleMobileLinkClick}
                    className={({ isActive }) =>
                      `mb-2 flex items-center gap-3 rounded-full px-4 py-2 last:mb-0 ${
                        isActive
                          ? "bg-white font-bold text-(--color-primary)"
                          : "text-white hover:bg-white/10"
                      }`
                    }
                  >
                    <Icon size={22} />
                    <span className="text-base">{item.label}</span>
                  </NavLink>
                );
              })}
            </div>

            {/* Social, Date, Language */}
            <div className="p-4">
              {/* Social */}
              <div className="mb-4 flex justify-center gap-4">
                <a className="rounded-full bg-white/20 p-3">
                  <SiZalo size={20} className="text-white" />
                </a>
                <a className="rounded-full bg-white/20 p-3 hover:bg-white/30">
                  <FaFacebookF size={18} className="text-white" />
                </a>
                <a className="rounded-full bg-white/20 p-3 hover:bg-white/30">
                  <FaInstagram size={20} className="text-white" />
                </a>
              </div>

              {/* Date */}
              <div
                className="mb-4 flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white/10 p-3 text-white"
                onClick={() => {
                  setCalendarOpen(true);
                }}
              >
                <FaCalendarDays />
                <span className="text-sm">
                  {formattedDate} ({lunarText})
                </span>
              </div>

              {/* Language */}
              <div className="relative" ref={mobileLangRef}>
                <button
                  onClick={() => setOpen(!open)}
                  className="flex h-12 w-full items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-4 text-white"
                >
                  <img
                    src={languageConfig[currentLang].flag}
                    className="h-5 w-6"
                    alt="flag"
                  />
                  <span className="flex-1 text-left">
                    {languageConfig[currentLang].label}
                  </span>
                </button>

                {open && (
                  <div className="absolute top-full mt-2 w-full rounded-xl border border-white/20 bg-(--color-primary) shadow-lg backdrop-blur-md">
                    {Object.entries(languageConfig).map(([key, value]) => (
                      <div
                        key={key}
                        onClick={() => handleLanguageChange(key)}
                        className="flex cursor-pointer items-center gap-3 px-4 py-3 text-white first:rounded-t-xl last:rounded-b-xl hover:bg-white/20"
                      >
                        <img src={value.flag} className="h-5 w-6" alt="flag" />
                        <span>{value.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      {calendarOpen && <CalendarModal onClose={() => setCalendarOpen(false)} />}
    </header>
  );
};

export default Header;
