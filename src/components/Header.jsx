import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaSearch } from "react-icons/fa";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Sản phẩm", path: "/product" },
    { label: "Bộ sưu tập", path: "/collection" },
    { label: "Giới thiệu", path: "/about" },
    { label: "Liên hệ", path: "/contact" },
  ];

  return (
    <header className="flex flex-col gap-2 sticky top-0 z-50 bg-white shadow-sm">
      {/* TOP BAR  */}
      {/* <div className="relative overflow-hidden bg-(--text-color) w-full">
        <div className="marquee whitespace-nowrap text-white text-[12px] font-semibold">
          NGUYỄN HOÀNG THÁI&nbsp;&nbsp;•&nbsp;&nbsp;NGUYỄN HOÀNG
          THÁI&nbsp;&nbsp;•&nbsp;&nbsp;NGUYỄN HOÀNG THÁI
        </div>
      </div> */}

      <div className="grid grid-cols-3 items-center px-4 sm:px-6 lg:px-10 h-16">
        {/* LOGO - center vertically */}
        <div className="flex justify-start items-center">
          <Link
            to="/"
            className="font-logo text-2xl sm:text-3xl text-(--text-color) whitespace-nowrap"
          >
            TahiDesign
          </Link>
        </div>

        {/* NAV - bottom aligned */}
        <nav className="flex justify-center items-center gap-4 sm:gap-4 lg:gap-6 h-full">
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

        {/* SEARCH - center vertically */}
        <div className="flex justify-end items-center relative">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="px-4 py-2 border-b rounded w-60 outline-none text-sm bg-[#e9ece9] border-(--background-color)"
          />
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text-color)" />
        </div>
      </div>
    </header>
  );
};

export default Header;
