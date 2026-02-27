import { useState } from "react";
import logoImg from "../assets/logo.png";
import { NavLink } from "react-router-dom";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative transition ${
      isActive
        ? "text-(--color-primary) font-bold"
        : "border-transparent text-black"
    } hover:italic`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white">
      <div className="container-limit flex h-16 items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center">
          <img src={logoImg} alt="HI Design" className="w-36 object-contain" />
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden h-full md:block">
          <ul className="flex h-full items-center gap-8 font-medium">
            <li className="">
              <NavLink to="/" className={navLinkClass}>
                <span className="">Trang chủ</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/san-pham" className={navLinkClass}>
                <span className="">Sản phẩm</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/bo-suu-tap" className={navLinkClass}>
                <span className="">Bộ sưu tập</span>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/lien-he" className={navLinkClass}>
                <span className="">Liên hệ</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* SOCIAL */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="rounded-full bg-white p-2 shadow-lg shadow-blue-600 transition hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="rounded-full bg-white p-2 shadow-lg shadow-fuchsia-600 transition hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="rounded-full bg-white p-2 shadow-lg shadow-blue-500 transition hover:scale-110"
          >
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
            <li>
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/san-pham"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                Sản phẩm
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bo-suu-tap"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                Bộ sưu tập
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lien-he"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
