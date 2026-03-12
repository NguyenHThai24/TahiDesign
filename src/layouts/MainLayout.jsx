import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mt-16 flex-1 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
