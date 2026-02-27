import { useState } from "react";
import logoImg from "../assets/logo.png";
import { NavLink } from "react-router-dom";

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
              <NavLink to="/tin-tuc" className={navLinkClass}>
                <span className="">Tin tức</span>
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
            href="https://facebook.com"
            target="_blank"
            className="hover-gold flex h-10 w-10 items-center justify-center rounded-full border text-lg text-blue-600 transition"
            style={{
              boxShadow:
                "inset 2px 2px 6px rgba(37, 99, 235, 0.4), inset -2px -2px 6px rgba(147, 197, 253, 0.6)",
            }}
          >
            <span className="font-extrabold">FB</span>
          </a>

          <a
            href="https://zalo.me"
            target="_blank"
            className="hover-gold flex h-10 w-10 items-center justify-center rounded-full border text-lg text-blue-500 transition"
            style={{
              boxShadow: `
                inset 2px 2px 6px rgba(59, 130, 246, 0.25),
                inset -2px -2px 6px rgba(219, 234, 254, 0.9)
              `,
            }}
          >
            <span className="font-extrabold">ZL</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="hover-gold flex h-10 w-10 items-center justify-center rounded-full border text-lg text-pink-600 transition"
            style={{
              boxShadow: `
                inset 2px 2px 6px rgba(236, 72, 153, 0.3),
                inset -2px -2px 6px rgba(252, 231, 243, 0.9)
              `,
            }}
          >
            <span className="font-extrabold">IG</span>
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
                to="/tin-tuc"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                Tin tức
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
