import { useEffect, useState } from "react";
import Category from "../components/Category";
import categoriesData from "../data/Categories.json";
import Banner from "../components/Banner";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return (
    <main className="flex flex-col gap-7">
      <Banner />
      <Category data={categories} />
    </main>
  );
};

export default HomePage;
