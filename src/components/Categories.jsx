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
            <div className="rounded-lg bg-gray-100 px-6 pt-30 pb-7 transition hover:shadow-lg">
              {/* Image */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[50%]">
                <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-gray-200 bg-white p-5 shadow">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain transition duration-300"
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
