import { useEffect, useState } from "react";
import Category from "../components/Category";
import categoriesData from "../data/Categories.json";
import Introduce from "../components/Introduce";

import bannerIMG from "/images/banner.jpg";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return (
    <>
      <section className="h-[600px]">
        <img src={bannerIMG} alt="" className="h-full w-full object-fill" />
      </section>

      <main className="mx-auto -mt-22 flex max-w-7xl flex-col gap-14">
        <Category data={categories} />
        <Introduce />
      </main>
    </>
  );
};

export default HomePage;
