import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = ({ title }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="my-16 px-4">
      {/* Title */}
      <h3 className="mb-36 text-center text-2xl font-bold uppercase">
        {title}
        <span className="mx-auto mt-1 block h-0.5 w-40 rounded-full bg-black"></span>
      </h3>

      {/* List */}
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-12 gap-y-36">
        {categories.map((item) => (
          <Link
            to="/"
            key={item.id}
            className="group relative w-full text-center sm:w-[45%] md:w-[30%]"
          >
            <div className="rounded-lg bg-[radial-gradient(circle_at_center,#dff1d8_0%,#ffffff_70%)] px-6 pt-30 pb-7 transition">
              {/* Image */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[50%]">
                <div className="relative h-52 w-52 rounded-full bg-white p-5 shadow-[0_20px_40px_rgba(0,0,0,0.15)] ring-4 ring-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)]">
                  {/* Light effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/70 via-transparent to-black/10"></div>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="relative h-full w-full object-contain"
                  />
                </div>
              </div>

              <p className="text-lg font-semibold uppercase">{item.name}</p>
              <p className="mt-1 text-sm text-gray-500">18 items</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
