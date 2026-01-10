import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="my-4 flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
