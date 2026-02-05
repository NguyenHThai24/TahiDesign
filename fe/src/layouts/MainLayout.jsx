import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer1";

function MainLayout() {
  return (
    <main className="flex min-h-screen w-full flex-col text-(--color-text)">
      <div className="sticky top-0 z-20 flex items-center bg-(--color-primary) px-5 text-white">
        <Header />
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
}

export default MainLayout;
