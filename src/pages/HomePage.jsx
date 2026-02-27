import Banner from "../components/Banner";

import Categories from "../components/Categories";
import OrderingProcess from "../components/OrderingProcess";
import Service from "../components/Service";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Categories title="Danh mục sản phẩm" />
      <Service title="Dịch vụ" />
      <OrderingProcess title="Quy trình mua hàng" />
    </>
  );
};

export default HomePage;
