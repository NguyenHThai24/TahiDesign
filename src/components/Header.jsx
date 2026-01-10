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
    <header className="relative flex flex-col gap-2">
      <div className="pointer-events-none absolute top-0 left-0 h-36 w-full bg-linear-to-b from-white via-white/70 to-transparent" />

      <div className="relative z-10">
        {/* LOGO - center vertically */}
        <div className="mx-auto flex max-w-7xl items-center justify-between pt-6 pb-4">
          <div>Hotline: 033333333333</div>
          <Link
            to="/"
            className="title flex items-baseline gap-2 text-5xl whitespace-nowrap"
          >
            <img src={treeLOGO} alt="" width={45} />
            <span>Tahi Design</span>
          </Link>
          <div className="flex items-center gap-4 text-2xl">
            <CiSearch />
            <CiUser />
            <CiHeart />
            <div className="btn flex items-center gap-1.5">
              <CiShoppingCart />
              <span className="text-base font-semibold">Giỏ hàng</span>
            </div>
          </div>
        </div>
        {/* NAV - bottom aligned */}
        <nav className="flex items-center justify-center gap-6 border-t border-b border-(--primary-color) py-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[16px] font-semibold whitespace-nowrap transition ${
                location.pathname === item.path
                  ? "btn font-bold text-white"
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
