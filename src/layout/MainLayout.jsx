import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center max-w-6xl mx-auto">
      <div className="w-full fixed top-0 z-20 max-w-6xl mx-auto">
        <Header />
      </div>
      <main className="flex-1 w-full mt-18">{children}</main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
