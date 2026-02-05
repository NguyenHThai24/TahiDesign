import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-(--color-surface)">
      {/* Content */}
      <main className="flex flex-1 flex-col text-(--color-text)">
        <div className="sticky top-0 z-20 mb-4 flex items-center bg-(--color-primary) px-5 text-white">
          <Header />
        </div>

        <div className="mx-2 flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
