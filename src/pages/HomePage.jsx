import { useEffect, useState } from "react";
import Category from "../components/Category";
import categoriesData from "../data/Categories.json";
import Banner from "../components/Banner";
import CoffeeBeans from "../components/CoffeeBeans";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return (
    <main className="flex flex-col gap-10">
      <Banner />
      <Category data={categories} />
      <CoffeeBeans title="Cà phê hạt" />
    </main>
  );
};

export default HomePage;
