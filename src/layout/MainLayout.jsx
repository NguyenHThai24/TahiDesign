import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="">
      <div className="fixed top-0 w-full">
        <Header />
      </div>
      <main className="h-screen">{children}</main>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
