import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <div className="flex h-screen bg-(--color-surface)">
      <main className="w-full overflow-y-auto text-(--color-text)">
        <div className="sticky top-0 z-20 flex items-center bg-(--color-primary) px-5 text-white">
          <Header />
        </div>

        <div className="mx-2 my-2 md:mx-2 lg:mx-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
