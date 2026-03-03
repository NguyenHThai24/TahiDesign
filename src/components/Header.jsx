import { useState, useRef, useEffect } from "react";
import logoImg from "../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState({ left: 0, width: 0 });

  const menuRefs = useRef([]);
  const location = useLocation();

  const menus = [
    { name: "Trang chủ", path: "/" },
    { name: "Sản phẩm", path: "/san-pham" },
    { name: "Bộ sưu tập", path: "/bo-suu-tap" },
    { name: "Liên hệ", path: "/lien-he" },
  ];

  // cập nhật vị trí active
  useEffect(() => {
    const index = menus.findIndex((m) => m.path === location.pathname);
    const el = menuRefs.current[index];

    if (el) {
      setStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [location.pathname]);

  const navLinkClass = ({ isActive }) =>
    `relative px-4 py-1 transition ${
      isActive ? "text-white font-bold" : "text-black"
    }`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow">
      <div className="container-limit flex h-16 items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center">
          <img src={logoImg} alt="HI Design" className="w-36 object-contain" />
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:block">
          <ul className="relative flex items-center gap-6 font-medium">
            {/* ACTIVE BACKGROUND */}
            <div
              className="absolute top-1/2 h-9 -translate-y-1/2 rounded-full bg-(--color-primary) transition-all duration-500"
              style={style}
            />

            {menus.map((item, index) => (
              <li key={item.path} ref={(el) => (menuRefs.current[index] = el)}>
                <NavLink to={item.path} className={navLinkClass}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* SOCIAL */}
        <div className="hidden items-center gap-3 md:flex">
          <a className="rounded-full bg-white p-2 shadow-lg shadow-blue-600 transition hover:scale-110">
            <FaFacebookF />
          </a>
          <a className="rounded-full bg-white p-2 shadow-lg shadow-fuchsia-600 transition hover:scale-110">
            <FaInstagram />
          </a>
          <a className="rounded-full bg-white p-2 shadow-lg shadow-blue-500 transition hover:scale-110">
            <SiZalo />
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-black"></span>
              <span className="block h-0.5 w-6 bg-black"></span>
              <span className="block h-0.5 w-6 bg-black"></span>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-5 py-6 text-lg font-medium">
            {menus.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-1 ${
                      isActive
                        ? "rounded-full bg-(--color-primary) font-bold text-white"
                        : "text-black"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
