import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer1";

function MainLayout() {
  return (
    <div className="flex h-screen bg-(--color-surface)">
      <main className="w-full overflow-y-auto text-(--color-text)">
        <div className="sticky top-0 z-20 flex items-center bg-(--color-primary) px-5 text-white">
          <Header />
        </div>

        <div className="my-1">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default MainLayout;
