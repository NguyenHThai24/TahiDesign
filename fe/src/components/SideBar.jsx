import { Link, NavLink } from "react-router-dom";
import {
  TiArrowLeftOutline,
  TiArrowRightOutline,
  TiHome,
  TiThList,
} from "react-icons/ti";
import { MdPermPhoneMsg, MdHomeRepairService } from "react-icons/md";

import tulipIMG from "../assets/tulip.png";

function SideBar({ collapsed, onToggle }) {
  return (
    <aside className="flex h-full flex-col">
      {/* TOP */}
      <Link
        to={"/"}
        className="rounded-br-4xl bg-white py-6 text-center text-(--color-primary)"
      >
        <div className="title text-[1.7rem] font-bold transition-all duration-300">
          {collapsed ? "TD" : "Tahi Design"}
        </div>
      </Link>

      {/* CENTER */}
      <nav className="my-14 flex flex-1 items-start font-semibold text-white">
        <div className="flex w-[90%] flex-col gap-7">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `group relative flex items-center rounded-r-full py-2 transition-all duration-300 ${collapsed ? "justify-center px-0" : "gap-2 px-4"} ${isActive ? "border-l-8 border-(--color-secondary) bg-white font-bold text-(--color-primary)" : "text-white"}`
            }
          >
            <TiHome size={25} className="shrink-0" />

            <span
              className={`text-base whitespace-nowrap transition-all duration-300 ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"} `}
            >
              Home
            </span>

            {collapsed && (
              <span className="pointer-events-none absolute top-1/2 left-full z-50 ml-2.5 -translate-y-1/2 rounded-md bg-(--color-primary) px-3 py-1.5 text-sm whitespace-nowrap text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                Home
              </span>
            )}
          </NavLink>

          <NavLink
            to="/product"
            className={({ isActive }) =>
              `group relative flex items-center rounded-r-full py-2 transition-all duration-300 ${collapsed ? "justify-center px-0" : "gap-2 px-4"} ${isActive ? "border-l-8 border-(--color-secondary) bg-white font-bold text-(--color-primary)" : "text-white"}`
            }
          >
            <TiThList size={25} className="shrink-0" />

            <span
              className={`text-base whitespace-nowrap transition-all duration-300 ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"} `}
            >
              Product
            </span>

            {collapsed && (
              <span className="pointer-events-none absolute top-1/2 left-full z-50 ml-2.5 -translate-y-1/2 rounded-md bg-(--color-primary) px-3 py-1.5 text-sm whitespace-nowrap text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                Product
              </span>
            )}
          </NavLink>

          <NavLink
            to="/service"
            className={({ isActive }) =>
              `group relative flex items-center rounded-r-full py-2 transition-all duration-300 ${collapsed ? "justify-center px-0" : "gap-2 px-4"} ${isActive ? "border-l-8 border-(--color-secondary) bg-white font-bold text-(--color-primary)" : "text-white"}`
            }
          >
            <MdHomeRepairService size={25} className="shrink-0" />

            <span
              className={`text-base whitespace-nowrap transition-all duration-300 ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"} `}
            >
              Service
            </span>

            {collapsed && (
              <span className="pointer-events-none absolute top-1/2 left-full z-50 ml-2.5 -translate-y-1/2 rounded-md bg-(--color-primary) px-3 py-1.5 text-sm whitespace-nowrap text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                Service
              </span>
            )}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `group relative flex items-center rounded-r-full py-2 transition-all duration-300 ${collapsed ? "justify-center px-0" : "gap-2 px-4"} ${isActive ? "border-l-8 border-(--color-secondary) bg-white font-bold text-(--color-primary)" : "text-white"}`
            }
          >
            <MdPermPhoneMsg size={25} className="shrink-0" />

            <span
              className={`text-base whitespace-nowrap transition-all duration-300 ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"} `}
            >
              Contact US
            </span>

            {collapsed && (
              <span className="pointer-events-none absolute top-1/2 left-full z-50 ml-2.5 -translate-y-1/2 rounded-md bg-(--color-primary) px-3 py-1.5 text-sm whitespace-nowrap text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                Contact US
              </span>
            )}
          </NavLink>
        </div>
      </nav>

      {/* BOTTOM */}
      <div className="flex items-end">
        {/* TULIP DECORATION */}
        <div
          className={`pointer-events-none flex flex-1 items-end justify-start overflow-hidden transition-all duration-300 ${
            collapsed ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <img
            src={tulipIMG}
            alt="Tulip decoration"
            className="w-32 pl-2 opacity-90 select-none"
          />
        </div>

        {/* TOGGLE BUTTON – FIXED SIZE */}
        <button
          onClick={onToggle}
          className="flex h-12 w-14 shrink-0 cursor-pointer items-end justify-end rounded-tl-full bg-white pr-2 pb-2 text-(--color-primary)"
        >
          {collapsed ? (
            <TiArrowRightOutline size={28} />
          ) : (
            <TiArrowLeftOutline size={28} />
          )}
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
