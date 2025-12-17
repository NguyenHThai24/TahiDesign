import About from "../components/About";
import Banner from "../components/Banner";
import Category from "../components/Category";

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
        <ProductSale title="Sản phẩm khuyến mãi" />

        <ProductNew title="Bộ sưu tập mới" />
      </section>
    </main>
  );
};

export default HomePage;
