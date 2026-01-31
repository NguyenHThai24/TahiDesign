import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/data/categoriesData.json");
        if (!res.ok) throw new Error("Không load được categories");

        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <main className="flex h-full flex-col gap-2">
      <div className="">
        <Banner />
      </div>

      <div className="">
        <Categories categories={categories} />
      </div>
    </main>
  );
};

export default HomePage;
