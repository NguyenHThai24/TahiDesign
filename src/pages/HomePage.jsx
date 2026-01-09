import { useEffect, useState } from "react";
import Category from "../components/Category";
import categoriesData from "../data/Categories.json";
import Introduce from "../components/Introduce";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return (
    <>
      <section className="h-[450px] border-2 border-r-0 border-l-0 border-(--primary-color)">
        Banner
      </section>

      <main className="mx-auto -mt-22 flex max-w-7xl flex-col gap-14">
        <Category data={categories} />
        <Introduce />
      </main>
    </>
  );
};

export default HomePage;
