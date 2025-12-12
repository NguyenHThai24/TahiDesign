import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div
      className="min-h-screen flex flex-col items-center"
      // style={{
      //   backgroundImage: "url('/images/bg.jpg')",
      // }}
    >
      <div className="max-w-6xl w-full fixed top-0 z-20">
        <Header />
      </div>
      <main className="max-w-6xl flex-1 mx-auto w-full mt-30">{children}</main>
      <div className="max-w-6xl w-full">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
