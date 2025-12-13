import About from "../components/About";
import Banner from "../components/Banner";
import Category from "../components/Category";
import HotProduct from "../components/HotProduct";
import ProductNew from "../components/ProductNew";
import ProductSale from "../components/ProductSale";

const HomePage = () => {
  return (
    <main className="flex flex-col">
      <Banner />
      <section>
        <div className="bg-white px-3 py-7">
          <About title="Tại sao bạn nên chọn TahiDesign?" />
        </div>
        <div className="bg-(--text-color) px-3 py-4">
          <Category title="Danh mục sản phẩm" />
        </div>
        {/* <div className="bg-white px-3 py-7">
          <ProductSale title="Sản phẩm khuyến mãi" />
        </div>
        <div className="bg-(--text-color) p-3">
          <HotProduct />
        </div> */}{" "}
        {/* <div className="bg-white px-3 py-7">
          <ProductNew title="Bộ sưu tập mới" />
        </div> */}
      </section>
    </main>
  );
};

export default HomePage;
