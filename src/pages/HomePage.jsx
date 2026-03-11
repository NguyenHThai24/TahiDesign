import Banner from "../components/Banner";

import Categories from "../components/Categories";
import OrderingProcess from "../components/OrderingProcess";
import Service from "../components/Service";

const HomePage = () => {
  return (
    <>
      <main className="mx-auto w-full max-w-7xl py-6">
        <Banner />
        <Categories />
        <Service />
        <OrderingProcess />
      </main>
    </>
  );
};

export default HomePage;
