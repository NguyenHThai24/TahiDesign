import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaOpencart, FaRegHeart, FaRegUser } from "react-icons/fa";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Sản phẩm", path: "/product" },
    { label: "Bộ sưu tập", path: "/collection" },
    { label: "Liên hệ", path: "/contact" },
  ];

  return (
    <header className="flex justify-center gap-2 bg-white shadow-sm items-center">
      <div className="grid grid-cols-3 h-18">
        {/* NAV - bottom aligned */}
        <nav className="flex justify-start items-center gap-8 sm:gap-6 lg:gap-8 h-full">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition hover:text-(--text-color) text-sm sm:text-base font-medium whitespace-nowrap
          ${
            location.pathname === item.path
              ? "font-semibold text-(--text-color) underline underline-offset-6 decoration-3"
              : "text-gray-700"
          }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* LOGO - center vertically */}
        <div className="flex justify-center items-center">
          <Link
            to="/"
            className="font-logo text-3xl sm:text-4xl text-(--text-color) whitespace-nowrap"
            style={{
              fontFamily: '"Tagesschrift", system-ui',
            }}
          >
            TahiDesign
          </Link>
        </div>
        {/*  */}
        <div className="flex justify-end items-center gap-6">
          <div className="cursor-pointer hover:text-(--text-color)">
            <FaSearch size={22} />
          </div>
          <div className="cursor-pointer hover:text-(--text-color)">
            <FaOpencart size={22} />
          </div>
          <div className="cursor-pointer hover:text-(--text-color)">
            <FaRegHeart size={22} />
          </div>
          <div className="cursor-pointer hover:text-(--text-color)">
            <FaRegUser size={22} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
