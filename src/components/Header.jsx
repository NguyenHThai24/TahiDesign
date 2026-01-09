import { Link, useLocation } from "react-router-dom";
import treeLOGO from "../../public/treeLogo.png";

import { CiSearch, CiShoppingCart, CiHeart, CiUser } from "react-icons/ci";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Sản phẩm", path: "/product" },
    { label: "Bộ sưu tập", path: "/collection" },
    { label: "Liên hệ", path: "/contact" },
  ];

  return (
    <header className="flex flex-col gap-2 relative">
      <div className="pointer-events-none absolute top-0 left-0 h-36 w-full bg-linear-to-b from-white via-white/70 to-transparent" />

      <div className="relative z-10">
        {/* LOGO - center vertically */}
        <div className="flex justify-between items-center  py-4 max-w-7xl mx-auto">
          <div>Hotline: 033333333333</div>
          <Link
            to="/"
            className="title text-5xl whitespace-nowrap flex gap-2 items-baseline"
          >
            <img src={treeLOGO} alt="" width={45} />
            <span>Tahi Design</span>
          </Link>
          <div className="flex gap-5 text-2xl items-center">
            <CiSearch />
            <CiUser />
            <CiHeart />
            <div className="flex items-center gap-1.5 btn">
              <CiShoppingCart />
              <span className="text-base font-semibold">Giỏ hàng</span>
            </div>
          </div>
        </div>
        {/* NAV - bottom aligned */}
        <nav className="flex justify-center items-center gap-6 py-3 border-t border-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition text-[16px] font-semibold whitespace-nowrap
          ${
            location.pathname === item.path
              ? "text-white font-bold btn"
              : "text-gray-700"
          }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
