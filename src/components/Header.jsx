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
    <header className="flex flex-col gap-2 bg-white shadow-sm ">
      <div className="grid grid-cols-3 items-center h-18 max-w-6xl mx-auto">
        {/* LOGO - center vertically */}
        <div className="flex justify-start items-center">
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
        {/* NAV - bottom aligned */}
        <nav className="flex justify-center items-center gap-3 sm:gap-3 lg:gap-5 h-full">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition text-sm sm:text-base font-medium whitespace-nowrap border py-1 px-4 rounded-full
          ${
            location.pathname === item.path
              ? "font-semibold text-white bg-(--text-color)"
              : "text-gray-700"
          }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

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
