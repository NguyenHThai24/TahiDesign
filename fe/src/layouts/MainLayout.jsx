import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-(--color-surface)">
      {/* Content */}
      <main className="mx-4 flex flex-1 flex-col text-(--color-text)">
        <div className="sticky top-0 z-20 mb-4 flex items-center rounded-br-2xl rounded-bl-2xl bg-(--color-primary) px-5 text-white">
          <Header />
        </div>

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
