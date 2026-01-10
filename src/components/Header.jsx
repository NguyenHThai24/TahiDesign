import { Link, useLocation } from "react-router-dom";
import treeLOGO from "../../public/treeLogo.png";

import { CiSearch, CiShoppingCart, CiHeart, CiUser } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";

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
          <div className="flex items-center gap-1.5 font-bold text-(--primary-color)">
            <span className="border bg-(--secondary-color) p-1 text-white">
              <MdOutlinePhone size={20} />
            </span>
            +84 123.456.789
          </div>
          <Link
            to="/"
            className="title flex items-baseline gap-2 text-5xl whitespace-nowrap"
          >
            <img src={treeLOGO} alt="" width={45} />
            <span>Tahi Coffee</span>
          </Link>
          <div className="flex items-center gap-4 text-2xl">
            <div className="cursor-pointer rounded-full border border-(--secondary-color) p-1.5 font-bold text-(--secondary-color)">
              <CiUser />
            </div>
            <div className="cursor-pointer rounded-full border border-(--secondary-color) p-1.5 font-bold text-(--secondary-color)">
              <CiHeart />
            </div>

            <div className="btn flex items-center gap-1.5 text-base">
              <CiShoppingCart size={26} />
              <span className="font-semibold">Giỏ hàng</span>
            </div>
          </div>
        </div>
        <div className="border-t border-b border-(--primary-color) py-3">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
            {/* NAV */}
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[16px] font-semibold whitespace-nowrap transition ${
                    location.pathname === item.path
                      ? "btn font-bold text-white"
                      : "text-gray-700 hover:text-(--primary-color)"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* SEARCH */}
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full rounded-full border border-gray-300 bg-white py-2 pr-10 pl-4 text-sm transition outline-none focus:border-(--primary-color) focus:ring-2 focus:ring-(--primary-color)/30"
              />

              <div className="absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer rounded-full border border-(--secondary-color) bg-(--secondary-color) p-1 text-white outline-0 hover:bg-(--primary-color)">
                <CiSearch size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
