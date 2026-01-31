import { useState } from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-(--color-surface)">
      {/* Sidebar */}
      <aside
        className={`h-screen rounded-tr-4xl bg-(--color-primary) transition-all duration-300 ${
          collapsed ? "w-16" : "w-56"
        }`}
      >
        <SideBar
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />
      </aside>

      {/* Content */}
      <main className="mx-4 flex flex-1 flex-col text-(--color-text)">
        {/* Header cố định */}
        <div className="sticky top-0 z-20 mb-4 flex h-16 items-center rounded-br-2xl rounded-bl-2xl bg-(--color-primary) px-5 text-white">
          <Header />
        </div>

        {/* Body cuộn */}
        <div className="h-[85vh] flex-1 overflow-y-auto">
          <Outlet />
        </div>
        <div className="sticky bottom-0 z-20 flex w-full justify-end bg-transparent text-[12px] text-gray-400">
          Copyright © NguyenHoangThai
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
