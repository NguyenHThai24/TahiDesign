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
    <header className="flex flex-col gap-2 bg-white shadow-sm">
      {/* TOP BAR  */}
      <div className="relative overflow-hidden bg-(--text-color) w-full py-1">
        <div className="marquee whitespace-nowrap text-white text-sm font-semibold">
          NGUYỄN HOÀNG THÁI&nbsp;&nbsp;•&nbsp;&nbsp;NGUYỄN HOÀNG
          THÁI&nbsp;&nbsp;•&nbsp;&nbsp;NGUYỄN HOÀNG THÁI
        </div>
      </div>

      {/* CENTER BAR */}
      <div className="flex justify-between pb-6 gap-4 px-4 sm:px-6 lg:px-10">
        {/* LOGO - Center */}
        <div className="justify-self-center">
          <Link
            to="/"
            className="font-logo text-2xl sm:text-3xl lg:text-3xl text-(--text-color) whitespace-nowrap"
          >
            Tahi Design
          </Link>
        </div>

        {/* SOCIAL ICONS - Right */}
        <div className="flex gap-2 sm:gap-4 justify-self-end">
          <a
            href="#"
            className="border p-1.5 rounded text-white bg-blue-600 hover:bg-blue-700 transition transform hover:scale-110"
          >
            <FaFacebookF size={18} className="sm:w-5 sm:h-5" />
          </a>
          <a
            href="#"
            className="border p-1.5 rounded text-white bg-pink-600 hover:bg-pink-700 transition transform hover:scale-110"
          >
            <FaInstagram size={18} className="sm:w-5 sm:h-5" />
          </a>
          <a
            href="#"
            className="border p-1.5 rounded text-white bg-gray-800 hover:bg-gray-900 transition transform hover:scale-110"
          >
            <FaTiktok size={18} className="sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>

      <div className="flex justify-between items-end px-4 sm:px-6 lg:px-10 pb-0.5">
        {/* NAV MENU */}
        <nav className="flex gap-6 sm:gap-8 lg:gap-12">
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
        {/* SEARCH BOX - Left */}
        <div className="relative justify-self-start">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="px-4 py-2 border-b rounded w-60 sm:w-60 lg:w-68 outline-none text-sm bg-[#e9ece9] border-(--background-color)"
          />
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text-color)" />
        </div>
      </div>
    </header>
  );
};

export default Header;
