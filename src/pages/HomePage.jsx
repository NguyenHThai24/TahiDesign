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
    <main className="flex flex-col gap-7">
      <section className="h-[600px]">
        <img src={bannerIMG} alt="" className="h-full w-full object-fill" />
      </section>
      <Category data={categories} />
      <Introduce title="About Us" />
    </main>
  );
};

export default HomePage;
