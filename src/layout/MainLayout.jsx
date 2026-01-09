import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      <main className="">{children}</main>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
