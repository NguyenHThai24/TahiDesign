import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";

import { SiZalo } from "react-icons/si";
import logoImg from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-blue-100 bg-[radial-gradient(circle_at_center,#dff1d8_0%,#ffffff_70%)]">
      <div className="container-limit mx-auto pt-10">
        {/* TOP */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* LOGO + MÔ TẢ */}
          <div>
            <Link to="/" className="mb-4 flex items-center">
              <img src={logoImg} alt="logo" className="w-48" />
            </Link>
            <p className="">
              Một hành trình tình yêu bắt đầu từ những điều giản dị nhất
            </p>
          </div>

          {/* MENU */}
          <div>
            <h4 className="mb-4 font-bold">Điều hướng</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/story">Sản phẩm</Link>
              </li>
              <li>
                <Link to="/album">Bộ sưu tập</Link>
              </li>
              <li>
                <Link to="/contact">Liên hệ</Link>
              </li>
            </ul>
          </div>

          {/* LIÊN HỆ */}
          <div>
            <h4 className="mb-4 font-bold">Liên hệ</h4>
            <p className="flex items-center gap-4">
              <FaMapMarkerAlt /> Ấp Bình Tây 2, Bình Thạnh Đông, Phú Tân, An
              Giang
            </p>
            <p className="my-4 flex items-center gap-4">
              <MdOutlinePhoneInTalk /> 0123 456 789
            </p>

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
          </div>
        </div>
      </div>{" "}
      {/* BOTTOM */}
      <div className="mt-8 bg-[#6f984d] py-2 text-center text-sm text-white">
        © 2026 Tahi Design. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
