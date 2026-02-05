import React from "react";
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Footer1 = () => {
  return (
    <footer className="bg-(--color-primary) text-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* BRAND */}
          <div className="space-y-3">
            <h2 className="title text-4xl font-bold italic">Tahi Design</h2>
            <p className="text-base">
              In ấn chất lượng cao – Giá hợp lý – Giao hàng đúng hẹn.
            </p>

            <div className="flex gap-3 pt-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-(--color-primary) hover:cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-(--color-primary) hover:cursor-pointer">
                <FaInstagram />
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-(--color-primary) hover:cursor-pointer">
                <SiZalo />
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:opacity-100">Trang chủ</li>
              <li className="cursor-pointer hover:opacity-100">Sản phẩm</li>
              <li className="cursor-pointer hover:opacity-100">Dịch vụ</li>
              <li className="cursor-pointer hover:opacity-100">Liên hệ</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Liên hệ</h3>

            <div className="flex items-center gap-3 text-sm">
              <FaPhone />
              <span>0909 999 999</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <FaEnvelope />
              <span>tahidesign@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="border-t border-white pt-5 text-center text-sm text-white">
        © {new Date().getFullYear()} Tahi Design. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer1;
