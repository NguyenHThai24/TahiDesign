import Banner from "../components/Banner";
import Category from "../components/Category";
import ProductNew from "../components/ProductNew";
import ProductSale from "../components/ProductSale";

const HomePage = () => {
  return (
    <main className="flex flex-col gap-4">
      <section>
        <Banner />
      </section>
      <section>
        <Category title="Danh mục sản phẩm" />
      </section>
      <section>
        <ProductNew title="Bộ sưu tập mới" />
      </section>
      <section>
        <ProductSale title="Sản phẩm khuyến mãi" />
      </section>
    </main>
  );
};

export default HomePage;
