import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";

import { SiZalo } from "react-icons/si";
import logoImg from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-blue-100">
      <div className="mx-auto pt-10">
        {/* TOP */}
        <div className="grid grid-cols-1 gap-8 px-7 md:grid-cols-3">
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
                <Link to="/story">Câu chuyện</Link>
              </li>
              <li>
                <Link to="/album">Album</Link>
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
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-white p-2 shadow transition hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="rounded-full bg-white p-2 shadow transition hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="rounded-full bg-white p-2 shadow transition hover:scale-110"
              >
                <SiZalo />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 bg-[#6f984d] py-2 text-center text-sm text-white">
          © 2026 Tahi Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
