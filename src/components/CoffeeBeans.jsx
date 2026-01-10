import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import coffeeBeansData from "../data/CoffeeBeans.json";
import CartItem from "./CartItem";

const CoffeeBeans = ({ title }) => {
  const [coffeeBeans, setCoffeeBeans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCoffeeBeans(coffeeBeansData);
  }, []);

  return (
    <section className="mx-auto w-full max-w-7xl py-10">
      <div className="mb-6 flex w-full items-center justify-between rounded border border-(--secondary-color) bg-white px-6 py-2">
        <h1 className="title text-3xl">{title}</h1>

        <button
          onClick={() => navigate("/products")}
          className="cursor-pointer text-base font-medium text-(--primary-color) hover:underline"
        >
          Xem thêm →
        </button>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {coffeeBeans.slice(0, 8).map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CoffeeBeans;
